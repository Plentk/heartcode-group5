// import Image from "next/image";
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
                <div className="py-2"/>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Hi my name is Sean
                        </CardTitle>
                        <CardDescription>
                            <p>I am a group 5 heartcode mentee</p>
                            I am only good @ geoguessr if it is only SG
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        This is project
                    </CardContent>
                    <CardFooter>
                        hi nice to meet you
                    </CardFooter>
                </Card>
                <div className="py-3"/>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Hi my name is Teck Seng
                        </CardTitle>
                        <CardDescription>
                            I am a group 5 heartcode mentee
                            I like to play mobile games
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        Nice to meet you
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}