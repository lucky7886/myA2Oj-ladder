import React from 'react';
import Table from "../../../component/Table/table";
import Header from "../../../component/Header/index";

const Atcoder = () => {

  let problemList = [

    "https://atcoder.jp/contests/abc065/tasks/arc076_a",

"https://atcoder.jp/contests/abc065/tasks/arc076_b",

"https://atcoder.jp/contests/abc126/tasks/abc126_c",

"https://atcoder.jp/contests/abc126/tasks/abc126_d",

"https://atcoder.jp/contests/abc127/tasks/abc127_c",

"https://atcoder.jp/contests/abc127/tasks/abc127_d",

"https://atcoder.jp/contests/abc128/tasks/abc128_c",

"https://atcoder.jp/contests/abc128/tasks/abc128_d",

"https://atcoder.jp/contests/abc129/tasks/abc129_c",

"https://atcoder.jp/contests/abc129/tasks/abc129_d",
"https://atcoder.jp/contests/abc129/tasks/abc129_e",

"https://atcoder.jp/contests/abc129/tasks/abc129_e",

"https://atcoder.jp/contests/abc130/tasks/abc130_c",

"https://atcoder.jp/contests/abc130/tasks/abc130_d",

"https://atcoder.jp/contests/abc131/tasks/abc131_c",

"https://atcoder.jp/contests/abc131/tasks/abc131_d",

"https://atcoder.jp/contests/abc132/tasks/abc132_c",

"https://atcoder.jp/contests/abc132/tasks/abc132_d",


"https://atcoder.jp/contests/abc133/tasks/abc133_c",

"https://atcoder.jp/contests/abc133/tasks/abc133_d",

"https://atcoder.jp/contests/abc134/tasks/abc134_c",

"https://atcoder.jp/contests/abc134/tasks/abc134_d",

"https://atcoder.jp/contests/abc136/tasks/abc136_c",

"https://atcoder.jp/contests/abc136/tasks/abc136_d",

"https://atcoder.jp/contests/abc137/tasks/abc137_c",
"https://atcoder.jp/contests/abc137/tasks/abc137_d",

"https://atcoder.jp/contests/abc138/tasks/abc138_c",

"https://atcoder.jp/contests/abc138/tasks/abc138_d",

"https://atcoder.jp/contests/abc139/tasks/abc139_c",

"https://atcoder.jp/contests/abc139/tasks/abc139_d",

"https://atcoder.jp/contests/abc140/tasks/abc140_c",
"https://atcoder.jp/contests/abc140/tasks/abc140_d",

"https://atcoder.jp/contests/abc141/tasks/abc141_c",

"https://atcoder.jp/contests/abc141/tasks/abc141_d",

"https://atcoder.jp/contests/abc142/tasks/abc142_c",

"https://atcoder.jp/contests/abc142/tasks/abc142_d",

"https://atcoder.jp/contests/abc143/tasks/abc143_c",

"https://atcoder.jp/contests/abc143/tasks/abc143_d",

"https://atcoder.jp/contests/abc144/tasks/abc144_c",

"https://atcoder.jp/contests/abc144/tasks/abc144_d",

"https://atcoder.jp/contests/abc145/tasks/abc145_c",

"https://atcoder.jp/contests/abc145/tasks/abc145_d",

"https://atcoder.jp/contests/abc146/tasks/abc146_c",
"https://atcoder.jp/contests/abc146/tasks/abc146_d",

"https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_c",

"https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_d",

"https://atcoder.jp/contests/abc199/tasks/abc199_c",
"https://atcoder.jp/contests/abc199/tasks/abc199_d",

"https://atcoder.jp/contests/jsc2021/tasks/jsc2021_c",

"https://atcoder.jp/contests/jsc2021/tasks/jsc2021_d",

"https://atcoder.jp/contests/jsc2021/tasks/jsc2021_e",

"https://atcoder.jp/contests/abc198/tasks/abc198_c",

"https://atcoder.jp/contests/abc198/tasks/abc198_d",

"https://atcoder.jp/contests/abc197/tasks/abc197_c",

"https://atcoder.jp/contests/abc197/tasks/abc197_d",

"https://atcoder.jp/contests/abc196/tasks/abc196_c",

"https://atcoder.jp/contests/abc196/tasks/abc196_d",

"https://atcoder.jp/contests/abc195/tasks/abc195_c",

"https://atcoder.jp/contests/abc195/tasks/abc195_d",

"https://atcoder.jp/contests/abc194/tasks/abc194_c",

"https://atcoder.jp/contests/abc194/tasks/abc194_d",

"https://atcoder.jp/contests/abc193/tasks/abc193_c",

"https://atcoder.jp/contests/abc193/tasks/abc193_d",

"https://atcoder.jp/contests/abc192/tasks/abc192_c",

"https://atcoder.jp/contests/abc192/tasks/abc192_d",

"https://atcoder.jp/contests/abc191/tasks/abc191_c",

"https://atcoder.jp/contests/abc191/tasks/abc191_d",

"https://atcoder.jp/contests/abc190/tasks/abc190_c",

"https://atcoder.jp/contests/abc190/tasks/abc190_d",

"https://atcoder.jp/contests/abc189/tasks/abc189_c",
"https://atcoder.jp/contests/abc189/tasks/abc189_d",
"https://atcoder.jp/contests/abc188/tasks/abc188_c",

"https://atcoder.jp/contests/abc188/tasks/abc188_d",

"https://atcoder.jp/contests/abc187/tasks/abc187_c",

"https://atcoder.jp/contests/abc187/tasks/abc187_d",

"https://atcoder.jp/contests/abc186/tasks/abc186_c",

"https://atcoder.jp/contests/abc186/tasks/abc186_d",

"https://atcoder.jp/contests/abc185/tasks/abc185_c",

"https://atcoder.jp/contests/abc185/tasks/abc185_d",

"https://atcoder.jp/contests/abc184/tasks/abc184_c",

"https://atcoder.jp/contests/abc184/tasks/abc184_d",

"https://atcoder.jp/contests/abc183/tasks/abc183_c",
"https://atcoder.jp/contests/abc183/tasks/abc183_d",
"https://atcoder.jp/contests/abc182/tasks/abc182_c",
"https://atcoder.jp/contests/abc182/tasks/abc182_d",

"https://atcoder.jp/contests/abc181/tasks/abc181_c",

"https://atcoder.jp/contests/abc181/tasks/abc181_d",
"https://atcoder.jp/contests/abc180/tasks/abc180_c",

"https://atcoder.jp/contests/abc180/tasks/abc180_d",

  ];

  let Type = "AtcoderBegContes/ C/D";
  return (
    <div>
      <Header />
      <br />
      <Table problemList={problemList} Type={Type} />
    </div>
  );
}

export default Atcoder;