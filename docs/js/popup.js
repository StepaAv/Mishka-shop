var linkOne=document.querySelector("#basket1"),linkTwo=document.querySelector("#basket2"),linkThree=document.querySelector("#basket3"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal__add-btn");linkOne.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal--show")}),linkTwo.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal--show")}),linkThree.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal--show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal--show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal--show")&&popup.classList.remove("modal--show"))});