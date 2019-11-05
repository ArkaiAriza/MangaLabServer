import React from 'react';
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
  justify-content: flex-start;
  padding: 1rem 1rem 1rem 1rem;
  @media (max-width: 1468px) {
    justify-content: center;
  }
`;

const StyledLoader = styled(Loader)`
  position: relative;
  transform: none;
  left: 0;
  top: 0;
  width: 100%;
  align-self: center;
`;

class Search extends React.Component {
  state = {
    inputFocus: false,
    searchTerm: 'one',
    searchResults: [],
    isLoading: false
  };

  handleChange = searchTerm => {
    this.setState({ ...this.state, searchTerm }, async () => {
      if (this.state.searchTerm.length >= 3) {
        this.setState({ isLoading: true });
        const res = await axios.post('/api/filter', {
          term: searchTerm,
          page: 0,
          nItems: 6
        });
        this.setState({ isLoading: false });
        this.setState({ searchResults: res.data });
      } else {
        this.setState({ searchResults: [] });
      }
    });
  };

  componentDidMount = async () => {
    if (this.state.searchTerm.length >= 3) {
      const res = await axios.post('/api/filter', {
        term: this.state.searchTerm,
        page: 0,
        nItems: 6
      });
      this.setState({ searchResults: res.data });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  renderResults = () => {
    if (this.state.isLoading) {
      return <StyledLoader active inverted />;
    }
    return this.state.searchResults.map(manga => {
      return <Result manga={manga} />;
    });
  };

  render() {
    return (
      <StyledContainer>
        <StyledSearch>
          <Icon
            name="search"
            size="large"
            color="grey"
            inverted
            style={{ marginRight: '10%' }}
          />
          <StyledInput
            value={this.state.searchTerm}
            onChange={event => this.handleChange(event.target.value)}
          />
        </StyledSearch>
        <ResultsContainer>{this.renderResults()}</ResultsContainer>
      </StyledContainer>
    );
  }
}

export default Search;
