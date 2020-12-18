import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Make from "../Components/Make";
import Model from "../Components/Model";

function Dashboard(props) {

  useEffect(() => {

  }, [])

  const [make, setmake] = useState('')
  const [Keyword_Search, setKeyword_Search] = useState('')
  const [MakeStatus, setMakeStatus] = useState(false)
  const [ModelStatus, setModelStatus] = useState(false)


  const Searchfunction = () => {
    props.history.push("Form")
  };


  return (
    <div className="animate__animated animate__fadeIn">

      {MakeStatus
        ? <Make
          close={() => { setMakeStatus(!MakeStatus) }}
        />
        : null}

      {ModelStatus
        ? <Model
          close={() => { setModelStatus(!ModelStatus) }}
        />
        : null}


      <div className="menu">
        <div className="menubg">
          <div className="row flex-row-reverse">
            <p className="pl-3 pr-3 bg-white rounded-md">Sell Vehicle</p>
            <p className="pl-3 pr-3 text-white ">Forums</p>
            <p className="pl-3 pr-3 text-white">About Us</p>
            <p className="pl-3 pr-3 text-white">Home</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="menuhome">

          <div className="row mb-4">
            <div className="col-md-4">
              <button onClick={() => { setMakeStatus(!MakeStatus) }} className="btn btn-white btn-block border-grey pr-2 pl-2 rounded-md ">Select Make</button>
              {/* <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="Select Make" type="text" className="form-control rounded-md border-grey" required
              /> */}
            </div>
            <div className="col-md-4">
              <button onClick={() => { setModelStatus(!MakeStatus) }} className="btn btn-white btn-block border-grey pr-2 pl-2 rounded-md ">Select Model</button>
              {/* <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="Select Model" type="text" className="form-control rounded-md border-grey" required
              /> */}
            </div>
            <div className="col-md-4">
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="Price" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <button className="btn btn-white btn-block border-grey pr-2 pl-2 rounded-md ">Location</button>
              {/* <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="Location" type="text" className="form-control rounded-md border-grey" required
              /> */}
            </div>
            <div className="col-md-4">
              <button className="btn btn-white btn-block border-grey pr-2 pl-2 rounded-md ">Condition</button>
              {/* <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="Condition" type="text" className="form-control rounded-md border-grey" required
              /> */}
            </div>
            <div className="col-md-4">

            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <input onChange={val => { setKeyword_Search(val.target.value) }}
                value={Keyword_Search} placeholder="Keyword Search" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
            <div className="col-md-4">
              <button onClick={Searchfunction.bind(this)} className="btn btn-dark btn-block p-2 rounded-md ">SEARCH VEHICLE</button>
            </div>
          </div>

        </div>

        <div className="text-center m-4">
          <h3>Featured Vehicles</h3>
        </div>



        <div className="row">
          <div className="col-md-6">
            <div className="section1">
              <img
                src="assets/1.jpg" alt="car"
                className="sectionimg"
              />

              <div className="row p-3 align-items-center ">
                <div className="col-md-8">
                  <h4 style={{ color: "grey" }} >Vehicle Name</h4>
                  <h5 style={{ color: "#ccc" }}>Category/ Year</h5>
                </div>
                <div className="col-md-4">
                  <h4 style={{ color: "grey" }}>$ Price</h4>
                </div>
              </div>


              <div className="bordertop">
                <center>
                  <button style={{ backgroundColor: "grey" }} className="btn p-2 pl-3 pr-3 text-white rounded-md mb-2 ">VIEW DETAILS</button>
                </center>
              </div>

            </div>







          </div>
          <div className="col-md-6">
            <div className="section1">
              <img
                src="assets/2.jpg" alt="car"
                className="sectionimg"
              />

              <div className="row p-3 align-items-center ">
                <div className="col-md-8">
                  <h4 style={{ color: "grey" }} >Vehicle Name</h4>
                  <h5 style={{ color: "#ccc" }}>Category/ Year</h5>
                </div>
                <div className="col-md-4">
                  <h4 style={{ color: "grey" }}>$ Price</h4>
                </div>
              </div>


              <div className="bordertop">
                <center>
                  <button style={{ backgroundColor: "grey" }} className="btn p-2 pl-3 pr-3 text-white rounded-md mb-2 ">VIEW DETAILS</button>
                </center>
              </div>

            </div>

          </div>
        </div>



      </div>



    </div>
  );




}

export default connect()(Dashboard)
