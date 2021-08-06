import React from "react";
import { useRouter } from "next/router";
import Button from "../button/button";
import { modal } from "../../contexts/root-modal/root-modal";

export default function Display() {
  const router = useRouter();
  return (
    <div className="relative bg-cover bg-blend-multiply bg-fixed bg-indigo-600 text-white bg-display">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center h-[450px] lg:w-8/12 mx-auto">
          <h1 className="text-5xl leading-snug font-bold">
            Biz istənilən mövzuda <br /> hüquq xidməti təklif edirik
          </h1>
          <div className="flex mt-6">
            <div className="px-2">
              <Button
                title="Bizimlə Əlaqə"
                variant="success"
                size="large"
                onClick={() => router.push("/contact")}
              />
            </div>
            <div className="px-2">
              <Button
                title="Necə müraciət edim?"
                variant="primary"
                appearance="ghost"
                size="large"
                onClick={() =>
                  modal.fire({
                    title: "Necə müraciət edim?",
                    actions: [
                      {
                        title: "Müraciət Et",
                        variant: "success",
                        onClick: () => console.log("Clicked!"),
                      },
                    ],
                    render() {
                      return <h1>Video Frame</h1>;
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
