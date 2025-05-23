# R-ALAB-308.4.1---Working-with-Data-Collections

Part 3: Transforming Data
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.

Implement the following:
1-For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
2-Convert these keys to all lowercase letters for consistency.
3-Store these objects in an array, in the order that they were originally listed.
4- Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

Part 4: Sorting and Manipulating Data
It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.

Using array methods, accomplish the following tasks, in order upon the result of Part 3:
1-Remove the last element from the sorted array.
2-Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
3-Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }

Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.