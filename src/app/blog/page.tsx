// src/app/blog/page.tsx
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ScrollRevealWrapper } from '@/components/animation/ScrollRevealWrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | DeepWork Portfolio',
  description: 'Insights, articles, and updates from Ankit Bansod.',
};

const placeholderPosts = [
  {
    id: '1',
    title: 'The Future of UI/UX: Trends to Watch in 2025',
    date: 'October 26, 2024',
    excerpt: 'Exploring upcoming trends in user interface and user experience design, from AI integration to immersive technologies.',
    slug: 'future-of-ui-ux-2025',
  },
  {
    id: '2',
    title: 'Mastering Full-Stack Development with Next.js and Tailwind CSS',
    date: 'October 15, 2024',
    excerpt: 'A deep dive into building modern, performant web applications using the power of Next.js and the flexibility of Tailwind CSS.',
    slug: 'mastering-nextjs-tailwind',
  },
  {
    id: '3',
    title: 'Why User-Centered Design is Crucial for Project Success',
    date: 'September 30, 2024',
    excerpt: 'Understanding the principles of user-centered design and how they contribute to creating products that users love.',
    slug: 'user-centered-design-importance',
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main className="flex-grow pt-20">
        <ScrollRevealWrapper>
          <SectionWrapper>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Our Blog
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Insights, articles, and updates on web development, UI/UX design, and technology.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
              {placeholderPosts.map((post, index) => (
                <ScrollRevealWrapper key={post.id} delay={index * 100}>
                  <article className="p-6 bg-card/60 backdrop-blur-lg border border-border/10 shadow-xl rounded-xl hover:shadow-primary/15 transition-shadow duration-300">
                    <header className="mb-3">
                      <h2 className="text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                    </header>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="link" asChild className="p-0 text-primary hover:text-primary/80 font-semibold">
                      <Link href={`/blog/${post.slug}`}>
                        Read more <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </article>
                </ScrollRevealWrapper>
              ))}
            </div>
            
            <ScrollRevealWrapper delay={placeholderPosts.length * 100 + 100}>
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-xl text-foreground/90">
                        More posts coming soon!
                    </p>
                </div>
            </ScrollRevealWrapper>

          </SectionWrapper>
        </ScrollRevealWrapper>
      </main>
      <Footer />
    </div>
  );
}
