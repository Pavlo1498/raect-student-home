import './Header.css';

function Header(params) {
	return (
		<nav className="header">
			<div className="head-logo">Logo</div>
			<ul className="head-action">
				<li>Поиск фильмов</li>
				<li>Мои фильмы</li>
				<li>Войти</li>
			</ul>
		</nav>
	);
}

export default Header;