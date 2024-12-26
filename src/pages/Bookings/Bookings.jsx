import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([])
    const url = `http://localhost:4000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl">{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                       
                        {
                            bookings.map(booking => <BookingRow key={booking._id} bookings={booking}></BookingRow>)
                           }
                       
                        
                    </tbody>
                 
                </table>
            </div>
        </div>
    );
};

export default Bookings;