import React from "react";
import PageHeader from "../components/page-header/PageHeader";
import "./Account.scss"

const Account = () => {
  return (
    <div>
      <PageHeader>
        <h1>My Account</h1>
      </PageHeader>
      <div className="container">
        <div className="content">
          <img
            src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
            alt=""
          />
          <div className="details">
            <h3 className="name">Mohammed obaid</h3>
            <h4>Email: mdobaid311@gmail.com</h4>
            <h4>Phone: 9515281551</h4>
            <h4>Subscription: Premium Basic</h4>
            <h4>Expires In: 15d</h4>
            <h4>Upgrade</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
