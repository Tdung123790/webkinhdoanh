var hinhMatTruoc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6v3d9PPAUHJ2duNlaROaqwiu4WNCfSIRziaAyrr6GViyvQJoCirXuWaL&s=10";
var hinhMatSau = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8rZgxctCeU8_8-Q5of0QtPPNDiMMSNqV52K8QeuFR4_UJqcj4Hl5zz0j&s=10";
var trangThai = 0;

function layThongTinCCCD() {
    if (trangThai == 0 || trangThai == 2) {
        trangThai = 1;
        return {
            src: hinhMatTruoc,
            btnText: "Xem mat sau"
        };
    } else {
        trangThai = 2;
        return {
            src: hinhMatSau,
            btnText: "Xem mat truoc"
        };
    }
}