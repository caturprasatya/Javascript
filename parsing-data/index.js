"use strict"
const fs = require('fs')
const { parse } = require('path')
class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
    constructor(id,full_name,job,email,phone,created_at) {
        this._id = id
        this.full_name = full_name
        // this.last_name = last_name
        this.job = job
        this.email = email
        this.phone = phone
        this.created_at = created_at
    }
}

class PersonParser {

    constructor(file) {
        this._file = file
        this._people = null
        this._fullname = null
    }

    get people() {
        return this._people
    }

    set people(value) {
        this._people = value
    }

    get fullname() {
        return this._fullname
    }

    set fullname(value) {
        this._fullname = value
    }

    get file() {
        return this._file
    }

    addPerson(file) {
        let result = []

        for (let i = 1; i < file.length; i++) {
            let data = file[i]
            result.push(new Person(data[0],this.findFullname(data[1],data[2]),this.changeJob(),data[3],data[4],new date(data[5]) ))
    
        }

        return result 
    }

    findFullname(first, second) {
        let arrFullname = `${first} ${second}`


        // for (let i = 1; i < data.length; i++) {
        //     let person = data[i]
        //     arrFullname.push(`${person[1]} ${person[2]}`)
        // }
        return arrFullname
    }

    changeJob() {
        let changeJob = ['doctor', 'nurse', 'driver', '']
    }

    save() {
        let data = JSON.stringify(this._people)
        fs.writeFileSync('people.scv', data)
    }

}

class date {
    constructor(data) {
        this.tanggal = this.tanggal(data)
        this.jam = this.jam(data)
    }

    tanggal(data) {
        if (data) {
            let output = data.split('T')
            return output[0]   
        }
    }

    jam(data) {
        if (data){
            let output = data.split('T')
            return output[1]
        }
    }
}

    let file = fs.readFileSync('./people.csv', 'utf8')
    let arr = file.split('\n')
    let data = []
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(',')
        data.push(temp)
    }

    let parser = new PersonParser('people,csv')
    parser.people = parser.addPerson(data)
    // parser.fullname = parser.findFullname(data)

    // console.log(parser.findFullname('asa' , 'sasa'))
        
    console.table(parser.people)
    // console.log(`There are ${parser.people.length} people in the file '${parser.file}'.`)

    // console.log(new date())