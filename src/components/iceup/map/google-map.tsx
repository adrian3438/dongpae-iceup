'use client'
import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { map } from './maps-data';
import MapInfo from "../../../components/iceup/modal/MapInfo";
export interface Props {address:string; google : any}
interface CodeType { lat : number , lng : number }
/*interface MapType {
  countryCode : number
  currentCode : CodeType
  moveCode : CodeType
  zoom : number
  storeCount : number
  currentZoom : number
}*/
export const GoogleMaps:React.FC<Props> = ({}) => {

  const [center, setCenter] = useState<{lat : number , lng : number}>({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState<number>(2)
  const [country , setCountry] = useState<number>(0)

  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});

  function handleMove (moveCode : CodeType , zoom : number , countryCode : number, info: any) {
    if(zoom === 0) {
      setMapModalOpen(true);
      setMapInfo(info);
      return;
    }else{
      setCenter({lat : moveCode.lat , lng : moveCode.lng})
      setZoom(zoom); setCountry(countryCode);
    }
  }

  const closeModal = () => {
    setMapModalOpen(false);
  };



  function Clear () {
    setCenter({lat : 0 , lng : 0})
      setZoom(2); setCountry(0);
  }

  return (
    <>
      <button onClick={Clear} className="init-btn">World Map</button>
      <GoogleMap
        options={{disableDefaultUI : true, styles : myStyles}}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={center}
        zoom={zoom}
      >
        {map?.map((map : any , index:number) => {
          const isDisplay = country === 0 ?
          zoom === map.currentZoom :
          zoom === map.currentZoom && country === map.countryCode;
          return(
            <>
            {isDisplay  ?
              <Marker
                key={`${map?.countryCode}-${index}`}
                label={{text : map.storeCount !== 0 ? map.storeCount.toString() : 'F' , color : 'white'}}
                position={{ lat: map.currentCode.lat, lng: map.currentCode.lng }}
                icon={redSquareIcon}
                title={map?.name}
                onClick={()=>handleMove(map.moveCode , map.zoom , map.countryCode, map.info)}
              /> : ''
            }
            </>
          )
        })}
      </GoogleMap>

      <MapInfo isOpen={mapModalOpen} onRequestClose={closeModal} mapInfo={mapInfo}/>
    </>
  );
};

const redSquareIcon = {
  path: "M -1,-1 L 1,-1 L 1,1 L -1,1 Z",
  fillColor: "red",
  borderColor : 'black',
  fillOpacity: 1,
  strokeColor: "yellow",
  strokeWeight: 2,
  scale: 10,
};

const myStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "black" }]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#7089a1" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
];
