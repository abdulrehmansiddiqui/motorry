import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Form() {

  useEffect(() => {

  }, [])

  const [make, setmake] = useState('')
  // const [Keyword_Search, setKeyword_Search] = useState('')

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="menu">
        <div className="menubg">
          <div className="row flex-row-reverse">
            <p className="pl-3 pr-3 text-white ">Contact Us</p>
            <p className="pl-3 pr-3 text-white ">Forums</p>
            <p className="pl-3 pr-3 text-white">About Us</p>
            <p className="pl-3 pr-3 text-white">Home</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="menuhome">

          <div className="row mb-4">
            <div className="col-md-6">
              <label>Body Type: *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
            <div className="col-md-6">
              <label>Release Year: *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label>Transmission: *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
            <div className="col-md-6">
              <label>Condition: *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label>Mileage (KM): *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
            <div className="col-md-6">
              <label>Registration No: *</label>
              <input onChange={val => { setmake(val.target.value) }}
                value={make} placeholder="" type="text" className="form-control rounded-md border-grey" required
              />
            </div>
          </div>

          <label>Fuel Type: *</label>
          <div className="row mb-4">

          <div class="form-check">
              <input type="checkbox" class="mr-2" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Petrol</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="mr-2" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Diesel</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="mr-2" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Hybrid</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="mr-2" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Electric</label>
            </div>


          </div>

          <div className="text-center mt-4">
            <button style={{ backgroundColor: "grey" }} className="btn p-1 pl-3 pr-3 rounded-md mb-2 "><strong>Predict the Price</strong></button>
          </div>

        </div>



      </div>






    </div>
  );




}

export default connect()(Form)
