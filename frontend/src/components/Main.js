import React, {useState, useContext} from 'react';
import './Main.css';
import Event from './Event/EventCard';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
    // hooks
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');




    const { addEvent } = useContext(GlobalContext);
    const { eventbrite } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            date,
            time,
        

        }

        addEvent(newEvent);

        // restet the form
        setEvent('');
        setDate('');
        setTime('');
    
      }

     

    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    eventbrite
                </div>
            </div>
            <div className="Body">
                <ul className="eventbrite">
                    {eventbrite.map(item => (<Event key={item.id} item={item} />))}

                    <li>
                        <div>
                        <span className="Event">Cirque du Soleil</span>
                        </div>

                        <div>
                          <span className= "Date">April 28 2023</span>
                        </div>
                        
                        <div>   
                        <span className="Time">5:30PM</span>
                        <span className="Action">&#10007;</span>
                        </div>
                    </li>
                    <li>
                        <div>
                          <span className="Event">Life is Beautiful</span>
                        </div>
                        <div>   
                          <span className= "Date">April 29 2023</span>
                        </div>
                        <div>
                          <span className="Time">3:00PM</span>
                          <span className="Action">&#10007;</span>
                        </div>
                    </li>
                    <li>
                        <div>
                        <span className="Event">Live music</span>
                        </div>
                        <div>
                        <span className= "Date">April 30 2023</span>
                        </div>
                        <div>
                        <span className="Time">6:00PM</span>  
                        <span className="Action">&#10007;</span>
                        </div>


                       
                    </li>





                </ul>
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventFiled" value={event}  onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                        <input className="eventDate" value={date}  onChange={(e) => setDate(e.target.value)} placeholder="Date" />
                        <input className="eventTime" value={time}  onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                        
                        
                        <button className="submitBtn">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
