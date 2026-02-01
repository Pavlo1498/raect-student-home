import './Header.css';
import Logo from '@assets/Logo.svg';
import Exit from '@assets/exit.png';

function Header(params) {
	return (
		<nav className="header">
			<img
				className="head-logo"
				src={Logo}
			/>
			<ul className="head-action">
				<li className='head-action__item'>Поиск фильмов</li>
				<li className='head-action__item'>Мои фильмы</li>
				<div className='exit'>
					<li className='head-action__item'>Войти</li>
					<img
						className="head-logo"
						src={Exit}
					/>
				</div>
			</ul>
		</nav>
	);
}

export default Header;