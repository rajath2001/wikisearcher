async function getData(x) {
  var put = document.getElementById('place');
  const search1 = document.getElementById('text-box').value;
  const response = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&limit=5&search=${search1}`);

  const blob = await response.json();
  put.innerHTML = blob[2][x];
  put.style.color = "black";
}

async function option() {
  var put = document.getElementById('place');
  const search1 = document.getElementById('text-box').value;
  const response = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&limit=5&search=${search1}`);
  const blob = await response.json();
  var in_box1 = document.getElementById("box_1");
  var in_box2 = document.getElementById("box_2");
  var in_box3 = document.getElementById("box_3");

  in_box1.style.flex = "1";
  in_box2.style.flex = "1";
  in_box3.style.flex = "1";


  box_1.innerHTML = blob[1][0];
  box_2.innerHTML = blob[1][1];
  box_3.innerHTML = blob[1][2];




}