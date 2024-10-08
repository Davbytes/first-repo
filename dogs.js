const dogs = [
    { name: "Twinsie", age: "puppy", size: "small", gender: "female", image: "images/1.jpg", page: "applicaation.html" },
    { name: "Bongo", age: "adult", size: "medium", gender: "male", image: "images/m.avif", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "small", gender: "female", image: "images/small3.jpg", page: "applicaation.html" },
    { name: "Joey", age: "adult", size: "large", gender: "male", image: "images/a.jpg", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "small", gender: "female", image: "images/small1.jpg", page: "applicaation.html" },
    { name: "Clover", age: "senior", size: "medium", gender: "female", image: "images/n.jpg", page: "applicaation.html" },
    { name: "Charlotte", age: "adult", size: "large", gender: "female", image: "images/b.jpg", page: "applicaation.html" },
    { name: "Antonio", age: "puppy", size: "small", gender: "male", image: "images/2.jpg", page: "applicaation.html" },
    { name: "Charlotte", age: "adult", size: "large", gender: "female", image: "images/big1.avif", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "small", gender: "female", image: "images/3.jpg", page: "applicaation.html" },
    { name: "Charlotte", age: "adult", size: "large", gender: "female", image: "images/big2.avif", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "medium", gender: "female", image: "images/medium1.avif", page: "applicaation.html" },
    { name: "Twinsie", age: "puppy", size: "small", gender: "female", image: "images/4.jpg", page: "applicaation.html" },
    { name: "Bongo", age: "adult", size: "medium", gender: "male", image: "images/o.avif", page: "applicaation.html" },
    { name: "Joey", age: "adult", size: "large", gender: "male", image: "images/c.jpg", page: "applicaation.html"},
    { name: "Clover", age: "senior", size: "medium", gender: "female", image: "images/p.avif", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "small", gender: "female", image: "images/small2.jpg", page: "applicaation.html" },
    { name: "Charlotte", age: "adult", size: "large", gender: "female", image: "images/d.avif", page: "applicaation.html" },
    { name: "Antonio", age: "puppy", size: "small", gender: "male", image: "images/5.avif", page: "applicaation.html" },
    { name: "Ginger", age: "senior", size: "small", gender: "female", image: "images/6.avif", page: "applicaation.html" },
]
function renderDogs(filteredDogs) {
    const container = document.getElementById('dogs-container');
    container.innerHTML = '';
    filteredDogs.forEach(dog => {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h3>${dog.name}</h3>
            <p>Age: ${dog.age}</p>
            <p>Size: ${dog.size}</p>
            <p>Gender: ${dog.gender}</p>
            <a href="applicaation.html?name=${dog.name}&age=${dog.age}&size=${dog.size}&gender=${dog.gender}&image=${dog.image}" class="adopt-button">Adopt</a>

        `;
        container.appendChild(dogCard);
    });
}


function filterDogs() {
    const age = document.getElementById('age-filter').value;
    const size = document.getElementById('size-filter').value;
    const gender = document.getElementById('gender-filter').value;

    const filteredDogs = dogs.filter(dog => 
        (age === 'any' || dog.age === age) &&
        (size === 'any' || dog.size === size) &&
        (gender === 'any' || dog.gender === gender)
    );

    renderDogs(filteredDogs);
}

document.getElementById('age-filter').addEventListener('change', filterDogs);
document.getElementById('size-filter').addEventListener('change', filterDogs);
document.getElementById('gender-filter').addEventListener('change', filterDogs);

// Initial render
renderDogs(dogs);