export const setUser = (data) => {
    return {
        type: "SETUSER",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const notice = () => {
    return {
        type: "UPDATE"
    }
}

