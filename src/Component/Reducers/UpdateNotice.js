const initialState = false

const updateNotice = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE":
            return true

        default: return state
    }
}