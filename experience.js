import { initBattleVideos } from './battle-videos.js';
// Lightweight SVG/CSS exhibits. No rendering loop runs while the exhibits are closed.
const signatures = {
 'rx-78-2':['磁氣覆膜・關節反應強化','#60a5fa','pulse'],
 'ms-06s':['赤色彗星・限制解除','#fb7185','trails'],
 'msz-006':['生物感測器・Wave Rider 共鳴','#f472b6','wings'],
 'rx-93':['精神感應・翼狀感應砲展開','#86efac','bits'],
 'msn-04':['總帥指令・感應砲包圍','#f87171','bits'],
 'rx-0':['NT-D・精神感應框架覺醒','#fb7185','frame'],
 'rx-93-v2':['Hi-ν・雙翼感應砲共振','#c4b5fd','bits'],
 'msn-06s':['新安州・極限向量推進','#fbbf24','trails'],
 'rx-105':['米諾夫斯基飛行・浮升力場','#67e8f9','halo'],
 'xxxg-00w0':['ZERO 系統・天使羽翼','#bae6fd','wings'],
 'gf13-017nj2':['明鏡止水・金色日輪','#fbbf24','halo'],
 'wd-m01':['月光蝶・奈米粒子之翼','#c4b5fd','butterfly'],
 'mbf-p02kai':['紅色機・戰術複合武裝','#f87171','blades'],
 'zgmf-x10a':['HiMAT・全砲門展開','#60a5fa','wings'],
 'gn-0000-010':['TRANS-AM・雙爐粒子共振','#fb7185','particles'],
 'asw-g-08':['阿賴耶識・紅眼解除限制','#fb923c','claws'],
 'xvx-016rn':['帕梅特刻痕 8・GUND 子機','#67e8f9','bits'],
 'zgmf-x42s-revo':['光之翼・高速殘影','#f472b6','trails'],
 'zgmf-a262pd-p':['榮耀捍衛者・奈米雷暴','#fde68a','lightning'],
};

function effectSVG(type) {
 const bits=Array.from({length:type==='bits'?11:8},(_,i)=>{
  const a=i*Math.PI*2/(type==='bits'?11:8), x=160+115*Math.cos(a),y=120+90*Math.sin(a);
  return `<path class="sig-bit" style="--i:${i}" d="M${x},${y-8} l5,8 -5,8 -5,-8Z"/>`;
 }).join('');
 const shapes={
  bits, particles:bits,
  wings:'<path d="M160 155 L32 35 58 140 125 180 M160 155 L288 35 262 140 195 180"/>',
  butterfly:'<path d="M160 160 Q-20 -45 35 170 Q60 240 155 180 M160 160 Q340 -45 285 170 Q260 240 165 180"/>',
  frame:'<path d="M150 48 L160 62 170 48 M130 83 L160 112 190 83 M140 125 L148 167 135 211 M180 125 L172 167 185 211"/>',
  halo:'<circle cx="160" cy="116" r="82"/><circle cx="160" cy="116" r="96" stroke-dasharray="8 12"/>',
  blades:'<path d="M72 202 L236 34 M248 202 L84 34"/>',
  claws:'<path d="M93 95 L65 158 M105 99 L80 166 M117 103 L95 174 M227 95 L255 158 M215 99 L240 166 M203 103 L225 174"/>',
  trails:'<path d="M130 74 L22 106 M130 110 L5 150 M130 150 L35 202 M190 74 L298 106 M190 110 L315 150 M190 150 L285 202"/>',
  lightning:'<path d="M30 40 L95 96 67 110 150 169 M290 40 L225 96 253 110 170 169 M160 18 L143 76 174 65 160 140"/>',
  pulse:'<circle cx="160" cy="120" r="72" stroke-dasharray="18 8"/><path d="M105 120 H215 M160 65 V175"/>',
 };
 return `<svg class="signature-art" viewBox="0 0 320 240" aria-hidden="true">${shapes[type]||bits}</svg>`;
}

function anchor(weapon,index) {
 const text=weapon.role+weapon.name;
 if (/頭|火神/.test(text)) return [50,15];
 if (/感應|子機|飛彈/.test(text)) return [80,30];
 if (/盾|防/.test(text)) return [20,60];
 if (weapon.tier==='melee') return [80,65];
 if (/胸|腹|掌/.test(text)) return [50,42];
 return [[20,30],[80,48],[20,36],[50,84]][index%4];
}

export function initExperience({getSuit,getScalePair,silhouette,onWeapon}) {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const hero=document.querySelector('.hero-figure .media-frame');
 hero.classList.add('interactive-hangar');
 hero.insertAdjacentHTML('beforeend','<div class="hangar-scan" aria-hidden="true"></div><div class="hangar-telemetry"><span class="hangar-beacon"></span> RX-78-2 · 系統待命 <span>18.0 m ／ 阿姆羅・雷</span></div><button type="button" class="hangar-inspect">啟動機體掃描</button>');
 hero.querySelector('button').onclick=()=>{hero.classList.remove('is-scanning');void hero.offsetWidth;hero.classList.add('is-scanning');hero.querySelector('.hangar-telemetry').firstChild.textContent='RX-78-2 · 掃描完成・裝甲狀態正常 ';};
 let pointerFrame=0;
 hero.addEventListener('pointermove',e=>{
  if(reduced.matches||!matchMedia('(hover:hover) and (pointer:fine)').matches||pointerFrame)return;
  pointerFrame=requestAnimationFrame(()=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--pan-x',`${(e.clientX-r.left-r.width/2)*.018}px`);hero.style.setProperty('--pan-y',`${(e.clientY-r.top-r.height/2)*.018}px`);pointerFrame=0;});
 });
 hero.addEventListener('pointerleave',()=>{cancelAnimationFrame(pointerFrame);pointerFrame=0;hero.style.setProperty('--pan-x','0px');hero.style.setProperty('--pan-y','0px');});

 const media=document.getElementById('modal-media-frame');
 media.insertAdjacentHTML('beforeend','<div id="signature-effect" hidden></div>');
 media.insertAdjacentHTML('afterend','<section class="weapon-explorer" aria-label="武裝配置示意"><div class="weapon-explorer-head"><strong>探索武裝配置</strong><span>點選編號查看・位置為示意</span></div><div class="weapon-explorer-grid"><div id="hotspot-map"></div><div id="hotspot-detail" aria-live="polite"></div></div><div id="hotspot-list"></div></section>');
 let currentSuit=null;
 function selectWeapon(suit,index,notify=true) {
  const w=suit.weaponProfiles[index];
  document.getElementById('hotspot-detail').innerHTML=`<span class="hotspot-category">${w.role}</span><h4>${w.name}</h4><p>${w.note}</p><p class="hotspot-range">有效範圍 ${w.rangeLabel}</p>`;
  document.querySelectorAll('[data-hotspot]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.hotspot)===index)));
  if(notify)onWeapon(index);
 }
 function renderSuit(suit,overdrive) {
  const [label,color,type]=signatures[suit.id];
  media.dataset.overdrive=String(overdrive);media.style.setProperty('--signature-color',color);
  const effect=document.getElementById('signature-effect');
  effect.hidden=!overdrive;effect.innerHTML=effectSVG(type)+`<span class="signature-label">${label}</span>`;
  document.getElementById('modal-mode-toggle').setAttribute('aria-pressed',String(overdrive));
  if(currentSuit===suit.id)return;
  currentSuit=suit.id;
  document.getElementById('hotspot-map').innerHTML=`<svg viewBox="0 0 320 260" aria-hidden="true"><g transform="translate(160 28) scale(2)">${silhouette(suit.id,'#7dd3fc','#183559')}</g></svg>`+suit.weaponProfiles.map((w,i)=>{
   const [x,y]=anchor(w,i);return `<button type="button" class="weapon-hotspot" data-hotspot="${i}" style="left:${x}%;top:${y}%" aria-label="${i+1} ${w.name}" aria-pressed="false">${i+1}</button>`;
  }).join('');
  document.getElementById('hotspot-list').innerHTML=suit.weaponProfiles.map((w,i)=>`<button type="button" data-hotspot="${i}" aria-pressed="false">${i+1} ${w.role}</button>`).join('');
  selectWeapon(suit,0,false);
 }
 document.querySelector('.weapon-explorer').addEventListener('click',e=>{const b=e.target.closest('[data-hotspot]');if(b)selectWeapon(getSuit(currentSuit),Number(b.dataset.hotspot));});

 initBattleVideos({getScalePair});
 return {renderSuit};
}
