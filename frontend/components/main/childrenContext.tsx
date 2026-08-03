// childrenContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';
import type { Child } from './Data';

interface ChildrenContextType {
  childrenList: Child[];
  activeId: string;
  setActiveId: (id: string) => void;
  handleAddChild: (data: Omit<Child, 'id'>) => void;
}

const ChildrenContext = createContext<ChildrenContextType | null>(null);

export const ChildrenProvider = ({ children }: { children: React.ReactNode }) => {
  const [childrenList, setChildrenList] = useState<Child[]>([]);
  const [activeId, setActiveId] = useState<string>('all-stories');

  const handleAddChild = (data: Omit<Child, 'id'>) => {
    const newChild: Child = { ...data, id: crypto.randomUUID() };
    setChildrenList((prev) => [...prev, newChild]);
    setActiveId(newChild.id);
  };

  return (
    <ChildrenContext.Provider
      value={{ childrenList, activeId, setActiveId, handleAddChild }}
    >
      {children}
    </ChildrenContext.Provider>
  );
};

export const useChildrenContext = () => {
  const ctx = useContext(ChildrenContext);
  if (!ctx) throw new Error('useChildrenContext must be used inside ChildrenProvider');
  return ctx;
};
