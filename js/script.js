// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className ="subheading";


// Question 5 - kept getting undefined when trying to style with color, what am i doing wrong?

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i<paragraphs.length; i++){
    
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor ="yellow";


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list) {
    for(let i = 0; i < cats.length; i++) {
        let catNames = cats[i].name;
        console.log(catNames);
    }
}

catList();


// Question 8 - not quite sure how to solve this, could only get one to show up

const catContainer = document.querySelector(".cat-container");

const catsTwo = [
    {
        name: "Flob",
        age: 10
    },
    {
        name: "Gesthal",
    },
    {
        name: "Curt",
        age: 21
    }
];


function createCats(cats) {
    for(let i = 0; i<catsTwo.length; i++){
        catContainer.innerHTML = `<div><h5>Name: ${catsTwo[i].name}</h5>
        <p>Age: ${catsTwo[i].age}</p></div>`
    }
}

createCats();