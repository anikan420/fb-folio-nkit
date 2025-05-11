// src/components/modals/PasswordModal.tsx
"use client";

import * as React from 'react'; // Added React import
import { useState, type FormEvent, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onPasswordSuccess: () => void;
  caseStudyTitle: string;
}

const CORRECT_PASSWORD = "deepwork"; // Simple hardcoded password

export function PasswordModal({
  isOpen,
  onOpenChange,
  onPasswordSuccess,
  caseStudyTitle,
}: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();
  const inputRef = React.useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (isOpen) {
      // Timeout to allow dialog to render before focusing
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (password === CORRECT_PASSWORD) {
      toast({
        title: "Access Granted",
        description: `Redirecting to ${caseStudyTitle}...`,
      });
      onPasswordSuccess();
      onOpenChange(false); 
      setPassword(''); 
    } else {
      setError('Incorrect password. Please try again.');
      toast({
        title: "Access Denied",
        description: "The password you entered is incorrect.",
        variant: "destructive",
      });
      setPassword(''); // Clear incorrect password
      inputRef.current?.focus(); // Refocus on error
    }
  };

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setPassword('');
      setError('');
      setShowPassword(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-lg border-border/20">
        <DialogHeader>
          <DialogTitle>Enter Password</DialogTitle>
          <DialogDescription>
            This case study ({caseStudyTitle}) is password protected. Please enter the password to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password_modal_input" className="text-right">
                Password
              </Label>
              <div className="col-span-3 relative">
                <Input
                  ref={inputRef}
                  id="password_modal_input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  required
                  aria-describedby={error ? "password-error" : undefined}
                  aria-invalid={!!error}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            {error && <p id="password-error" className="col-span-4 text-sm text-destructive text-center">{error}</p>}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Unlock</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
