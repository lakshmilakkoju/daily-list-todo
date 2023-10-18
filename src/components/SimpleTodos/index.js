import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,      
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: 'vero rerum temporibus dolor',
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: 'et doloremque nulla',
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: 'ab voluptatum amet voluptas',
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: 'accusamus eos facilis sint et aut voluptatem',
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: 'quo laboriosam deleniti aut qui',
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: 'dolorum est consequatur ea mollitia in culpa',
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {filteredList: initialTodosList}

  updateList = eqId => {
    const indexValue = initialTodosList.findIndex(
      eachList => eachList.id === eqId,
    )
    initialTodosList.splice(indexValue, 1)
    this.setState({filteredList: initialTodosList})
  }

  render() {
    const {filteredList} = this.state
    return (
      <div className="css-bg-container">
        <div className="css-container">
          <h1 className="css-heading">Simple todos</h1>
          <ul className="css-ul-container">
            {filteredList.map(eachList => (
              <TodoItem
                todoList={eachList}
                updateListFunction={this.updateList}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
