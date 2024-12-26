import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBooking] = useState([])
    const url = `http://localhost:4000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Bookings;