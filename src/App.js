
import './App.css';
import people from './Data/data';
import { getImageUrl } from './Utils/utils';
//Function Component
function List() {
  //Filter chemist through array of object(people)
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  //then array map method to get image through utils file
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
       {/* getting key and value from array of object chemist data.js file */}
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

export default List;
