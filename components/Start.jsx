"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  { num: 6, text: "Project Completed" },
  { num: 7, text: "Technologies mastered" },
  { num: 400, text: "Code commits" },
];
function Start() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex items-center justify-center xl:justify-start gap-4 "
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[150px] " : " max-w-[200px]"
                  }leading-snug text-white/80 `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </section>
  );
}

export default Start;
