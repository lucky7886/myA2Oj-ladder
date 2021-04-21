import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const ProblemA = () => {

  let problemList = ["https://codeforces.com/contest/1445/problem/A",
    "https://codeforces.com/contest/1437/problem/A",
    "https://codeforces.com/contest/1436/problem/A",
    "https://codeforces.com/contest/1433/problem/A",
    "https://codeforces.com/contest/1433/problem/B",
    "https://codeforces.com/contest/1430/problem/A",
    "https://codeforces.com/contest/1422/problem/A",
    "https://codeforces.com/contest/1426/problem/A",
    "https://codeforces.com/contest/1417/problem/A",
    "https://codeforces.com/contest/1420/problem/A",
    "https://codeforces.com/contest/1419/problem/A",
    "https://codeforces.com/contest/1418/problem/A",
    "https://codeforces.com/contest/1406/problem/A",
    "https://codeforces.com/contest/1407/problem/A",
    "https://codeforces.com/contest/1405/problem/A",
    "https://codeforces.com/contest/1409/problem/A",
    "https://codeforces.com/contest/1397/problem/A",
    "https://codeforces.com/contest/1400/problem/A",
    "https://codeforces.com/contest/1401/problem/A",
    "https://codeforces.com/contest/1398/problem/A",
    "https://codeforces.com/contest/1395/problem/A",
    "https://codeforces.com/contest/1391/problem/A",
    "https://codeforces.com/contest/1451/problem/A",
    "https://codeforces.com/contest/1452/problem/A",
    "https://codeforces.com/contest/1440/problem/A",
    "https://codeforces.com/contest/1447/problem/A",
    "https://codeforces.com/contest/1438/problem/A",
    "https://codeforces.com/contest/1443/problem/A",
    "https://codeforces.com/contest/1382/problem/A",
    "https://codeforces.com/contest/1379/problem/A",
    "https://codeforces.com/contest/1380/problem/A",
    "https://codeforces.com/contest/1372/problem/A",
    "https://codeforces.com/contest/1371/problem/A",
    "https://codeforces.com/contest/1374/problem/A",
    "https://codeforces.com/contest/1373/problem/A",
    "https://codeforces.com/contest/1369/problem/A",
    "https://codeforces.com/contest/1370/problem/A",
    "https://codeforces.com/contest/1367/problem/A",
    "https://codeforces.com/contest/1364/problem/A",
    "https://codeforces.com/contest/1366/problem/A",
    "https://codeforces.com/contest/1365/problem/A",
    "https://codeforces.com/contest/1362/problem/A",
    "https://codeforces.com/contest/1363/problem/A",
    "https://codeforces.com/contest/1359/problem/A",
    "https://codeforces.com/contest/1360/problem/A",
    "https://codeforces.com/contest/1358/problem/A",
    "https://codeforces.com/contest/1354/problem/A",
    "https://codeforces.com/contest/1350/problem/A",
    "https://codeforces.com/contest/1345/problem/A",
    "https://codeforces.com/contest/1348/problem/A",
    "https://codeforces.com/contest/1342/problem/A",
    "https://codeforces.com/contest/1343/problem/A",
    "https://codeforces.com/contest/1337/problem/A",
    "https://codeforces.com/contest/1339/problem/A",
    "https://codeforces.com/contest/1334/problem/A",
    "https://codeforces.com/contest/1333/problem/A",
    "https://codeforces.com/contest/1332/problem/A",
    "https://codeforces.com/contest/1328/problem/A",
    "https://codeforces.com/contest/1327/problem/A",
    "https://codeforces.com/contest/1511/problem/A"
  ];

  let Type = "A Level";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default ProblemA;