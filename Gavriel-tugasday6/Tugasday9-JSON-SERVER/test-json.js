var orang = {
    nama : "Andi",
    umur: 30
}

orang=JSON.stringify(orang)
console.log(orang)
console.log(orang.nama)
orang=JSON.parse(orang)
console.log(orang)
console.log(orang.nama)