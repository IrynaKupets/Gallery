console.log("Hello");
const wrapper = document.querySelector('.wrapper')
console.log('wrapper', wrapper)
function createCard(cardObj){
    return `
    <div class="card">
        <div class ="header">
            <img class ="header-image" src="./ava.png" alt="ava">
            <div class ="header-title">
                ${cardObj.author
                    
                }
            </div>
        </div>
        <div class="image-vrapper">
            <img class ="image" src="${cardObj.download_url}" alt="test image">
        </div>
        <div class="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex reprehenderit dignissimos amet. Delectus nulla voluptas labore veritatis molestias at aperiam, recusandae, non unde aut saepe voluptates assumenda quam commodi!
        </div>
    </div>
     `;
}
fetch('https://picsum.photos/v2/list')
    .then(function(response){
        return response.json();
    })
    .then((data) =>{
        console.log("data", data);

        let cardList = '';
        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)
        });

        wrapper.innerHTML = cardList;
        

        let msnry
        setTimeout(() => { msnry = new Masonry(wrapper);
        }, 1000)
        setTimeout(() => {msnry.update();
        }, 2000)

    })