const courseList = [{code:"ACIT 1620",name:"Fudamental Web Technologies"}, {code:"MATH 1310", name:"Technical Math for IT"},{code:"COMM1116", name:"Business Communications"}]

var in_code = prompt("Please enter a 4-digit course code:", "0000");
while(isNaN(in_code) || length(in_code)!=4 ){
    let in_code = prompt("That is not a valid input, please enter a 4-digit course code:", "0000")
}