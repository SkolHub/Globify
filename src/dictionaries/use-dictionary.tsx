'use client';

import { createContext, ReactNode, useContext } from 'react';
import { getDictionary } from '@/dictionaries/dictionary';

type DictionaryContextModel = Awaited<ReturnType<typeof getDictionary>>;

const dictionaryContext = createContext<DictionaryContextModel | null>(null);

export function useDictionary() {
  return useContext(dictionaryContext)!;
}

export function DictionaryContextProvider({
  children,
  dictionary
}: {
  children: ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <dictionaryContext.Provider value={dictionary}>
      {children}
    </dictionaryContext.Provider>
  );
}
