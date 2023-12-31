import MeetTheTeam from "@/app/Components/AboutPage/MeetTheTeam";
import AboutUs from "../../../Components/AboutPage/AboutUs";
import IntroPic from "@/app/Components/GetStarted/IntroPic";

export default function About() {
  return (
    <main className="min-h-screen bg-white-smoke mx-4">
      <div className="w-full shadow-light-gray rounded-[50px] grid lg:grid-cols-2 mt-8">
          <IntroPic />
          <AboutUs />
      </div>
        <MeetTheTeam />
    </main>
  );
}
