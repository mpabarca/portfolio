"use client";

import React, { useEffect, useState } from "react";

interface ClockProps {
  timeZone?: string; // Optional: defaults to 'Europe/Madrid'
}

export const Clock: React.FC<ClockProps> = ({ timeZone = "Europe/Madrid" }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      updateClock();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateClock = () => {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const getPart = (type: string) =>
      parts.find((p) => p.type === type)?.value ?? "00";

    const hours = getPart("hour");
    const minutes = getPart("minute");
    const seconds = getPart("second");

    setTime(`${hours} : ${minutes} : ${seconds}`);
  };

  return (
    <div
      id='tsClock'
      className='w-full flex flex-col gap-y-2 items-center justify-center text-5xl font-bold text-gray-300 m-auto rounded'
    >
      {time}
      <p className='mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center'>
        Right now I'm in <span className="text-red-700">Spain</span>
      </p>
    </div>
  );
};
