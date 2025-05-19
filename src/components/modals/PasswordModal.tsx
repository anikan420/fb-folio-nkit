// src/components/modals/PasswordModal.tsx
"use client";

import * as React from 'react';
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
import { Eye, EyeOff, Lock } from 'lucide-react'; // Added Lock icon

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
      setPassword('');
      inputRef.current?.focus();
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
      <DialogContent className="sm:max-w-md bg-background border border-border shadow-lg rounded-xl p-6 md:p-8">
        <DialogHeader className="text-center space-y-2 mb-4">
          <div className="flex justify-center mb-3">
            <div className="bg-muted p-3 rounded-lg inline-block">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-xl font-semibold">Enter Password</DialogTitle>
          <DialogDescription className="text-sm">
            This case study ({caseStudyTitle}) is password protected. Please enter the password to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 py-2">
            <div className="space-y-2">
              <Label htmlFor="password_modal_input" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  ref={inputRef}
                  id="password_modal_input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Enter password"
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
            {error && <p id="password-error" className="text-sm text-destructive text-center pt-1">{error}</p>}
          </div>
          <DialogFooter className="pt-6 flex flex-col items-center space-y-3 w-full">
            <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90">
              Unlock
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="link" className="text-muted-foreground hover:text-foreground font-medium">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
