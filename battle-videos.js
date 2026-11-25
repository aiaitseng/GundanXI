import { battleVideos, referenceVideo } from './battle-video-catalog.js';

export function findBattleVideo(clips,left,right,side,range) {
 return clips.find(c=>c.left===left&&c.right===right&&c.side===side&&c.range===range)||null;
}

export function initBattleVideos({getScalePair}) {
 document.getElementById('scale-metrics').insertAdjacentHTML('afterend',`<div class="battle-entry"><div><strong>雙機對戰放映室</strong><p>先欣賞打鬥示範影片，各機體組合將陸續加入。</p></div><button id="battle-open" type="button" class="btn-primary">觀看戰鬥影片</button></div>`);
 document.body.insertAdjacentHTML('beforeend',`<dialog id="battle-dialog" aria-labelledby="battle-title"><div class="battle-heading"><div><p>雙機對戰放映室</p><h3 id="battle-title"></h3></div><button type="button" id="battle-close" class="btn-outline">關閉</button></div><div class="battle-video-stage"><video id="battle-video" controls playsinline preload="metadata" hidden aria-label="打鬥影片"></video><div id="battle-video-empty"><span>影片尚未上架</span><p>此組機體的對戰影片尚未備妥。</p></div></div><p id="battle-status" role="status"></p><div class="battle-controls"><fieldset><legend id="battle-left-label"></legend><button type="button" data-video-choice="left:melee">左側・近戰</button><button type="button" data-video-choice="left:mid">左側・中程</button></fieldset><fieldset><legend id="battle-right-label"></legend><button type="button" data-video-choice="right:melee">右側・近戰</button><button type="button" data-video-choice="right:mid">右側・中程</button></fieldset></div><div class="battle-footer"><button id="battle-reference" type="button" class="btn-outline">觀看你提供的參考影片</button><span>參考片僅展示風格，不代表目前選擇的機體。</span></div></dialog>`);
 const dialog=document.getElementById('battle-dialog'),video=document.getElementById('battle-video'),empty=document.getElementById('battle-video-empty'),status=document.getElementById('battle-status');
 let pair=[];
 function clearVideo(){video.pause();video.removeAttribute('src');video.removeAttribute('poster');video.load();video.hidden=true;}
 function loadVideo(src,poster){
  clearVideo();empty.hidden=true;video.hidden=false;
  if(poster)video.poster=poster;
  video.src=src;video.load();
  video.play().catch(()=>{status.textContent+=' 請點影片上的播放鍵開始。';});
 }
 function showDemo(){
  dialog.querySelectorAll('[data-video-choice]').forEach(b=>b.setAttribute('aria-pressed','false'));
  document.getElementById('battle-title').textContent='鋼彈打鬥示範影片';
  status.textContent='示範影片・目前所有機體組合共用，專屬對戰影片將陸續加入。';
  loadVideo(referenceVideo);
 }
 function choose(side,range){
  clearVideo();
  document.querySelectorAll('[data-video-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.videoChoice===`${side}:${range}`)));
  const clip=findBattleVideo(battleVideos,pair[0].id,pair[1].id,side,range);
  document.getElementById('battle-title').textContent=`${pair[0].name} vs ${pair[1].name}`;
  const action=`${side==='left'?'左':'右'}側 ${pair[side==='left'?0:1].code}・${range==='melee'?'近戰':'中程'}攻擊`;
  if(clip){status.textContent=action;loadVideo(clip.src,clip.poster);}
  else{showDemo();}
 }
 document.getElementById('battle-open').onclick=()=>{
  pair=getScalePair();
  ['left','right'].forEach((s,i)=>{document.getElementById(`battle-${s}-label`).textContent=`${i?'右':'左'}・${pair[i].code}`;});
  const available=battleVideos.filter(c=>c.left===pair[0].id&&c.right===pair[1].id);
  dialog.querySelector('.battle-controls').hidden=available.length===0;
  document.getElementById('battle-reference').hidden=available.length===0;
  dialog.querySelector('.battle-footer span').textContent=available.length?'示範影片與專屬機體影片分開播放。':'之後將加入各機體組合的專屬對戰影片。';
  dialog.showModal();document.body.classList.add('battle-open');
  if(available.length)choose(available[0].side,available[0].range);else showDemo();
  document.getElementById('battle-close').focus();
 };
 dialog.querySelectorAll('[data-video-choice]').forEach(b=>b.onclick=()=>choose(...b.dataset.videoChoice.split(':')));
 document.getElementById('battle-reference').onclick=showDemo;
 video.addEventListener('error',()=>{
  if(!video.hasAttribute('src'))return;
  status.textContent='影片暫時無法載入，請稍後重試。';video.hidden=true;empty.hidden=false;
 });
 function close(){clearVideo();dialog.close();document.body.classList.remove('battle-open');document.getElementById('battle-open').focus();}
 document.getElementById('battle-close').onclick=close;
 dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();});
 dialog.addEventListener('close',()=>{clearVideo();document.body.classList.remove('battle-open');});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
}
