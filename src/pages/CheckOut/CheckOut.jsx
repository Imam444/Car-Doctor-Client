import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id } = service;
    return (
        <div>
            <h2>Book car: {title}</h2>

            <form >
                <form className="card-body">
                    <div className=" grid grid-cols-1 md:grid-cols-2  gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </form>
        </div>

    );
};

export default CheckOut;