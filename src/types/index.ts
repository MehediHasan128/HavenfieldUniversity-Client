import { ReactNode } from "react";

export type TRoutes = {
    index?: boolean;
    path?: string;
    element: ReactNode;
}


export type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
}


export type TUserPath = {
    index?: boolean;
    path?: string;
    label?: string;
    element?: ReactNode;
    children?: TUserPath[];
}