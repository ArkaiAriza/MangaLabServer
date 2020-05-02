import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Menu from './Menu';
import { Header, Grid } from 'semantic-ui-react';

import Content from './Content';
import MangaPage from './MangaPage';
import Search from './common/Search';

const App = () => {
  const [pageYOffset, setPageYOffset] = useState(0);
  const [activeItem, setActiveItem] = useState('home');

  //function handleItemClick (e, { name }) => this.setState({ activeItem: name });

  /* componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateWindowDimensions);
  } */

  /* updateWindowDimensions = () => {
    console.log(this.state.pageYOffset);
    this.setState({ pageYOffset: window.pageYOffset });
  }; */

  return (
    <Router history={history}>
      <Grid
        stackable
        style={{ marginBottom: 0, minWidth: '100%', height: '100%' }}
      >
        <Grid.Row stretched style={{ paddingBottom: 0 }}>
          <Grid.Column
            computer={4}
            tablet={5}
            mobile={8}
            style={{
              paddingRight: 0,
              paddingBottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              backgroundColor: '#303030',
              boxShadow: '3px 0px 3px 0px #10101077'
            }}
          >
            <Grid.Row
              style={{
                minHeight: '100px',
                backgroundColor: '#303030',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '-3px 2px 5px 0px #10101077',
                zIndex: 3,
                flex: 0
              }}
            >
              <Header as="h1" inverted>
                <p>
                  <span style={{ fontSize: '4rem' }}>M</span>
                  ANGA
                  <span style={{ fontSize: '4rem' }}>L</span>
                  AB
                </p>
              </Header>
            </Grid.Row>

            <Grid.Row style={{ backgroundColor: '#303030', flex: 0 }}>
              <Menu></Menu>
            </Grid.Row>
            <Grid.Row
              style={{
                backgroundColor: '303030',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch'
              }}
            >
              <Search />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column
            computer={12}
            tablet={11}
            mobile={8}
            style={{ display: 'flex', backgroundColor: '#202020' }}
          >
            <Switch>
              <Route path="/" exact component={Content} />
              <Route exact path="/manga/:id" component={MangaPage} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Router>
  );
};

export default App;
