function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  let kembalian = uang - obj.harga
  setTimeout(function(){
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      
      cb(kembalian)

    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      
      cb(uang)
    
    }
  }, obj.waktu);

}

module.exports = beli;
