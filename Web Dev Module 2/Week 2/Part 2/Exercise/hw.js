/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */

const me = {
  name: "Joh",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.skills.pop();
console.log('1,',me)

/* EXERCISE 2
Write a piece of code to create an array of only ODD numbers from 1 to 100
 */
let arr = [];
let i;
for (i = 0;i<100;i++) {
  if( i %2 !== 0) {
    arr.push(i);
  }
}
console.log('2,',arr)

/* EXERCISE 3
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
 */
arr = [];
for (i = 0; i<10; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
console.log('3,',arr);
/* EXERCISE 4
  Write a piece of code for getting only even numerical values from an array . 
 */
arr = [5,6,12,88,100,45,"52",9,35,24];
const filtered = arr.filter((num) => typeof num === 'number' && num %2 == 0)
console.log('4,',filtered);

/* EXERCISE 5
Write a piece of code to sum up the numbers in an array
 */
let total = eval(filtered.join('+'))
console.log('5,',total);

/* EXERCISE 6
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
for (i = 0; i<filtered.length;i++) {
  filtered[i] +=1;
}
console.log('6,',filtered);

/* EXERCISE 7 (EXTRA)
 Write a piece of code for deleting only even entries from an array.
*/
arr = [];


for (i = 0; i<10; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

console.log('7, Before',arr)

for (i=0;i<arr.length;i++) {
  while (arr[i] % 2 == 0) {
    arr.splice(i, 1);
}
}
// or
//arr = arr.filter(num =>  num %2 !== 0)
console.log('7, After',arr)


/* EXERCISE 8
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
 */
arr = [];
while (arr.length < 10) {
  let num = Math.floor(Math.random() * 10);
  if (!arr.includes(num)) {
    arr.push(num);
  }
}
console.log('8,',arr)

/* EXERCISE 9
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let title = ['American','Gods','The','Tenth','Anniversary','Edition','A','Novel']
for (i=0;i<title.length;i++) {
title[i] = title[i].length;
}
console.log('9,',title)
/* EXERCISE 10
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
title = title.reverse()
console.log('10,',title)
/* EXERCISE 11
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log('11,',Math.max(...title))

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
    Write a piece of code to  find the oldest movie in the provided movies array.
*/
let oldest =  Math.min(...movies.map(m => m.Year));
console.log('12,',movies.find(m => m.Year = oldest))


/* EXERCISE 13
    Write a piece of code to get the number of movies contained in the provided movies array.
*/
console.log('13,',movies.length)

/* EXERCISE 14
    Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
*/
let titles = movies.map(m => m.Title);
console.log('14,',titles);

/* EXERCISE 15
   Write a piece of code to get only the movies produced in this millennium from the provided movies array.
*/
console.log('15,',movies.filter(m => m.Year >= 2000))


/* EXERCISE 16
   Write a piece of code to get  the movie with the  id given below from the provided movies array.
*/
const id = "tt0355702";
console.log('16,',movies.find(m => m.imdbID = id))

/* EXERCISE 17
     Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
*/
console.log('17,',eval(movies.map(m => m.Year).join('+')));


/* EXERCISE 18
   Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
*/
//No string value?
const str = 'Lord';
console.log('18,', movies.filter(m => m.Title.includes(str)))