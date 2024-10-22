const featButton = document.getElementById("featButton")
const featOpened = document.getElementById("featOpened")
const featClosed = document.getElementById("featClosed")
const featList = document.querySelector(".featList")

const comButton = document.getElementById("comButton")
const comOpened = document.getElementById("comOpened")
const comClosed = document.getElementById("comClosed")
const comList = document.querySelector(".comList")

const learnButton = document.getElementById("learnButton")


document.getElementById("featButton").addEventListener("click", function(){
  if (featButton.classList.contains("Visible")) {
    featList.style.display = "none"
    featOpened.style.display = "block"
    featClosed.style.display = "none"
    featButton.style.color = "gray" 
    featButton.classList.remove("Visible")
  } else {
    featList.style.display = "flex"
    featOpened.style.display = "none"
    featClosed.style.display = "block"
    featButton.style.color = "black"
    featButton.classList.add("Visible")
  }
  })

  document.getElementById("comButton").addEventListener("click", function(){
    if (comButton.classList.contains("Visible")) {
      comList.style.display = "none"
      comOpened.style.display = "block"
      comClosed.style.display = "none"
      comButton.style.color = "gray" 
      comButton.classList.remove("Visible")
    } else {
      comList.style.display = "flex"
      comOpened.style.display = "none"
      comClosed.style.display = "block"
      comButton.style.color = "black"
      comButton.classList.add("Visible")
    }
    })  

    document.getElementById("learnButton").addEventListener("click", function(){
    learnButton.style.backgroundColor = "white"
    learnButton.style.color = "black"
    })