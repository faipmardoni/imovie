/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const ListMovie = () => (
  <Container className="mt-5">
    <Table responsive variant="dark" striped hover>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 5 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>
              Table cell
              {' '}
              {index}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default ListMovie;
