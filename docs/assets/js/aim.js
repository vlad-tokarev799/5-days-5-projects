const startBtn=document.querySelector("#start"),screens=document.querySelectorAll(".screen"),timeList=document.querySelector("#time-list"),timeEl=document.querySelector("#time"),board=document.querySelector("#board"),scoreEl=document.querySelector("#score"),restartBtn=document.querySelector("#restart-btn");let time=0,score=0,timer=null;function startGame(){timer=setInterval(decreaseTime,1e3),createRandomCircle(),setTime(time)}function decreaseTime(){0===time?finishGame():setTime(--time)}function setTime(e){let t=Math.floor(e/60),r=e-60*t;t<10&&(t="0"+t),r<10&&(r="0"+r),timeEl.innerHTML=t+":"+r}function finishGame(){board.innerHTML="",scoreEl.innerHTML=score,changeScreen(3),clearInterval(timer)}function createRandomCircle(){const e=document.createElement("div");e.classList.add("circle");var t=getRandomNumber(10,60),{width:r,height:n}=board.getBoundingClientRect(),r=getRandomNumber(0,r-t),n=getRandomNumber(0,n-t);e.style.width=t+"px",e.style.height=t+"px",e.style.left=r+"px",e.style.top=n+"px",e.style.background=generateRandomColor(),board.append(e)}function getRandomNumber(e,t){return Math.round(Math.random()*(t-e)+e)}function changeScreen(e){screens.forEach(e=>e.classList.remove("active")),screens[e].classList.add("active")}function restartGame(e){e.preventDefault(),time=0,score=0,changeScreen(1)}function generateRandomColor(){return`rgb(${getRandomNumber(0,255)}, ${getRandomNumber(0,255)}, ${getRandomNumber(0,255)})`}changeScreen(0),startBtn.addEventListener("click",e=>{e.preventDefault(),changeScreen(1)}),restartBtn.addEventListener("click",restartGame),timeList.addEventListener("click",e=>{e.target.classList.contains("time-btn")&&(time=parseInt(e.target.getAttribute("data-time")),changeScreen(2),startGame())}),board.addEventListener("click",e=>{e.target.classList.contains("circle")&&(score++,e.target.remove(),createRandomCircle())});