(()=>{"use strict";var e=function e(o,n,a,t,s,r,i,c){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=o,this.ships=n,this.allDamagedLocations=a,this.allDamagedShips=t,this.missedShots=s,this.duplicateLocations=r,this.allShotLocations=i,this.uniqueLocations=c},o=[],n=[];function a(e){o.includes(e)?a(e=Math.floor(10*Math.random())):o.push(e)}function t(e){n.includes(e)?t(e=Math.floor(10*Math.random())):n.push(e)}for(var s=0;s<10;s++)a(Math.floor(10*Math.random()));for(var r=0;r<10;r++)t(Math.floor(10*Math.random()));var i=new e("You",[{locations:[[o[0],o[1]]],damage:[]},{locations:[[o[1],o[2]]],damage:[]},{locations:[[o[2],o[3]]],damage:[]},{locations:[[o[3],o[4]]],damage:[]},{locations:[[o[4],o[5]]],damage:[]},{locations:[[o[5],o[6]]],damage:[]},{locations:[[o[6],o[7]]],damage:[]},{locations:[[o[7],o[8]]],damage:[]},{locations:[[o[8],o[9]]],damage:[]},{locations:[[o[9],o[9]]],damage:[]}],[],[],[],[],[],[]),c=new e("computer",[{locations:[[n[0],n[1]]],damage:[]},{locations:[[n[1],n[2]]],damage:[]},{locations:[[n[2],n[3]]],damage:[]},{locations:[[n[3],n[4]]],damage:[]},{locations:[[n[4],n[5]]],damage:[]},{locations:[[n[5],n[6]]],damage:[]},{locations:[[n[6],n[7]]],damage:[]},{locations:[[n[7],n[8]]],damage:[]},{locations:[[n[8],n[9]]],damage:[]},{locations:[[n[9],n[9]]],damage:[]}],[],[],[],[],[],[]),l=document.querySelector(".winner"),u=document.querySelector(".turn"),d=document.querySelector(".gameboards span"),m=document.querySelector(".gameboards button"),p=new Audio("sounds/win.wav"),y=function(e,o){for(var n=0;n<e.ships.length;n++)for(var a=0;a<e.ships[n].locations.length;a++)e.ships[n].locations[a][0]===o[0]&&e.ships[n].locations[a][1]===o[1]&&(e.ships[n].damage.push(o),h(e,o));e.allDamagedLocations.includes(o)||(v(e,o),function(e,o){var n=document.querySelector('.squarePL02[coordinates = "'.concat(o,'"]')),a=document.querySelector('.squarePL01[coordinates = "'.concat(o,'"]'));e===c.name?(n.style.background="none",n.style.backgroundSize="50px",n.style.backgroundImage="url('images/wave.jpg')",n.style.backgroundRepeat="no-repeat",S.play()):e===i.name&&(a.style.background="none",a.style.backgroundSize="50px",a.style.backgroundImage="url('images/wave.jpg')",a.style.backgroundRepeat="no-repeat",S.play())}(e.name,o))};function h(e,o){e.allDamagedLocations.push(o)}var g=function(e,o){return o.every((function(o){return e.includes(o)}))};function f(e){for(var o=0;o<e.ships.length;o++){var n=[].concat.apply([],e.ships[o].damage),a=[].concat.apply([],e.ships[o].locations);if(g(n,a)){if(e.allDamagedShips.includes(e.ships[o]))continue;e.allDamagedShips.push(e.ships[o])}}}var v=function(e,o){e.missedShots.push(o)},S=new Audio("sounds/hit.wav"),q=new Audio("sounds/shipDestroyed.wav");function b(e,o){l.innerText=function(e,o){var n=e.allDamagedShips.length,a=o.allDamagedShips.length,t=e.ships.length,s=o.ships.length;return n<a&&s===a?(y=null,S.muted=!0,q.muted=!0,l.style.display="flex",u.style.display="none",d.style.display="block",m.style.display="block",p.play(),p.loop=!0,e.name+" wins"):n>a&&t===n?(y=null,S.muted=!0,q.muted=!0,l.style.display="flex",u.style.display="none",d.style.display="block",m.style.display="block",p.play(),p.loop=!0,o.name+" win"):void(l.style.display="none")}(e,o),l.style.color="rgb(0, 255, 50)"}for(var L=[],k=[],w=0;w<10;w++)for(var E=0;E<10;E++)L.push([w,E]),k.push([w,E]);document.querySelector("body");var M=new Audio("sounds/clickButton.wav"),x=document.querySelector(".newGame"),D=document.querySelector(".instructions"),P=document.querySelector(".game"),A=document.querySelector(".gameMenuScreen"),T=document.querySelector(".instructionsPage"),C=document.querySelector(".menu");x.addEventListener("click",(function(){M.play(),P.style.display="block",A.style.display="none"})),D.addEventListener("click",(function(){M.play(),P.style.display="none",C.style.display="none",T.style.display="flex"})),function(){for(var e=0;e<10;e++)for(var o=0;o<10;o++){var n=document.createElement("div");n.setAttribute("coordinates",[e,o]),n.classList.add("squarePL01"),document.querySelector(".gameboard01").appendChild(n)}for(var a=0;a<10;a++)for(var t=0;t<10;t++){var s=document.createElement("div");s.setAttribute("coordinates",[a,t]),s.classList.add("squarePL02"),document.querySelector(".gameboard02").appendChild(s)}}(),function(){for(var e=0;e<i.ships.length;e++)for(var o=0;o<i.ships[e].locations.length;o++){var n=document.querySelector('.squarePL01[coordinates = "'.concat(i.ships[e].locations[o],'"]'));n.style.backgroundImage="url('images/ship2.svg')",n.style.backgroundRepeat="no-repeat"}}();var I,R,j=!1,z=!0,J=(I=10,function(){return--I}),N=(R=10,function(){return--R});document.querySelector(".winner").style.display="none";var O=document.querySelectorAll(".squarePL01"),X=document.querySelectorAll(".squarePL02"),Y=document.querySelector(".computerShipsCount span"),B=document.querySelector(".playerShipsCount span");function G(){var e,o,n=[Math.floor(10*Math.random()),Math.floor(10*Math.random())];y(i,n),function(e,o){e.allShotLocations.push(o),function(e,o){JSON.stringify(e.uniqueLocations).includes(o)?e.duplicateLocations.push(o):e.uniqueLocations.push(o)}(e,o)}(i,n),function(e,o){if(JSON.stringify(e.duplicateLocations).includes(o))return!0}(i,n)?G():(i.allDamagedLocations.includes(n)&&(e=n,(o=document.querySelector('.squarePL01[coordinates = "'.concat(e,'"]'))).innerText="X",o.style.color="rgb(228, 7, 37)",o.style.borderColor="#000",q.play(),B.innerText=N()),f(i),F(),u.innerText="Your turn",u.style.color="rgb(1, 123, 236)",b(c,i))}function F(){!0===z?(z=!1,j=!0,O.forEach((function(e){K(e)})),X.forEach((function(e){H(e)})),setTimeout(G,1e3)):!0===j&&(z=!0,j=!1,O.forEach((function(e){H(e)})),X.forEach((function(e){K(e)})))}function H(e){e.style.pointerEvents="none"}function K(e){e.style.pointerEvents="auto"}O.forEach((function(e){H(e)})),X.forEach((function(e){e.addEventListener("click",(function(o){F(),u.innerText="Computer's turn",u.style.color="rgb(228, 7, 37)";var n,a,t=e.getAttribute("coordinates").split(",").map((function(e){return parseInt(e)}));y(c,t),c.allDamagedLocations.includes(t)&&(n=t,(a=document.querySelector('.squarePL02[coordinates = "'.concat(n,'"]'))).innerText="X",a.style.color="rgb(1, 123, 236)",a.style.borderColor="#000",a.style.backgroundImage="url('images/ship1.svg')",a.style.backgroundRepeat="no-repeat",q.play(),Y.innerText=J()),f(c),b(c,i)}),{once:!0})})),m.addEventListener("click",(function(){window.location.reload()}))})();