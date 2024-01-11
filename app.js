const button = document.getElementById('button');

let number = 1;
const item = () =>{
    const newItem = document.createElement('p');
    newItem.textContent = "item "+`${number}`;
    newItem.classList.add('new-Item');
    let itemContainer = document.querySelector('.itemcontainer');
    itemContainer.appendChild(newItem);
    number++;
}

button.addEventListener('click',()=>{
    item();
});
