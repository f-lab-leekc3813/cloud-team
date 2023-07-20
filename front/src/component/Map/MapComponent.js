import React from 'react';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

function MapComponent(props) {
  if (!props.location) {
    return <div>Location 값이 유효하지 않습니다.</div>;
  }

  const location = props.location.split(',');
  const lat = parseFloat(location[0]);
  const lng = parseFloat(location[1]);

  return (
    <KakaoMap
      center={{ lat, lng }} // coordinates of the center of the map
      style={{ width: '800px', height: '300px' }} // map size
      level={3} // map zoom level
    >
      <MapMarker position={{ lat, lng }} info={null} />
    </KakaoMap>
  );
}

export default MapComponent;