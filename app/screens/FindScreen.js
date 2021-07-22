import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

function FindScreen(props) {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }} >
            <Marker coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default FindScreen;