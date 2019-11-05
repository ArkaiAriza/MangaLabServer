import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Grid, Image } from 'semantic-ui-react';

import { Card } from './common/';

import MangaCard from './MangaCard';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 60px;
  width: 100%;
`;

class Content extends React.Component {
  state = { mangaList: [], im: '', page: 0, nItems: 23 };

  async componentDidMount() {
    const res = await axios.post('/api/filter', {
      page: this.state.page,
      nItems: this.state.nItems
    });
    this.setState({ mangaList: res.data });
  }

  renderList() {
    if (!this.state.mangaList) {
      return <h1>Loading</h1>;
    }
    return this.state.mangaList.map(manga => {
      return <Card manga={manga} />;
    });
  }

  render() {
    return <StyledContainer>{this.renderList()}</StyledContainer>;
  }
}

export default Content;
