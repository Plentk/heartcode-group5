import React from "react";
import { FlipWords } from "@/components/ui/flip-words";


export default function Home() {
  const words = [" start", " continue", " do", " think about", " consider taking", " buy", " consume", " abuse", " possess"];
  return (

    <div>
      <div className="h-[20rem] flex justify-center items-center px-4 bg-no-repeat bg-cover bg-[url('/drugs2.jpg')]">
        <div className="text-7xl mx-auto font-normal text-rose-100">
          Don{"'"}t
          <FlipWords words={words} className= "text-7xl mx-auto font-normal text-rose-50 z-0"/>
          drugs
        </div>
      </div>
      <div className="flex flex-col items-center p-6">
        <div className="font-bold text-3xl pt-6 px-10">
          Why are drugs bad?
        </div>
        <div className="px-10 py-2">
          Consumed drugs affect physical & mental health. Prolonged consumption of drugs makes one dependent on substance, affecting relationships & finances.
        </div>
        <div className="font-bold text-3xl pt-6 px-10">
          Why do people take drugs if it is so bad?
        </div>
        <div className="px-10 py-2">
          People start taking drugs for a variety of reasons, including peer pressure, accumulated stress and curiosity.
        </div>
        <div className="font-bold text-3xl pt-6 px-10">
          What to do if witnessing someone consuming drugs?
        </div>
        <div className="px-10 py-2">
          People start taking drugs for a variety of reasons, including peer pressure, accumulated stress and curiosity.
        </div>
      </div>
    </div>
      );
}
