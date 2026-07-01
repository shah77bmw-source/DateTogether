function start(){

let name=document.getElementById("name").value.trim();

if(!name){

alert("اول اسمت رو بنویس 😊");

return;

}

document.querySelector(".glass").innerHTML=`

<div class="logo">❤️</div>

<h1>

سلام ${name}

</h1>

<p>

خیلی خوش اومدی...

<br><br>

یه سورپرایز کوچیک برات آماده کردم.

</p>

<button onclick="next()">

شروع سفر ✨

</button>

`;

}

function next(){

const card=document.querySelector(".glass");

card.classList.add("page");

card.innerHTML=`

<div class="logo">💖</div>

<div class="progress">
<span></span>
</div>

<h2 id="title"></h2>

<div id="story" class="type"></div>

<button id="go" class="hide" onclick="question1()">
ادامه →
</button>

`;

type();

}

function type(){

const title=document.getElementById("title");

const text=document.getElementById("story");

const btn=document.getElementById("go");

title.textContent="یه نامه کوچیک...";

const msg=`

از اینکه تا اینجا اومدی...

خیلی خوشحالم ❤️

امشب میخوام یه خاطره قشنگ برات بسازم...

فقط تا آخر همراهم باش...

`;

let i=0;

const timer=setInterval(()=>{

text.textContent+=msg[i];

i++;

if(i>=msg.length){

clearInterval(timer);

btn.classList.remove("hide");

}

},40);

}
let answers={};

function question1(){

const card=document.querySelector(".glass");

card.innerHTML=`

<div class="logo">☕</div>

<div class="progress">
<span style="width:40%"></span>
</div>

<h2>

اگر امروز کنار هم باشیم...

</h2>

<p>

دلت بیشتر کدومو میخواد؟

</p>

<div class="cards">

<div class="card" onclick="select(this,'کافه')">
☕<br><br>کافه
</div>

<div class="card" onclick="select(this,'سینما')">
🎬<br><br>سینما
</div>

<div class="card" onclick="select(this,'پیاده روی')">
🌃<br><br>پیاده روی
</div>

<div class="card" onclick="select(this,'شام')">
🍕<br><br>شام
</div>

</div>

<button class="next" id="nextBtn" onclick="question2()">

ادامه →

</button>

`;

}
function select(el,value){

document.querySelectorAll(".card").forEach(c=>c.classList.remove("active"));

el.classList.add("active");

answers.place=value;

document.getElementById("nextBtn").style.display="block";

}
function question2(){

const card=document.querySelector(".glass");

card.className="glass fade";

card.innerHTML=`

<div class="logo">💌</div>

<div class="progress">
<span style="width:60%"></span>
</div>

<h2>

یه جمله درباره من بنویس 😊

</h2>

<div class="inputBox">

<textarea id="msg"

placeholder="هرچی دوست داری بنویس..."></textarea>

</div>

<button onclick="question3()">

ادامه →

</button>

`;

}
function question3(){

const text=document.getElementById("msg").value.trim();

if(!text){

alert("یه جمله بنویس 😊");

return;

}

answers.message=text;

const card=document.querySelector(".glass");

card.className="glass fade";

card.innerHTML=`

<div class="logo">🎁</div>

<div class="progress">
<span style="width:80%"></span>
</div>

<h2>

یه هدیه انتخاب کن ❤️

</h2>

<div class="cards">

<div class="card" onclick="gift(this,'گل')">

🌹<br><br>گل

</div>

<div class="card" onclick="gift(this,'شکلات')">

🍫<br><br>شکلات

</div>

<div class="card" onclick="gift(this,'کتاب')">

📚<br><br>کتاب

</div>

<div class="card" onclick="gift(this,'عروسک')">

🧸<br><br>عروسک

</div>

</div>

<button class="next" id="giftNext"

onclick="question4()">

ادامه →

</button>

`;

}
function gift(el,val){

document.querySelectorAll(".card").forEach(c=>c.classList.remove("active"));

el.classList.add("active");

answers.gift=val;

document.getElementById("giftNext").style.display="block";

}
function question4(){

const card=document.querySelector(".glass");

card.className="glass fade";

card.innerHTML=`

<div class="logo">💕</div>

<div class="progress">
<span style="width:90%"></span>
</div>

<h2>

اگر فقط یکی رو انتخاب کنی...

</h2>

<div class="cards">

<div class="card" onclick="choose(this,'🤗 بغل')">

🤗<br><br>بغل

</div>

<div class="card" onclick="choose(this,'😘 بوسه')">

😘<br><br>بوسه

</div>

<div class="card" onclick="choose(this,'🤝 دست گرفتن')">

🤝<br><br>دست گرفتن

</div>

<div class="card" onclick="choose(this,'👀 نگاه')">

👀<br><br>نگاه

</div>

</div>

<button class="next" id="loveNext" onclick="question5()">

ادامه →

</button>

`;

}
function choose(el,val){

document.querySelectorAll(".card").forEach(c=>c.classList.remove("active"));

el.classList.add("active");

answers.choice=val;

document.getElementById("loveNext").style.display="block";

}
function question5(){

const card=document.querySelector(".glass");

card.className="glass fade";

card.innerHTML=`

<div class="logo">📅</div>

<div class="progress">
<span style="width:100%"></span>
</div>

<h2>یه قرار باهم؟ ❤️</h2>

<div class="inputBox">

<input id="date" type="date">

</div>

<div class="inputBox">

<input id="time" type="time">

</div>

<div class="inputBox">

<input id="location"

type="text"

placeholder="مثلاً کافه، پارک، رستوران ...">

</div>

<div class="cards">

<div class="card" onclick="saveDate(true)">

😍<br><br>

قبول می‌کنم

</div>

<div class="card" onclick="saveDate(false)">

🤍<br><br>

فعلاً نه

</div>

</div>

`;

}
async function saveDate(ok){

const date=document.getElementById("date").value;

const time=document.getElementById("time").value;

const location=document.getElementById("location").value.trim();

if(ok){

if(!date||!time||!location){

alert("تاریخ، ساعت و مکان را کامل کن ❤️");

return;

}

answers.date=date;

answers.time=time;

answers.location=location;

answers.accept="قبول کرد ❤️";

}else{

answers.accept="فعلاً نه 🤍";

}

try{

await window.saveAnswer(answers);

}catch(e){

console.error(e);

alert("خطا در ذخیره اطلاعات");

}

finish();

}
function finish(){

const music=document.getElementById("music");

if(music){

music.loop=true;

if(music.paused){

music.play().catch(()=>{});

}

}

explode();
roses();

floatingHearts();

const card=document.querySelector(".glass");

card.className="glass fade";

card.innerHTML=`

<div class="logo">💖</div>

<h2>پایان ❤️</h2>

<p>ازت ممنونم که تا آخر همراه من بودی.</p>

<div class="result">

<h3>❤️ ممنونم ❤️</h3>

<p>

از اینکه تا آخر همراه من بودی واقعاً خوشحالم.

<br><br>

جواب‌هات با موفقیت ثبت شد.

<br><br>

منتظر دیدنت هستم...

</p>

</div>

<br>


`;

}
function explode(){

const box=document.createElement("div");

box.className="hearts";

document.body.appendChild(box);

for(let i=0;i<120;i++){

const h=document.createElement("div");

h.className="heart";

h.innerHTML=Math.random()>.5?"❤️":"💖";

h.style.left=innerWidth/2+"px";

h.style.top=innerHeight/2+"px";

h.style.setProperty("--x",(Math.random()*innerWidth-innerWidth/2)+"px");

h.style.setProperty("--y",(Math.random()*innerHeight-innerHeight/2)+"px");

box.appendChild(h);

}

setTimeout(()=>box.remove(),3000);

}

let playing=false;

function toggleMusic(){

const music=document.getElementById("music");

if(!music)return;

if(playing){

music.pause();

playing=false;

}else{

music.play().catch(()=>{});

playing=true;

}

}
function roses(){

const box=document.createElement("div");

box.className="petals";

document.body.appendChild(box);

for(let i=0;i<40;i++){

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌹";

p.style.left=Math.random()*100+"vw";

p.style.fontSize=(20+Math.random()*25)+"px";

p.style.animationDuration=(4+Math.random()*5)+"s";

p.style.animationDelay=Math.random()*3+"s";

box.appendChild(p);

}

setTimeout(()=>box.remove(),9000);

}
function floatingHearts(){

const box=document.createElement("div");

box.className="floating";

document.body.appendChild(box);

setInterval(()=>{

const h=document.createElement("div");

h.className="floatHeart";

h.innerHTML=Math.random()>.5?"❤️":"💖";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-40px";

h.style.fontSize=(18+Math.random()*25)+"px";

h.style.animationDuration=(4+Math.random()*4)+"s";

box.appendChild(h);

setTimeout(()=>h.remove(),8000);

},350);

}
document.addEventListener("contextmenu",e=>e.preventDefault());
document.addEventListener("keydown",e=>{
if(
e.key==="F12"||
(e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key.toUpperCase()))||
(e.ctrlKey&&e.key.toLowerCase()=="u")||
(e.ctrlKey&&e.key.toLowerCase()=="s")
){
e.preventDefault();
}
});

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},2800);

});