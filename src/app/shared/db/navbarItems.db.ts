
import { NavBarInterface } from "../interfaces/nav-bar.interface";


export const navbarItems: NavBarInterface[] = [
    {
        label: "NAVBAR_ITEMS.US",
        icon: "pi pi-star",
        routerLink: ["/us"]
    },
    {
        label: "NAVBAR_ITEMS.OUR_TEAM",
        icon: "pi pi-users",
        routerLink: ["/team"]
    },
    {
        label: "NAVBAR_ITEMS.OUR_FAVORITE_DISHES",
        icon: "pi pi-heart",
        routerLink: ["/fav-dishes"]
    },
    {
        label: "NAVBAR_ITEMS.OUR_LETTER",
        icon: "pi pi-book",
        routerLink: ["/letter"]
    },
    {
        label: "NAVBAR_ITEMS.EVENTS",
        icon: "pi pi-calendar",
        routerLink: ["/events"]
    },
    {
        label: "NAVBAR_ITEMS.RESERVATIONS",
        icon: "pi pi-ticket",
        routerLink: ["/reservations"]
    }
]