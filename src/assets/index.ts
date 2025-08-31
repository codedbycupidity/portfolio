// Main assets module - consolidates common assets
import aboutMeJournalPng from './aboutme_journal-optimized.png';
import aboutMeJournalWebp800 from './aboutme_journal-800w.webp';
import aboutMeJournalWebp400 from './aboutme_journal-400w.webp';
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import comingSoon from './coming_soon.png';
import dividerPng from './divider-optimized.png';
import dividerWebp from './divider.webp';

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;
const divider = dividerPng;

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
};

export default {
  mainAssets,
};