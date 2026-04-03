"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// ── Member GeoJSON ────────────────────────────────────────────────────────────
const members: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: "FeatureCollection",
  features: [
    // AMPARA (2)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.6790, 7.2975] } }, // Ampara
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.8380, 7.4080] } }, // Kalmunai

    // ANURADHAPURA (2)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.4037, 8.3114] } }, // Anuradhapura
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.7550, 8.0362] } }, // Kekirawa

    // BADULLA (1)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.0550, 6.9934] } }, // Badulla

    // BATTICALOA (6)
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [81.7010, 7.7102] } }, // Batticaloa
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [81.6930, 7.5915] } }, // Kattankudy
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [81.6800, 7.5600] } }, // Eravur

    // COLOMBO (78)
    { type: "Feature", properties: { count: 20 }, geometry: { type: "Point", coordinates: [79.8612, 6.9271] } }, // Colombo
    { type: "Feature", properties: { count: 18 }, geometry: { type: "Point", coordinates: [79.9000, 6.8800] } }, // Dehiwala
    { type: "Feature", properties: { count: 15 }, geometry: { type: "Point", coordinates: [79.9200, 6.8400] } }, // Mount Lavinia
    { type: "Feature", properties: { count: 15 }, geometry: { type: "Point", coordinates: [79.8700, 6.9500] } }, // Borella
    { type: "Feature", properties: { count: 10 }, geometry: { type: "Point", coordinates: [79.8500, 6.9000] } }, // Wellawatte

    // GALLE (12)
    { type: "Feature", properties: { count: 5 }, geometry: { type: "Point", coordinates: [80.2170, 6.0535] } }, // Galle
    { type: "Feature", properties: { count: 4 }, geometry: { type: "Point", coordinates: [80.2500, 6.1000] } }, // Hikkaduwa
    { type: "Feature", properties: { count: 3 }, geometry: { type: "Point", coordinates: [80.2000, 6.0300] } }, // Unawatuna

    // GAMPAHA (17)
    { type: "Feature", properties: { count: 6 }, geometry: { type: "Point", coordinates: [79.9990, 7.0917] } }, // Gampaha
    { type: "Feature", properties: { count: 6 }, geometry: { type: "Point", coordinates: [79.8780, 7.2080] } }, // Negombo
    { type: "Feature", properties: { count: 5 }, geometry: { type: "Point", coordinates: [79.9500, 7.0500] } }, // Ja-Ela

    // HAMBANTOTA (1)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.1185, 6.1241] } }, // Hambantota

    // JAFFNA (23)
    { type: "Feature", properties: { count: 10 }, geometry: { type: "Point", coordinates: [80.0255, 9.6615] } }, // Jaffna
    { type: "Feature", properties: { count: 7 }, geometry: { type: "Point", coordinates: [80.0150, 9.7000] } }, // Nallur
    { type: "Feature", properties: { count: 6 }, geometry: { type: "Point", coordinates: [79.9600, 9.7800] } }, // Chavakachcheri

    // KALUTARA (5)
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [79.9607, 6.5854] } }, // Kalutara
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [79.9500, 6.6500] } }, // Panadura
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.0000, 6.5000] } }, // Beruwala

    // KANDY (7)
    { type: "Feature", properties: { count: 3 }, geometry: { type: "Point", coordinates: [80.6337, 7.2906] } }, // Kandy
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [80.6500, 7.2800] } }, // Peradeniya
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [80.6200, 7.3000] } }, // Katugastota

    // KEGALLE (2)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.3464, 7.2513] } }, // Kegalle
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.4500, 7.2000] } }, // Mawanella

    // KURUNEGALA (1)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.3647, 7.4863] } }, // Kurunegala

    // MANNAR (16)
    { type: "Feature", properties: { count: 8 }, geometry: { type: "Point", coordinates: [79.9000, 8.9817] } }, // Mannar
    { type: "Feature", properties: { count: 8 }, geometry: { type: "Point", coordinates: [79.8800, 8.9500] } }, // Pesalai

    // MATARA (8)
    { type: "Feature", properties: { count: 3 }, geometry: { type: "Point", coordinates: [80.5460, 5.9549] } }, // Matara
    { type: "Feature", properties: { count: 3 }, geometry: { type: "Point", coordinates: [80.5600, 5.9800] } }, // Weligama
    { type: "Feature", properties: { count: 2 }, geometry: { type: "Point", coordinates: [80.5800, 5.9600] } }, // Mirissa

    // NUWARA ELIYA (23)
    { type: "Feature", properties: { count: 10 }, geometry: { type: "Point", coordinates: [80.7891, 6.9497] } }, // Nuwara Eliya
    { type: "Feature", properties: { count: 7 }, geometry: { type: "Point", coordinates: [80.7080, 6.9700] } }, // Hatton
    { type: "Feature", properties: { count: 6 }, geometry: { type: "Point", coordinates: [80.7800, 6.9400] } }, // Talawakele

    // POLONNARUWA (1)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.0000, 7.9400] } }, // Polonnaruwa

    // RATNAPURA (2)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.4037, 6.6828] } }, // Ratnapura
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.4500, 6.7000] } }, // Balangoda

    // TRINCOMALEE (1)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [81.2152, 8.5922] } }, // Trincomalee

    // VAVUNIYA (2)
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.4970, 8.7514] } }, // Vavuniya
    { type: "Feature", properties: { count: 1 }, geometry: { type: "Point", coordinates: [80.5200, 8.7800] } }, // Omanthai
  ],
};

// ── Colours (from CIN design system) ─────────────────────────────────────────
const TEAL = "#46A6A8";  // single points
const FOREST = "#568265";  // clusters
const TEXT = "#FFFFFF";

export default function NetworkMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      // Lightweight, muted CartoCDN vector style — no API key required
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [80.7718, 7.8731],   // Sri Lanka centroid
      zoom: 6.2,
      minZoom: 5.5,
      maxZoom: 14,
      attributionControl: false,
      pitchWithRotate: false,
      dragRotate: false,
    });

    mapRef.current = map;

    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-right"
    );

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right"
    );

    map.on("load", () => {
      // ── Source with clustering ────────────────────────────────────────────
      map.addSource("members", {
        type: "geojson",
        data: members,
        cluster: true,
        clusterMaxZoom: 12,
        clusterRadius: 45,
        clusterProperties: {
          // Sum the 'count' property from each feature into 'total_members'
          "total_members": ["+", ["get", "count"]]
        }
      });

      // ── Cluster circles ───────────────────────────────────────────────────
      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "members",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": TEAL,
          "circle-radius": [
            "step",
            ["get", "total_members"],
            20,   // < 10 members → 20 px
            10,
            26,   // 10–29        → 26 px
            30,
            34,   // ≥ 30         → 34 px
          ],
          "circle-opacity": 0.92,
          "circle-stroke-width": 2.5,
          "circle-stroke-color": "#FFFFFF",
        },
      });

      // ── Cluster count label ───────────────────────────────────────────────
      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "members",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "total_members"],
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 13,
          "text-anchor": "center",
          "text-justify": "center",
          "text-offset": [0, 0.1], // Slight adjustment for optical centering
        },
        paint: {
          "text-color": TEXT,
        },
      });

      // ── Single-point circles ──────────────────────────────────────────────
      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "members",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": TEAL,
          "circle-radius": 9,
          "circle-opacity": 0.9,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#FFFFFF",
        },
      });

      // ── Pulse ring on single points ───────────────────────────────────────
      map.addLayer({
        id: "unclustered-pulse",
        type: "circle",
        source: "members",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": TEAL,
          "circle-radius": 14,
          "circle-opacity": 0.18,
          "circle-stroke-width": 0,
        },
      });

      // ── Single-point count label ─────────────────────────────────────────
      map.addLayer({
        id: "unclustered-point-count",
        type: "symbol",
        source: "members",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "text-field": ["get", "count"],
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 10,
          "text-anchor": "center",
          "text-justify": "center",
          "text-offset": [0, 0.1],
        },
        paint: {
          "text-color": TEXT,
        },
      });

      // ── Click → expand cluster ────────────────────────────────────────────
      map.on("click", "clusters", (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
        if (!features.length) return;
        const clusterId = features[0].properties?.cluster_id as number;
        (map.getSource("members") as maplibregl.GeoJSONSource)
          .getClusterExpansionZoom(clusterId)
          .then((zoom) => {
            const coords = (features[0].geometry as GeoJSON.Point).coordinates as [number, number];
            map.easeTo({ center: coords, zoom });
          });
      });

      // ── Popup on single points ────────────────────────────────────────────
      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 16,
        className: "cin-map-popup",
      });

      map.on("mouseenter", "unclustered-point", (e) => {
        map.getCanvas().style.cursor = "pointer";
        const coords = (e.features![0].geometry as GeoJSON.Point).coordinates as [number, number];
        const count = e.features![0].properties?.count ?? 1;
        popup
          .setLngLat(coords)
          .setHTML(
            `<div class="cin-popup-inner">
              <span class="cin-popup-dot"></span>
              <strong>${count} Member${count !== 1 ? "s" : ""}</strong>
            </div>`
          )
          .addTo(map);
      });

      map.on("mouseleave", "unclustered-point", () => {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      map.on("mouseenter", "clusters", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "clusters", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Popup styles injected alongside component to keep it self-contained */}
      <style>{`
        .cin-map-popup .maplibregl-popup-content {
          background: #fff;
          border: 1px solid rgba(86,130,101,0.18);
          border-radius: 8px;
          padding: 8px 14px;
          box-shadow: 0 4px 16px rgba(63,102,79,0.12);
          font-family: inherit;
          font-size: 13px;
          color: #2F3E34;
        }
        .cin-map-popup .maplibregl-popup-tip { display: none; }
        .cin-popup-inner {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }
        .cin-popup-dot {
          display: inline-block;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #46A6A8;
          flex-shrink: 0;
        }
        /* Style the MapLibre navigation controls to match CIN palette */
        .maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon,
        .maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon {
          filter: none;
        }
        .maplibregl-ctrl-group {
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
      `}</style>

      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
