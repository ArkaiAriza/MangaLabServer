import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Loader, Icon } from 'semantic-ui-react';
import { LabelGroup } from './';

const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 220px;
  padding: 10px 1em 0;
  top: ${props => (props.hover ? '225px' : '300px')};
  height: ${props => (props.hover ? '125px' : '50px')};

  color: white;
  background-color: ${props => (props.hover ? '#303030fa' : '#303030')};

  transition: top 300ms, height 300ms, background-color 300ms;
`;

const Title = styled.h2`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 1;
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
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 1 40px;
  color: #ccc;
  justify-content: space-between;
  align-items: center;
`;

const Chapter = styled.h5`
  margin: 0;
  overflow: hidden;
  flex: 1 1;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 1 40%;
  padding-bottom: 5px;
  color: #ccc;
  overflow: hidden;
`;

const HoverInfo = ({ manga, hover, className }) => {
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

  if (loading) {
    return (
      <Info hover={hover}>
        <Wrapper>
          <Title>{manga.t}</Title>
          <Icon name="star" size="large" color="orange" inverted />
        </Wrapper>
        <Description>
          {hover && <Loader active style={{ position: 'relative' }} />}
        </Description>
      </Info>
    );
  }
  if (fetchedManga.error) {
    return (
      <Info className={className} hover={hover}>
        <Wrapper>
          <Title>{fetchedManga.title ? fetchedManga.title : manga.t}</Title>
          <Icon name="star" size="large" color="orange" inverted />
        </Wrapper>
        <Description>ERROR</Description>
      </Info>
    );
  }

  return (
    <Info className={className} hover={hover}>
      <Wrapper>
        <Title>{fetchedManga.title ? fetchedManga.title : manga.t}</Title>
        <Icon name="star" size="large" color="orange" inverted />
      </Wrapper>
      <Author>{`${fetchedManga.artist}${
        fetchedManga.artist === fetchedManga.author
          ? ''
          : ` ${fetchedManga.author}`
      }`}</Author>
      <Wrap>
        <Chapter>{`${fetchedManga.chapters_len} chapters`}</Chapter>

        <LabelGroup labels={fetchedManga.categories} limit={3}></LabelGroup>
      </Wrap>
    </Info>
  );
};

export { HoverInfo };
