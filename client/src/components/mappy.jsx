import {APIProvider, Map, Pin, AdvancedMarker} from '@vis.gl/react-google-maps';

const locations = [
    {key: 'Cathedral College', location: {lat: -36.38680, lng: 146.32877}},
];

const PoiMarkers = (locationy) => {
    return (
        <>
            {locationy.map((poi) => (
                        <AdvancedMarker
                            key={poi.key}
                            position={poi.location}>
                            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                        </AdvancedMarker>
            ))}
        </>
    );
};

export function Mappy(){

    return (
        <div>
            <APIProvider apiKey={'AIzaSyBSdaggI7w0uc3CSDb9oENwmloDNROwEs4'} onLoad={() => console.log('Maps API has loaded.')} style={{height: '500px'}}>
                 <h2>Map Map</h2>
                 <Map
                    style={{height: '300px', width: '200px'}}
                    defaultZoom={13}
                    defaultCenter={ { lat: -36.38680, lng: 146.32877 } }
                    mapId='CathedralMap'
                    onCameraChanged={ (ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                    }>
                    <PoiMarkers locationy={locations} />
                </Map>
            </APIProvider>
        </div>
    )
}