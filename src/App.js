import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { CreateTask } from './components/create-task/create-task';
import { CreateList } from './components/create-list/create-list';

const App = React.memo(({ listData, listCategories, wantsToEdit, showWindowAC, doneSomeListAC, createNewTaskAC, finishCreateAC, isfinishCreate, deleteTaskAC, createNewListAC }) => {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact render={() => <Home
            listData={listData}
            listCategories={listCategories}
            wantsToEdit={wantsToEdit}
            showWindowAC={showWindowAC}
            doneSomeList={doneSomeListAC}
            deleteTask={deleteTaskAC}
          />}/>
          <Route path="/create-task" render={()=> <CreateTask 
            isfinishCreate={isfinishCreate} 
            finishCreate={finishCreateAC} 
            createNewTask={createNewTaskAC}
            listCategories={listCategories} 
          />} />
          <Route path="/create-list" render={()=> <CreateList 
            isfinishCreate={isfinishCreate} 
            finishCreate={finishCreateAC} 
            createNewList={createNewListAC} 
          />} />
        </Switch>
      </div>
    </HashRouter>
  );
});

export default App;
