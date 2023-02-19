import './AddButton.css'

const AddButton = props => {
  return (
    <button className='add-button' type={props.type || 'button' } >{props.children}</button>
  )
}

export default AddButton