(()=>{"use strict";class e{constructor(e,t,o,n,a,l,s,i){this.name=e,this.ships=t,this.allDamagedLocations=o,this.allDamagedShips=n,this.missedShots=a,this.duplicateLocations=l,this.allShotLocations=s,this.uniqueLocations=i}}let t=[],o=[];function n(e){t.includes(e)?n(e=Math.floor(10*Math.random())):t.push(e)}function a(e){o.includes(e)?a(e=Math.floor(10*Math.random())):o.push(e)}for(let e=0;e<10;e++)n(Math.floor(10*Math.random()));for(let e=0;e<10;e++)a(Math.floor(10*Math.random()));let l=new e("You",[{locations:[[t[0],t[1]]],damage:[]},{locations:[[t[1],t[2]]],damage:[]},{locations:[[t[2],t[3]]],damage:[]},{locations:[[t[3],t[4]]],damage:[]},{locations:[[t[4],t[5]]],damage:[]},{locations:[[t[5],t[6]]],damage:[]},{locations:[[t[6],t[7]]],damage:[]},{locations:[[t[7],t[8]]],damage:[]},{locations:[[t[8],t[9]]],damage:[]},{locations:[[t[9],t[9]]],damage:[]}],[],[],[],[],[],[]),s=new e("computer",[{locations:[[o[0],o[1]]],damage:[]},{locations:[[o[1],o[2]]],damage:[]},{locations:[[o[2],o[3]]],damage:[]},{locations:[[o[3],o[4]]],damage:[]},{locations:[[o[4],o[5]]],damage:[]},{locations:[[o[5],o[6]]],damage:[]},{locations:[[o[6],o[7]]],damage:[]},{locations:[[o[7],o[8]]],damage:[]},{locations:[[o[8],o[9]]],damage:[]},{locations:[[o[9],o[9]]],damage:[]}],[],[],[],[],[],[]),i=document.querySelector(".winner"),c=document.querySelector(".turn"),r=document.querySelector(".gameboards span"),u=document.querySelector(".gameboards button"),d=new Audio("sounds/win.wav"),m=function(e,t){for(let o=0;o<e.ships.length;o++)for(let n=0;n<e.ships[o].locations.length;n++)e.ships[o].locations[n][0]===t[0]&&e.ships[o].locations[n][1]===t[1]&&(e.ships[o].damage.push(t),p(e,t));e.allDamagedLocations.includes(t)||(h(e,t),function(e,t){let o=document.querySelector(`.squarePL02[coordinates = "${t}"]`),n=document.querySelector(`.squarePL01[coordinates = "${t}"]`);e===s.name?(o.style.background="none",o.style.backgroundSize="50px",o.style.backgroundImage="url('images/wave.jpg')",o.style.backgroundRepeat="no-repeat",f.play()):e===l.name&&(n.style.background="none",n.style.backgroundSize="50px",n.style.backgroundImage="url('images/wave.jpg')",n.style.backgroundRepeat="no-repeat",f.play())}(e.name,t))};function p(e,t){e.allDamagedLocations.push(t)}let y=(e,t)=>t.every((t=>e.includes(t)));function g(e){for(let t=0;t<e.ships.length;t++){let o=[].concat.apply([],e.ships[t].damage),n=[].concat.apply([],e.ships[t].locations);if(y(o,n)){if(e.allDamagedShips.includes(e.ships[t]))continue;e.allDamagedShips.push(e.ships[t])}}}const h=(e,t)=>{e.missedShots.push(t)};let f=new Audio("sounds/hit.wav"),S=new Audio("sounds/shipDestroyed.wav");function q(e,t){i.innerText=function(e,t){let o=e.allDamagedShips.length,n=t.allDamagedShips.length,a=e.ships.length,l=t.ships.length;return o<n&&l===n?(m=null,f.muted=!0,S.muted=!0,i.style.display="flex",c.style.display="none",r.style.display="block",u.style.display="block",d.play(),d.loop=!0,e.name+" wins"):o>n&&a===o?(m=null,f.muted=!0,S.muted=!0,i.style.display="flex",c.style.display="none",r.style.display="block",u.style.display="block",d.play(),d.loop=!0,t.name+" win"):void(i.style.display="none")}(e,t),i.style.color="rgb(0, 255, 50)"}let b=[],L=[];for(let e=0;e<10;e++)for(let t=0;t<10;t++)b.push([e,t]),L.push([e,t]);document.querySelector("body");const k=new Audio("sounds/clickButton.wav"),w=document.querySelector(".newGame"),v=document.querySelector(".instructions"),E=document.querySelector(".game"),M=document.querySelector(".gameMenuScreen"),x=document.querySelector(".instructionsPage"),D=document.querySelector(".menu");w.addEventListener("click",(()=>{k.play(),E.style.display="block",M.style.display="none"})),v.addEventListener("click",(()=>{k.play(),E.style.display="none",D.style.display="none",x.style.display="flex"})),function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){let o=document.createElement("div");o.setAttribute("coordinates",[e,t]),o.classList.add("squarePL01"),document.querySelector(".gameboard01").appendChild(o)}for(let e=0;e<10;e++)for(let t=0;t<10;t++){let o=document.createElement("div");o.setAttribute("coordinates",[e,t]),o.classList.add("squarePL02"),document.querySelector(".gameboard02").appendChild(o)}}(),function(){for(let e=0;e<l.ships.length;e++)for(let t=0;t<l.ships[e].locations.length;t++){let o=document.querySelector(`.squarePL01[coordinates = "${l.ships[e].locations[t]}"]`);o.style.backgroundImage="url('images/ship2.svg')",o.style.backgroundRepeat="no-repeat"}}();let P=!1,A=!0,T=(()=>{let e=10;return()=>--e})(),C=(()=>{let e=10;return()=>--e})();document.querySelector(".winner").style.display="none";let I=document.querySelectorAll(".squarePL01"),$=document.querySelectorAll(".squarePL02"),R=document.querySelector(".computerShipsCount span"),j=document.querySelector(".playerShipsCount span");function z(){let e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())];m(l,e),function(e,t){e.allShotLocations.push(t),function(e,t){JSON.stringify(e.uniqueLocations).includes(t)?e.duplicateLocations.push(t):e.uniqueLocations.push(t)}(e,t)}(l,e),function(e,t){if(JSON.stringify(e.duplicateLocations).includes(t))return!0}(l,e)?z():(l.allDamagedLocations.includes(e)&&(function(e){let t=document.querySelector(`.squarePL01[coordinates = "${e}"]`);t.innerText="X",t.style.color="rgb(228, 7, 37)",t.style.borderColor="#000",S.play()}(e),j.innerText=C()),g(l),J(),c.innerText="Your turn",c.style.color="rgb(1, 123, 236)",q(s,l))}function J(){!0===A?(A=!1,P=!0,I.forEach((e=>{O(e)})),$.forEach((e=>{N(e)})),setTimeout(z,1e3)):!0===P&&(A=!0,P=!1,I.forEach((e=>{N(e)})),$.forEach((e=>{O(e)})))}function N(e){e.style.pointerEvents="none"}function O(e){e.style.pointerEvents="auto"}I.forEach((e=>{N(e)})),$.forEach((e=>{e.addEventListener("click",(t=>{J(),c.innerText="Computer's turn",c.style.color="rgb(228, 7, 37)";let o=e.getAttribute("coordinates").split(",").map((e=>parseInt(e)));m(s,o),s.allDamagedLocations.includes(o)&&(function(e){let t=document.querySelector(`.squarePL02[coordinates = "${e}"]`);t.innerText="X",t.style.color="rgb(1, 123, 236)",t.style.borderColor="#000",t.style.backgroundImage="url('images/ship1.svg')",t.style.backgroundRepeat="no-repeat",S.play()}(o),R.innerText=T()),g(s),q(s,l)}),{once:!0})})),u.addEventListener("click",(()=>{window.location.reload()}))})();