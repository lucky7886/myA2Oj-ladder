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
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
      
            />

    </div>
  );
}

export default ParticleContainer;