import React from 'react';

export default function Make(props) {

    return (
        <div className="Alertbox1" >
            <div className="centerbox1" onClick={props.close}>
                <div className="indexbox1 p-5" >


                    <div className="row justify-content-center text-center" >
                        <h5 className="mr-5"  onClick={props.close} >{'<'}</h5>
                        <h5>Choose make</h5>
                    </div>

                    <div className="border-black rounded-md">
                        <div className="border-bottom-black">
                            <div className="row p-2 align-items-center">
                                <div className="ml-3">
                                    <img
                                        src="assets/audi.png" alt="car"
                                        className="carlogo"
                                    />
                                </div>
                                <div className="">
                                    <h5>Audi</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row p-2 align-items-center">
                                <div className="ml-3">
                                    <img
                                        src="assets/audi.png" alt="car"
                                        className="carlogo"
                                    />
                                </div>
                                <div className="">
                                    <h5>BMW</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row p-2 align-items-center">
                                <div className="ml-3">
                                    <img
                                        src="assets/audi.png" alt="car"
                                        className="carlogo"
                                    />
                                </div>
                                <div className="">
                                    <h5>Ford</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-black">
                            <div className="row p-2 align-items-center">
                                <div className="ml-3">
                                    <img
                                        src="assets/audi.png" alt="car"
                                        className="carlogo"
                                    />
                                </div>
                                <div className="">
                                    <h5>Honda</h5>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row p-2 align-items-center">
                                <div className="ml-3">
                                    <img
                                        src="assets/audi.png" alt="car"
                                        className="carlogo"
                                    />
                                </div>
                                <div className="">
                                    <h5>Toyota</h5>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    );
}
