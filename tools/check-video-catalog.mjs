import assert from 'node:assert/strict';
const { findBattleVideo } = await import('../battle-videos.js');
const clips=[{left:'rx-93',right:'msn-04',side:'left',range:'melee',src:'correct.mp4'}];
assert.equal(findBattleVideo(clips,'rx-93','msn-04','left','melee')?.src,'correct.mp4');
assert.equal(findBattleVideo(clips,'msn-04','rx-93','left','melee'),null,'reversing actors must not reuse the wrong footage');
assert.equal(findBattleVideo(clips,'rx-93','msn-04','right','melee'),null,'attack direction must match');
assert.equal(findBattleVideo(clips,'rx-93','msn-04','left','mid'),null,'weapon range must match');
assert.equal(findBattleVideo(clips,'rx-78-2','ms-06s','left','melee'),null,'unrelated footage must never be relabelled');
console.log('PASS: exact actors, left/right direction, weapon range, no unrelated video fallback');
