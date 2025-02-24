"use client";

import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Price2");

  const tabs = [
    { 
      id: "Price1", 
      label: "Price1", 
      content: (
        <div>
          <h3>Title 1</h3>
          <p>Description for Price1</p>
          <div className="accordion" id="accordionPrice1">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionPrice1">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> Content for accordion item 1.
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "Price2", 
      label: "Price2", 
      content: (
        <div>
          <h3>Title 2</h3>
          <p>Description for Price2</p>
          <div className="accordion" id="accordionPrice2">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionPrice2">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> Content for accordion item 2.
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "Price3", 
      label: "Price3", 
      content: (
        <div>
          <h3>Title 3</h3>
          <p>Description for Price3</p>
          <div className="accordion" id="accordionPrice3">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionPrice3">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> Content for accordion item 3.
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="section-wrapper">
      <ul className="nav nav-pills">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-100">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="tab-pane fade show active">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Pricing;
