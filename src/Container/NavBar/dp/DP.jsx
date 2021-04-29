import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const DP = () => {

  let problemList = [
  ];

  let Type = "Dynamic Programming";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default DP;