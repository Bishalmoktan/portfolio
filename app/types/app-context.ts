import React, { SetStateAction } from 'react';

export type AppContextType = {
  isDeveloperMode: boolean;
  setIsDeveloperMode: React.Dispatch<SetStateAction<boolean>>;
  result: { initialState: JSX.Element };
  setResult: React.Dispatch<SetStateAction<{ initialState: JSX.Element }>>;
  cmd: string;
  setCmd: React.Dispatch<SetStateAction<string>>;
};
