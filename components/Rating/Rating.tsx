import { RaitingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './Star.svg';

export const Rating = ({ isEditable = false, Raiting, setRaiting, className, ...props }: RaitingProps): JSX.Element => {
	const [RaitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRaiting(Raiting);
	}, [Raiting]);

	const constructRaiting = (currentRaiting: number) => {
		const updatedArray = RaitingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRaiting,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(Raiting)}
					onClick={() => onClick(i + 1)}
				>

					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRaitingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRaiting(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRaiting) {
			return;
		}
		setRaiting(i);
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRaiting) {
			return;
		}
		setRaiting(i);
	};

	return (
		<div {...props}>
			{RaitingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	)
};