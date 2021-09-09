import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const BFS = () => {

  let problemList = ["https://leetcode.com/problems/map-of-highest-peak/",
    "https://leetcode.com/problems/open-the-lock/discuss/888436/C%2B%2B-Explained-With-Pictures-for-The-Ones-Who-Comes-Up-From-Behind",
    "https://leetcode.com/problems/minimum-sideway-jumps/",
    "https://leetcode.com/problems/surrounded-regions/",
    "https://leetcode.com/problems/minimum-jumps-to-reach-home/",
    "https://codeforces.com/contest/1430/problem/A",
    "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/",
    "https://leetcode.com/problems/as-far-from-land-as-possible/",
    "https://leetcode.com/problems/is-graph-bipartite/",
    "https://leetcode.com/problems/perfect-squares/",
    "https://leetcode.com/problems/rotting-oranges/",
    "https://leetcode.com/problems/number-of-islands/",
    "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "https://leetcode.com/problems/shortest-bridge/",

  ];

  let Type = "Graph/ BFS";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default BFS;