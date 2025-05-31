// src/components/modals/PasswordModal.tsx
"use client";

import * as React from 'react';
import { useState, type FormEvent, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { DialogFooter } from '@/components/ui/dialog'; 

interface PasswordModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onPasswordSuccess: () => void;
  caseStudyTitle: string;
}

const CORRECT_PASSWORD = "Vicky56"; // Simple hardcoded password

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
      setPassword('');
      setError('');
      setShowPassword(false);
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
      <DialogContent className="sm:max-w-xs bg-card text-card-foreground border border-border/20 shadow-xl rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <Lock className="h-10 w-10 text-primary" />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="space-y-4 py-2">
            <div className="space-y-2 w-full">
              <Label htmlFor="password_modal_input" className="block text-left text-sm font-medium text-foreground/80 mb-1">
                Password
              </Label>
              <div className="relative">
                <Input
                  ref={inputRef}
                  id="password_modal_input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 rounded-md w-full"
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
          <DialogFooter className="pt-6 flex flex-col items-center space-y-3 w-full sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="w-full sm:w-auto rounded-md">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-md">
              Unlock
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
