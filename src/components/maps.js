import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// map container shows the location of Sparta in Greece
const Maps = () => {
  return (
    <div id="maps">
      <MapContainer
        center={[37.0758, 22.4208]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.0758, 22.4208]}>
          <Popup>👑SPARTA👑</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
