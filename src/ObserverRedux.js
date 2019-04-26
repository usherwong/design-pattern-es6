// 简化版的Redux

function createStroe(reducer) {
	let state = ''
	let listeners = []
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach(listener => listener())
	}
	const subscribe = (listener) => listeners.push(listener)
	const getState = () => state
	dispatch({}) //初始化
	return {
		dispatch,
		getState,
		subscribe
	}
}


// stateChanger就是reducer 必须是纯函数
function stateChanger (state, action) {
	if(!state) {
		state = action
	}
	switch (action.type) {
		case 'UPDATE_TITLE':
			return {
				...state,
				title: action.title
			}
		case 'UPDATE_TEXT':
			return {
				...state,
				text: action.text
			}
		default:
			return state
	}
}

let redux = createStroe(stateChanger)

let actionTitle = {
	title: '名字叫做啥呢',
	type: 'UPDATE_TITLE',
	text: '换个名字玩玩'
}
let actionText = {
	title: '名字不换了',
	type: 'UPDATE_TEXT',
	text: '换个text玩玩'
}

console.log(redux.getState())

redux.subscribe(()=> console.log('试试换title'))
redux.dispatch(actionTitle)
console.log(redux.getState())

redux.subscribe(()=> console.log('试试换text'))
redux.dispatch(actionText)
console.log(redux.getState())



// 用法
// 在用createStroe的时候，先Subscribe，之后dispatch。先订阅在发布