import Image from "next/image";
import DrunkDog1 from "@/app/assets/drunk_dog1.jpg"
import Cocaine from "@/app/assets/cocaine.jpg"
import Cannabis from "@/app/assets/cannabis.jpg"
import Heroin from "@/app/assets/heroin.jpg"

export default function main() {
    return (
        <div>
            <div className="flex flex-col items-center p-6">
                <div className="font-bold text-5xl py-4">
                    What are drugs?
                </div>
                <div><Image src={DrunkDog1} width={600} alt="drunkdog" unoptimized /></div>
                <p className= "p-5">Drugs are a category of substances that affect or change a person's physical condition. Most drugs when consumed causes one to become addicted to them, causing worsening of mental state until one cannot live without frequent consumption.</p>
            </div>
            <div className="flex flex-col items-center p-6">
                <div className="font-bold text-4xl py-4">
                    Meet the Drugs
                </div>
                <div className="font-bold text-2xl py-4">
                    Cannabis
                </div>
                <div><Image src={Cannabis} width={400} alt="Cannabis" unoptimized /></div>
                <p className= "p-5">Also known as Marijuana. Consumption impairs short-term memory, motor skills. Prolonged consumption alters brain development, reduces intelligence. <br/> Possession is punishable by law.</p>
                <div className="font-bold text-2xl py-4">
                    Cocaine
                </div>
                <div><Image src={Cocaine} width={400} alt="cocaine" unoptimized /></div>
                <p className= "p-5">Also known as Crack. Consumption increases heart rate, makes one aggresive, irritable. Causes nausea, blurred vision & hallucination. <br/> Possession is punishable by law.</p>
                <div className="font-bold text-2xl py-4">
                    Heroin
                </div>
                <div><Image src={Heroin} width={400} alt="heroin" unoptimized /></div>
                <p className= "p-5">Consumption lowers heart rate, respiration and concentration, damaging lungs, kidney and liver. Makes one dull, tired and constipated. <br/> Possession is punishable by law.</p>
            </div>
        </div>
    )
}