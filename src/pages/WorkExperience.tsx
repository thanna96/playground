import React, { FC } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export const WorkExperience: FC = function () {
  return (
    <div className={"centered-container"} style={{ marginBottom: "30px" }}>
      <div className={"mx-auto w-11/12"}>
        <Tabs type="card">
          <TabPane tab="Programming Analyst" key="1">
            <p style={{ fontWeight: 700 }}>InnCreTech</p>
            <p>Dates Employed: Sep 2020 – Present</p>
            <p>Employment Duration: 1 yr 3 months</p>
            <p>Location: Princeton, New Jersey, United States</p>
            <p>
              About: At Inncretech I designed, developed, and implemented
              workflow software and web applications. I also analyzed and
              maintained existing software applications. My work was mostly
              front end using Javascript with React and Angular.
            </p>
          </TabPane>
          <TabPane tab="Software Developer" key="2">
            <p style={{ fontWeight: 700 }}>Vorsi</p>
            <p>Dates Employed: Jun 2019 - Aug 2019</p>
            <p>Employment Duration: 3 months</p>
            <p>Location: Hudson Valley, New York, United States</p>
            <p>
              About: I worked on a web app that help facilitate the process of
              ordering and distributing for companies involved with selling
              goods. I used Javascript and Vue.js for front end work.
            </p>
          </TabPane>
          <TabPane tab="Computer Science Tutor" key="3">
            <p style={{ fontWeight: 700 }}>Brookdale CC</p>
            <p>Dates Employed: Jan 2017 – Dec 2017</p>
            <p>Employment Duration: 1 yr</p>
            <p>Location: Lincroft, New Jersey, United States</p>
            <p>
              About: I assisted students with projects and assignments in
              classes that had topics in Java, Data Structures, SQL, and HTML. I
              held private lessons as well as group sessions where I helped
              students complete their projects.
            </p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkExperience;
