import React, { useState } from 'react';
import styled from 'styled-components';

import { Image } from 'semantic-ui-react';
import { HoverInfo } from './HoverInfo';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  margin: 2em 1em;
  width: 220px;
  max-width: 100%;
  min-height: 350px;
  height: 350px;
  max-height: 350px;
  background: #181818;
`;

const StyledImage = styled(Image)`
  flex: 1;
  object-fit: contain;
  width: 290px;
  height: 300px;
`;

const Card = ({ className, manga }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to={`/manga/${manga.i}`}>
      <StyledCard
        className={className}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledImage
          src={`https://cdn.mangaeden.com/mangasimg/${manga.im}`}
          onError={ev =>
            (ev.target.src =
              'http://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg')
          }
        />

        <HoverInfo manga={manga} hover={hover}></HoverInfo>
      </StyledCard>
    </Link>
  );
};

export { Card };
