import React from 'react';

export default function Model(props) {

    return (
        <div className="Alertbox1" >
            <div className="centerbox1"  onClick={props.close}>
                <div className="indexbox1 p-5">

                    <div className="border-black rounded-md">

                        <div className="border-bottom-black">
                            <div className="row justify-content-around text-center p-2" >
                                <h5 onClick={props.close}>{'<'}</h5>
                                <h5>Choose Model</h5>
                                <h5> </h5>
                            </div>
                        </div>

                        <div className="border-bottom-black">
                            <div className="row pl-4 pr-2 align-items-center">
                                <div className="col-md-6">
                                    <h5 >Fit</h5>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="assets/car_left2.png" alt="car"
                                        className="carlogo1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row pl-4 pr-2 align-items-center">
                                <div className="col-md-6">
                                    <h5 >Civic Type-R</h5>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="assets/car_left2.png" alt="car"
                                        className="carlogo1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row pl-4 pr-2 align-items-center">
                                <div className="col-md-6">
                                    <h5 >Accord</h5>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="assets/car_left2.png" alt="car"
                                        className="carlogo1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row pl-4 pr-2 align-items-center">
                                <div className="col-md-6">
                                    <h5 >Vezel</h5>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="assets/car_left2.png" alt="car"
                                        className="carlogo1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row pl-4 pr-2 align-items-center">
                                <div className="col-md-6">
                                    <h5 >CR-v</h5>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="assets/car_left2.png" alt="car"
                                        className="carlogo1"
                                    />
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>

    );
}
