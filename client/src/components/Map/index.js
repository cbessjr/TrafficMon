import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";

const MapMarker = ({ incident }) => {
  return (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)"
      }}
    >
      {incident}
    </div>
  );
};

export default class TrafficMonMap extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: null,
        lng: null
      },
      zoom: 4
    };
  }

  componentDidMount() {
    if (!navigator.geolocation) {
      this.setState({
        center: {
          lat: 33.448376,
          lng: -112.074036
        }
      });
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.log(`getCurrentPosition - Success ${lat} and ${lng}`); // logs position correctly
        this.setState({
          center: {
            lat: lat,
            lng: lng
          },
          zoom: 12
        });
      },
      error => {
        console.error(JSON.stringify(error));
        this.setState({
          center: {
            lat: 33.448376,
            lng: -112.074036
          }
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDRG4JgxJL_uGmz65iH88bayDb_4hVd93s"
          }}
          layerTypes={["TrafficLayer"]}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MapMarker
            lat={33.448376}
            lng={-112.074036}
            incident={"traffic backup"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
