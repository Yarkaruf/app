import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};
export const withLayoult = <T extends Record<string, unknown>>(Components: FunctionComponent<T>) => {
	return function withLayoultComponent(props: T): JSX.Element {
		return (
			< Layout >
				<Components {...props} />
			</Layout >
		);
	};
};
