const initialState = {
    user: []
}

const setUsername = (state = initialState, action) => {
    switch (action.type) {
        case "SETUSER":
            const { id, data } = action.payload
            return {
                // ...state,
                user: [
                    // ...state.user,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        default: return state
    }
}

export default setUsername