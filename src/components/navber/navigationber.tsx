import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    // NavigationMenuList,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import ModeToggle from "@/components/mode-togg"


export function NavigationBar() {
    return (
        <NavigationMenu className="flex justify-between min-w-full list-none h-15 position: sticky top-0 p-5 bg-rose-100 dark:bg-rose-900">
            <div className="flex flex-row">
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <div className="px-2"></div>
                <NavigationMenuItem>
                    <Link href="/drugs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Drugs
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <div className="px-2"></div>
                <NavigationMenuItem>
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <div className="px-2"></div>
                <NavigationMenuItem>
                    <Link href="/aboutus" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
            <div className="flex flex-row">
                <NavigationMenuItem className="flex justify-end">
                    <ModeToggle />
                </NavigationMenuItem>
            </div>
        </NavigationMenu>
    )
}