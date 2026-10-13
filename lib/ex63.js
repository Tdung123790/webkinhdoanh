
function loadNgay() {
    var sel = document.getElementById("selNgay");
    for (var i = 1; i <= 31; i++) {
        var opt = document.createElement("option");
        var val = (i < 10) ? "0" + i : i;
        opt.value = val;
        opt.innerHTML = val;
        sel.appendChild(opt);
    }
}

function loadThang() {
    var sel = document.getElementById("selThang");
    var m = 1;
    while (m <= 12) {
        var opt = document.createElement("option");
        opt.value = m;
        opt.innerHTML = m;
        sel.appendChild(opt);
        m++;
    }
}

function loadNam() {
    var sel = document.getElementById("selNam");
    var y = 1950;
    var namHienTai = new Date().getFullYear();
    do {
        var opt = document.createElement("option");
        opt.value = y;
        opt.innerHTML = y;
        if (y === 1970) {
            opt.selected = true;
        }
        sel.appendChild(opt);
        y++;
    } while (y <= namHienTai);
}


function ganSuKienHover(tr) {
    tr.onmouseover = function() {
        this.style.backgroundColor = "yellow";
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].style.backgroundColor = "yellow";
        }
    };
    tr.onmouseout = function() {
        this.style.backgroundColor = "white";
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].style.backgroundColor = "white";
        }
    };
}


function kiemTraHopLe() {
    var txtTen = document.getElementById("txtTen");
    var txtEmail = document.getElementById("txtEmail");

    if (txtTen.value.trim() === "") {
        alert("Tên không được bỏ trống!");
        txtTen.focus();
        return false;
    }

    var email = txtEmail.value.trim();
    if (email === "") {
        alert("Email không được bỏ trống!");
        txtEmail.focus();
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ! Vui lòng nhập đúng định dạng (vd: user@gmail.com)");
        txtEmail.focus();
        return false;
    }

    return true;
}


function themDongVaoBang(data) {
    var tbody = document.getElementById("memberTableBody");
    var tr = document.createElement("tr");

    var tdTen = document.createElement("td");
    tdTen.innerHTML = data.ten;
    tr.appendChild(tdTen);

    var tdEmail = document.createElement("td");
    tdEmail.innerHTML = data.email;
    tr.appendChild(tdEmail);

    var tdGioiTinh = document.createElement("td");
    tdGioiTinh.innerHTML = data.gioiTinh;
    tr.appendChild(tdGioiTinh);

    var tdNgaySinh = document.createElement("td");
    tdNgaySinh.innerHTML = data.ngaySinh;
    tr.appendChild(tdNgaySinh);

    var tdSoThich = document.createElement("td");
    tdSoThich.innerHTML = data.soThich;
    tr.appendChild(tdSoThich);

    var tdMau = document.createElement("td");
    tdMau.innerHTML = data.mau;
    tr.appendChild(tdMau);

    ganSuKienHover(tr);

    tbody.appendChild(tr);
}


function xuLyDangKy() {
    if (!kiemTraHopLe()) {
        return;
    }

    var radGT = document.getElementsByName("radGioiTinh");
    var gioiTinh = "Nam";
    for (var i = 0; i < radGT.length; i++) {
        if (radGT[i].checked) {
            gioiTinh = radGT[i].value;
            break;
        }
    }

    var ngay = document.getElementById("selNgay").value;
    var thang = document.getElementById("selThang").value;
    thang = (thang < 10) ? "0" + thang : thang;
    var nam = document.getElementById("selNam").value;
    var ngaySinh = ngay + "/" + thang + "/" + nam;

    var chk = document.getElementsByName("chkSoThich");
    var arrST = [];
    for (var j = 0; j < chk.length; j++) {
        if (chk[j].checked) {
            arrST.push(chk[j].value);
        }
    }
    var soThich = (arrST.length > 0) ? arrST.join(", ") : "Không có";

    var radM = document.getElementsByName("radMau");
    var mau = "";
    for (var k = 0; k < radM.length; k++) {
        if (radM[k].checked) {
            mau = radM[k].value;
            break;
        }
    }

    var thongTin = {
        ten: document.getElementById("txtTen").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        gioiTinh: gioiTinh,
        ngaySinh: ngaySinh,
        soThich: soThich,
        mau: mau
    };

    themDongVaoBang(thongTin);
}

function xuLyTiep() {
    document.getElementById("txtTen").value = "";
    document.getElementById("txtEmail").value = "";

    var chk = document.getElementsByName("chkSoThich");
    for (var i = 0; i < chk.length; i++) {
        chk[i].checked = false;
    }

    document.getElementById("selNam").value = 1970;
    document.getElementById("selNgay").selectedIndex = 0;
    document.getElementById("selThang").selectedIndex = 0;

    document.getElementById("txtTen").focus();
}


window.onload = function() {
    loadNgay();
    loadThang();
    loadNam();

    var existingRows = document.querySelectorAll("#memberTableBody tr");
    for (var i = 0; i < existingRows.length; i++) {
        ganSuKienHover(existingRows[i]);
    }
};