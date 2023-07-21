import React, { useState } from 'react';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

function MapComponent(props) {
  const [zoomLevel, setZoomLevel] = useState(3);

  if (!props.location) {
    return <div>Location 값이 유효하지 않습니다.</div>;
  }

  const location = props.location.split(',');
  const lat = parseFloat(location[0]);
  const lng = parseFloat(location[1]);

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom > 1 ? prevZoom - 1 : prevZoom);
  }
  const handleZoomOut = () => {
    setZoomLevel(prevZoom => prevZoom < 11 ? prevZoom + 1 : prevZoom);
  }

  return (
    <div style={{ position: 'relative', width: '800px', height: '300px' }}>
      <KakaoMap
        center={{ lat, lng }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        level={zoomLevel}
      >
        <MapMarker position={{ lat, lng }} info={null} />
      </KakaoMap>
      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', top: 10, right: 10, zIndex: 1 }}>
        <button style={{ marginBottom: .5, width: '35px', height: '35px', borderWidth: '1px', background: '#ffffff' }} onClick={handleZoomIn}>+</button>
        <button style={{ width: '35px', height: '35px', borderWidth: '1px', background: '#ffffff' }} onClick={handleZoomOut}>-</button>
      </div>
    </div>
  );
}

export default MapComponent;