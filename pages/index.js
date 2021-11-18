import AppHero from '@/components/Hero';
import AppAbout from '@/components/About';
import AppFeature from '@/components/Feature';
import AppWorks from '@/components/Jobs';
import AppFaq from '@/components/Faq';
import AnalyticalReport from '@/components/Analytical_Report';

export default function Home() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AnalyticalReport />
      <AppFeature />
      {/* <AppWorks /> */}
      <AppFaq />
    </div>
  );
}