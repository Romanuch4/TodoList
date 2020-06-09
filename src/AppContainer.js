import { connect } from "react-redux";
import App from "./App";
import { showWindowAC, doneSomeListAC, createNewTaskAC, finishCreateAC, deleteTaskAC, createNewListAC } from './state/reducers/main-reducer';

const mapStateToProps = state => {
  return {
    listData: state.main.listData,
    wantsToEdit: state.main.wantsToEdit,
    isfinishCreate: state.main.isfinishCreate,
    listCategories: state.main.listCategories,
  };
};
export const AppContainer = connect(
  mapStateToProps,
  {
    showWindowAC,
    doneSomeListAC,
    createNewTaskAC,
    finishCreateAC,
    deleteTaskAC,
    createNewListAC,
  }
)(App);
