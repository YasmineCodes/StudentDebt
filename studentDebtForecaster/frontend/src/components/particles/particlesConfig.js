const particlesConfig = {
    particles: {
          number: {
              value: 140,
              density: {
                  enable: true, value_area: 800,
              } 
          },
          color: '#4b5453',
          line_linked: {
              distance: 100, color: '#4b5453', opacity: 0.6, width: 1,  
          },
      },
    interactivity: {
        detect_on: "canvas", events: {
            onhover: {
                enable: true, mode: "repulse"
            },
            onclick: {
                enable: true, mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400, line_linked: { opacity: 1 }
            },
            bubble: {
                distance: 400, size: 40, duration: 2, opacity: 8, speed: 3
            },
            repulse: {
                distance: 200, duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}

export default particlesConfig; 