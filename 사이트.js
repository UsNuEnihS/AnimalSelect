const animals = ['고양이', '개', '호랑이', '코끼리', '기린', '사슴', ]; 

document.getElementById('randomButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];
    document.getElementById('animalName').textContent = randomAnimal;
});
