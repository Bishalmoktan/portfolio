'use client';
import { AppContext } from '@/providers/app-provider';
import { useContext } from 'react';
import { AppContextType } from '../types/app-context';

export const useAppContext = () => {
  return useContext(AppContext) as AppContextType;
};
