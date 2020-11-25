
function createCourseArray(){

    let existCode = document.querySelectorAll('.grid-item1')
    
    let existDate = document.querySelectorAll('.grid-item3')

    let courseArray=[{code: '', date: ''},
        {code: '', date: ''},
        {code: '', date: ''}]
    let x = 0
    
    let count = 0
    while(count<3){
        console.log(document.querySelectorAll('.grid-item1')[count].innerHTML,)
        courseArray[count].code = document.querySelectorAll('.grid-item1')[count].innerHTML
        courseArray[count].date = document.querySelectorAll('.grid-item3')[count].innerHTML
        count++
    }

    console.log(courseArray)
    return courseArray
}

let courses_array = createCourseArray()


function findCourse(courseList){


    var in_code = prompt("Please enter a 4-digit course code:", "0000");
    while(isNaN(in_code) || in_code.length !=4 ){
        let in_code = prompt("That is not a valid input, please enter a 4-digit course code:", "0000")
    }

var exist_check = 0; 
for ( i = 0; i<=courseList.length; i++){
    if (courseList[i].code.includes(in_code)){
        exist_check++;

        for(let item of document.querySelectorAll(".grid-item1")){
            if(item.textContent.includes(in_code)) {item.style.backgroundcColor = "green"}
        }
        
    };
}

}