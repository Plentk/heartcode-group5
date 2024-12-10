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

export function NavigationBar() {
    return (
        <NavigationMenu className="flex justify-normal min-w-full list-none h-15 position: sticky top-0 p-5">
            <NavigationMenuItem className= "pr-2">
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className= "pr-2">
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/aboutus" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}