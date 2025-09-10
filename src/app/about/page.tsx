/* eslint-disable @next/next/no-img-element */

import {
  BsMedium,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsSpotify,
} from "react-icons/bs";
import { SiCalendly } from "react-icons/si";
import Link from "next/link";
import { Clock } from "@/src/components/Clock";

export default function About() {
  const cardBaseStyle =
    "flex w-full h-auto rounded text-gray-950 bg-white  shadow-sm";
  const socialMediaBaseStyle =
    "transition-transform duration-300 ease-in-out hover:scale-125";

  const LINK_LINKEDIN = "https://www.linkedin.com/in/mpabarca/";
  const LINK_INSTAGRAM = "https://www.instagram.com/mpaz.abarca/";
  const LINK_GITHUB = "https://github.com/mpabarca";
  const LINK_SPOTIFY =
    "https://open.spotify.com/show/0aIbVFEFgQUlaiRlcEZrWg?si=fa9b1a65783d4738";
  const LINK_MEDIUM = "https://code-and-cozy.medium.com/";
  const LINK_CALENDLY = "https://calendly.com/mpabarca/discovery-call";

  const size = 35;

  const techStack = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Vercel",
    "HTML",
    "CSS",
    "Contentful",
    "CMS",
    "REST API",
    "Git",
    "Github",
    "GraphQL",
    "Scrum",
    "Jira",
    "Remote first",
    "Vtex",
  ];

  const mainTechStack = [
    "Typescript",
    "React",
    "Next.js",
    "CMS",
    "REST API",
    "Git",
  ];

  const facts = [
    {
      id: "years-experience",
      number: 6,
      description: "years of experience",
      showMobile: true,
    },
    {
      id: "industry",
      number: 5,
      description: "industries",
      showMobile: false,
    },
    {
      id: "projects",
      number: 12,
      description: "contributed projects",
      showMobile: true,
    },
  ];

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-wrap h-full lg:grid gap-4 lg:grid-cols-7 lg:grid-rows-5 gap-0 lg:max-w-[1348px] lg:max-h-[840px] w-[95%] lg:h-[90%] py-10 lg:py-0'>
        <div
          className={`${cardBaseStyle} lg:lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-3 rounded-t-4xl lg:rounded-tl-4xl`}
        >
          <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-8 sm:pb-0'>
            <h1 className='text-4xl font-medium tracking-tight text-gray-700 max-lg:text-center'>
              Hi! I'm Maria Paz Abarca
            </h1>
            <div className='mt-4 text-sm/6 text-gray-600 max-lg:text-center flex flex-col gap-2'>
              <p>
                Senior Frontend Engineer who is obsessed on building clean,
                user-focused interfaces.
              </p>
              <p>
                With over 6+ years of experience across healthtech, e-commerce,
                proptech and other industries, I’ve worked in both agency and
                product teams — often remotely, across Latin America and Europe.
              </p>
              <p>
                I’m highly organised, especially in async teams. I write clean
                PRs, document what matters, and take ownership of what I build.
                I’ve often been the person who helps onboard new teammates or
                structure a messy repo — because I like creating clarity in the
                product/service, not just shipping features.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${cardBaseStyle} lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-3 lg:rounded-tr-4xl`}
        >
          <Clock />
        </div>
        <div
          className={`${cardBaseStyle} lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5`}
        >
          <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0'>
            <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
              Skills
            </p>
            <ul className='p-bold text-left mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
              <li>Frontend Software Engineer</li>
              <li>UI/UX Enthusiast</li>
              <li>Scrum & Agile Methodologies</li>
              <li>Social Media Content Enthusiast</li>
              <li>Crazy Organiser & Planner</li>
            </ul>
          </div>
        </div>
        <div
          className={`${cardBaseStyle} lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-5`}
        >
          <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0'>
            <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
              Industries
            </p>
            <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
          </div>
        </div>
        <div
          className={`${cardBaseStyle} lg:col-start-5 lg:col-end-8 lg:row-start-3 lg:row-end-4`}
        >
          <div className='px-8 pt-8 pb-3 sm:px-10 sm:pt-8 sm:pb-0'>
            <p className='text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
              What am I up to now?
            </p>
            <p className='mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
          </div>
        </div>
        <div
          className={`${cardBaseStyle} lg:col-start-5 lg:col-end-8 lg:row-start-4 lg:row-end-5`}
        >
          <ul className='w-full flex flex-row flex-wrap gap-8 mt-1 justify-center items-center py-10 px-8'>
            <li>
              <Link
                href={LINK_INSTAGRAM}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
            <li>
              <Link
                href={LINK_GITHUB}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsGithub size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
            <li>
              <Link
                href={LINK_LINKEDIN}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsLinkedin size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
            <li>
              <Link
                href={LINK_SPOTIFY}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsSpotify size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
            <li>
              <Link
                href={LINK_MEDIUM}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsMedium size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
            <li>
              <Link
                href={LINK_CALENDLY}
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiCalendly size={size} className={socialMediaBaseStyle} />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${cardBaseStyle} py-2 px-8 justify-center items-center lg:col-start-1 lg:col-end-8 lg:row-start-5 lg:row-end-6 rounded-b-4xl lg:rounded-b-4xl`}
        >
          <ul className='flex flex-row flex-wrap justify-center text-gray-400 gap-x-10 gap-y-4 font-light'>
            {techStack.map((tech: string) => (
              <li
                key={`tech-stack-${tech}`}
                className={`relative text-lg leading-none lg:text-xl hover:text-black hover:scale-110 hover:font-normal transition-transform ${
                  mainTechStack.includes(tech) && "text-gray-800"
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
