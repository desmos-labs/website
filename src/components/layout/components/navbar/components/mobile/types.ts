export interface INavBar extends IMobileNav {
    isOpen: boolean;
    toggle(): void;
}

export interface IMobileNav {
    color?: string;
    displayBackground?: boolean;
}

export interface IMobileNavBarIconCSS {
    onClick?: any;
    isOpen: boolean;
    displayBackground?: boolean;
}