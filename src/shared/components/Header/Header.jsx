import cn from 'classnames';

import styles from './Header.module.css';

import Logo from '@assets/Logo.svg';
import Exit from '@assets/exit.png';

function Header() {
	return (
		<nav className={cn(styles['header'])}>
			<img
				className={cn(styles['head-logo'])}
				src={Logo}
			/>
			<ul className={cn(styles['head-action'])}>
				<li className={cn(styles['head-action__item'])}>Поиск фильмов</li>
				<li className={cn(styles['head-action__item'])}>Мои фильмы</li>
				<div className={cn(styles['exit'])}>
					<li className={cn(styles['head-action__item'])}>Войти</li>
					<img
						className={cn(styles['head-logo'])}
						src={Exit}
					/>
				</div>
			</ul>
		</nav>
	);
}

export default Header;