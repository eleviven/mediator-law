import React from "react";
import Button from "../button/button";

export default function Display() {
  return (
    <div className="relative bg-cover bg-blend-multiply bg-fixed bg-indigo-600 text-white bg-display">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center h-[450px] lg:w-8/12 mx-auto">
          <h1 className="text-5xl leading-snug font-bold">
            Biz istənilən mövzuda <br /> hüquq xidməti təklif edirik
          </h1>
          <div className="flex mt-6">
            <div className="px-2">
              <Button title="Bizimlə Əlaqə" variant="success" size="large" />
            </div>
            <div className="px-2">
              <Button
                title="Necə müraciət edim?"
                variant="primary"
                appearance="ghost"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
