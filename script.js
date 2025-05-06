// Part 2: Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.

let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 
	console.log(char)

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}

console.log(table)

// PART 3 Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.


table = [
   ["ID", "Name", "Occupation", "Age"],
   ["42", "Bruce", "Knight", "41"],
   ["57", "Bob", "Fry Cook", "19"],
   ["63", "Blaine", "Quiz Master", "58"],
   ["98", "Bill", "Doctor’s Assistant", "26"]
]

let newTable= [];

for (let i = 1; i < table.length; i++){
   
   let row = table[i]


   let obj= {
      id:           row[0],
      name:         row[1],
      occupation:   row[2],
      age:          row[3]
    
   };

   newTable.push(obj);   

}
console.log(newTable);


//Part 4: Sorting and Manipulating Data
// Remove the last element from the sorted array.
// Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }


newTable = [
{id: '42', name: 'Bruce', occupation: 'Knight', age: '41'}, //0
{id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19'},//1
{id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'}, //2
{id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'} //3

]


newTable.pop()
let arrL ={ id: "7", name: "Bilbo", occupation: "None", age: '111'} //4
let arrB= { id: "48", name: "Barry", occupation: "Runner", age: '25'}//5
newTable.push(arrL)
newTable.splice(1,0,arrB)
console.log(newTable);


let totalAge = 0;

for(i =0 ; i < newTable.length; i++){

      totalAge+=Number(newTable[i].age);
   
      }

console.log(totalAge)


let aVerage = totalAge/newTable.length; 

console.log(aVerage)