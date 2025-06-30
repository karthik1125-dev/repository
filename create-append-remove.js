let aish = document.createElement("p");
aish.textContent = "I am chitti";
aish.style.color = "blue";
aish.style.fontSize = "20px"; 
document.getElementById("vasi").appendChild(aish);
setTimeout(() => {
   let sana = document.getElementsByClassName("list")[4];
   if (sana) {
      sana.remove();
   }
}, 2000);
setTimeout(() => {
    let newHeading = document.createElement("h2");
    newHeading.innerHTML = "This is a new heading added by JavaScript";
    newHeading.style.color = "purple";
    newHeading.style.fontSize = "24px";
    document.body.appendChild(newHeading);
}, 3000);

let tagText = document.createElement("p");
tagText.textContent = "this text is appended in the tag:";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);


