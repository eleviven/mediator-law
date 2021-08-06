import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import "leaflet/dist/leaflet.css";

export default function Map({
  mapCenter,
  mapZoom,
  markerPosition,
  markerPopupComponent,
  scrollWheelZoom,
  className,
  ...props
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const L = require("leaflet");
  const { MapContainer, Popup, Marker, TileLayer } = require("react-leaflet");

  const markerIcon = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconRetinaUrl: "/images/marker-icon.png",
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={scrollWheelZoom}
      zoomControl={true}
      className={cn("w-full h-96", className)}
      {...props}
    >
      <TileLayer
        attribution="mediator-huquq.az"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={markerIcon} position={markerPosition}>
        {markerPopupComponent && <Popup>{markerPopupComponent}</Popup>}
      </Marker>
    </MapContainer>
  );
}

Map.defaultProps = {
  mapZoom: 17,
};
