import User from "./User";
import UserClass from "./UserClass";


const About =()=>{

    

    return (
        <div className="text-center m-2 p-2">
            <h1 className="font-bold">About Us Page</h1>

           <h3 className=""> Company Employers who contributed in Tech </h3> 
           <User name={"ASHISH SOAM"} age={26} />
           <UserClass name={"Garima SOAM"} age={24} />
           <UserClass name={"SOAM"} age={28} />
        </div>
    )

}


export default About;