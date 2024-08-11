import { IParticlesProps } from '@tsparticles/react';
import { ParticlesOptions } from '@tsparticles/engine';
import { useTheme } from '@mui/material';

//Diagonal From chatgpt
export const useParticlesOptionsDiagonal: IParticlesProps['options'] = ()=>{
  const theme = useTheme();
  return {
    background: {
      color: {
        color: { value: theme.palette.primary.main },
        image: '',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
        opacity: 1
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Color of the particles
      },
      links: {
        enable: false, // Disable linking lines
      },
      move: {
        enable: true, // Enable particle movement
        speed: 2, // Speed of particle movement
        direction: "top-right", // Diagonal direction of movement
        straight: true, // Ensures straight-line movement
        outModes: {
          default: "out",
        },
      },
      shape: {
        type: "circle", // Use circle shapes for simplicity
      },
      size: {
        value: 2, // Size of the particles
      },
      number: {
        value: 100, // Number of particles
      },
      opacity: {
        value: 0.5, // Opacity of the particles
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
    },
    retina_detect: true,
  };
}

//Image mask
export const useParticleSystemImageMask = ()=>{
  const theme = useTheme();
  const particleOptionsImageMask: IParticlesProps['options'] = {
    autoPlay: true,
    background: {
      color: { value: theme.palette.primary.main },
      image: '',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
      opacity: 1
    },
    backgroundMask: {
      composite: 'destination-out',
      cover: {
        color: { value: '#fff' },
        opacity: 1
      },
      enable: false
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: { enable: false, mode: [] },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: 'circle'
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        },
        resize: { delay: 0.5, enable: true }
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: { distance: 200 },
        bubble: {
          distance: 40,
          duration: 2,
          mix: false,
          opacity: 8,
          size: 15,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: { opacity: 0.5 },
          radius: 60
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            selectors: []
          }
        },
        slow: { factor: 3, radius: 200 },
        light: {
          area: {
            gradient: {
              start: { value: '#ffffff' },
              stop: { value: '#000000' }
            },
            radius: 1000
          },
          shadow: {
            color: { value: '#000000' },
            length: 2000
          }
        }
      }
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: { value: 1 },
        vertical: { value: 1 }
      },
      collisions: {
        absorb: { speed: 2 },
        bounce: {
          horizontal: { value: 1 },
          vertical: { value: 1 }
        },
        enable: false,
        maxSpeed: 50,
        mode: 'bounce',
        overlap: { enable: true, retries: 0 }
      },
      color: {
        value: '#fff',
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          }
        }
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: []
      },
      groups: {},
      move: {
        angle: { offset: 0, value: 90 },
        attract: {
          distance: 200,
          enable: false,
          rotate: { x: 3000, y: 3000 }
        },
        center: {
          x: 50,
          y: 50,
          mode: 'percent',
          radius: 0
        },
        decay: 0,
        distance: { horizontal: 10, vertical: 10 },
        direction: 'none',
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: {
          clamp: true,
          delay: { value: 0 },
          enable: false,
          options: {}
        },
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out'
        },
        random: false,
        size: false,
        speed: 1,
        spin: { acceleration: 0, enable: false },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {}
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: false,
          width: 1920,
          height: 1080
        },
        limit: { mode: 'delete', value: 0 },
        value: 600
      },
      opacity: {
        value: 1,
        animation: {
          count: 0,
          enable: false,
          speed: 2,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none'
        }
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: { value: '#000' },
        enable: false,
        offset: { x: 0, y: 0 }
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: ['circle', 'square', 'triangle']
      },
      size: {
        value: { min: 3, max: 5 },
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none'
        }
      },
      stroke: { width: 0 },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      },
      destroy: {
        bounds: {},
        mode: 'none',
        split: {
          count: 1,
          factor: { value: 3 },
          rate: { value: { min: 4, max: 9 } },
          sizeOffset: true,
          particles: {}
        }
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: 'vertical',
        speed: 25
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: 'clockwise',
        enable: false
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        }
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10
        }
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false
        },
        duration: {
          value: 0,
          sync: false
        }
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: 'clockwise',
        path: false
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45
        },
        width: 1
      },
      links: {
        blink: false,
        color: {
          value: '#fff'
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: '#000'
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 1,
        warp: false
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: true,
    style: {},
    themes: [],
    zLayers: 100,
    name: 'Image Mask',
    canvasMask: {
      enable: true,
      override: {
        color: true,
        opacity: false
      },
      pixels: {
        offset: 4
      },
      position: {
        x: 50,
        y: 50
      },
      scale: 1.5,
      image: {
        src: 'https://cdn-icons-png.flaticon.com/512/37/37631.png'
      }
    },
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    }
  };
  return particleOptionsImageMask
}


export const useParticleOptionsFire = () =>{
  const theme = useTheme();
  return {
    fpsLimit: 40,
      particles: {
    number: {
      value: 200,
        density: {
        enable: true,
      },
    },
    color: {
      value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
        speed: 6,
        random: false,
    },
  },
    interactivity: {
      detectsOn: "window",
        events: {
        onClick: {
          enable: true,
            mode: "push",
        },
        resize: true,
      },
    },
    background: {
      color: { value: theme.palette.primary.main },
      opacity: 1,
        position: '50% 50%',
        size: 'cover',
    },
  }
}
