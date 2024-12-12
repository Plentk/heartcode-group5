"use client"
import { SignUp } from '@clerk/nextjs'
import { useTheme } from "next-themes";
import { shadesOfPurple } from '@clerk/themes'

export default function Page() {
    const currentTheme = useTheme()
    return (
        <div className="flex flex-col items-center">
            <div className="py-10">
                <SignUp  appearance={{baseTheme: currentTheme.theme === "dark" ? shadesOfPurple : null ,}} />
            </div>
        </div>
    )
}