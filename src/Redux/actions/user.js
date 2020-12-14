import API from "../../Constants/API"
import G from "../../Constants/Global"

export const get_personal = () => {
    return (dispatch) => {
        G.getRequest(API.PERSONAL_DATA)
            .then((res) => {
                if (res.status === 200) {
                    dispatch({ type: 'GET_PERSONAL', payload: res.data })
                }
            })
    }
}

export const get_users = () => {
    return (dispatch) => {
        G.getRequest(API.ALL_USER)
            .then((res) => {
                console.log(res,"..................................")
                if (res.status === 200) {
                    dispatch({ type: 'GET_USERS', payload: res.data.data })
                }
            })
    }
}

export const update_user = (payload, token) => {
    return {
        type: 'UPDATE_USER',
        payload
    }
}