var sub: string = "ReactJS";
var wish: string = `welcome to ${sub} with Typescript`;
console.log(wish); //welcome to ReactJS with Typescript


var table_name: string = "employees";
var u_name: string = `scott`;
var u_pwd: string = `tiger`;
var sql_query: string = `select * from ${table_name} where uname='${u_name}' and upwd='${u_pwd}'`;

console.log(sql_query); // select * from employees where uname='scott' and upwd='tiger'

//number

var decimal: number = 100;

var double: number = 100.12345;

var hexadecimal: number = 0x123ABC; //prefix with 0x

var octal: number = 0o123; //prefix with 0o

var binary: number = 0b1010; //prefix with 0b

console.log(decimal, double, hexadecimal, octal, binary); //100 100.12345 1194684 83 10

//100 is decimal

//100.12345 double 

//119468 hexadecimal

//83 octal

//10 binary

//Boolean

var $flag: boolean = true;

console.log($flag); //true

var demo: number | string = 1000;
console.log(demo); // 1000
demo = "Active";
console.log(demo);// Active


//any

var demo1: any = 200;
var demo2: any = `Hello`;
var demo3: any = `true`;
var demo4: any = { "wish": "welcome to React Native" };
console.log(demo1, demo2, demo3, demo4);

//array
var arr1: number[] = [10, 20, 30, 40, 50];
var arr2: Array<number> = [100, 200, 300, 400, 500];

//forEach

arr1.forEach((element, index) => {
    console.log(element, arr2[index])
})
/*
10 100
20 200
30 300
40 400
50 500
*/

var sub1: string[] = [`Angular10`, `ReactJS`, `VueJs`];
var sub2: Array<string> = [`MongoDB`, `Cassandra`, `CouchDB`];

sub1.forEach((element, index) => {
    console.log(element, sub2[index]);
})
/*
Angular10 MongoDB
ReactJS Cassandra
VueJs CouchDB
*/


