const initialState = {
    isLoading: false,
    listLoading: true,
    
    id: '',
    name: '',
    phone: '',
    miles: '',
    date_of_birth: '',
    image: '',
    gender: '',
    email: '',
    email_verified_at: '',
    
    users_list: [],
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PERSONAL':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                miles: action.payload.miles,
                date_of_birth: action.payload.date_of_birth,
                image: action.payload.image,
                gender: action.payload.gender,
            };
        case 'UPDATE_PERSONAL':
            return {
                ...state,
                name: action.payload.name,
                phone: action.payload.phone,
                miles: action.payload.miles,
                date_of_birth: action.payload.date_of_birth,
                image: action.payload.image,
                gender: action.payload.gender,
            };
        case 'DELETE_USER':
            const newGuest = state.userdata.filter(item => {
                return item.id !== action.payload.id
            })
            return {
                ...state,
                userdata: newGuest,
            };
        case 'GET_USERS':
            return {
                ...state,
                users_list: action.payload,
                listLoading: false
            };

        default:
            return state
    }
};
export default user