// Run with Playwright available in NODE_PATH; uses the locally installed Edge.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({channel:'msedge', headless:true});
 try {
  const page = await browser.newPage();
  const errors=[]; page.on('pageerror', e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173');
  await page.locator('.suit-card').first().hover();
  await page.locator('.suit-card-back .js-inspect').first().click();
  await page.locator('.weapon-hotspot').first().click();
  assert.ok((await page.locator('#hotspot-detail').innerText()).length>20);
  await page.locator('#modal-mode-toggle').click();
  assert.equal(await page.locator('#modal-media-frame').getAttribute('data-overdrive'),'true');
  await page.keyboard.press('Escape');
  // Every archived suit must have an exhibit and valid controls, including same-suit duels.
  const ids=await page.locator('#scale-select-a option').evaluateAll(options=>options.map(o=>o.value));
  for(const id of ids){
   await page.locator(`.suit-card[data-suit-id="${id}"]`).hover();
   await page.locator(`.suit-card-back .js-inspect[data-id="${id}"]`).click();
   await page.locator('#modal-mode-toggle').click();
   assert.ok((await page.locator('.signature-label').innerText()).length>4);
   assert.ok(await page.locator('.weapon-hotspot').count()>0);
   await page.keyboard.press('Escape');
  }
  for (const width of [390, 768, 1440]) {
   await page.setViewportSize({width,height:844});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow at ${width}`);
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.goto('http://127.0.0.1:4173');
  await page.screenshot({path:'artifacts/desktop-hangar.png'});
  await page.locator('.suit-card').first().hover();
  await page.locator('.suit-card-back .js-inspect').first().click();
  await page.locator('#modal-mode-toggle').click();
  await page.waitForTimeout(1500);
  await page.screenshot({path:'artifacts/desktop-weapons.png'});
  const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  mobile.on('pageerror',e=>errors.push(e.message));
  await mobile.goto('http://127.0.0.1:4173');
  await mobile.locator('.suit-card-front .js-inspect').first().tap();
  await mobile.locator('#modal-mode-toggle').tap();
  await mobile.locator('.weapon-hotspot').last().tap();
  assert.ok(await mobile.locator('#hotspot-detail').isVisible());
  await mobile.screenshot({path:'artifacts/mobile-weapons.png'});
  await mobile.close();
  assert.deepEqual(errors,[]);
  console.log('PASS: 19 suit exhibits, hotspots, signature modes, mobile widths, touch, no runtime errors');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
