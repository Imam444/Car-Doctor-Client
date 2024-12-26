
const BookingRow = ({ booking}) => {
    const { date, service, img} = booking
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded h-24 w-24">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                </div>
            </td>
           
            <td>{ service}</td>
            <td>{ date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;