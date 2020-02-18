const SET_SCREEN_HEIGHT = "SET_SCREEN_HEIGHT"


function setScreenHeight(screenHeight) {
    return ({
        type: SET_SCREEN_HEIGHT,
        screenHeight
    })
}


export {
    SET_SCREEN_HEIGHT,
    setScreenHeight
}