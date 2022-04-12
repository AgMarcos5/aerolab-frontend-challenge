
export const fadeProduct = () => {
    return {
        initial : {
            x: -10,
            opacity: 0,
        },
    
        animate: {
            x: 0,
            opacity:1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    }
}


export const image_hover = {
    initial: {},
    hover: {
        y: [5,20,5],
        scale:[1,1.2],
        transition: {
            duration:.5,
            type: "tween",
            bounce: 0.5,
        }
    }
  };