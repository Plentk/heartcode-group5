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
        <div>
            About us😊
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
        </div>
    )
}