import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';
import axios from 'axios';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      this.setState({
        albums: response.data,
      });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetails 
        key={album.title} title={album.title} artist={album.artist} 
        thumbnail_image={album.thumbnail_image} album_image={album.image}
      />
    );
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
