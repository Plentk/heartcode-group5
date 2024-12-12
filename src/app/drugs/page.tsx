import Image from "next/image";
import DrunkDog1 from "@/app/assets/drunk_dog1.jpg"
import GoodDog1 from "@/app/assets/gooddog1.webp"
import Alcohol from "@/app/assets/alcohol.jpg"
import Caffeine from "@/app/assets/caffeine.webp"
import Cocaine from "@/app/assets/cocaine.jpg"
import Cannabis from "@/app/assets/cannabis.jpg"
import Heroin from "@/app/assets/heroin.jpg"
import Meth from "@/app/assets/methamphetamine.jpg"
import Tobacco from "@/app/assets/tobacco.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
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
        <div>
            <div className="flex flex-col items-center p-6">
                <div className="font-bold text-5xl py-4 hover:py-3 hover:text-6xl hover:underline">
                    What are drugs?
                </div>
                <div><Image src={DrunkDog1} width={600} alt="drunkdog" unoptimized /></div>
                <p className="p-2 italic md:max-w-screen-sm lg:max-w-screen-lg">Max the dog, after a dose of drugs, now on the brink of unconsciousness. Don{"'"}t do drugs.</p>
                <p className="p-5 md:max-w-screen-sm lg:max-w-screen-lg">Drugs are a category of substances that affect or change a person{"'"}s physical condition. Most drugs when consumed causes one to become addicted to them, causing worsening of mental state until one cannot live without frequent consumption.</p>
            </div>
            <div className="flex flex-col items-center p-6">
                <div className="font-bold text-4xl py-4">
                    Meet the Drugs
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }} className="w-full md:max-w-screen-sm lg:max-w-screen-lg">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Alcohol
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Alcohol} width={400} alt="Alcohol" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Only Ethanol can be consumed, diluted to between 2% to 50%. Depressant that in low doses induces euphoria, reduces anxiety and increases sociability. Higher doses causes drunkenness, unconsciousness or death. Long term use increases risk of cancer and addiction. <br /><br /> Illegal for minors (aged 18 and below) to buy alcohol.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Caffeine
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Caffeine} width={400} alt="Caffeine" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5"> Contained in coffee and tea. Improved memory, mood, energy levels and risk of cognitive diseases, but increases anxiety and disrupts sleeping patterns.<br /><br /> Excess consumption by minors is harmful to their health.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Cannabis
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Cannabis} width={400} alt="Cannabis" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Also known as Marijuana. Consumption impairs short-term memory, motor skills. Prolonged consumption alters brain development, reduces intelligence. <br /><br /> Possession is punishable by law. Up to 30 years of imprisonment, 15 strokes of the cane or fine of $20000 depending on severity of offence.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Cocaine
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Cocaine} width={400} alt="Cocaine" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Also known as Crack. Consumption increases heart rate, makes one aggresive, irritable. Causes nausea, blurred vision & hallucination. <br /><br /> Possession is punishable by law. Up to life imprisonment, 15 strokes of the cane, fine of $20,000 or death penalty depending on severity of offence.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Heroin
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Heroin} width={400} alt="Heroin" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Consumption lowers heart rate, respiration and concentration, damaging lungs, kidney and liver. Makes one dull, tired and constipated. <br /> <br /> Possession is punishable by law. Up to life imprisonment, 15 strokes of the cane, fine of $20,000 or death penalty depending on severity of offence.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Methamphetamine
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Meth} width={400} alt="Meth" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Also known as Ice. Consumption permanently damages blood vessels of vital organs. Sniffing damages nose tissues. Partaking causes malnutrition, weight loss and severe tooth decay. <br /><br /> Possession is punishable by law. Up to 30 years of imprisonment, 15 strokes of the cane, fine of $20,000 or death penalty depending on severity of offence.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Card className="p-1">
                                <CardHeader className="font-bold text-2xl">
                                    Tobacco
                                </CardHeader>
                                <CardContent className="flex aspect-auto items-center justify-center">
                                    <Image src={Tobacco} width={400} alt="Tobacco" unoptimized />
                                </CardContent>
                                <CardContent>
                                    <p className="p-5">Contained in cigarettes and cigars, contains nicotine. Linked to heart disease, cancer, diabetes and chronic respiratory diseases. Second hand smoke affects those in vicinity of smoker.<br /><br /> Sale of cigarettes to those below 21 years old is illegal. Sale of all other tobacco products is illegal.</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex flex-col items-center p-6">
                
                <div><Image src={GoodDog1} width={600} alt="gooddog" unoptimized /></div>
                <p className="p-2 italic md:max-w-screen-sm lg:max-w-screen-lg">Max the dog if it knew what drugs are before considering to consume drugs. Don{"'"}t do drugs.</p>
                <p className="p-5 md:max-w-screen-sm lg:max-w-screen-lg">Drugs may have initial benefits, but the long term drawbacks hugely outweigh them. Never think about consuming drugs.</p>
            </div>
            <div className="font-bold text-5xl py-4">
                </div>
        </div>
    )
}