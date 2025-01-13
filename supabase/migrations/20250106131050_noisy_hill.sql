/*
  # Fix Expenses RLS Policies

  1. Changes
    - Update RLS policy for expenses table to allow inserts
    - Add default user_id from auth.uid()
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Users can CRUD own expenses" ON expenses;

-- Create separate policies for each operation
CREATE POLICY "Users can insert own expenses" ON expenses
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own expenses" ON expenses
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own expenses" ON expenses
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own expenses" ON expenses
  FOR DELETE USING (auth.uid() = user_id);

-- Add trigger to set user_id on insert
CREATE OR REPLACE FUNCTION set_user_id()
RETURNS TRIGGER AS $$
BEGIN
  NEW.user_id := auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_user_id_trigger ON expenses;

CREATE TRIGGER set_user_id_trigger
  BEFORE INSERT ON expenses
  FOR EACH ROW
  EXECUTE FUNCTION set_user_id();