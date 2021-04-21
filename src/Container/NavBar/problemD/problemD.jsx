import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const ProblemD = () => {

  let problemList = ["https://codeforces.com/contest/1445/problem/D",
    "https://codeforces.com/contest/1437/problem/D",
    "https://codeforces.com/contest/1436/problem/D",
    "https://codeforces.com/contest/1433/problem/E",
    "https://codeforces.com/contest/1430/problem/D",
    "https://codeforces.com/contest/1422/problem/D",
    "https://codeforces.com/contest/1426/problem/D",
    "https://codeforces.com/contest/1417/problem/D",
    "https://codeforces.com/contest/1420/problem/C2",
    "https://codeforces.com/contest/1419/problem/D1",
    "https://codeforces.com/contest/1418/problem/D",
    "https://codeforces.com/contest/1406/problem/D",
    "https://codeforces.com/contest/1407/problem/D",
    "https://codeforces.com/contest/1405/problem/D",
    "https://codeforces.com/contest/1409/problem/D",
    "https://codeforces.com/contest/1397/problem/D",
    "https://codeforces.com/contest/1400/problem/D",
    "https://codeforces.com/contest/1401/problem/D",
    "https://codeforces.com/contest/1398/problem/D",
    "https://codeforces.com/contest/1395/problem/D",
    "https://codeforces.com/contest/1391/problem/D",
    "https://codeforces.com/contest/1451/problem/D",
    "https://codeforces.com/contest/1452/problem/D",
    "https://codeforces.com/contest/1440/problem/C2",
    "https://codeforces.com/contest/1447/problem/D",
    "https://codeforces.com/contest/1438/problem/D",
    "https://codeforces.com/contest/1443/problem/D",
    "https://codeforces.com/contest/1382/problem/C2",
    "https://codeforces.com/contest/1379/problem/D",
    "https://codeforces.com/contest/1372/problem/D",
    "https://codeforces.com/contest/1371/problem/C",
    "https://codeforces.com/contest/1374/problem/D",
    "https://codeforces.com/contest/1373/problem/D",
    "https://codeforces.com/contest/1369/problem/D",
    "https://codeforces.com/contest/1370/problem/D",
    "https://codeforces.com/contest/1367/problem/D",
    "https://codeforces.com/contest/1364/problem/D",
    "https://codeforces.com/contest/1366/problem/D",
    "https://codeforces.com/contest/1365/problem/D",
    "https://codeforces.com/contest/1362/problem/D",
    "https://codeforces.com/contest/1363/problem/D",
    "https://codeforces.com/contest/1359/problem/D",
    "https://codeforces.com/contest/1358/problem/D",
    "https://codeforces.com/contest/1350/problem/D",
    "https://codeforces.com/contest/1345/problem/D",
    "https://codeforces.com/contest/1348/problem/D",
    "https://codeforces.com/contest/1342/problem/D",
    "https://codeforces.com/contest/1343/problem/D",
    "https://codeforces.com/contest/1337/problem/D",
    "https://codeforces.com/contest/1339/problem/D",
    "https://codeforces.com/contest/1334/problem/D",
    "https://codeforces.com/contest/1333/problem/D",
    "https://codeforces.com/contest/1332/problem/D",
    "https://codeforces.com/contest/1328/problem/D",
    "https://codeforces.com/contest/1327/problem/D",
    "https://codeforces.com/contest/1312/problem/D",
    "https://codeforces.com/contest/1313/problem/C2",
    "https://codeforces.com/contest/1303/problem/D",
    "https://codeforces.com/contest/1296/problem/D",
    "https://codeforces.com/contest/1291/problem/D",
    "https://codeforces.com/contest/1295/problem/D",
    "https://codeforces.com/contest/1294/problem/D",
    "https://codeforces.com/contest/1511/problem/D",
    "https://codeforces.com/contest/1514/problem/D",
  ];

  let Type = "D Level";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default ProblemD;