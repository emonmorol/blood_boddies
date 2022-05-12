import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  return (
    <div className="count-banner-content">
      <div className="count-banner bg-opacity-50">
        <div className="count-inside-banner">
          <div className="grid grid-cols-1 py-10 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 flex flex-col justify-center">
              <div className="text-6xl py-5 mb-2 px-[1.45rem] text-gray-500 hover:text-primary  cursor-text mx-auto transition-all duration-300">
                <i class="fa-solid fa-medal"></i>
              </div>
              <div className="text-center">
                <CountUp start={0} end={1346} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="text-4xl my-2 text-primary font-semibold"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-2xl font-semibold my-2 uppercase font-mono">
                  TOTAL AWARDS
                </p>
              </div>
            </div>
            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 flex flex-col justify-center">
              <div className="text-6xl py-5 mb-2 px-[1.45rem] text-gray-500 hover:text-primary  cursor-text mx-auto transition-all duration-300">
                <i class="fa-solid fa-users"></i>
              </div>
              <div className="text-center">
                <CountUp start={0} end={3568} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="text-4xl my-2 text-primary font-semibold"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-2xl font-semibold my-2 uppercase font-mono">
                  HAPPY RECIPIENT
                </p>
              </div>
            </div>
            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 flex flex-col justify-center">
              <div className="text-6xl py-5 mb-2 px-[1.45rem] text-gray-500 hover:text-primary  cursor-text mx-auto transition-all duration-300">
                <i class="fa-solid fa-stethoscope"></i>
              </div>
              <div className="text-center">
                <CountUp start={0} end={3235} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="text-4xl my-2 text-primary font-semibold"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-2xl font-semibold my-2 uppercase font-mono">
                  HAPPY DONORS
                </p>
              </div>
            </div>
            <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 flex flex-col justify-center">
              <div className="text-6xl py-5 px-[1.45rem] text-gray-500 hover:text-primary cursor-text mx-auto transition-all duration-300">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="text-center">
                <CountUp start={0} end={2578} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        className="text-4xl my-3 text-primary font-semibold"
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-2xl font-semibold my-2 uppercase font-mono">
                  SUCCESS SMILE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
