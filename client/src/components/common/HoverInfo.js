import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Info = styled.div(props => ({
  position: 'absolute',
  backgroundColor: '#222222',
  height: 400,
  width: 220,
  zIndex: 100,
  left: props.right ? 220 : -220,
  color: 'white'
}));

class HoverInfo extends React.Component {
  state = { loading: false, manga: null };

  componentDidMount = async () => {
    console.log(this.props.id);
    this.setState({ loading: true });
    const res = await axios.post('/api/manga', {
      id: this.props.id
    });
    console.log(res);
    this.setState({ loading: false, manga: res.data });
  };

  render() {
    if (this.state.loading) {
      return (
        <Info right={this.props.right}>
          <div>Loading</div>
        </Info>
      );
    }
    if (!this.state.manga) {
      return (
        <Info right={this.props.right}>
          <div>ERROR</div>
        </Info>
      );
    }
    return (
      <Info right={this.props.right}>
        <div>{this.state.manga.t}</div>
      </Info>
    );
  }
}

export { HoverInfo };
