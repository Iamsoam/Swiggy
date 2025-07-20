
import { useRouteError } from "react-router";

function Error() {
  
    const err = useRouteError();
    console.log(err);
     

  return (
    <div>
        <h1>Opps!!</h1>
        <h2>{err.message}</h2>
        <h3>{err.status +" "+ err.statusText } </h3>
        <p>We are unable to process your request at this time. Please check with *Soam* for more details.</p>
        <p>Thank you for your patience.</p>
        <p>Soam</p>
    </div>
  )
}

export default Error;