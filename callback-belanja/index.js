const beli = require('./beli')

class BarangBelanja {
    constructor(item, harga, waktu) {
        this.item = item,
        this.harga = harga,
        this.waktu = waktu    
    }
}

let sabunMandi = new BarangBelanja('sabun mandi', 5000, 1000)
let pastaGigi = new BarangBelanja('pasta gigi', 4000, 2500)
let odol = new BarangBelanja('odol', 4000, 1500)
let sampo = new BarangBelanja('sampo', 2000, 2000)
let sikatGigi = new BarangBelanja('sikat gigi', 5000, 1000)


beli(50000, sampo, function(uang){
    beli(uang, sabunMandi, function(uang){
        beli(uang, pastaGigi, function(uang){
            beli(uang, odol, function(uang){
                beli(uang, sikatGigi, function(uang){
                })
            })
        })
    })
} )


