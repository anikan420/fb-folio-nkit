// src/components/sections/CaseStudiesSection.tsx
"use client";

import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import type { CaseStudy } from '@/lib/data/caseStudies'; // Keep type for selectedCaseStudy
import { PasswordModal } from '@/components/modals/PasswordModal';

export function CaseStudiesSection(): JSX.Element {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Minimal placeholder event handlers
  const handleCaseStudyClick = (study: CaseStudy): void => {
    setSelectedCaseStudy(study);
    setIsPasswordModalOpen(true);
    console.log("Minimal: Case study clicked - ", study.title);
  };

  const handlePasswordSuccess = (): void => {
    setIsPasswordModalOpen(false);
    console.log("Minimal: Password success");
  };

  // This handler won't be actively used in this minimal version as there are no cards to key down on.
  // const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, study: CaseStudy): void => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault();
  //     handleCaseStudyClick(study);
  //   }
  // };

  return (
    <div className="case-studies-wrapper-minimal">
      <p>This is a minimal test of the CaseStudiesSection.</p>
      <p>Attempting to trigger modal:</p>
      <button onClick={() => handleCaseStudyClick({id: 'test', title: 'Test Study'} as CaseStudy)}>
        Open Test Modal
      </button>

      {selectedCaseStudy && (
        <PasswordModal
          isOpen={isPasswordModalOpen}
          onOpenChange={setIsPasswordModalOpen}
          onPasswordSuccess={handlePasswordSuccess}
          caseStudyTitle={selectedCaseStudy.title}
        />
      )}
    </div>
  );
}
