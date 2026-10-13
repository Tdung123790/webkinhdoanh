function capNhatDongHo() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("clockDisplay").innerHTML = h + ":" + m + ":" + s;
}

function kiemTraNutChuot(e) {
    if (e.button === 0) {
        alert("chuột trái");
    } else if (e.button === 2) {
        alert("chuột phải");
    }
}

function toggleChonDong(tr) {
    if (tr.style.backgroundColor === "red") {
        tr.style.backgroundColor = "";
    } else {
        tr.style.backgroundColor = "red";
    }
}

function themDong() {
    var col1 = prompt("Nhập nội dung cho Cột 1:", "Thêm dòng mới ở đây");
    if (col1 === null) return; 

    var col2 = prompt("Nhập nội dung cho Cột 2:", "Thêm dòng mới ở đây");
    if (col2 === null) return;

    col1 = (col1.trim() !== "") ? col1 : "Thêm dòng mới ở đây";
    col2 = (col2.trim() !== "") ? col2 : "Thêm dòng mới ở đây";

    var table = document.getElementById("tblData");
    var newRow = table.insertRow(0); 

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = col1;
    cell2.innerHTML = col2;

    newRow.onclick = function() {
        toggleChonDong(this);
    };
}

function xoaDongDaChon() {
    var table = document.getElementById("tblData");
    for (var i = table.rows.length - 1; i >= 0; i--) {
        if (table.rows[i].style.backgroundColor === "red") {
            table.deleteRow(i);
        }
    }
}

function chiHienThiDong() {
    document.getElementById("tblData").setAttribute("rules", "rows");
}

function chiHienThiCot() {
    document.getElementById("tblData").setAttribute("rules", "cols");
}

function moTrangMoi() {
    window.open("https://tranduythanh.com", "_blank");
}

window.onload = function() {
    capNhatDongHo();
    setInterval(capNhatDongHo, 1000);

    var table = document.getElementById("tblData");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            toggleChonDong(this);
        };
    }
};