// Mad lib with javascrpt by Mr.v

// event listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadlib);

// event function
function buildMadlib() {
  // input
  //   let pluralNoun = prompt("Enter a plural noun:");
  //   let adjective = prompt("Enter a adjective:");
  //   let verb = prompt("Enter a verb:");
  //   let noun = prompt("Enter a noun:");

  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let city = document.getElementById("city").value;
  let name = document.getElementById("name").value;
  // process
  let result =
    `"  There are too many .........   ` +
    pluralNoun +
    `  on this ..........   ` +
    adjective +
    `  airplane  ", I screamed."Somebody has to ......  ` +
    verb +
    `   on the .........  ` +
    noun +
    `  to solve this problem. Before we reach  ....... ` +
    city +
    `  and we meet .......  ` +
    name +
    `   in the house.    "`;

  // /output
  document.getElementById("result").innerHTML = result;
}

function back() {
  demo.className = demo.className ? "" : "style";
}
// /output
//   alert(result);
// }

// event listener
document.getElementById("mad2").addEventListener("click", build);

// function
function build() {
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let city = document.getElementById("city").value;
  let name = document.getElementById("name").value;

  // process
  let result2 =
    `" I saw to many .........` +
    pluralNoun +
    ` in this house. They were .........` +
    adjective +
    `They were ............` +
    verb +
    `inside the ............` +
    noun +
    `.` +
    `Back in ......` +
    city +
    `  they don't like them, especially in  ............` +
    name +
    `house`;

  // output
  document.getElementById("result2").innerHTML = result2;
}

// function
function change1() {
  document.getElementById("change").style.backgroundImage =
    "url(images/download.jpg)";
  document.getElementById("result2").style.fontFamily = "times New Roman";
  document.getElementById("result").style.fontFamily = "times New Roman";
  document.getElementById("result2").style.border = "thick solid #0000FF";
  document.getElementById("result").style.border = "thick solid #0000FF";
  document.getElementById("result2").style.padding = "10px";
  document.getElementById("result").style.padding = "10px";
}
