import React from 'react';
import Particles from 'react-particles-js';

function ParticleContainer() {
  return (
    <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
       <Particles 
              params={{
            		"particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "yellow"
                  },
      
                }
              }}
              />

    </div>
  );
}

export default ParticleContainer;