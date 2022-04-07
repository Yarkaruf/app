import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
			</div>
			<Footer />
		</>
	)
}
export const withLayoult = <T extends Record<string, unknown>>(Components: FunctionComponent<T>) => {
	return function withLayoultComponent(props: T): JSX.Element {
		return (
			< Layout >
				<Components {...props} />
			</Layout >
		);
	};
};
