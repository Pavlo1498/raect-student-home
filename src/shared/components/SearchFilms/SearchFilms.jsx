import { useState } from 'react';
import './SearchFilms.css';

import Button from '../../../widgets/Button/Button';
import Input from '../../../widgets/Input/Input';
import searchIcon from '@assets/searchIcon.png';

function SearchFilms() {
	const [searchValue, setValue] = useState('');

	const handleInputChange = (text) => {
		setValue(text);
	};
	return (
		<div className='search-film'>
			<h1>Поиск</h1>
			<div className='mt-16'>
				<span>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</span>
			</div>
			<div className='search'>
				<Input
					value={searchValue}
					placeholder='Введите значение'
					onChange={handleInputChange}
					icon={searchIcon}
				/>
				<Button text='Искать'/>
			</div>
		</div>
	);
}

export default SearchFilms;