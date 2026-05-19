particlesJS("background", {

    particles: {
        number: {
            value: 30, 
            density: {
                enable: true,
                value_area: 300,
            },
        },

        color: {
            value: "#ffffff",
        },

        shape:{
            type: "triangle",
        },
        
        opacity: {
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },

        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Maximum distance between linked particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        // Partical Movement
        move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior when particles move out of the canvas
            bounce: false,
        },
    },

        // Interactivity settings
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: true, // Enable hover interactivity
                    mode: "repulse",
                },
                onClick: {
                    enable: true, // Enable for click
                    mode: "push", // Push particles on click
                },
                resize: true, // Resize particles animation on window resize
            },
        },

        // Detect retine display
        retina_detect: true,
});