import { ReactElement, ReactNode } from "react";

export type TRoutes = {
    index?: boolean;
    path?: string;
    element: ReactNode;
}


export type TSidebarItems = {
    key: string | undefined;
    icon?: ReactElement;
    label: ReactNode;
    children?: TSidebarItems[];
}


export type TUserPath = {
    index?: boolean;
    path?: string;
    icon?: ReactElement;
    label?: string;
    element?: ReactNode;
    children?: TUserPath[];
}