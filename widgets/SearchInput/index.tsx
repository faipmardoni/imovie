import React, { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import styles from 'styles/searchInput.module.scss';

const SearchInput: FC = () => {
  const [val, setVal] = useState('');

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
        />
        <i />
      </Form>
    </Container>
  );
};

export default SearchInput;
