import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) throw new Error('Please sign in to view expenses');

      const { data, error: fetchError } = await supabase
        .from('expenses')
        .select('*')
        .eq('user_id', session.user.id)
        .order('date', { ascending: false });

      if (fetchError) throw fetchError;
      setExpenses(data || []);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch expenses';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addExpense = async (expense: Omit<Expense, 'id'>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) throw new Error('Please sign in to add expenses');

      const { data, error: insertError } = await supabase
        .from('expenses')
        .insert([{
          ...expense,
          user_id: session.user.id
        }])
        .select()
        .single();

      if (insertError) throw insertError;
      await fetchExpenses(); // Refresh the expenses list
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to add expense';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return {
    expenses,
    addExpense,
    fetchExpenses,
    isLoading,
    error
  };
}