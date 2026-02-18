import './SearchFilmsPages.css';

import SearchFilms from '../../shared/components/SearchFilms/SearchFilms';
import CardLists from '../../shared/components/CardList/CardLists';

function SearchFilmsPages() {
	return (
		<div className='search-page'>
			<SearchFilms />
			<CardLists />
		</div>
	);
}

export default SearchFilmsPages;