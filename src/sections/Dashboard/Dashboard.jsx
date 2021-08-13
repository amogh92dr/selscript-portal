import React from 'react';

// Sample layout skeletons:
/*
const BothColumns = () => (
  <>
    <div className="dark-blue mx2 mb2">Page Title</div>
    <div className="mx2 mb2 flex">
      <div className="card leftCol dark-blue">
        <div className="sectionTitle pb2">Left Bar</div>
      </div>
      <div className="mx2 content">Page Contents</div>
      <div className="card rightCol dark-blue">
        <div className="sectionTitle pb2">Right Bar</div>
      </div>
    </div>
  </>
);

const LeftColumn = () => (
  <>
    <div className="dark-blue mx2 mb2">Page Title</div>
    <div className="mx2 mb2 flex">
      <div className="card leftCol dark-blue">
        <div className="sectionTitle pb2">Left Bar</div>
      </div>
      <div className="ml2 content">Page Contents</div>
    </div>
  </>
);

const RightColumn = () => (
  <>
    <div className="dark-blue mx2 mb2">Page Title</div>
    <div className="mx2 mb2 flex">
      <div className="mr2 content">Page Contents</div>
      <div className="card rightCol dark-blue">
        <div className="sectionTitle pb2">Right Bar</div>
      </div>
    </div>
  </>
);
*/

// No columns
const Dashboard = () => (
  <div className="card sectionWrapper">
    <div className="dark-blue mx2 mb2">Page Title</div>
    <div className="mx2 mb2 flex">
      <div className="mx2 content">Page Contents</div>
    </div>
  </div>
);

export default Dashboard;
