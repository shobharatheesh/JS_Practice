//let age = 24;   //numerical datatype
//let fullName = "Shobha Rao";  //string datatype
//let price = 100.5; //float datatype
//isFollow =true; //boolean datatype
//let x;


const student = {

    fullName : "Rahul Kumar",   //key value pair --student object
    age : 20,
    cgpa: 8.2,
    isPass: true,
};

student["age"]  = student["age"] + 1;
student["cgpa"] = student["cgpa"] +1.0;
student["name"] = "Rahul";

console.log(student);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student["name"]);

