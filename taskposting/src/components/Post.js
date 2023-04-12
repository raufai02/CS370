import classes from './Post.module.css';
import { Link } from "react-router-dom"

function Post(props) {

  return  (
    <li className={classes.post}>
      <p>{props.address}</p>
      <p>{props.time}</p>
      <p>{props.message}</p>

    </li>
  )
}

  
//   const { address, time, message, status, uid, photoURL } = props

//   return (
//   <ul>

//     <li>Header {props.num} </li>
    
//     <li>
//       <Link to="/">Address </Link>
//     </li>
//     <li>
//       <p>{time}</p>
//     </li>
    
//     <li>
//       <p>{message}</p>
//     </li>
//   </ul >
//   )
// }

export default Post