import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import awsCloudFoundationsBadge from '../../assets/badges/AWS_cloud_foundations_badge.webp';
import awsCloudPractitionerBadge from '../../assets/badges/AWS_cloud_practitioner_badge.webp';
import citiLogo from '../../assets/badges/citi_logo.webp';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'aws-cloud-foundations',
      image: awsCloudFoundationsBadge,
      alt: 'AWS Academy Cloud Foundations Badge',
      title: 'AWS Academy Cloud Foundations',
      subtitle: 'Academy Graduate',
      credentialUrl: 'https://www.credly.com/badges/ab73f844-e7a2-4528-8045-33b446e02a1f/public_url',
      status: 'completed'
    },
    {
      id: 'aws-cloud-practitioner',
      image: awsCloudPractitionerBadge,
      alt: 'AWS Cloud Practitioner Badge',
      title: 'AWS Certified Cloud Practitioner',
      subtitle: 'Amazon Web Services',
      credentialUrl: 'https://www.credly.com/badges/5a732787-159d-4730-b064-3224ca430a1e/public_url',
      status: 'completed'
    }
  ];

  const credentials = [
    {
      id: 'citi-human-subjects',
      image: citiLogo,
      alt: 'CITI Program Logo',
      title: 'Social / Behavioral Research Investigator',
      subtitle: 'Human Subjects Research',
      issuer: 'CITI Program',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '58150114',
      credentialUrl: 'https://www.citiprogram.org/verify/?w2db65cc2-64a2-47e5-858e-094db65ea726-58150114',
      status: 'completed'
    },
    {
      id: 'citi-hipaa',
      image: citiLogo,
      alt: 'CITI Program Logo',
      title: 'Research and HIPAA Privacy Protections',
      subtitle: 'Human Research',
      issuer: 'CITI Program',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '73303616',
      credentialUrl: 'https://www.citiprogram.org/verify/?wf2a19ca4-4f42-4efd-a1b3-e8df178d6ab3-73303616',
      status: 'completed'
    },
    {
      id: 'citi-gcp',
      image: citiLogo,
      alt: 'CITI Program Logo',
      title: 'Investigational Drugs and Medical Devices',
      subtitle: 'Good Clinical Practice',
      issuer: 'CITI Program',
      issued: 'Nov 2025',
      expires: 'Nov 2028',
      credentialId: '73303614',
      credentialUrl: 'https://www.citiprogram.org/verify/?wc14479b3-f44f-46af-9d2b-3054d36b9cbb-73303614',
      status: 'completed'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;