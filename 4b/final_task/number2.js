function hitungVoucher(diskon, harga){
    var total, potongan;
    if(harga>=50000){
       potongan =  (diskon/100) * 100000
       console.log(potongan)
       if(potongan >20000){
           potongan = 20000
           console.log(potongan)
       }
       total = harga - potongan ;
       console.log("jumlah yang harus dibayar : " + total);
       console.log("Diskon : " + potongan)
    }
}


DumbWaysJos = 21
// console.log(DumbWaysJos)
hitungVoucher(DumbWaysJos, 100000)



