import axios from 'axios';

const FETCH_DATA = 'fetch data';
const CREATE_DATA = 'create data';
const EDIT_DATA = 'edit data';
const DELETE_DATA = 'delete data';
const CLEAR_DATA = 'clear data';

const initState = {
    list: [],
    totalItems: 0
}

export const actionCreators = {
    fetchData: () => async dispatch => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: FETCH_DATA,
            list: response.data,
            totalItems: response.data.length
        });
    },
    createItem: totalItems => {
        return {
            type: CREATE_DATA,
            newItem: {
                userId: totalItems + 1,
                id: totalItems + 1,
                title: `My Content ${totalItems + 1}`,
                completed: false
            }
        };
    },
    editItem: id => {
        return {
            type: EDIT_DATA,
            editId: id
        };
    },
    deleteItem: id => {
        return {
            type: DELETE_DATA,
            deletedId: id
        };
    },
    clearData: () => {
        return {
            type: CLEAR_DATA,
        };
    }
}

const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                list: action.list,
                totalItems: action.totalItems
            };
        case CREATE_DATA:
            return {
                ...state,
                list: [
                    action.newItem,
                    ...state.list
                ],
                totalItems: state.totalItems + 1
            };
        case EDIT_DATA: {
            const newList = state.list.map(i => {
                if (i.id === action.editId) {
                    return {
                        ...i,
                        title: `Edited ${i.id}`
                    }
                } else {
                    return i;
                }
            });

            return {
                ...state,
                list: newList
            };
        }
        case CLEAR_DATA:
            return {
                ...state,
                list: [],
                totalItems: 0
            };
        case DELETE_DATA: {
            const newList = state.list.filter(i =>
                i.id !== action.deletedId
            );
            return {
                ...state,
                list: newList,
                totalItems: state.totalItems - 1
            };
        }
        default:
            return state;
    }
};

export default itemsReducer;