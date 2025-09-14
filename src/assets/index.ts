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
};

export default {
  mainAssets,
};