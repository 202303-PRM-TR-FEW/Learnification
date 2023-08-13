"use client";
import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import LearnUButton from "./LearnUButton";
import { useSearchParams, useRouter } from "next/navigation";
import { AES } from "crypto-js";
import notify from "@/utils/notifications";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
export default function SignInUp() {
  const session = useSession();
  const router = useRouter();
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [signUpCredentials, setSignUpCredentials] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [uploadedImage, setuploadedImage] = useState(null);
  const [isPasswordStrong, setPasswordStrong] = useState(true);
  const isStrongPassword = (password) => {
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) =>
        setCountries(
          data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        )
      );
  }, []);
  const callbackUrl = searchParams.get("callbackUrl") || "/home";
  const handleToggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };
  async function handleProviderSignIn(provider) {
    await signIn(provider, { redirect: false });
    notify("Logged in successfully, redirecting...", "success");
  }
  function handleSubmitCredentials(e) {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      return;
    }
    const encryptedPassword = AES.encrypt(
      credentials.password,
      process.env.NEXT_PUBLIC_ENCRYPTION_KEY
    ).toString();
    const userCrendentials = { ...credentials, password: encryptedPassword };
    signIn("credentials", { ...userCrendentials, redirect: false }).then(
      (res) => {
        if (res.error) {
          notify("Invalid credentials", "error");
        } else {
          notify("Logged in successfully", "success");
        }
      }
    );
  }
  async function handleSubmitSignUp(e) {
    e.preventDefault();
    if (!isStrongPassword(signUpCredentials.password)) {
      notify("Password must be at least 8 characters long, and include at least one capital letter, one number, and one special character.", "error");
      return;
    }
    const formData = new FormData();
    formData.append("name", signUpCredentials.name);
    formData.append("email", signUpCredentials.email);
    formData.append("password", signUpCredentials.password);
    formData.append("country", signUpCredentials.country);
    formData.append("image", signUpCredentials.image);
    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      setError(null);
      const user = await res.json();
      notify("Account created successfully");
      signIn("credentials", { ...user, redirect: false }).then((res) => {
        notify("Logged in successfully");
        setTimeout(() => {
          router.push(callbackUrl);
        }, 2000);
      });
    } else if (res.status === 400) {
      setError("Email already exists");
    }
  }
  if (session.status === "authenticated") {
    router.push(callbackUrl);
  }
  const handleFileInput = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageURL = URL.createObjectURL(image);
      setuploadedImage(imageURL);
      setSignUpCredentials({ ...signUpCredentials, image: image });
    }
  };

  return (
    <div
      className={`h-screen w-full max-md:px-4 ${
        isLoginFormVisible
          ? "mb-24 max-sm:mb-16 md:mb-0"
          : "mb-32 max-sm:mb-24 md:mb-0"
      } max-sm:pt-8 flex items-center justify-center`}
    >
      <div className="bg-white bg-opacity-50 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-center md:justify-around items-center">
          <div onClick={() => handleProviderSignIn("github")}>
            <LearnUButton className={"my-4"} text="Sign In with GitHub" />
          </div>
          <div onClick={() => handleProviderSignIn("google")}>
            <LearnUButton className={"my-4"} text="Sign In with Google" />
          </div>
        </div>
        {isLoginFormVisible ? (
          <form onSubmit={(e) => handleSubmitCredentials(e)}>
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">Login</h2>

            <input
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              type="email"
              placeholder="Email"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              type="password"
              placeholder="Password"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <LearnUButton
              className="max-sm:w-full"
              text="Sign In"
              onClick={() => signIn("credentials")}
            />
            <div>
              <p className="message text-gray-400 mt-6 inline-block mr-2">
                Not registered?{" "}
              </p>
              <p
                href="#"
                onClick={handleToggleForm}
                className="text-blue-500 animatedUnderline inline-block"
              >
                Create an account
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={(e) => handleSubmitSignUp(e)}>
            <h2 className="text-sky-500 font-semibold text-2xl pb-5">
              Register
            </h2>
            <input
              value={signUpCredentials.name}
              onChange={(e) =>
                setSignUpCredentials({
                  ...signUpCredentials,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Name *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={signUpCredentials.email}
              onChange={(e) =>
                setSignUpCredentials({
                  ...signUpCredentials,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder="Email *"
              required
              className="w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent"
            />
            <input
              value={signUpCredentials.password}
              onChange={(e) => {
                const newPassword = e.target.value;
                setSignUpCredentials({
                  ...signUpCredentials,
                  password: newPassword,
                });
                setPasswordStrong(isStrongPassword(newPassword)); 
              }}
              type="password"
              placeholder="Password *"
              required
              className={`w-full py-2 px-1 text-gray-400 mb-8 border-b border-gray-500 outline-none bg-transparent ${
                isPasswordStrong ? "" : "border-red-500" 
              }`}
            />
            <select
              className="mb-8 w-full"
              value={signUpCredentials.country}
              onChange={(e) =>
                setSignUpCredentials({
                  ...signUpCredentials,
                  country: e.target.value,
                })
              }
            >
              {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
            <div>
              <label
                htmlFor="fileUpload"
                className="bg-blue-500 w-full py-3 px-6 rounded-xl
                text-white font-bold border-2 border-blue-500
                hover:bg-white hover:text-blue-500
                cursor-pointer block text-center mb-8
                transition-colors duration-300 ease-in-out
                "
              >
                Upload Picture
              </label>
              <input
                id="fileUpload"
                className="hidden"
                type="file"
                accept="image/jpeg, image/png, image/jpg, image/webp"
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />

              {uploadedImage && (
                <div>
                  <Image
                    src={uploadedImage}
                    alt="Uploaded Image"
                    width={300}
                    height={300}
                    className="rounded-2xl mb-8"
                  />
                </div>
              )}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <LearnUButton className="max-sm:w-full" text="Sign Up" />
            <div className="">
              <p className="message text-gray-400 mt-6 inline-block mr-2">
                Already registered?{" "}
              </p>
              <p
                onClick={handleToggleForm}
                className="text-blue-500 animatedUnderline"
              >
                Sign In
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
