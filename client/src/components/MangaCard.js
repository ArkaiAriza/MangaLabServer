import React from 'react';

import { Grid, Card, Image, Label, Container } from 'semantic-ui-react';
import { LabelGroup } from './common';
import axios from 'axios';

class MangaCard extends React.Component {
  renderCategories() {
    /* return this.props.manga.c.map(c => {
      return (
        <Label as="a" color="black">
          {c}
        </Label>
      );
    }); */

    const { c } = this.props.manga;

    return <LabelGroup labels={c} limit={3} />;
  }

  render() {
    //console.log(this.props);
    return (
      <Card centered style={{ borderRadius: 0, borderWidth: 0 }}>
        <Image
          src={`https://cdn.mangaeden.com/mangasimg/${this.props.manga.im}`}
        />
        <Card.Content
          style={{
            backgroundColor: '#202020',
            borderWidth: 0
          }}
        >
          <Card.Header style={{ color: 'white' }}>
            {this.props.manga.t}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default MangaCard;
