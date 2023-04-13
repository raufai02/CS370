import Header from '../Shelter_Header/Shelter_Header_Home_new.jsx';
import './Shelter_UI.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClock } from '@fortawesome/free-solid-svg-icons';

export default function Shelter_UI(){
    function togglelabel(e){
        var toggle = document.getElementById("flexSwitchCheckChecked").value;
        var open = document.getElementById("open");
        var close = document.getElementById("close");
      
        if (open.classList.contains("act") == true){
          close.classList.add("act");
          open.classList.remove("act");
        }
        else{
          open.classList.add("act");
          close.classList.remove("act");
        }
      
        return;
      }
      
      function load(){
        document.getElementById("flexSwitchCheckChecked").addEventListener("change", togglelabel, false);
      }
      
      document.addEventListener("DOMContentLoaded", load, false);

    return(
        <body>
            <Header></Header>
            <section className="push"></section>
            <div className="row shelter-cards"> {/* CARDS */}
          <div className="col card next-trips mt-3 mx-4"> {/* SECOND CARD */}
            <FontAwesomeIcon icon={faClock} color="black" size="2xl"/>
            <div className="card-body">
              <h5 className="card-title">UPCOMING DELIVERIES</h5>
              <div className="row py-3 border-bottom"> {/* ELEMENT 1 */}
                <div className="col">
                  <div className="card-title my-0 mb-2 h6">Friday, March 17th</div>
                  <p className="small m-0">Time: 2:30 pm</p>
                </div>
                <div className="col">
                  <button><u>See details</u></button>
                </div>
                <div className="col">
                  <button className="startchat"><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
                </div>
              </div>
              <div className="row py-3 border-bottom"> {/* ELEMENT 2 */}
                <div className="col">
                  <div className="card-title my-0 mb-2 h6">Saturday, March 18th</div>
                  <p className="small m-0">Time: 2:30 pm</p>
                </div>
                <div className="col">
                  <button><u>See details</u></button>
                </div>
                <div className="col">
                  <button className="startchat"><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
                </div>
              </div>
              <div className="row py-3 border-bottom"> {/* ELEMENT 3 */}
                <div className="col">
                  <div className="card-title my-0 mb-2 h6">Sunday, March 19h</div>
                  <p className="small m-0">Time: 2:30 pm</p>
                </div>
                <div className="col">
                  <button><u>See details</u></button>
                </div>
                <div className="col">
                  <button className="startchat"><a href="chat.html"><FontAwesomeIcon icon={faComment} color="black" size="2xl" /></a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        </body>
    )
    
}