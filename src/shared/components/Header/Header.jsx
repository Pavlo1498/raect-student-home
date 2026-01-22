import './Header.css';

function Header(params) {
	return (
		<nav className="header">
			<div className="head-logo">Logo</div>
			<ul className="head-action">
				<li className='head-action__item'>Поиск фильмов</li>
				<li className='head-action__item'>Мои фильмы</li>
				<li className='head-action__item'>Войти</li>
			</ul>
		</nav>
	);
}

export default Header;