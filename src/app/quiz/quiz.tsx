"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
//import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

const formSchema = z.object({
    nam: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }).max(50, { message: "Name cannot exceed 50 characters.", }),
    ans_2: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_3: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_4: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_5: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_6: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_7: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_8: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_9: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
    ans_10: z.enum(["a", "b", "c", "d", "e"], { message: "This question is required" }),
})

export default function Quiz() {
    const { toast } = useToast();
    let score = 1
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nam: "",

        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (values.ans_2 === "e") { score += 1 }
        if (values.ans_3 === "d") { score += 1 }
        if (values.ans_4 === "d") { score += 1 }
        if (values.ans_5 === "a") { score += 1 }
        if (values.ans_6 === "b") { score += 1 }
        if (values.ans_7 === "c") { score += 1 }
        if (values.ans_8 === "b") { score += 1 }
        if (values.ans_9 === "a") { score += 1 }
        if (values.ans_10 === "c") {score += 1}
        console.log(values, score)
        if (score > 5) {
            toast({
                title: `Congratulations ${values.nam}`,
                description: `Your score is ${score}/10. You are an expert in dealing with drug addiction!`
            })
        } else {
            toast({
                title: `Do better, ${values.nam}`,
                description: `Your score is ${score}/10. Answers are found on this website.`
            })
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="py-10 sm:w-2/3 md:w-1/2 lg:w-1/4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="">Anti Drug Abuse Quiz🎊🎊</div>
                        <FormField
                            control={form.control}
                            name="nam"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 1</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Type your name
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="Example: John Tan Xiao Ming" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 2</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Which of the following drugs is it legal for someone born on 12 August 2006 to possess on 11 August 2024?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Alcohol
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Caffeine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Heroin
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Methamphetamine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Tobacco
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_3"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 3</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Which of the following options <a className="underline font-bold">best</a> describes what drugs does? Drugs ________.
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Helps people sleep
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Affects one's mental and physical state
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Helps people stay awake
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Are not real
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Kill people
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_4"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 4</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        James has forgotten how to hold a pair of chopsticks. Which of the following drugs could he have taken? It is assumed that he has taken a drug.
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cannabis
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Chopsticks Control Defficiency Drugs
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cocaine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Heroin
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Methamphetamine
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_5"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 5</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Sofia has recently not been eating well recently. Which of the following drugs could cause this?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cannabis
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cocaine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Heroin
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Methamphetamine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Nutrient Defficiency Diet Drugs
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_6"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 6</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Joseph has recently gotten into multiple fights last week. He usually isn{"'"}t so aggresive. Which of the following drugs could cause this increase in aggresiveness?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Aggression Enhancement Drugs
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cannabis
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Cocaine
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Heroin
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Methamphetamine
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_7"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 7</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Which of the following is <a className="underline font-bold">not</a> a possible cause of taking drugs?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Accumulated Stress
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Curiosity
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Desire to be uglier
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Peer Pressure
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Wanting to not be left out
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_8"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 8</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Which of the following is <a className="underline font-bold">not</a> what should be done if witnessing someone taking drugs? Assume none of the actions are taken in combination.
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Report to the Police
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Disuade the person from taking drugs
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Confiscate the person's drugs
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Seek external assistance
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Call hospital
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_9"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 9</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        Which of the following is <a className="underline font-bold">not</a> a possible consequence of drug abuse?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Debt
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Broken relationships
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Withdrawal from Society
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Dementia
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Death 💀
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ans_10"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base mx-auto font-semibold">Question 10</FormLabel>
                                    <FormDescription className="text-small mx-auto text-neutral 900">
                                        You were offered powdery substances by a stranger. The container the powdery substances are in is unsealed. What should you do?
                                    </FormDescription>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="d" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Buy the drugs
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="e" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Stab the stranger
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="b" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Chuck the entire packet of substances down the stranger's gut
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="a" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Take deep breaths
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="c" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Call the police
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="outline outline-2 outline-offset-2">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}