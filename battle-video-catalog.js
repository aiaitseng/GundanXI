// Only add footage after verifying the identities, screen positions and weapon action.
// Each entry: { left, right, side: 'left'|'right', range: 'melee'|'mid', src, poster? }.
// A reversed selection requires its own clip; never mirror footage with asymmetric equipment.
export const battleVideos = [];
export const referenceVideo = './src/assets/videos/reference-battle.mp4';
