import {REGISTER_FAIL, REGISTER_SUCCESS} from '../types'

// eslint-disable-next-line
export default ( state, action ) => {
	switch(action.type){
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload
			}
			case REGISTER_FAIL:
				localStorage.removeItem('token')
				return {
					...state,
					token : null
				}
		default:
			return state
	}
}