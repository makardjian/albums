import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = (props) => {
  const { title, artist, thumbnail_image, album_image } = props;
  const { headerContentStyle, 
    thumbnailStyle, 
    thumnailContainerStyle, 
    albumTextStyle,
    albumImageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image 
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={albumTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={albumImageStyle}
          source={{ uri: album_image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  albumTextStyle: {
    fontSize: 16,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 2,
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default AlbumDetails;
