import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const LunchTime = () => {

  let problemList = ["https://www.codechef.com/LTIME97B/problems/FALSNUM",
  "https://www.codechef.com/LTIME97B/problems/UNONE",
  "https://www.codechef.com/LTIME97B/problems/REALBIN",
  "https://www.codechef.com/LTIME96B/problems/CHARGES",
  "https://www.codechef.com/LTIME96B/problems/NUMCOMP1",
  "https://www.codechef.com/LTIME96B/problems/CHESUB",
  "https://www.codechef.com/LTIME95B/problems/CCHEAVEN",
  "https://www.codechef.com/LTIME95B/problems/BENCHP",
  "https://www.codechef.com/LTIME95B/problems/ARRROT",
  "https://www.codechef.com/LTIME95B/problems/SPTREE",
  "https://www.codechef.com/LTIME94B/problems/DATE1",
  "https://www.codechef.com/LTIME94B/problems/RACINGEN",
  "https://www.codechef.com/LTIME94B/problems/LUNCHTIM",
  "https://www.codechef.com/LTIME93B/problems/COPRIMEX",
  "https://www.codechef.com/LTIME93B/problems/PALPALS",
  "https://www.codechef.com/LTIME93B/problems/AVGSORT",
  "https://www.codechef.com/LTIME91B/problems/SWAP10HG",
  "https://www.codechef.com/LTIME91B/problems/THREE",
  "https://www.codechef.com/LTIME90B/problems/BEGGASOL",
  "https://www.codechef.com/LTIME90B/problems/GASOLINE",
  "https://www.codechef.com/LTIME89B/problems/ANDOR",
  "https://www.codechef.com/LTIME89B/problems/GSUB",
  "https://www.codechef.com/LTIME88B/problems/WATMELON",
  "https://www.codechef.com/LTIME88B/problems/GCDOPS",
  "https://www.codechef.com/LTIME88B/problems/ROOTTREE",
  "https://www.codechef.com/LTIME87B/problems/MODEFREQ",
  "https://www.codechef.com/LTIME87B/problems/ARRGAME",
  "https://www.codechef.com/LTIME87B/problems/ELOMAX",
  "https://www.codechef.com/LTIME86B/problems/CHECHOC"
  
  ];

  let Type = "LunchTime";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default LunchTime;