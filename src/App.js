
import './App.css';
//Array 
const people =[
  'Ahmed Ali:Jr Software Engineer',
  'Shahzaib Mumtaz:Jr Iso Developer',
  'Hasnain Ali Baloch: Team Lead <3',
  'Fahad Sohail:Front-End Developer'
]
//Function Component
function List() {
  //Through array map to show your list
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  //return your list 
  return <ul>{listItems}</ul>
}

export default List;
