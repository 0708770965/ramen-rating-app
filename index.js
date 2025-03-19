document.addEventListener('DOMContentLoaded', () => {
    const ramenList = document.getElementById('ramen-list');
    const ramenDetail = document.getElementById('ramen-detail');
    const addRamenForm = document.getElementById('add-ramen-form');
    const ramenImage = document.getElementById('ramen-image');

    let ramenData = [
        {
            name: 'Miso Ramen',
            restaurant: 'Ramen House',
            rating: 4,
            comment: 'Delicious miso flavor!',
            image: 'images/Image-1_-miso-ramen-1024x538.png'
        },
        {
            name: 'Sapporo Ramen',
            restaurant: 'Sapporo Kitchen',
            rating: 5,
            comment: 'Rich and creamy broth.',
            image: 'images/Image-2_-sapporo-ramen-1024x538.png'
        },
        {
            name: 'Tonkotsu Ramen',
            restaurant: 'Tonkotsu Heaven',
            rating: 4.5,
            comment: 'Thick and hearty pork bone broth.',
            image: 'images/Image-3_tonkotsu-ramen-1024x538.png'
        },
        {
            name: 'Ichiran Ramen',
            restaurant: 'Ichiran',
            rating: 4.8,
            comment: 'Perfectly balanced flavors.',
            image: 'images/Image-4_-ichiran-ramen-1024x538.png'
        }
    ];

    function displayRamenList() {
        ramenList.innerHTML = '';
        ramenData.forEach((ramen, index) => {
            const li = document.createElement('li');
            li.textContent = ramen.name;
            li.addEventListener('click', () => displayRamenDetails(index));
            ramenList.appendChild(li);
        });
    }

    function displayRamenDetails(index) {
        const ramen = ramenData[index];
        document.getElementById('ramen-name').textContent = ramen.name;
        document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
        document.getElementById('ramen-rating').textContent = ramen.rating;
        document.getElementById('ramen-comment').textContent = ramen.comment;
        ramenImage.src = ramen.image;
        ramenImage.alt = ramen.name;
        ramenDetail.style.display = 'block';
    }

    addRamenForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('ramen-name-input').value;
        const restaurant = document.getElementById('ramen-restaurant-input').value;
        const rating = document.getElementById('ramen-rating-input').value;
        const comment = document.getElementById('ramen-comment-input').value;
        const imageInput = document.getElementById('ramen-image-input');
        const image = URL.createObjectURL(imageInput.files[0]);

        const newRamen = {
            name,
            restaurant,
            rating,
            comment,
            image
        };

        ramenData.push(newRamen);
        displayRamenList();
        addRamenForm.reset();
    });

    displayRamenList();
});
