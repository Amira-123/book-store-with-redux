import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useEffect } from 'react';
import { getBooks } from '../../store/bookSlice';
import { useDispatch, useSelector } from 'react-redux';

const BookContainer = () => {
  // const state = useSelector(
  //   (state: { books: { isLoading: boolean ,books:any[]} }) => state.books
  // );
  const dispatch = useDispatch<any>();
  useEffect(()=>{
    dispatch(getBooks());
  },[dispatch])
  const state = useSelector(
    (state: { books: { isLoading: boolean; books: any[] } }) => state
  );
  console.log(state.books);

  
  return (

    <>
   
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={state.books.isLoading} books={state.books.books} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
   
      
    </>
  );
};

export default BookContainer;