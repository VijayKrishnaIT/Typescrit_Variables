var sub = "ReactJS";
var wish = "welcome to " + sub + " with Typescript";
console.log(wish); //welcome to ReactJS with Typescript
var table_name = "employees";
var u_name = "scott";
var u_pwd = "tiger";
var sql_query = "select * from " + table_name + " where uname='" + u_name + "' and upwd='" + u_pwd + "'";
console.log(sql_query); // select * from employees where uname='scott' and upwd='tiger'
//number
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC; //prefix with 0x
var octal = 83; //prefix with 0o
var binary = 10; //prefix with 0b
console.log(decimal, double, hexadecimal, octal, binary); //100 100.12345 1194684 83 10
//100 is decimal
//100.12345 double 
//119468 hexadecimal
//83 octal
//10 binary
//Boolean
var $flag = true;
console.log($flag); //true
var demo = 1000;
console.log(demo); // 1000
demo = "Active";
console.log(demo); // Active
//any
var demo1 = 200;
var demo2 = "Hello";
var demo3 = "true";
var demo4 = { "wish": "welcome to React Native" };
console.log(demo1, demo2, demo3, demo4);
//array
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [100, 200, 300, 400, 500];
//forEach
arr1.forEach(function (element, index) {
    console.log(element, arr2[index]);
});
/*
10 100
20 200
30 300
40 400
50 500
*/
var sub1 = ["Angular10", "ReactJS", "VueJs"];
var sub2 = ["MongoDB", "Cassandra", "CouchDB"];
sub1.forEach(function (element, index) {
    console.log(element, sub2[index]);
});
