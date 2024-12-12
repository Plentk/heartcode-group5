import Image from "next/image";
import Cic from "@/app/assets/cic.jpg"
import Raven from "@/app/assets/rav_insc.jpg"
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function main() {
    return (
        <div className="flex flex-col items-center py-5">
            <div className="w-full md:max-w-screen-sm lg:max-w-screen-lg">
                About us😊
            </div>
            <div className="py-2" />
            <div className="flex flex-row px-10 ">
                <CardContainer className="inter-var max-w-sm">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="60" translateY="-5" translateX="30" rotateZ="-5" rotateY="-5" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Hi my name is Sean
                        </CardItem>
                        <CardItem translateZ="100" rotateX="10" rotateZ="4" className="w-full mt-4">
                            <Image src={Raven} width={400} alt="Raven" unoptimized />
                        </CardItem>
                        <CardItem translateZ="60" translateY="30" className="text-base font-medium text-neutral-600 dark:text-white">
                            I am a group 5 heartcode mentee<br />
                            I am only good @ geoguessr if it is only SG<br/>
                            Bad @ identifying birds (& drugs)
                        </CardItem>
                        <CardItem translateZ="70" translateX={160} translateY="35" className="text-base font-normal text-neutral-600 dark:text-white">
                            This is project
                        </CardItem>
                        <CardItem translateZ="40" translateY="20" className="text-base font-normal text-neutral-600 dark:text-white">
                            hi nice to meet you
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <div className="px-2" />
                <CardContainer className="inter-var max-w-sm">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Hi my name is Teck Seng
                        </CardItem>
                        <CardItem translateZ="100" rotateX="18" rotateY="-10" className="w-full mt-4">
                            <Image src={Cic} width={400} alt="Cic" unoptimized />
                        </CardItem>
                        <CardItem translateZ="110" className="text-base font-normal text-neutral-600 dark:text-white">
                            I am a group 5 heartcode mentee<br />
                            I like to play mobile games
                        </CardItem>
                        <CardItem translateZ="80" className="text-base font-normal text-neutral-600 dark:text-white">
                            Nice to meet you
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    )
}