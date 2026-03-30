import cn from 'classnames';

import styles from './SearchFilmsPages.module.css';

import SearchFilms from '../../shared/components/SearchFilms/SearchFilms';

function SearchFilmsPages() {
	return (
		<div className={cn(styles['search-page'])}>
			<SearchFilms />
		</div>
	);
}

export default SearchFilmsPages;