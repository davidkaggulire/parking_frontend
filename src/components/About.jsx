import React from "react";

const About = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 mb-10 gap-10 md:flex-row">
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="font-bold text-3xl md:text-4xl">What's different about Parkey</h1>
        <p>
          Parkey keeps your car safe through its parking space which is
          monitored by customised software
        </p>
      </div>

      <div class="flex flex-col space-y-8 md:w-1/2">
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div class="rounded-l-full bg-cyan md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 rounded-full text-gray-500 md:py-1 bg-cyan">
                01
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div class="">
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p class="text-darkGrayishBlue">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div class="rounded-l-full bg-cyan md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-gray-500 rounded-full md:py-1 bg-cyan">
                02
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Advanced built-in reports
              </h3>
            </div>
          </div>
          <div class="">
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
            </h3>
            <p class="text-darkGrayishBlue">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div class="rounded-l-full bg-cyan md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-gray-500 rounded-full md:py-1 bg-cyan">
                03
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div class="">
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p class="text-darkGrayishBlue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
