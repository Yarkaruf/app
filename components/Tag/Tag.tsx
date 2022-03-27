import styles from './Tag.module.css';
import { TagDivProps } from './Tag.props';
import cn from 'classnames';

export const TagDiv = ({ size = 'min', href, color = 'ghost', children, className, ...props }: TagDivProps): JSX.Element => {
	return (
		<div
			className={cn(styles.div, className, {
				[styles.min]: size == 'min',
				[styles.mid]: size == 'mid',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>{
				href ? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};