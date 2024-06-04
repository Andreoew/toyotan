import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

import logo from "@/assets/logo.png";

export function MyGoogleMap() {
  const position = { lat: -14.629786747257263, lng: -57.50969867055225 };
  const [open, setOpen] = useState(false);
 
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="h-[70vh] w-full">
        <div style={{ height: "70vh", width: "100%", borderRadius: "8px" }}>
          <Map
            defaultZoom={18}
            center={position}
            mapId={import.meta.env.VITE_MAP_ID}
          >
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin
                background={"red"}
                borderColor={"purple"}
                glyph={"TOYOTAN"}
                scale={2}
              />

              {open && (
                <InfoWindow
                  className="flex flex-col justify-center  gap-2 text-center"
                  position={position}
                  onCloseClick={() => setOpen(false)}
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-bold text-zinc-900">TOYOTAN</p>
                    <span className="text-zinc-900">(65) 99664-3812</span>
                    <img src={logo} alt="Logo" width={50} height={50} />
                  </div>
                </InfoWindow>
              )}
            </AdvancedMarker>
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}
