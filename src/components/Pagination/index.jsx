import ReactPaginate from 'react-paginate';
//
import style from './Pagination.module.scss';

export const Pagination = () => {
	return (
		<ReactPaginate
			className={style.paginate}
			// breakLabel=""
			// nextLabel="→"
			// previousLabel="←"
			// forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
			// pageCount={info?.pages}
			// onPageChange={pageChange}
		/>
	);
};