import React from "react";

const Wellet = () => {
  return (
      <div className="wellet_body">
        <div className="wellet_container">
          <div className="wellet_header">
            <div className="wellet_body">
              <img src="/vnd.webp" alt="" width="24" height="24" />
              <div className="wellet_text">VND</div>
              <div className="wellet_tien">0</div>
            </div>
            <div className="wellet_body">
              <img src="/usdt.svg" alt="" />
              <div className="wellet_text">USD</div>
              <div className="wellet_tien">$0.00</div>
            </div>
          </div>
         
        </div>
      </div>
   
  );
};

export default Wellet;
