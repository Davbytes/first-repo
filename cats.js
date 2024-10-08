const cats = [
    { name: "Gojo", age: "kitten", breed: "memecat", gender: "male", image: "images/gojo2.jpg", page: "applicaation.html" },
    { name: "Bella", age: "adult", breed: "Maine Coon", gender: "female", image: "images/bella.jpg", page: "applicaation.html" },
    { name: "Oliver", age: "kitten", breed: "Siamese", gender: "male", image: "images/oliver.jpg", page: "applicaation.html" },
    { name: "Luna", age: "adult", breed: "Persian", gender: "female", image: "images/luna.jpg", page: "applicaation.html" },
    { name: "Simba", age: "kitten", breed: "Bengal", gender: "male", image: "images/simba.jpg", page: "applicaation.html" },
    { name: "Misty", age: "kitten", breed: "Maine Coon", gender: "female", image: "images/misty.jpg", page: "applicaation.html" },
    { name: "MJ", age: "adult", breed: "Sphynx", gender: "female", image: "images/MJ.jpg", page: "applicaation.html" },
    { name: "Milo", age: "adult", breed: "Ragdoll", gender: "male", image: "images/milo.jpg", page: "applicaation.html" },
    { name: "Willow", age: "kitten", breed: "Scottish Fold", gender: "female", image: "images/willow.jpg", page: "applicaation.html" },
    { name: "Leo", age: "adult", breed: "Abyssian", gender: "male", image: "images/leo.jpg", page: "applicaation.html" },
    { name: "Daisy", age: "kitten", breed: "Birman", gender: "female", image: "images/daisy.jpg", page: "applicaation.html" },
    { name: "Max", age: "adult", breed: "Russian Blue", gender: "male", image: "images/max.jpg", page: "applicaation.html" },
    { name: "Nala", age: "kitten", breed: "Norwegian Forest", gender: "female", image: "images/nala.jpg", page: "applicaation.html" },
    { name: "Charlie", age: "adult", breed: "Siamese", gender: "male", image: "images/charlie.jpg", page: "applicaation.html" },
    { name: "Cleo", age: "kitten", breed: "Persian", gender: "female", image: "images/cleo.jpg", page: "applicaation.html" },
    { name: "Kid", age: "adult", breed: "Sphynx", gender: "male", image: "images/kid.jpg", page: "applicaation.html" },
    { name: "Zoe", age: "kitten", breed: "Tonkinese", gender: "female", image: "images/zoe.jpg", page: "applicaation.html" },
    { name: "Oscar", age: "kitten", breed: "Bengal", gender: "male", image: "images/oscar.jpg", page: "applicaation.html" },
    { name: "Hazel", age: "adult", breed: "Russian Blue", gender: "female", image: "images/hazel.jpg", page: "applicaation.html" },
    { name: "Jack", age: "adult", breed: "Scottish Fold", gender: "male", image: "images/jack.jpg", page: "applicaation.html" },
    { name: "Lily", age: "adult", breed: "Persian", gender: "female", image: "images/lily.jpg", page: "applicaation.html" },
]

function renderCats(filteredCats) {
    const container = document.getElementById('cats-container');
    container.innerHTML = '';
    filteredCats.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Age: ${cat.age}</p>
            <p>breed: ${cat.breed}</p>
            <p>Gender: ${cat.gender}</p>
            <a href="applicaation.html?name=${cat.name}&age=${cat.age}&size=${cat.breed}&gender=${cat.gender}&image=${cat.image}" class="adopt-button">Adopt</a>
        `;
        container.appendChild(catCard);
    });
}

function filterCats() {
    const age = document.getElementById('age-filter').value;
    const breed = document.getElementById('breed-filter').value;
    const gender = document.getElementById('gender-filter').value;

    const filteredCats = cats.filter(cat => 
        (age === 'any' || cat.age === age) &&
        (breed === 'any' || cat.breed === breed) &&
        (gender === 'any' || cat.gender === gender)
    );

    renderCats(filteredCats);
}

document.getElementById('age-filter').addEventListener('change', filterCats);
document.getElementById('breed-filter').addEventListener('change', filterCats);
document.getElementById('gender-filter').addEventListener('change', filterCats);

// Initial render
renderCats(cats);