import {UPDATE_COACHES} from '../types'

// eslint-disable-next-line
export default ( state, action ) => {
	switch(action.type){
		case UPDATE_COACHES:
			return {
				...state,
				coaches : action.payload,
				loading : false
			}
		default:
			return state
	}
}