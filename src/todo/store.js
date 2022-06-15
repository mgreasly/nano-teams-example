import createStore from "redux-zero";

export const mapToProps = ({ todoList, status }) => ({ todoList, status });

export const actions = store => ({
    toggleCompleted: (state, id) => {
        let item = state.todoList.find(i => i.id == id);
        item.completed = !item.completed;
        const list = [...state.todoList.filter(i => i.id != id), item];
        return {
            todoList: list.sort((a, b) => a.id - b.id),
            status: state.status
        };
    },
    setStatus: (state, value) => ({ ...state, status: value }),
    addTask: (state, value) => {
        const list = [...state.todoList, { id: state.todoList.length + 1, title: value, completed: false }];
        return {
            todoList: list.sort((a, b) => a.id - b.id),
            status: state.status
        }
    }
});

export default createStore(
    {
        todoList: [
            { id: 1, title: 'first', completed: false },
            { id: 2, title: 'second', completed: true },
            { id: 3, title: 'third', completed: false },
        ],
        status: 'all'
    }
);
