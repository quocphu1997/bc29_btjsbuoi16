function getEle(id) {
  return document.getElementById(id);
}
// bài  1

document.getElementById("nguyenduongnhonhat").onclick = function () {
  var sum = 0;
  var n = 0;
  while (sum < 10000) {
    n++;
    sum = sum + n;
  }
  document.getElementById("kq1").innerHTML = "Số nguyên dương nhỏ nhất là " + n;
};

// bài 2

document.getElementById("tinhtong").onclick = function () {
  var x = getEle("soX").value * 1;
  var n = getEle("soN").value * 1;
  var S = 0;
  var count = 1;
  for (var i = 0; i < n; i++) {
    S = S + Math.pow(x, count);
    count++;
  }
  getEle("kq2").innerHTML = "Tổng là " + S;
};

// bài 3
getEle("tinhgiaithua").onclick = function () {
  var n_gt = getEle("soN1").value * 1;
  var gt = 1;
  var a1 = 1;
  for (var a = 0; a < n_gt; a++) {
    gt = gt * a1;
    a1++;
  }
  getEle("kq3").innerHTML = "Giai thừa là " + gt;
};

// bài 4
getEle("taothediv").onclick = function () {
  var content = "";

  for (k = 1; k <= 10; k++) {
    if (k % 2 == 0) {
      // so chẵn
      content = content + "<div style='background-color: red;'> Div chẵn</div>";
    }
    if (k % 2 == 1) {
      // so lẻ
      content = content + "<div style='background-color: blue;'> Div lẻ </div>";
    }
  }
  getEle("kq4").innerHTML =  content;
};
