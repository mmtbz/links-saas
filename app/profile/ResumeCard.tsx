import React from "react";
import { MdWork, MdWorkspacePremium } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import { Flex } from "@radix-ui/themes";

const ResumeCard = () => {
  return (
    <li className="timeline-item | extra-space">
      <span className="timeline-item-icon | filled-icon">
        <MdWork />
      </span>
      <div className="timeline-item-wrapper bg-white p-2 rounded-[5px] bg-opacity-60">
        <Flex gap="2" align="center" className="timeline-item-description">
          <i className="avatar | small">
            <MdWorkspacePremium />
          </i>
          <span>
            <span className="text-black">Citi Group</span>
            <time className="text-xs"> Jan 20, 2021</time>
          </span>
        </Flex>
        <Flex gap="2" align="center" className="timeline-item-description">
          <i className="avatar | small">
            <BsPersonVcardFill />
          </i>
          <span>
            <span>Software Developer</span>
          </span>
        </Flex>
        <div className="comment">
          <p>
            I&apos;ve sent him the assignment we discussed recently, he is
            coming back to us this week. Regarding to our last call, I really
            enjoyed talking to him and so far he has the profile we are looking
            for. Can&apos;t wait to see his technical test, I&apos;ll keep you
            posted and we&apos;ll debrief it all together! 😊
          </p>
        </div>
      </div>
    </li>
  );
};

export default ResumeCard;
