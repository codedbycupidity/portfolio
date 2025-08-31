// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_EMAIL,
  
  // GitHub repository URLs
  repositories: {
    passportBuddy: import.meta.env.VITE_GITHUB_PASSPORTBUDDY_URL,
    mediMate: import.meta.env.VITE_GITHUB_MEDIMATE_URL,
    liora: import.meta.env.VITE_GITHUB_LIORA_URL,
    portfolio: import.meta.env.VITE_GITHUB_PORTFOLIO_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: import.meta.env.VITE_GITHUB_URL?.replace('https://', ''),
    linkedin: import.meta.env.VITE_LINKEDIN_URL?.replace('https://', ''),
    email: import.meta.env.VITE_EMAIL,
  }
};

export default socialLinks;