import React, { useEffect } from 'react'
import Map, { Marker } from 'react-map-gl'
import redMarker from '../Map/marker.png'
import { MarkerStyle } from './map-styles'

const MapComponent = ({ markers }) => {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGFydG95IiwiYSI6ImNsZG45cnE3MDA1MGMzcXB0dm1nZnIzZHEifQ.uzjlEFwGjrs7JAr5NxiWrg'
  const dataForMarkers = markers

  // useEffect(() => {
  //   console.log('esto es data inside map', dataForMarkers)
  // }, [])
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 2,
      }}
      mapboxAccessToken={MAPBOX_TOKEN}
      //MODIFICAR TAMAÑO DEL MAPA QUE ROMPE MOBILE
      style={{ width: '100%', minHeight: 400, height: '100%' }}
      mapStyle="mapbox://styles/hartoy/cldndx6ll005701q99r0ixdw5"
    >
      {Object.entries(dataForMarkers).map(([key, value]) => {
        return (
          <Marker key={value.id} longitude={value.lng} latitude={value.lat} anchor="bottom">
            <MarkerStyle alt="" src={redMarker} />
          </Marker>
        )
      })}
    </Map>
  )
}

export default MapComponent
