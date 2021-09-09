import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const ProblemB = () => {

  let problemList = ["https://codeforces.com/contest/1445/problem/B",
    "https://codeforces.com/contest/1437/problem/B",
    "https://codeforces.com/contest/1436/problem/B",
    "https://codeforces.com/contest/1433/problem/C",
    "https://codeforces.com/contest/1430/problem/B",
    "https://codeforces.com/contest/1422/problem/B",
    "https://codeforces.com/contest/1426/problem/B",
    "https://codeforces.com/contest/1417/problem/B",
    "https://codeforces.com/contest/1420/problem/B",
    "https://codeforces.com/contest/1419/problem/B",
    "https://codeforces.com/contest/1418/problem/B",
    "https://codeforces.com/contest/1406/problem/B",
    "https://codeforces.com/contest/1407/problem/B",
    "https://codeforces.com/contest/1405/problem/B",
    "https://codeforces.com/contest/1409/problem/B",
    "https://codeforces.com/contest/1397/problem/B",
    "https://codeforces.com/contest/1400/problem/B",
    "https://codeforces.com/contest/1401/problem/B",
    "https://codeforces.com/contest/1398/problem/B",
    "https://codeforces.com/contest/1395/problem/B",
    "https://codeforces.com/contest/1391/problem/B",
    "https://codeforces.com/contest/1451/problem/B",
    "https://codeforces.com/contest/1452/problem/B",
    "https://codeforces.com/contest/1440/problem/B",
    "https://codeforces.com/contest/1447/problem/B",
    "https://codeforces.com/contest/1443/problem/B",
    "https://codeforces.com/contest/1382/problem/B",
    "https://codeforces.com/contest/1379/problem/B",
    "https://codeforces.com/contest/1380/problem/B",
    "https://codeforces.com/contest/1372/problem/B",
    "https://codeforces.com/contest/1371/problem/B",
    "https://codeforces.com/contest/1374/problem/B",
    "https://codeforces.com/contest/1373/problem/B",
    "https://codeforces.com/contest/1369/problem/B",
    "https://codeforces.com/contest/1370/problem/B",
    "https://codeforces.com/contest/1367/problem/B",
    "https://codeforces.com/contest/1364/problem/B",
    "https://codeforces.com/contest/1366/problem/B",
    "https://codeforces.com/contest/1365/problem/B",
    "https://codeforces.com/contest/1362/problem/B",
    "https://codeforces.com/contest/1363/problem/B",
    "https://codeforces.com/contest/1359/problem/B",
    "https://codeforces.com/contest/1358/problem/B",
    "https://codeforces.com/contest/1350/problem/B",
    "https://codeforces.com/contest/1345/problem/B",
    "https://codeforces.com/contest/1348/problem/B",
    "https://codeforces.com/contest/1342/problem/B",
    "https://codeforces.com/contest/1343/problem/B",
    "https://codeforces.com/contest/1337/problem/B",
    "https://codeforces.com/contest/1339/problem/B",
    "https://codeforces.com/contest/1334/problem/B",
    "https://codeforces.com/contest/1333/problem/B",
    "https://codeforces.com/contest/1332/problem/B",
    "https://codeforces.com/contest/1328/problem/B",
    "https://codeforces.com/contest/1327/problem/B",
    "https://codeforces.com/contest/1312/problem/B",
    "https://codeforces.com/contest/1313/problem/B",
    "https://codeforces.com/contest/1303/problem/B",
    "https://codeforces.com/contest/1296/problem/B",
    "https://codeforces.com/contest/1291/problem/B",
    "https://codeforces.com/contest/1295/problem/B",
    "https://codeforces.com/contest/1294/problem/B",
    "https://codeforces.com/contest/1511/problem/B",
    "https://codeforces.com/contest/1514/problem/B",
  ];
  let Type = "B Level";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default ProblemB;