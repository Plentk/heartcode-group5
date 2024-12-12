"use client"
import { SignIn } from '@clerk/nextjs'
import { useTheme } from "next-themes";
import { shadesOfPurple } from '@clerk/themes'

export default function Page() {
    const currentTheme = useTheme()
    return (
        <div className="flex flex-col items-center">
            <div className="py-10">
                <SignIn appearance={{ baseTheme: currentTheme.theme === "dark"? shadesOfPurple : undefined }}/>
            </div>
        </div>
    )
}