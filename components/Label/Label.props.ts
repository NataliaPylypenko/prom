import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface LabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'success' | 'primary';
    href?: string;
}