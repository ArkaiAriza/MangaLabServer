import React from 'react';
import styled from 'styled-components';

import { Image } from 'semantic-ui-react';
import { LabelGroup } from './';

const StyledHorizontalCard = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 0.5rem;
  align-items: stretch;
  min-width: 150px;
  width: 150px;
  max-width: 100px;
  min-height: 100px;
  height: 100px;
  max-height: 100px;
  background-color: #202020;
`;

class HorizontalCard extends React.Component {
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
      <StyledHorizontalCard>
        <Image
          style={{
            objectFit: 'contain',
            width: 70,
            height: 100
          }}
          src={`https://cdn.mangaeden.com/mangasimg/${this.props.manga.im}`}
          onError={ev =>
            (ev.target.src =
              'http://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg')
          }
        />
        <div
          style={{
            flex: 1,
            padding: '0.5rem 0.5rem'
          }}
        >
          <h2
            style={{
              color: '#d4d4d5',
              fontSize: '0.75rem'
            }}
          >
            {this.props.manga.t}
          </h2>
        </div>
      </StyledHorizontalCard>
    );
  }
}

export { HorizontalCard };
