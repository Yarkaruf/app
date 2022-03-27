import { TagProps } from './TagP.props';
import styles from './TagP.module.css';
import cn from 'classnames';

export const TagP = ({ size = 'min', children, className, ...props }: TagProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.min]: size == 'min',
			[styles.mid]: size == 'mid',
			[styles.big]: size == 'big',
		})}
			{...props}
		>
			{children}
		</p>
	)
}