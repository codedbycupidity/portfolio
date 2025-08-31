// Main assets module - consolidates common assets
import aboutMeJournal from './aboutme_journal.PNG';
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import comingSoon from './coming_soon.png';
import divider from './divider.PNG';

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
};

export {
  aboutMeJournal,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
};

export default {
  mainAssets,
};