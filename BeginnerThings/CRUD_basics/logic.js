let form = document.getElementById("form");
let errorMessege = document.getElementById("errorMessege");
let textBox = document.getElementById("text-box");
let btn = document.getElementById("btn");
let posts = document.getElementById("posts");


form.addEventListener("submit" , (e)=>{
    e.preventDefault(); 
    formValidation();
});

let formValidation =()=>{
    if (textBox.value === ""){
        errorMessege.innerHTML = "Post can't be empty";
    } else {
        errorMessege.innerHTML = "";
        acceptData();
    }
}

let data = {};
let acceptData = ()=>{
    data["text"] = textBox.value;
    createPost();
}
let createPost = () =>{
    posts.innerHTML += 
    `<div> 
        <p >${data.text}</p>
        <span onClick="editPost(this)" class="opitions"><i class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash"></i></span>
    </div>`;

    textBox.value = "";
}

let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
}
let editPost = (e) =>{
    textBox.value = e.previousElementSibling.innerHTML;
    e.parentElement.remove();
}
