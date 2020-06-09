import classes from '../../components/common/addDoing/add.module.css';

const WANTS_TO_EDIT = 'main-redicer/WANTS_TO_EDIT';
const DONE_SOME_LIST = 'main-redicer/DONE_SOME_LIST';
const CREATE_NEW_TASK = 'main-reducer/CREATE_NEW_TASK';
const IS_CREATE_MODE = 'main-reducer/IS_CREATE_MODE';
const DELETE_TASK = 'main-reducer/DELETE_TASK';
const CREATE_NEW_LIST = 'main-reducer/CREATE_NEW_LIST';

let tasksArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
let listsArray = localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : [];

const initialState = {
  listCategories: [
    {
      id: 1, 
      name: 'inbox',
      colour: '#EBEFF5'
    },
    {
      id: 2, 
      name: 'work',
      colour: '#61DEA4'
    }, 
    {
      id: 3, 
      name: 'shopping',
      colour: '#F45E6D'
    }, 
    {
      id: 4, 
      name: 'family',
      colour: '#FFE761'
    },
    {
      id: 5, 
      name: 'personal',
      colour: '#B678FF'
    },
    ...listsArray,
  ],
  listData: [
    ...tasksArray,
  ],
  wantsToEdit: false,
  isfinishCreate: false,
};

export const mainReducer = (state = initialState, action) => {
  if(action.type === WANTS_TO_EDIT) {
    action.modalWindow.current.classList.toggle(`${classes.window__show}`);
    action.modalButton.current.classList.toggle(`${classes.addDoing__checked}`);
    return {
      ...state,
      wantsToEdit: action.wantsToEdit,
    };
  } else if(action.type === DONE_SOME_LIST) {
    const stateCopy = JSON.parse(JSON.stringify(state));
    for (let i = 0; i < stateCopy.listData.length; i++) {
      if (stateCopy.listData[i].id === parseInt(action.id, 10)) {
        stateCopy.listData[i].isDone = true;
      };
    };    
    return stateCopy;
  } else if(action.type === CREATE_NEW_TASK) {
    const newTask = {
      id: state.listData.length + 1,
      isDone: false,
      title: action.text,
      category: action.category,
    };
    tasksArray.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
    return {
      ...state,
      listData: [...state.listData, newTask],
    };
  } else if(action.type === IS_CREATE_MODE) {
    return {
      ...state,
      isfinishCreate: !state.isfinishCreate,
    };
  } else if(action.type === DELETE_TASK) {
    const result = state.listData.filter(elem => elem.id !== parseInt(action.id, 10));
    localStorage.setItem('tasks', JSON.stringify(result));
    return {
      ...state,
      listData: result,
    }
  } else if(action.type === CREATE_NEW_LIST) {
    const newList = {
      id: state.listCategories.length + 1,
      name: action.name,
      colour: action.colour,
    };
    listsArray.push(newList);
    localStorage.setItem('lists', JSON.stringify(listsArray))
    return {
      ...state,
      listCategories: [...state.listCategories, newList],
    }
  } else {
    return state;
  };
};

//AC = ActionCreator

export const showWindowAC = (wantsToEdit, modalWindow, modalButton) => {
  return {
    type: WANTS_TO_EDIT,
    wantsToEdit,
    modalWindow,
    modalButton
  };
};

export const doneSomeListAC = id => {
  return {
    type: DONE_SOME_LIST,
    id,
  };
};

export const createNewTaskAC = values => {
  if (!values.category) {
    values.category = 'inbox';
  };
  return {
    type: CREATE_NEW_TASK,
    text: values.text,
    category: values.category,
  };
};

export const finishCreateAC = () => {
  return {
    type: IS_CREATE_MODE,
  };
};

export const deleteTaskAC = id => {
  return {
    type: DELETE_TASK,
    id,
  };
};

export const createNewListAC = values => {
  return {
    type: CREATE_NEW_LIST,
    name: values.text,
    colour: values.color,
  };
};


