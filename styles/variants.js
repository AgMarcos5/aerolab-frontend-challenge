
export const fadeIn = (direction = "up") => {
    return {
        initial : {
            y: direction === "up" ? 40 : -60,
            opacity: 0,
        },
    
        animate: {
            y: 0,
            opacity:1,
            transition: {
                duration: 0.65,
                ease: "easeInOut",
            }
        }
    }
}


export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.65,
        }
    }
}


// Hero

export const heroWrapper = {
    initial: {
        scale:.1,
    },
    animate: {
        scale: [.1, 1, 1.2, 1],
        rotate: [0, 360],
        width: [600,600,600,600,722],
        borderRadius: ["100%","100%","100%","100%", "20%"],
        transition: {
            duration:1.3,
        }
    }
}

export const hero = {
    initial: {
        y: 200,
        scale: 0,
        opacity: 0,
        translateY: 10,
    },
    animate: {
        opacity: 1,
        y:0,
        scale: [.2, 1,1],
        transition: {
            duration:.9,
            delay:.4,
            type: "spring",
            bounce: 0.5,
        }
    }
}

export const icons = {
    initial: {},
    animate: {
        y: [10,0,10],
        rotate: [0, 4,0,-4,0],
        transition: {
            duration: 12,
            ease: "linear",
            repeat: Infinity,
        }
    }
}