import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const ProblemC = () => {

  let problemList = ["https://codeforces.com/contest/1445/problem/C",
    "https://codeforces.com/contest/1437/problem/C",
    "https://codeforces.com/contest/1436/problem/C",
    "https://codeforces.com/contest/1433/problem/D",
    "https://codeforces.com/contest/1430/problem/C",
    "https://codeforces.com/contest/1422/problem/C",
    "https://codeforces.com/contest/1426/problem/C",
    "https://codeforces.com/contest/1417/problem/C",
    "https://codeforces.com/contest/1420/problem/C1",
    "https://codeforces.com/contest/1419/problem/C",
    "https://codeforces.com/contest/1418/problem/C",
    "https://codeforces.com/contest/1406/problem/C",
    "https://codeforces.com/contest/1407/problem/C",
    "https://codeforces.com/contest/1405/problem/C",
    "https://codeforces.com/contest/1409/problem/C",
    "https://codeforces.com/contest/1397/problem/C",
    "https://codeforces.com/contest/1400/problem/C",
    "https://codeforces.com/contest/1401/problem/C",
    "https://codeforces.com/contest/1398/problem/C",
    "https://codeforces.com/contest/1395/problem/C",
    "https://codeforces.com/contest/1391/problem/C",
    "https://codeforces.com/contest/1451/problem/C",
    "https://codeforces.com/contest/1452/problem/B",
    "https://codeforces.com/contest/1440/problem/C1",
    "https://codeforces.com/contest/1447/problem/C",
    "https://codeforces.com/contest/1438/problem/C",
    "https://codeforces.com/contest/1443/problem/C",
    "https://codeforces.com/contest/1382/problem/C1",
    "https://codeforces.com/contest/1379/problem/C",
    "https://codeforces.com/contest/1380/problem/C",
    "https://codeforces.com/contest/1372/problem/C",
    "https://codeforces.com/contest/1371/problem/C",
    "https://codeforces.com/contest/1374/problem/C",
    "https://codeforces.com/contest/1373/problem/C",
    "https://codeforces.com/contest/1369/problem/C",
    "https://codeforces.com/contest/1370/problem/C",
    "https://codeforces.com/contest/1367/problem/C",
    "https://codeforces.com/contest/1364/problem/C",
    "https://codeforces.com/contest/1366/problem/C",
    "https://codeforces.com/contest/1365/problem/C",
    "https://codeforces.com/contest/1362/problem/C",
    "https://codeforces.com/contest/1363/problem/C",
    "https://codeforces.com/contest/1359/problem/C",
    "https://codeforces.com/contest/1358/problem/C",
    "https://codeforces.com/contest/1350/problem/C",
    "https://codeforces.com/contest/1345/problem/C",
    "https://codeforces.com/contest/1348/problem/C",
    "https://codeforces.com/contest/1342/problem/C",
    "https://codeforces.com/contest/1343/problem/C",
    "https://codeforces.com/contest/1337/problem/C",
    "https://codeforces.com/contest/1339/problem/C",
    "https://codeforces.com/contest/1334/problem/C",
    "https://codeforces.com/contest/1333/problem/C",
    "https://codeforces.com/contest/1332/problem/C",
    "https://codeforces.com/contest/1328/problem/C",
    "https://codeforces.com/contest/1327/problem/C",
    "https://codeforces.com/contest/1312/problem/C",
    "https://codeforces.com/contest/1313/problem/C1",
    "https://codeforces.com/contest/1303/problem/C",
    "https://codeforces.com/contest/1296/problem/C",
    "https://codeforces.com/contest/1291/problem/C",
    "https://codeforces.com/contest/1295/problem/C",
    "https://codeforces.com/contest/1294/problem/C",
    "https://codeforces.com/contest/1511/problem/C",
  ];

  let Type = "C Level";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default ProblemC;