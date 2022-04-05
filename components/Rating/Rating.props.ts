import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean;
	Raiting: number;
	setRaiting?: (Raiting: number) => void;
}