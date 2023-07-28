import tugba from "../../public/tugba.jpg"
import furkan from "../../public/furkan.jpg"
import ebla from "../../public/ebla.jpg"
import amdjed from "../../public/amdjed.jpg"
const TeamArray = () => {
  const members = [
    {
      id: 0,
      name: "Tuğba Esat Şahin",
      title: "Frontend Web Developer",
      links: {
        linkedin: "https://www.linkedin.com/in/tugbaesat/",
        github: "https://github.com/tugbaesat",
      },
      image:tugba
    },
    {
      id: 1,
      name: "Ebla Ekerdiker",
      title: "Frontend Web Developer",
      links: {
        linkedin: "https://www.linkedin.com/in/ebla-ekerdiker/",
        github: "https://github.com/pluviophillee",
      },
      image:ebla
    },
    {
      id: 2,
      name: "Furkan Cengiz",
      title: "Full Stack Web Developer",
      links: {
        linkedin: "https://www.linkedin.com/in/4furkancengiz4/",
        github: "https://github.com/4Furki4",
      },
      image:furkan
    },
    {
      id: 3,
      name: "Amdjed Belgacem",
      title: "Full Stack Web Developer",
      links: {
        linkedin: "https://www.linkedin.com/in/amdjed-belgacem/",
        github: "https://github.com/AmdjedBelgacem",
      },
      image:amdjed
    },
    
  ];

  return members;
};

export default TeamArray;
