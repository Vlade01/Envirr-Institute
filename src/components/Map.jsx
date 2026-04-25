import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export default function Map({ branches }) {
  if (!branches || branches.length === 0) return null

  // Calculate center point from both branches
  const centerLat = (22.0431 + 22.0405) / 2
  const centerLng = (77.0692 + 77.0655) / 2

  // Branch coordinates (Gurugram locations)
  const branchMarkers = [
    {
      name: 'Main Branch',
      lat: 28.461560857343063,
      lng: 77.01460186519516,
      address: 'Jyoti Park, Sector 7, Gurugram',
    },
    {
      name: 'Basai Enclave Branch',
      lat: 28.454685098809055, 
      lng: 76.9854400618404,
      address: 'Basai Enclave, Sector 9, Gurugram',
    },
  ]

  return (
    <MapContainer center={[28.46043121578922, 76.99984322061921]} zoom={14} style={{ height: '320px', borderRadius: '0.75rem', position: 'relative', zIndex: 0 }} className="rounded-xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {branchMarkers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}>
          <Popup>
            <div className="font-semibold text-slate-900">{marker.name}</div>
            <div className="text-sm text-gray-600">{marker.address}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
