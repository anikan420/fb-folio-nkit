// src/app/case-studies/[id]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { caseStudiesData, type CaseStudy } from '@/lib/data/caseStudies';
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for each case study
export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

// Generate metadata for each case study page
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudiesData.find((s) => s.id === params.id);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Case Study | Ankit Bansod`,
    description: study.description,
    openGraph: {
        title: `${study.title} | Case Study`,
        description: study.description,
        images: study.imageUrl ? [{ url: typeof study.imageUrl === 'string' ? study.imageUrl : study.imageUrl.src }] : [],
    }
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudiesData.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20"> {/* Add padding top to account for fixed header */}
        <CaseStudyDetail study={study} />
      </main>
      <Footer />
    </div>
  );
}

    