import React from 'react';


class UserClass extends React.Component{
    
constructor(props){
     super(props);

    console.log("Constructor called");
     this.state ={
        count:0,
        userinfo:{
            name:"Ashish Soam",
            age:30,
            location:"California",
        }
    }
  }

 async componentDidMount(){
        const data = await fetch('https://api.github.com/users');
        const json = await data.json(); 
        console.log(json);

        this.setState(json[0])
}

    render(){

     return (
      <div className="border border-black bg-gray-500 p-4 rounded-lg flex items-center justify-between">
        <div>
          {/* <h1>Count: {this.state.count}</h1> */}
          {/* <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="border border-black bg-gray-200 p-1 rounded-lg mb-2"
          >
            Click me!
          </button> */}
          <h1>Username: {this.state.login}</h1>
          <h3>Age: {this.state.userinfo.age}</h3>
          <h3>Location: {this.state.userinfo.location}</h3>
          <h3>Profession: Software Engineer</h3>
        </div>
        <img
          className="w-56 border rounded ml-6"
          src={this.state.avatar_url}
          alt="User Avatar"
        />
      </div>
    );
  }
}



export default UserClass;