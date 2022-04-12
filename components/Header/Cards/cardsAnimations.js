
const rotate = [-3,0,3]
const rotate_hover = [-5,0,5]

const translateY = [0,-40,0]
const translateX = [100,0,-100]

export const cards = (order = 0) => {
    return {
        initial: {
            rotate: rotate[order],
            translateY:translateY[order],
            translateX:translateX[order]
        },
        animate: {
            transition: {
                duration:1.3,
            }
        },
        hover: {
            rotate: rotate_hover[order],
            scale:1.05,
        }
    }
}

export const image_hover = {
    initial: { y: 5},
    hover: {
        y: [5,20,5],
        scale:[1,1.2,1],
        rotate: [0,5,0,-5,0],
        transition: {
            duration:10,
            type: "tween",
            bounce: 0.5,
            repeat: Infinity,
        }
    }
  };