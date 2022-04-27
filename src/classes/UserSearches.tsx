import {Component} from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined
}

class UserSearch extends Component <UserSearchProps> {
    state:UserSearchState = {
        name:'',
        user: undefined
    }

    clickHandler=()=>{
        const foundUser = this.props.users.find((user) => {
            return user.name.toLowerCase() === this.state.name.toLowerCase();
          });
          console.log(foundUser);
          this.setState({user: foundUser});
    }

    render() {
        const {user, name} = this.state;


        return (
        <div>
            <h3>User Search Details:</h3>
            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            <button onClick={this.clickHandler}>Search User</button>
            <div>
              {user ?(
                <>
                  <p>Name: {user.name}</p>
                  <p>Age: {user.age}</p>
                </>
                ):
                <>Not Found</>}
            </div>
          </div>)
    }
}

export default UserSearch;