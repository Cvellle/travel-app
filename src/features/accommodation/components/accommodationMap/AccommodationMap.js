import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const AccommodationMap = ({ location, locationName }) => {
  return (
    <MapContainer
      center={[location.lat, location.long]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: '24px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[location.lat, location.long]}
        icon={
          new Icon({
            iconUrl: '/images/marker-icon2.png',
            iconSize: [40, 40],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AccommodationMap;
