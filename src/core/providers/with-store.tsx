import { getStore, store } from 'core/store/store'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

export const WithStore = (component: FC) => (props) => {
	// if (props.data){
	// 	const data =Object.entries( props?.data)
	// 	const newData = JSON.parse(JSON.stringify(store.getState()))
	//
	//
	// 	const Map = (value,fromObj,targetObj) => {
	// 		value.map(([name,value]) => {
	// 			// const _replaceObj  = replaceObj[name]
	// 			const _fromObj  = fromObj[name]
	// 			const _targetObj  = targetObj[name]
	//
	// 			if (typeof value ==='boolean' && value){
	// 				_fromObj[name] = _targetObj[name]
	// 			} else {
	// 				Map(Object.entries( value),_fromObj,_targetObj)
	// 			}
	//
	// 		})
	// 	}
	//
	// 	Map(data,newData,props.initialState)
	// }

	const serverStore = getStore(props.initialState)

	// targetObj - props.initialState новые данные
	// fromObj - store.getState() старые данные
	// replaceObj -  data показывает где данные нужно заменить

	return <Provider store={serverStore}>{component(props)}</Provider>
}
