
function changeStyles() {
  const button = document.getElementById("modeChangerIcon");
  var count = 1;  
  const items = document.querySelectorAll(".theme")
  const texts = document.querySelectorAll(".theme-text")

  button.addEventListener("click", () => {
    count ++;
    console.log(count);
    if (count === 2) {
      count = 0;
      changeToBlack();
    }
    if (count === 1) {
        changeToWhite();
    }
  });
  function changeToBlack() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
   
    items.forEach(item=> {
      item.style.border ="solid white"
      
    })
    texts.forEach(text => {
      text.style.textDecoration = "underline 3px solid white"; // Use textDecoration for underline
    });
  
  }
  function changeToWhite(){
    document.body.style = "white"
    items.forEach(item=> {
      item.style.border ="solid black"
      
    })
    texts.forEach(text => {
      text.style.textDecoration = "underline 3px solid black"; // Use textDecoration for underline
    });  
}}
export default changeStyles;
