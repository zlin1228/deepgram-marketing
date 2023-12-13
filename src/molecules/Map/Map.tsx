import { type GoogleAPI, GoogleApiWrapper, Map } from 'google-maps-react';
import React, { type FC } from 'react';

import Container from 'quarks/Container';

import mapStyles from 'molecules/Map/mapStyles';

import type { IComponentMapRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';

interface MapProps extends IComponentMapRecord, FlexProps {
  google: GoogleAPI;
}

const MoleculeMap: FC<MapProps> = ({ location, isDarkMap = false, google }) => {
  if (!location) {
    return null;
  }

  const eventMarker = {
    lat: location.latitude,
    lng: location.longitude,
  };

  const _mapLoaded = (map: any) => {
    map.setOptions({
      styles: isDarkMap ? mapStyles.styles.dark : mapStyles.styles.light,
    });
    const marker = new google.maps.Marker({ position: eventMarker });
    marker.setMap(map);
  };

  return (
    <Container
      position="relative"
      width="100%"
      height="440px"
      borderRadius="8px"
      css={`
        overflow: hidden;
      `}
    >
      <Map
        google={google}
        zoom={17}
        initialCenter={eventMarker}
        disableDefaultUI={true}
        onReady={(mapProps, map) => _mapLoaded(map)}
      />
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
})(MoleculeMap);
