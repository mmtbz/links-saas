import React from "react";
import { MdWork, MdWorkspacePremium } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";

const ResumeCard = () => {
  return (
    <li className="timeline-item | extra-space">
      <span className="timeline-item-icon | filled-icon">
        <MdWork />
      </span>
      <div className="timeline-item-wrapper">
        <div className="timeline-item-description">
          <i className="avatar | small">
            <MdWorkspacePremium />
          </i>
          <span>
            <a href="#">Citi Group</a>
            <time> Jan 20, 2021</time>
          </span>
        </div>
        <div className="timeline-item-description">
          <i className="avatar | small">
            <BsPersonVcardFill />
          </i>
          <span>
            <span>Software Developer</span>
          </span>
        </div>
        <div className="comment">
          <p>
            I've sent him the assignment we discussed recently, he is coming
            back to us this week. Regarding to our last call, I really enjoyed
            talking to him and so far he has the profile we are looking for.
            Can't wait to see his technical test, I'll keep you posted and we'll
            debrief it all together! 😊
          </p>
        </div>
      </div>
    </li>
  );
};

export default ResumeCard;
