import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/social";
import MyPhoto from "@/components/MyPhoto";
import Start from "@/components/Start";

export default function Home() {
  return (
    <section className="container h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pb-24 xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl capitalize ">web developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-tahiti">Djellal Ramzi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {" "}
              I am a passionate and skilled web developer with a strong
              background in creating dynamic and responsive websites
            </p>
            <div className="flex flex-col items-center  gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2  hover:bg-tahiti hover:text-primary">
                <span className="tracking-wider text-xl">Download Cv</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyle="flex  gap-6 "
                  iconStyle=" w-9 h-9 border border-tahiti rounded-full flex justify-center items-center text-tahiti text-base hover:bg-tahiti hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <MyPhoto />
          </div>
        </div>
      </div>
      <Start />
    </section>
  );
}
