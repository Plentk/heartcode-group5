// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";


export default function Home() {
  const words = [" start"," continue"," do"," consider"," think about"," consider taking"," buy"];
  return (
    
    <div>
      <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-800 dark:text-neutral-800">
        Don{"'"}t 
        <FlipWords words={words} />
        drugs
      </div>
    </div>
      <Card>
        <CardHeader>
          <CardTitle>
            Pls dont do drugs
          </CardTitle>
          <CardDescription>
            <p>drugs are bad, just bad</p>
            drugs are bad, just bad
          </CardDescription>
        </CardHeader>
        <CardContent>
          Yes they are bad why you still thinking
        </CardContent>
        <CardFooter>
          drugs = bad
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Pls pls dont do drugs
          </CardTitle>
          <CardDescription>
            <p>drugs are very bad, very bad</p>
            drugs are very bad, just bad
          </CardDescription>
        </CardHeader>
        <CardContent>
          Yes they ARE bad why you still thinking of taking drugs
        </CardContent>
        <CardFooter>
          drugs {'>'}= very bad
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Alcohol
          </CardTitle>
          <CardDescription>
            Alcohol (Ethanol) is C2H5OH
          </CardDescription>
        </CardHeader>
        <CardContent>
          Alcohol makes one high. High people does weird stuff
          (Only ethanol can be consumed. Pls do not consume other alcohols)
        </CardContent>
        <CardFooter>
          not drugs (i think?)
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Coffee
          </CardTitle>
          <CardDescription>
            Coffee contains caffeine
          </CardDescription>
        </CardHeader>
        <CardContent>
          Coffee increases energy, pushing back sleeping time. May get addicted
        </CardContent>
        <CardFooter>
          causes problems
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            Drrrruuuugggssss
          </CardTitle>
          <CardDescription>
            high
          </CardDescription>
        </CardHeader>
        <CardContent>
          oll34
        </CardContent>
        <CardFooter>
          <CardTitle>
            Drugs
          </CardTitle>
          <CardDescription>
            help i am being held hostage pls save me 
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="bg-zinc-500">
        hi
        <CardHeader>
          hi
          <CardTitle>
            hibbjjb
          </CardTitle>
          <CardDescription>
            hi
          </CardDescription>
        </CardHeader>
        <CardContent>
          ghvhhggj
      
        </CardContent>
        <CardFooter>
          iijvhv
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
          ☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️
          </CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent>
        Thhhis... hic th-th-thishh... hic whaaat... hic whaaa... hic drugshhhh doooo... hic d-don{"'"}t... hic d-don{"'"}t... hic noooo... hic noooo... yawn... hic snore... hic... zzZzz...
      
        </CardContent>
        <CardFooter>
          iijvhvekekepp3rp3le;dl;lsdwddewodjjdwojdjwd
        </CardFooter>
      </Card>
    </div>
  );
}
