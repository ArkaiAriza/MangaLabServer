import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Info = styled.div`
  position: absolute;
  background-color: #222222f0;
  border: 1;
  border-color: #909090;
  top: 400px;
  width: 220px;
  z-index: 100px;
  height: 0px;
  visibility: hidden;
  color: white;
  transition: color 300ms, top 300ms, height 2s;
`;

class HoverInfo extends React.Component {
  state = { loading: false, manga: null };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const res = await axios.post('/api/manga', {
      id: this.props.id
    });
    console.log(res);
    this.setState({ loading: false, manga: res.data });
  };

  render() {
    const { className } = this.props;

    if (this.state.loading) {
      return (
        <Info className={className} right={this.props.right}>
          <div>Loading</div>
        </Info>
      );
    }
    if (!this.state.manga) {
      return (
        <Info className={className} right={this.props.right}>
          <div>ERROR</div>
        </Info>
      );
    }
    return (
      <Info className={className} right={this.props.right}>
        <div>{this.state.manga.title}</div>
      </Info>
    );
  }
}

export { HoverInfo };
