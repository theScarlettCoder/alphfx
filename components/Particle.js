import React, { useCallback } from "react";
import particlesConfig from "../config/particles-config";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import style from "../styles/video.module.css";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <div className={`${style.video}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={particlesConfig}
      ></Particles>
    </div>
  );
};

export default Particle;
