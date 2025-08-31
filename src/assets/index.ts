// Main assets module - consolidates common assets
import aboutMeJournal from './aboutme_journal.PNG';
import profileImage from './profile.PNG';
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
  profileImage,
  comingSoon,
  divider,
};

export {
  aboutMeJournal,
  profileImage,
  comingSoon,
  divider,
};

export default {
  mainAssets,
};