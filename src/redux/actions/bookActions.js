
export const addTOReadingList = payload => {
    return {
        type : "ADD_TO_READING_LIST",
        payload: payload
    }
}

export const removeFromReadingList = payload => {
    return {
        type : "REMOVE_FROM_READING_LIST",
        payload: payload
    }
}

export const addToFinishedList = payload => {
    return {
        type : "ADD_TO_FINISHED_LIST",
        payload: payload
    }
}












