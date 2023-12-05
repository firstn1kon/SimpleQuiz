!function(s){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return s[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=s,e.c=t,e.d=function(s,t,i){e.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:i})},e.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,t){if(1&t&&(s=e(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var r in s)e.d(i,r,function(t){return s[t]}.bind(null,r));return i},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},e.p="",e(e.s=0)}([function(s,t,e){"use strict";new class{constructor(s,t){let{yourClass:e=".quiz",questions:i,results:r}=t;this.wrapper=document.querySelector(s),this.questions=i,this.results=r,this.score=0,this.current=0,this.progress=0,this.class=e.slice(1),this.mainDiv="",this.divQuestion="",this.divAnwers="",this.divNav="",this.divProgress="",this.init()}init(){this.mainDiv=document.createElement("div"),this.divQuestion=document.createElement("div"),this.divAnwers=document.createElement("div"),this.divNav=document.createElement("div"),this.divProgress=document.createElement("div"),this.mainDiv.classList.add(""+this.class),this.divQuestion.classList.add(this.class+"__question"),this.divAnwers.classList.add(this.class+"__answers"),this.divNav.classList.add(this.class+"__nav"),this.divProgress.classList.add(this.class+"__progress"),this.wrapper.append(this.mainDiv),this.mainDiv.append(this.divQuestion),this.mainDiv.append(this.divAnwers),this.mainDiv.append(this.divNav),this.mainDiv.append(this.divProgress),this.divProgress.innerHTML=`<div class="${this.class}__progress-current" style="width: ${this.progress}%"></div>`,this.renderQuestion()}renderQuestion(){if(this.current==this.questions.length)this.renderResult();else{this.renderNavProgress();let{question:s,answers:t}=this.questions[this.current];this.divQuestion.textContent=s,t.forEach((s,t)=>{let[e]=s;const i=document.createElement("button");i.classList.add(this.class+"__btn"),i.setAttribute("data-index",t),i.textContent=e,this.divAnwers.append(i)});const e=this.divAnwers.querySelectorAll(`.${this.class}__btn`);e.forEach(s=>{s.addEventListener("click",()=>{let i=s.getAttribute("data-index");e.forEach(s=>{s.classList.add(this.class+"__btn_result")}),t[i][1]>0?(this.score+=t[i][1],s.classList.remove(this.class+"__btn_result"),s.classList.add(this.class+"__btn_right")):0==t[i][1]&&(s.classList.remove(this.class+"__btn_result"),s.classList.add(this.class+"__btn_wrong"),e.forEach(s=>{let e=s.getAttribute("data-index");t[e][1]>0&&(s.classList.remove(this.class+"__btn_result"),s.classList.add(this.class+"__btn_right"))})),setTimeout(()=>{this.current++,this.divQuestion.textContent="",this.divAnwers.innerHTML="",this.renderQuestion()},1e3)},{once:!0})})}}renderResult(){this.divQuestion.textContent=`Квиз пройден. Правильных ответов ${this.score} из ${this.questions.length}`,this.divAnwers.innerHTML="",this.divNav.innerHTML="",this.progress=100,this.wrapper.querySelector(`.${this.class}__progress-current`).style.width=this.progress+"%",this.results.forEach(s=>{let[t,e]=s;e<=this.score&&(this.divAnwers.innerHTML=t+" <br> <br>Пройти квиз еще раз:")});const s=document.createElement("img");s.classList.add(this.class+"__imgReload"),s.src="./icons/reload.svg",this.divAnwers.append(s),s.addEventListener("click",()=>{this.current=0,this.score=0,this.divAnwers.innerHTML="",this.renderQuestion(),s.remove()})}renderNavProgress(){this.divNav.innerHTML=`<span class ="quiz__current">${this.giveZero(this.current+1)}\n        </span><span class ="quiz__total">/${this.giveZero(this.questions.length)}</span>`,this.progress=100/this.questions.length*this.current,this.wrapper.querySelector(`.${this.class}__progress-current`).style.width=this.progress+"%"}giveZero(s){return s<10?"0"+s:s}}(".wrapper",{questions:[{question:"Столица Канады?",answers:[["Ванкувер",0],["Торронто",0],["Оттава",1],["Эмонд",0]]},{question:"Самый большой город Канады?",answers:[["Монреаль",0],["Калгари",0],["Торронто",1],["Оттава",0]]},{question:"Сколько провинций в Канаде?",answers:[["9",0],["10",1],["11",0],["12",0]]},{question:"Какое место занимает Канада по площади в мире?",answers:[["1",0],["2",1],["4",0],["6",0]]},{question:"Какие люди самые образованные в мире?",answers:[["Японцы",0],["Канадцы",1],["Норвежцы",0],["Швейцарцы",0]]},{question:"Средняя продолжительность жизни канадцев?",answers:[["79.5",0],["85.5",0],["87",0],["81.16",1]]},{question:"Легализована ли марихуана в Канаде?",answers:[["Да",1],["Нет",0]]},{question:"Более 77% кленового сиропа в мире производится в?",answers:[["Калгари",0],["Виннипег",0],["Квебеке",1],["Реджайна",0]]},{question:"Самый популярный сыр в Канаде?",answers:[["Чеддер",1],["Грюйер",0],["Пармезан",0],["Столичный",0]]},{question:"Самый популярный вид спорта в Канаде?",answers:[["Хоккей",1],["Футбол",0],["Лакросс",0],["Баскетбол",0]]},{question:"Правда ли что государственный символ Канады бобер?",answers:[["Да",1],["Нет",0]]},{question:"Когда празднуется главный государственный праздник — День Канады?",answers:[["1 июля",1],["4 июля",0],["1 января",0],["13 декабря",0]]}],results:[["Стоит получше разобраться в теме",3],["Неплохо, но есть что подучить",4],["Хорошо, многое знаете",5],["Отличный результат",6]]})}]);