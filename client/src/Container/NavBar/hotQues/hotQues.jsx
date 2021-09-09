import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const HotQues = () => {

  let problemList = [
 "https://www.codechef.com/COOK129B/problems/CSUBS",
 "https://www.codechef.com/COOK129B/problems/TLAPM",
  ];

  let Type = "HotQues/brainStorm";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default HotQues;