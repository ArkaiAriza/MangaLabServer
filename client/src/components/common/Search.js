import React, { useState, useEffect } from 'react';
import { Icon, Loader } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

import { HorizontalCard } from '../common';

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #0000;
`;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #0000;
  border-width: 1px 0px;
  border-color: #d4d4d530;
  border-style: solid;
  height: 40px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding-left: 10%;
  color: #d4d4d5;
  background-color: #303030;
  border-width: 0;

  outline-style: none;
`;

const Result = styled(HorizontalCard)``;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  max-height: 100%;
  background-color: #0000;
  justify-content: center;
  padding: 1rem 1rem 1rem 1rem;
`;

const StyledLoader = styled.div`
  position: relative;
  width: 100%;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('one');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.post('/api/filter', {
      term: searchTerm,
      page: 0,
      nItems: 6
    });
    return res.data;
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchData().then(data => {
        setSearchResults(data);
      });
    } else {
      setSearchResults([]);
    }
    setIsLoading(false);
  }, [searchTerm]);

  function renderResults() {
    if (isLoading) {
      return (
        <StyledLoader>
          <Loader active inverted />
        </StyledLoader>
      );
    }
    return searchResults.map(manga => {
      return <Result id={manga.id} manga={manga} />;
    });
  }

  return (
    <StyledContainer>
      <StyledSearch>
        <Icon name="search" size="large" color="grey" inverted />
        <StyledInput
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </StyledSearch>
      <ResultsContainer>{renderResults()}</ResultsContainer>
    </StyledContainer>
  );
};

export default Search;
