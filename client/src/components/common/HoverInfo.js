import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import { LabelGroup } from './';

const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 220px;
  padding: 10px 1em 0;
  top: ${props => (props.hover ? '0px' : '300px')};
  height: ${props => (props.hover ? '350px' : '50px')};

  color: white;
  background-color: ${props => (props.hover ? '#303030f5' : '#303030')};

  transition: top 300ms, height 300ms, background-color 300ms;
`;

const Title = styled.h2`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  color: white;
  margin: 0px;
`;

const Description = styled.p`
  overflow: hidden;
  color: white;
  flex: 1 1 30%;
  overflow: hidden;
  font-weight: 100;
  padding-top: 20px;
`;

const Author = styled.h5`
  color: #ccc;
  flex-shrink: 1;
  overflow: hidden;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #ccc;
  flex-grow: 0;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const StyledLabelGroup = styled(LabelGroup)``;

function HoverInfo({ manga, hover, className }) {
  const [loading, setLoading] = useState(false);
  const [fetchedManga, setFetchedManga] = useState({ error: null });

  const fetchData = async () => {
    const res = await axios.post('/api/manga', {
      id: manga.i
    });
    return res.data;
  };

  useEffect(() => {
    if (hover && fetchedManga.error !== false) {
      setLoading(true);
      fetchData()
        .then(data => {
          setFetchedManga({ ...data, error: false });
          setLoading(false);
        })
        .catch(() => {
          setFetchedManga({ error: true });
        });
    }
  }, [hover]);

  console.log(fetchedManga);

  if (loading) {
    return (
      <Info hover={hover}>
        <Title>{fetchedManga.title ? fetchedManga.title : manga.t}</Title>
        <Description>
          {hover && <Loader active style={{ position: 'relative' }} />}
        </Description>
      </Info>
    );
  }
  if (fetchedManga.error) {
    return (
      <Info className={className} hover={hover}>
        <Title>{fetchedManga.title ? fetchedManga.title : manga.t}</Title>
        <Description>ERROR</Description>
      </Info>
    );
  }

  return (
    <Info className={className} hover={hover}>
      <Title>{fetchedManga.title ? fetchedManga.title : manga.t}</Title>

      <Author>{`${fetchedManga.artist}${
        fetchedManga.artist === fetchedManga.author
          ? ''
          : ` ${fetchedManga.author}`
      }`}</Author>
      <Description>
        {fetchedManga.error !== null
          ? `${fetchedManga.description.substr(0, 200)} ...`
          : ''}
      </Description>

      <Wrapper>
        <div>{`${fetchedManga.chapters_len} chapters`}</div>
        <div>Favorites</div>
      </Wrapper>
      <StyledLabelGroup
        labels={fetchedManga.categories}
        limit={3}
      ></StyledLabelGroup>
    </Info>
  );
}

export { HoverInfo };
