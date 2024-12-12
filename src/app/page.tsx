import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  const words = [" start", " continue", " do", " think about", " consider taking", " buy", " consume", " abuse", " possess", " start", " continue", " do", " think about", " sell", " consider taking", " buy", " consume", " abuse", " possess", " procure", " produce"];
  return (

    <div className="">
      <div className="h-[20rem] md:h-[30rem] lg:h-[50rem] flex justify-center items-center px-4 bg-no-repeat bg-cover bg-[url('/drugs2.jpg')]">
        <div className="text-5xl md:text-7xl lg:text-9xl mx-auto font-normal text-rose-100">
          Don{"'"}t
          <FlipWords words={words} className="text-5xl md:text-7xl lg:text-9xl mx-auto font-semibold text-rose-50 z-0" />
          drugs
        </div>
      </div>
      <div className="flex flex-col items-center p-6">
        <div className="font-bold text-3xl pt-6 px-10">
          FAQ
        </div>
      </div>
      <div className="flex flex-col items-center px-10">
        <div className="w-11/12 md:max-w-screen-sm lg:max-w-screen-lg">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-xl pt-6">Why are drugs bad?</AccordionTrigger>
              <AccordionContent>
                Consumed drugs affect physical & mental health negatively. Prolonged consumption of drugs makes one dependent on substance, affecting relationships & finances.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-xl pt-6">Why do people take drugs if it is so bad?</AccordionTrigger>
              <AccordionContent>
                People start taking drugs for a variety of reasons, including peer pressure, accumulated stress and curiosity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold text-xl pt-6">How can I tell if someone is abusing drugs?</AccordionTrigger>
              <AccordionContent>
                Physical Signs: Concealment of eyes, Frequent extreme mood swings, <br /> Behavioural Signs: Behavioural changes, Acting defensively if confronted about drug abuse, general lack of energy, Borrowing money for weird reasons, Frequently absent
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold text-xl pt-6">What to do if witnessing someone consuming drugs?</AccordionTrigger>
              <AccordionContent>
                Stay calm and reasonable when confronting the person. Consult a trusted adult on dealing with the person. Do not stay quiet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="py-10"/>
    </div>
  );
}
