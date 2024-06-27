document.addEventListener("click", submitForm);


function submitForm(event){
    // event.preventDefult();
    const name = document.querySelector('input[name="heang"]:checked');
    console.log(name.value);
    console.log("hello");
}
const chair=document.getElementById('heang-seat').nextElementSibling.innerHTML;
console.log(chair);

