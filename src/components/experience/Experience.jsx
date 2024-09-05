import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10",
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const Experience = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-32  max-sm:-mt-5 ">
      <div className="rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-blueLight text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-blueLight text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 170 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-blueLight text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
