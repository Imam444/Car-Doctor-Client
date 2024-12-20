
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{ title}</h2>
                <p className="yexy-xl text-orange-500">Price :${ price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>  
        </div>
    );
};

export default ServiceCard;