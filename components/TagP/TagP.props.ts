import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'min' | 'mid' | 'big';
	children: ReactNode;
}