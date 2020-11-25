
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
    for ( let i of courseList){
        if (i.code.includes(in_code)){
            exist_check++;

            for(let item of document.querySelectorAll(".grid-item1")){
                if(item.textContent.includes(in_code)){item.style.backgroundColor = "green"}
            }
            
        };
    }
    if(exist_check == 0){
        let ob_class= document.querySelector(".course-box")
        let new_course = document.createElement("DIV");

        let class_code = document.createElement("A")

        class_code.classList.add(".grid-item1")
        class_code.appendChild(document.createTextNode(in_code))

        let course_desc = document.createElement("P")
        course_desc.classList.add(".grid-item2")
        course_desc.appendChild(document.createTextNode("N/A"))

        let course_date = document.createElement("P")
        course_date.classList.add(".grid-item3")
        course_date.appendChild(document.createTextNode("Fall 2020"))


        new_course.appendChild(class_code);
        new_course.appendChild(course_desc);
        new_course.appendChild(course_date);


        ob_class.appendChild(new_course);

    }
}
findCourse(courses_array)