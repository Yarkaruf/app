import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'min' | 'mid';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
	href?: string;
}