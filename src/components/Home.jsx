
import React from "react";
import "animate.css/animate.min.css";
import 'animate.css';


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 ">            
            <img
              class="img-fluid rounded mb-4 mb-lg-0 animate__animated animate__fadeInLeft"
              src="https://via.placeholder.com/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light animate__animated animate__fadeInUp">Home</h1>
            <p class="animate__animated animate__fadeInDown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;