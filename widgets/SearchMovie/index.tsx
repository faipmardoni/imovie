import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import { getMovies } from 'store/actions/search';
import styles from 'styles/searchInput.module.scss';

const SearchInput: FC = () => {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Form className={styles.searchBox}>
        <Form.Control
          className={styles.searchBox__input}
          size="lg"
          placeholder="    Enter movie title here..."
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && val) {
              e.preventDefault();
              const searchMovie = getMovies(val);
              dispatch(searchMovie);
            }
          }}
        />
        <i />
      </Form>
    </Container>
  );
};

export default SearchInput;
