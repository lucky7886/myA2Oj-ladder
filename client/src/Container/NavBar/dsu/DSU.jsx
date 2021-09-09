import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const DSU = () => {

  let problemList = [
    "https://leetcode.com/problems/evaluate-division/",
    "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
    "https://leetcode.com/problems/accounts-merge/",

    "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/",
    "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
    "https://leetcode.com/problems/keys-and-rooms/",
    "https://leetcode.com/problems/max-area-of-island/",
    "https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/",
    "https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/",
    "https://leetcode.com/problems/beautiful-arrangement/",
    "https://leetcode.com/problems/jump-game-iii/",
    "https://leetcode.com/problems/number-of-closed-islands/",
    "https://leetcode.com/problems/number-of-enclaves/",
    "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
    "https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/",
    "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
    "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",
    "https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/",
    "https://leetcode.com/problems/shopping-offers/",
    "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "https://leetcode.com/problems/house-robber-iii/",
    "https://leetcode.com/problems/binary-tree-coloring-game/",
    "https://leetcode.com/problems/number-of-islands/",
    "https://leetcode.com/problems/is-graph-bipartite/",
    "https://leetcode.com/problems/coloring-a-border/",
    
  ];

  let Type = "DSU/DFS";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default DSU;