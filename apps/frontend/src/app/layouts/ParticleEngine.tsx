import { PropsWithChildren } from 'react';
import { useAdvancedToggle } from '../hooks/useAdvancedToggle';
import { useEffectOnce } from 'react-use';
import Particles, { initParticlesEngine } from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
import { loadAll } from '@tsparticles/all';


import { useParticleSystemImageMask } from './particles';

const ParticleEngine = ({ children }: PropsWithChildren) => {

  const [isParticleEngineInit, { toggleOn: turnParticleSystemOn}] = useAdvancedToggle(false);
  // this should be run only once per application lifetime
  useEffectOnce(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      //await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(turnParticleSystemOn);
  });


  const particleOptions = useParticleSystemImageMask()


  if (!isParticleEngineInit) {
    return null;
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Particles
        id="tsparticles"
        options={particleOptions}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }}
      />
      {children}
    </div>
  );
};

export default ParticleEngine;
