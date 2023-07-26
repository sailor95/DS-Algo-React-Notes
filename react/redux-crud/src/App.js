import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import ItemList from './components/ItemList';
import { actionCreators } from './store/reducers/itemsReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      items,
      fetchData,
      clearData,
      createItem,
      deleteItem,
      editItem
    } = this.props;

    return (
      <div className="App" >
        <ItemList
          list={items.list}
          fetchData={fetchData}
          clearData={clearData}
          createItem={() => createItem(this.props.items.totalItems)}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = {
  fetchData: actionCreators.fetchData,
  createItem: actionCreators.createItem,
  editItem: actionCreators.editItem,
  clearData: actionCreators.clearData,
  deleteItem: actionCreators.deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
