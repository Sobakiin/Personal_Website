const courseList = [{code:"ACIT 1620",name:"Fudamental Web Technologies"}, {code:"MATH 1310", name:"Technical Math for IT"},{code:"COMM1116", name:"Business Communications"}]

var in_code = prompt("Please enter a 4-digit course code:", "0000");
while(isNaN(in_code) || in_code.length !=4 ){
    let in_code = prompt("That is not a valid input, please enter a 4-digit course code:", "0000")
}

var exist_check = 0; 
for ( i = 0; i<=courseList.length; i++){
    if (courseList[i].code.includes(in_code)){
        exist_check++;
        console.log("Yes, I am taking the course:",  courseList[i].code);
    };
}
if(exist_check == 0){
    courseList.push({code:in_code, name: null});
    console.log("A success message.");
}