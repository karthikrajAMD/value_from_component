import React from "react";
import "./App.css";
function Cardbody() {
  const style = {
    color: "#dddfeb",
  };
  const card1 = {
    color: "#4e73df",
  };
  const card1Border = {
    borderLeft: "5px solid #4e73df",
  };
  const card2 = {
    color: "#1cc88a",
  };
  const card2Border = {
    borderLeft: "5px solid #1cc88a",
  };
  const card3 = {
    color: "#36b9cc",
  };
  const card3Border = {
    borderLeft: "5px solid #36b9cc",
  };
  const card4 = {
    color: "#f6c23e",
  };
  const card4Border = {
    borderLeft: "5px solid #f6c23e",
  };
  return (
    <>
      <div className="all-card row ">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card-content " style={card1Border}>
            <div className="card-whole">
              <div className="elements ">
                <p className="card-heading" style={card1}>
                  EARNING (MONTHLY)
                </p>
                <p className="card-price">Rs 40,000</p>
              </div>
              <div className="card-side-image">
                <i className="fas fa-2x fa-calendar" style={style}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card-content " style={card2Border}>
            <div className="card-whole">
              <div className="elements">
                <p className="card-heading" style={card2}>
                  EARNING (ANNUAL)
                </p>
                <p className="card-price">Rs 215,000</p>
              </div>
              <div className="card-side-image">
                <i
                  className="fa-solid fa-2x fa-indian-rupee-sign"
                  style={style}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card-content " style={card3Border}>
            <div className="card-whole">
              <div className="elements">
                <p className="card-heading" style={card3}>
                  TASKS
                </p>
                <p className="card-price">50%</p>
              </div>

              <div className="card-side-image">
                <i
                  className="fa-solid fa-2x fa-clipboard-list"
                  style={style}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card-content " style={card4Border}>
            <div className="card-whole ">
              <div className="elements">
                <p className="card-heading" style={card4}>
                  PENDING REQUESTS
                </p>
                <p className="card-price">18</p>
              </div>
              <div className="card-side-image">
                <i className="fa-solid fa-2x fa-comments" style={style}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardbody;
