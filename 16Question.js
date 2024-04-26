// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

let marks={
David:	80,
Vinoth:	77,
Divya:	88,
Ishitha:95,
Thomas:	68
}

// console.log(Object.keys(marks).length);
let average_marks=(marks.David+marks.Vinoth+marks.Divya+marks.Ishitha+marks.Thomas)/Object.keys(marks).length

console.log(average_marks);

let student=Object.keys(marks)

for(let stud of student){
    console.log(marks[stud]);
    if(marks[stud]>=90 && marks[stud]<100){
        console.log(`${stud} got grade A`);
    }
    else if(marks[stud]>=80 && marks[stud] <90){
        console.log(`${stud} got grade B`);
    }
    else if(marks[stud]>=70 && marks[stud] <80){
        console.log(`${stud} got grade C`);
    }
    else if(marks[stud]>=60 && marks[stud] <70){
        console.log(`${stud} got grade D`);
    }
    else{
        console.log(`${stud} got grade F`);
    }
}