import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import awsCloudFoundationsBadge from '../../assets/badges/AWS_cloud_foundations_badge.webp';
import awsCloudPractitionerBadge from '../../assets/badges/AWS_cloud_practitioner_badge.webp';

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
      credentialUrl: null,
      status: 'in-progress'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Gradient overlay for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
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
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;