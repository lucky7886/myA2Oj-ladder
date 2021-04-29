import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const MST = () => {

  let problemList = [
  ];

  let Type = "Graph/ Minimum Spanning Tree";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default MST;