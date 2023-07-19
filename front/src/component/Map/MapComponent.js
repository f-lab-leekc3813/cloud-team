import React from 'react';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

function MapComponent() {
  return (
    <KakaoMap
      center={{ lat: 37.58583193159859, lng: 126.70986442961834 }} // coordinates of the center of the map
      style={{ width: '800px', height: '300px' }} // map size
      level={3} // map zoom level
    >
      <MapMarker position={{ lat: 37.58583193159859, lng: 126.70986442961834 }}> </MapMarker>
    </KakaoMap>
  );
}

export default MapComponent;