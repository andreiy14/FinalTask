function hitungVoucher(diskon, harga){
    var total, potongan;
    if(harga>=50000 && harga<=100000){
       potongan =  (diskon/100) * 100000
       console.log(potongan)
       if(potongan >20000){
           potongan = 20000
           console.log(potongan)
       }
       total = harga - potongan ;
       console.log("jumlah yang harus dibayar : " + total);
       console.log("Diskon : " + potongan)
       console.log("Kembalian : " + (harga-total))
    }
    if(harga>=80000 && harga<=200000){
        potongan =  (diskon/100) * 200000
        console.log(potongan)
        if(potongan >40000){
            potongan = 40000
            console.log(potongan)
        }
        total = harga - potongan ;
        console.log("jumlah yang harus dibayar : " + total);
        console.log("Diskon : " + potongan)
        console.log("Kembalian : " + (harga-total))
     }

}


var DumbWaysJos = 21
var DumbWaysMantap = 30
// console.log(DumbWaysJos)
hitungVoucher(DumbWaysJos, 100000)



