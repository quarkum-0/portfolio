import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import Proj1 from "../../public/images/projects/Proj1.png";
import Proj2 from "../../public/images/projects/Proj2.png";
import Proj3 from "../../public/images/projects/Proj3.png";
import Proj4 from "../../public/images/projects/Proj4.png";
import Proj5 from "../../public/images/projects/Proj5.png";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          {/* <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta
          name="description"
          content="I am Shrish Kumar, excited to showcase my work in front of you"
          />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Shipping products is so cool!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Working Product"
                title="Shelf-Watch"
                img={Proj1}
                link="https://www.paralleldots.com/shelfwatch"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Work in Progress"
                title="Assess4all"
                img={Proj2}
                link="https://www.assess4all.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                type="Website"
                title="ACM Website"
                img={Proj3}
                link="https://bitshyderabad.acm.org/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                type="Website"
                title="Uni-Site"
                img={Proj4}
                link="https://uni-site.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                type="Website"
                title="Word-Pied"
                img={Proj5}
                link="https://word-pied.vercel.app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
