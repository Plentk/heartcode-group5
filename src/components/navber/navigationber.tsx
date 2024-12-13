"use client"
import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    Card,
    // CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import AntiProh from "@/app/assets/antiproh.png"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import ModeToggle from "@/components/mode-togg"

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import '@/app/globals.css'
import { useTheme } from "next-themes";
import { shadesOfPurple } from '@clerk/themes'

export function NavigationBar() {
    const currentTheme = useTheme()
    return (
        <NavigationMenu className="sticky top-0 list-noneflex justify-between min-w-full list-none h-15 position: p-5 bg-red-100/75 dark:bg-rose-900/50">
            <NavigationMenuList>
                <div className="flex flex-row">
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double bg-white dark:bg-black">
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink>
                                    <Image src={AntiProh} height={35} alt="AntiProh" unoptimized className="outline outline-0 hover:outline-1 outline-offset-1 justify-items-end flex flex-col items-center" />
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                    <div className="px-2" />
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double bg-white dark:bg-black">
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                    <div className="px-2" />
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double">
                            <Link href="/drugs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Drugs
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                    <div className="px-2" />
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double">
                            <Link href="/quiz" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Quiz
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                    <div className="px-2" />
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double">
                            <Link href="/aboutus" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Card className="outline outline-0 hover:outline-1 outline-offset-1 hover:underline decoration-double">
                        <ModeToggle />
                    </Card>
                </NavigationMenuItem>
                <div className="px-2" />
                <SignedOut>
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 justify-items-end flex flex-col items-center hover:underline decoration-double">
                            <Link href="/sign-in" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Sign In
                                </NavigationMenuLink>
                            </Link>
                        </Card>
                    </NavigationMenuItem>
                </SignedOut>
                <SignedIn>
                    <NavigationMenuItem>
                        <Card className="outline outline-0 hover:outline-1 outline-offset-1 justify-items-end flex flex-col items-center">
                            <UserButton appearance={{ baseTheme: currentTheme.theme === "dark" ? shadesOfPurple : undefined }} />
                        </Card>
                    </NavigationMenuItem>
                </SignedIn>
            </NavigationMenuList>
        </NavigationMenu>
    )
}