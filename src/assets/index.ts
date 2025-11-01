// Main assets module - consolidates common assets
import aboutMeJournalPng from './aboutme_journal-small.png';
import aboutMeJournalWebp800 from './aboutme_journal-800w.webp';
import aboutMeJournalWebp400 from './aboutme_journal-400w.webp';
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

// PassportBuddy project images
import passportbuddy1 from './project_snapshots/passportbuddy/passportbuddy_snapshot_1.png';
import passportbuddy2 from './project_snapshots/passportbuddy/passportbuddy_snapshot_2.png';
import passportbuddy3 from './project_snapshots/passportbuddy/passportbuddy_snapshot_3.png';
import passportbuddy4 from './project_snapshots/passportbuddy/passportbuddy_snapshot_4.png';
import passportbuddy5 from './project_snapshots/passportbuddy/passportbuddy_snapshot_5.png';
import passportbuddy6 from './project_snapshots/passportbuddy/passportbuddy_snapshot_6.png';

// MediMate project images
import medimate1 from './project_snapshots/medimate/medimate_snapshot_1.png';
import medimate2 from './project_snapshots/medimate/medimate_snapshot_2.png';
import medimate3 from './project_snapshots/medimate/medimate_snapshot_3.png';
import medimate4 from './project_snapshots/medimate/medimate_snapshot_4.png';
import medimate5 from './project_snapshots/medimate/medimate_snapshot_5.png';
import medimate6 from './project_snapshots/medimate/medimate_snapshot_6.png';

// Alignr project images
import alignr1 from './project_snapshots/alignr/alignr_snapshot_1.webp';
import alignr2 from './project_snapshots/alignr/alignr_snapshot_2.webp';
import alignr3 from './project_snapshots/alignr/alignr_snapshot_3.webp';
import alignr5 from './project_snapshots/alignr/alignr_snapshot_5.webp';
import alignr6 from './project_snapshots/alignr/alignr_snapshot_6.webp';
import alignr8 from './project_snapshots/alignr/alignr_snapshot_8.webp';
import alignr11 from './project_snapshots/alignr/alignr_snapshot_11.webp';
import alignr12 from './project_snapshots/alignr/alignr_snapshot_12.webp';
import alignr13 from './project_snapshots/alignr/alignr_snapshot_13.webp';
import alignr14 from './project_snapshots/alignr/alignr_snapshot_14.webp';
import alignr15 from './project_snapshots/alignr/alignr_snapshot_15.webp';
import alignr16 from './project_snapshots/alignr/alignr_snapshot_16.webp';
import alignr18 from './project_snapshots/alignr/alignr_snapshot_18.webp';
import alignr20 from './project_snapshots/alignr/alignr_snapshot_20.webp';

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

// PassportBuddy images export
export const passportBuddyImages = [
  passportbuddy1,
  passportbuddy2,
  passportbuddy3,
  passportbuddy4,
  passportbuddy5,
  passportbuddy6,
];

// MediMate images export
export const mediMateImages = [
  medimate1,
  medimate2,
  medimate3,
  medimate4,
  medimate5,
  medimate6,
];

// Alignr images export
export const alignrImages = [
  alignr1,
  alignr2,
  alignr3,
  alignr5,
  alignr6,
  alignr8,
  alignr11,
  alignr12,
  alignr13,
  alignr14,
  alignr15,
  alignr16,
  alignr18,
  alignr20,
];

export {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
  passportbuddy1,
  passportbuddy2,
  passportbuddy3,
  passportbuddy4,
  passportbuddy5,
  passportbuddy6,
  medimate1,
  medimate2,
  medimate3,
  medimate4,
  medimate5,
  medimate6,
  alignr1,
  alignr2,
  alignr3,
  alignr5,
  alignr6,
  alignr8,
  alignr11,
  alignr12,
  alignr13,
  alignr14,
  alignr15,
  alignr16,
  alignr18,
  alignr20,
};

export default {
  mainAssets,
};