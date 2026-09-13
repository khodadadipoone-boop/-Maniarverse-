// childrenContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ActiveChildId, Child, ChildCreateInput } from './Data';
import { addChild, fetchChildren } from '@/lib/childrenApi';

interface ChildrenContextType {
  childrenList: Child[];
  activeId: ActiveChildId;
  setActiveId: (id: ActiveChildId) => void;
  handleAddChild: (data: ChildCreateInput) => Promise<void>;
  isLoading: boolean;
}

const ChildrenContext = createContext<ChildrenContextType | null>(null);

export const ChildrenProvider = ({ children }: { children: React.ReactNode }) => {
  const [childrenList, setChildrenList] = useState<Child[]>([]);
  const [activeId, setActiveId] = useState<ActiveChildId>('all-stories');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const list = await fetchChildren();
        if (!cancelled) {
          setChildrenList(list);
        }
      } catch (error) {
        console.error('Failed to load children:', error);
        if (!cancelled) {
          setChildrenList([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleAddChild = async (data: ChildCreateInput) => {
    try {
      const created = await addChild(data);
      setChildrenList((prev) => [created, ...prev]);
      setActiveId(created.id);
    } catch (error) {
      // TODO: surface this error to the user via a toast/inline message
      console.error('Failed to add child:', error);
      throw error;
    }
  };

  return (
    <ChildrenContext.Provider
      value={{ childrenList, activeId, setActiveId, handleAddChild, isLoading }}
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
