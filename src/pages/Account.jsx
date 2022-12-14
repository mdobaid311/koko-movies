import React from "react";
import Button from "../components/button/Button";
import PageHeader from "../components/page-header/PageHeader";
import "./Account.scss";

const Account = () => {
  return (
    <div>
      <PageHeader>
        <h1>My Account</h1>
      </PageHeader>
      <div className="account-container">
        <div className="content">
          <div className="image">
            <img
              src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
              alt=""
            />
          </div>
          <div className="details">
            <h3 className="name">Mohammed obaid</h3>
            <h4>Email: mdobaid311@gmail.com</h4>
            <h4>Phone: 9515281551</h4>
            <h4>Subscription: Premium Basic</h4>
            <h4>Expires In: 15d</h4>
            <Button className="small upgrade-button">Upgrade</Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="select-subscription">
        <h1>Plans</h1>
        <div className="plans">
          <div className="plan">
            <h2>Premium Basic</h2>
            <ul>
              <li>
                👉 <span> 720p</span>
              </li>
              <li>
                👉 <span> Watch on 1 supported device at a time</span>
              </li>
              <li>
                👉 <span> Unlimited movies, TV shows, and mobile games</span>
              </li>
              <li>
                👉 <span> Ad-free TV shows and movies</span>
              </li>
              <li>
                👉 <span> Download on 1 supported device at a time</span>
              </li>
            </ul>
          </div>
          <div className="plan">
            <h2>Premium Standard</h2>
            <ul>
              <li>
                👉 <span> 1080p</span>
              </li>
              <li>
                👉 <span> Watch on 2 supported device at a time</span>
              </li>
              <li>
                👉 <span> Unlimited movies, TV shows, and mobile games</span>
              </li>
              <li>
                👉 <span> Ad-free TV shows and movies</span>
              </li>
              <li>
                👉 <span> Download on 2 supported devices at a time</span>
              </li>
              <li>
                👉 <span> Watch in HD</span>
              </li>
            </ul>
          </div>
          <div className="plan">
            <h2>Premium Exclusive</h2>
            <ul>
              <li>
                👉 <span> 4k Ultra HD</span>
              </li>
              <li>
                👉 <span> Watch on 4 supported device at a time</span>
              </li>
              <li>
                👉 <span> Unlimited movies, TV shows, and mobile games</span>
              </li>
              <li>
                👉 <span> Ad-free TV shows and movies</span>
              </li>
              <li>
                👉 <span> Download on 4 supported devices at a time</span>
              </li>
              <li>
                👉 <span> Watch in HD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

// <div className="content">
// <img
//   src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
//   alt=""
// />
// <div className="details">
//   <h3 className="name">Mohammed obaid</h3>
//   <h4>Email: mdobaid311@gmail.com</h4>
//   <h4>Phone: 9515281551</h4>
//   <h4>Subscription: Premium Basic</h4>
//   <h4>Expires In: 15d</h4>
//   <Button className="small upgrade-button">Upgrade</Button>
// </div>
// </div>
