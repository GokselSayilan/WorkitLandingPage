import React from "react";
import "./feed.css";
import Button from "../Button/Button";

function Feed() {
  return (
    <div className="feed">
      <div className="feedBg"></div>
      <div className="feedWrapper">
        <div className="feedCards">
          <div className="feedCard">
            <div className="feedCardCircle">
              <p className="feedCardNumber">1</p>
            </div>
            <div className="feedCardContent">
              <h5 className="feedCardTitle">Actionable insights</h5>
              <p className="feedCardDesc">
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </p>
            </div>
          </div>
          <div className="feedCard">
            <div className="feedCardCircle">
              <p className="feedCardNumber">2</p>
            </div>
            <div className="feedCardContent">
              <h5 className="feedCardTitle">Data-driven decisions</h5>
              <p className="feedCardDesc">
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </p>
            </div>
          </div>
          <div className="feedCard">
            <div className="feedCardCircle">
              <p className="feedCardNumber">3</p>
            </div>
            <div className="feedCardContent">
              <h5 className="feedCardTitle">Always affordable</h5>
              <p className="feedCardDesc">
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </p>
            </div>
          </div>
        </div>
        <div className="feedCardProfileSection">
          <div className="feedCardProfileSectionCard">
            <h3 className="feedCardProfileSectionCardTitle">
              Be the first to test
            </h3>
            <p className="feedCardProfileSectionCardDesc">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <Button content={"Apply for access"} />
            <img
              src="assets/images/bg-pattern-3.svg"
              alt=""
              className="feedCardProfileSectionCardPattern"
            />
            <img
              src="assets/images/image-founder.webp"
              alt="founderPhoto"
              className="feedCardProfileSectionPhoto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
