'use client';

import { AppContextType } from '@/types/app-context';
import React, { createContext, useState } from 'react';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cmd, setCmd] = useState<string>('');
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [result, setResult] = useState<{ initialState: JSX.Element }>({
    initialState: (
      <div id="result">
        <p>test</p>
        <p>skills</p>
        <p>projects</p>
      </div>
    ),
  });

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        cmd,
        setCmd,
        showConfetti,
        setShowConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
