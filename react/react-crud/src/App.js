import React from 'react';
import axios from 'axios';

import './App.css';
import ItemList from './components/ItemList';

class App extends React.Component {
  state = {
    list: [],
    totalItems: 0
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const toDoResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.setState(prevState => {
      return {
        ...prevState,
        list: toDoResponse.data,
        totalItems: toDoResponse.data.length
      }
    });
  };

  clearData = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        list: [],
        totalItems: 0
      };
    });
  }

  createItem = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        list: [{
          userId: (prevState.totalItems + 1),
          id: (prevState.totalItems + 1),
          title: `My Content ${prevState.totalItems + 1}`,
          completed: false
        }, ...prevState.list],
        totalItems: prevState.totalItems + 1
      };
    });
  }

  deleteItem = id => {
    const newList = this.state.list.filter(i => i.id !== id);
    this.setState(prevState => {
      return {
        ...prevState,
        list: newList,
        totalItems: prevState.totalItems - 1
      };
    });
  }

  editItem = id => {
    const newList = this.state.list.map(i => {
      if (i.id === id) {
        return {
          ...i,
          title: `New Content ${i.id}`
        };
      } else {
        return i;
      }
    });

    this.setState(prevState => {
      return {
        ...prevState,
        list: newList
      }
    });

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <ItemList
          list={this.state.list}
          fetchData={this.fetchData}
          clearData={this.clearData}
          createItem={this.createItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem} />
      </div>
    );
  }
}

export default App;
