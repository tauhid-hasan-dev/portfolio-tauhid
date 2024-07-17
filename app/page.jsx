import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none mt-5">
            <span className="text-xl text-white/50">Hello I'm</span>
            <h1 className="h2 mb-6 text-white/50">
              <span className="text-white/80">Tauhid Hasan</span>
              <span className="text-xl text-white/50">, a</span>
              <br />
              <span className="text-accent">Software Developer</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a full stack developer. Let me know how I can contribute to
              your business
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Resume_Tauhid.pdf"
                download="Tauhid_Hasan_Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
