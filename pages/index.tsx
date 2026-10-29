import dynamic from "next/dynamic";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const About = dynamic(() => import("../containers/About"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const Education = dynamic(() => import("../containers/Education"));
const Certifications = dynamic(() => import("../containers/Certifications"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));

export default function Home({ githubProfileData }: { githubProfileData?: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <GithubProfileCard />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`https://api.github.com/users/${openSource.githubUserName}`);
    if (res.ok) {
      const githubProfileData: GithubUserType = await res.json();
      return {
        props: { githubProfileData },
      };
    }
  } catch (err) {
    // Graceful fallback if offline or rate limited
  }

  return {
    props: {
      githubProfileData: {
        avatar_url: "/favicon.png",
        bio: "Data Analyst & MERN Stack Developer",
        location: "Bhilai, Chhattisgarh, India",
        name: "Akriti Singh",
      },
    },
  };
}
