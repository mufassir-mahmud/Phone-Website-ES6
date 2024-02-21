const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-Container');
    
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    phones = phones.slice(0,12)

    phones.forEach(phone => {
        // console.log(phone);
        // step 2
        const phoneCard = document.createElement('div');
        // step 3
        phoneCard.classList = `card w-96 p-4 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center ">
        <button class="btn btn-primary ">Buy Now</button>
        </div>                  
        </div>                     
        
        `;
        phoneContainer.appendChild(phoneCard)
    })
}

const handleClick = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadData(searchText)
}

