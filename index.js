document.addEventListener ('DOMContentLoaded', () => {
  
        fetch ('http://localhost:3000/meals')
    .then(res => res.json())
    .then(data=>{
// console.log(data)
    //  let commentform = document.getElementById("comment-form")
    // searchform.addEventListener('submit', (e) => {
    //     e.preventDefault ();
        // let searchform = document.querySelector("#searchform")
    //     let searchvalue = input.value
for (const food of data ){
    const foodSection = document.createElement('div')
    foodSection.innerHTML = `
    <img src="${food.image}" alt="${food.title}" >
    ` 
}
 
    })
    })
    













