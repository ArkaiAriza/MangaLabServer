import React from "react";
import styled from "styled-components";

import { Image } from "semantic-ui-react";
import { LabelGroup } from "./";
import { HoverInfo } from "./";

const StyledCard = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  margin: 2em 1em;
  width: 220px;
  max-width: 100%;
  min-height: 400px;
  height: 400px;
  max-height: 400px;
  background: #181818;
`;

const StyledImage = styled(Image)`
  flex: 1;
  object-fit: contain;
  width: 290px;
  height: 300px;
`;

const TitleContainer = styled.div`
  background-color: #303030;
  padding: 1em 1em;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.28rem;
`;

class Card extends React.Component {
  state = { hover: false };
  hover = React.createRef();

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
    //console.log(this.state.hover);
    return (
      <StyledCard
        ref={this.hover}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <StyledImage
          src={`https://cdn.mangaeden.com/mangasimg/${this.props.manga.im}`}
          onError={ev =>
            (ev.target.src =
              "http://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg")
          }
        />
        <TitleContainer>
          <Title>{this.props.manga.t}</Title>
        </TitleContainer>
        {this.state.hover && (
          <HoverInfo
            id={this.props.manga.i}
            right={
              this.hover.current.getBoundingClientRect().x + 440 <=
              window.innerWidth
                ? true
                : false
            }
          />
        )}
      </StyledCard>
    );
  }
}

export { Card };
