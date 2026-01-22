import './SearchFilms.css';

import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchFilms() {
	return (
		<div className='search-film'>
			<h1>Поиск</h1>
			<div className='mt-16'>
				<span>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</span>
			</div>
			<div className='mt-24'>
				<Input />
				<Button text='Искать'/>
			</div>
		</div>
	);
}

export default SearchFilms;