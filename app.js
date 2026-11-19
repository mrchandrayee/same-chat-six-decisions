(() => {
const initial=[
 {from:'Maya',text:'Still on for tonight?',time:'8:02 PM'},
 {from:'Maya',text:'Booked the table for 8',time:'8:02 PM'},
 {from:'You',text:'Yes! Running 10 min late',time:'8:03 PM'},
 {from:'You',text:'Order me the gnocchi',time:'8:03 PM'},
 {from:'Maya',text:'Done. See you soon',time:'8:04 PM'}
];
const extras=[
 {from:'Maya',text:'Got the window seat',time:'8:04 PM'},
 {from:'You',text:'On my way',time:'8:05 PM'}
];
const details=[
['01 · ALIGNMENT','Messages from Maya stay on the left. Your messages move right. The side tells you who sent each message, so names no longer need to be repeated.'],
['02 · GROUPING','Messages from the same person are grouped into turns. A 4px gap keeps one run together; 18px between people makes each turn easy to scan.'],
['03 · COLOUR','Your messages take the accent colour. Incoming messages remain neutral, so your side stands out at a glance while keeping strong text contrast.'],
['04 · TIMESTAMPS','Five repeated timestamps become one “TODAY · 8:02 PM” divider. The conversation keeps its time context with less visual noise.'],
['05 · STATUS','Presence moves into the header (“online”), and the latest outgoing message gets a read receipt underneath.'],
['06 · MOTION','Typing dots show that a reply is coming. New messages slide in over 240ms, so you can see where they land.']
];
let upgraded=true, selected=0, messages=[...initial], showExtra=false, timers=[];
const $=id=>document.getElementById(id);
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function render(){
 const card=$('chatCard');card.className='chat-card '+(upgraded?'enhanced':'legacy');
 if(upgraded&&selected>=4)card.classList.add('status-on');
 if(upgraded&&selected>=5)card.classList.add('motion-on');
 $('caption').textContent=upgraded?'AFTER · UPGRADE 01–06':'BEFORE · ORIGINAL CHAT';
 $('bubbleCount').textContent=upgraded?'5 bubbles → 3 turns':'5 messages · repeated names';
 $('presence').textContent=upgraded&&selected>=4?'online':'';
 $('onlineDot').style.display=upgraded&&selected>=4?'block':'none';
 const out=$('messages');out.innerHTML='';
 if(upgraded&&selected>=3){const div=document.createElement('div');div.className='date-divider';div.textContent='TODAY · 8:02 PM';out.append(div)}
 let prev=null;
 messages.forEach((m,i)=>{
  const mine=m.from==='You',same=prev===m.from;
  const row=document.createElement('div');row.className='message-row '+(mine?'mine':'theirs')+(same&&upgraded&&selected>=1?' continued':'')+(!same&&i>0&&upgraded&&selected>=1?' group-gap':'');
  if(!mine){const av=document.createElement('span');av.className='mini-avatar';av.textContent='MC';row.append(av)}
  const bubble=document.createElement('div');bubble.className='bubble';bubble.dataset.sender=m.from;
  const text=document.createElement('span');text.textContent=m.text;bubble.append(text);
  if(!upgraded||selected<3){const time=document.createElement('time');time.textContent=m.time;bubble.append(time)}
  row.append(bubble);out.append(row);prev=m.from;
 });
 if(upgraded&&selected>=4){const lastMine=[...out.querySelectorAll('.mine')].at(-1);if(lastMine){const read=document.createElement('div');read.className='read-receipt';read.textContent='✓✓ Read 8:04';out.append(read)}}
 $('typing').classList.toggle('visible',upgraded&&selected>=5&&typing);
 $('beforeBtn').classList.toggle('active',!upgraded);$('afterBtn').classList.toggle('active',upgraded);
 $('upgradeList').querySelectorAll('.upgrade').forEach((b,i)=>b.classList.toggle('active',i===selected));
 $('upgradeDetail').innerHTML=`<span>${details[selected][0]}</span><p>${details[selected][1]}</p>`;
 $('upgradeList').querySelectorAll('.upgrade').forEach((b,i)=>b.querySelector('i').style.opacity=upgraded&&selected>=i?'1':'.2');
 $('messages').scrollTop=$('messages').scrollHeight;
}
let typing=false;
function setUpgrade(i){clearTimers();selected=i;upgraded=true;typing=false;render()}
$('beforeBtn').addEventListener('click',()=>{clearTimers();upgraded=false;typing=false;render()});
$('afterBtn').addEventListener('click',()=>{clearTimers();upgraded=true;selected=5;typing=false;render()});
$('resetBtn').addEventListener('click',()=>{clearTimers();messages=[...initial];showExtra=false;typing=false;selected=0;upgraded=true;render()});
$('upgradeList').addEventListener('click',e=>{const b=e.target.closest('[data-upgrade]');if(b)setUpgrade(Number(b.dataset.upgrade))});
$('composer').addEventListener('submit',e=>{
 e.preventDefault();const input=$('messageInput');const value=input.value.trim();if(!value)return;
 if(upgraded&&selected>=5){typing=true;render();timers.push(setTimeout(()=>{typing=false;messages.push({from:'You',text:value,time:'8:05 PM'});input.value='';render()},420))}
 else{messages.push({from:'You',text:value,time:'8:05 PM'});input.value='';render()}
});
$('playSequence').addEventListener('click',()=>{
 clearTimers();upgraded=true;messages=[...initial];selected=0;typing=false;render();
 for(let i=1;i<6;i++)timers.push(setTimeout(()=>{selected=i;render()},i*950));
 timers.push(setTimeout(()=>{typing=true;render()},5100));
 timers.push(setTimeout(()=>{typing=false;messages.push(extras[0]);render()},6250));
 timers.push(setTimeout(()=>{messages.push(extras[1]);render()},7100));
});
render();
})();