import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesA = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 250,
            },
          },
          color: {
            value: '#FFFB00FF',
          },
          shape: {
            type: '<>',
            stroke: {
              width: 0,
              color: '#FFFB00FF',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: .27,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 9,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: '#FFFB00FF',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.27,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 100,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 1,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: '#111',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  );
};

export default ParticlesA;
