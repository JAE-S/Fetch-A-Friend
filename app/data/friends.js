// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
var friends = [
{
    "first_name":"Person 1",
    "last_name":"Person 1-2",
    "photo":"",
    "scores":[
        1,
        2,
        3,
        1,
        2,
        3,
        1,
        2,
        3,
        1
      ]
  },
  {
    "first_name": "Person 2",
    "last_name": "Person 2-2",
    "photo":"",
    "scores":[
        1,
        2,
        3,
        1,
        2,
        3,
        1,
        2,
        3,
        1
      ]
  },
  {
    "first_name": "Person 3",
    "last_name": "Person 3-2",
    "photo":"",
    "scores":[
        1,
        2,
        3,
        1,
        2,
        3,
        1,
        2,
        3,
        1
      ]
  },
  {
    "first_name": "Person 4",
    "last_name": "Person 4-2",
    "photo":"",
    "scores":[
        1,
        2,
        3,
        1,
        2,
        3,
        1,
        2,
        3,
        1
      ]
  }, 

]

module.exports = friends; 
// console.log(friends);


// Determine the user's most compatible friend using the following as a guide:



// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


// Example:


// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5





// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.


// The modal should display both the name and picture of the closest match.