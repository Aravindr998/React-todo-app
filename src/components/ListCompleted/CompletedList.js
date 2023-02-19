import Card from "../UI/Card";
import './CompletedList.css'

const CompletedList = props => {
  const addTodoHandler = (event) => {
    props.onChangeCompleted(event.target.id)
  }

  let listItems = <p>No items to show</p>
  if(props.completedItems.length>0){
    listItems = props.completedItems.map(item => (
      <li key={item.id} className='list-items'>
        <button className="change-button" onClick={addTodoHandler}>
          <img id={item.id} src='/images/plus.png' className="plus-img"></img>
        </button>
        <p>
          {item.description}
        </p>
      </li>
    ))
  }

  return(
    <div className='row'>
      <Card>
        <div>
          <p>Completed</p>
        </div>
        <ul>
          {listItems}
        </ul>
      </Card>
    </div>
  )
}

export default CompletedList