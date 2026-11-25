const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  for(const mobile of [false,true]){
   const page=await browser.newPage({viewport:{width:mobile?390:1440,height:900},isMobile:mobile,hasTouch:mobile});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:4173');
   await page.selectOption('#scale-select-a','rx-93');await page.selectOption('#scale-select-b','msn-04');
   await page.locator('#battle-open').click();
   await page.waitForFunction(()=>{const v=document.getElementById('battle-video');return v.currentTime>.2&&!v.paused},{},{timeout:5000});
   assert.match(await page.locator('#battle-title').innerText(),/示範影片/);
   assert.match(await page.locator('#battle-status').innerText(),/示範影片/);
   assert.ok(await page.locator('.battle-controls').isHidden());
   const info=await page.locator('#battle-video').evaluate(v=>({duration:v.duration,width:v.videoWidth}));
   assert.ok(info.duration>10&&info.duration<11);assert.equal(info.width,1280);
   await page.locator('#battle-close').click();
   assert.equal(await page.locator('#battle-video').evaluate(v=>v.paused),true);
   await page.locator('#scale-swap-btn').click();await page.locator('#battle-open').click();
   await page.waitForFunction(()=>document.getElementById('battle-video').currentTime>.2);
   assert.match(await page.locator('#battle-video').getAttribute('src'),/reference-battle.mp4/);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   await page.screenshot({path:`artifacts/${mobile?'mobile':'desktop'}-direct-video.png`});
   await page.keyboard.press('Escape');
   assert.equal(await page.locator('#battle-dialog').evaluate(d=>d.open),false);
   assert.equal(await page.evaluate(()=>document.activeElement.id),'battle-open');
   assert.deepEqual(errors,[]);await page.close();
  }
  console.log('PASS: desktop/mobile one-click MP4 playback, demo label, no unavailable controls, swapped pairs, close pauses, Escape/focus');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
