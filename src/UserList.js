import './App.css';
import User from './User';

function UserList(props) {
  return (
    <div className="UserList">
        {props.list.map((user, i) => {
        return <User key={i} userData={user}></User>;
      })}
    </div>
  );
}

export default UserList;
