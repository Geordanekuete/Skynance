/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, matches auth.users)
      - full_name (text)
      - avatar_url (text)
      - created_at (timestamp)
    
    - expenses
      - id (uuid)
      - user_id (uuid, references users)
      - amount (decimal)
      - category (text)
      - description (text)
      - date (timestamp)
    
    - budgets
      - id (uuid)
      - user_id (uuid, references users)
      - category (text)
      - amount (decimal)
      - period (text)
    
    - bill_splits
      - id (uuid)
      - created_by (uuid, references users)
      - description (text)
      - amount (decimal)
      - date (timestamp)
    
    - bill_participants
      - id (uuid)
      - bill_id (uuid, references bill_splits)
      - name (text)
      - amount (decimal)
      - paid (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Expenses table
CREATE TABLE expenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  amount decimal NOT NULL,
  category text NOT NULL,
  description text,
  date timestamptz DEFAULT now()
);

ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own expenses" ON expenses
  USING (auth.uid() = user_id);

-- Budgets table
CREATE TABLE budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  category text NOT NULL,
  amount decimal NOT NULL,
  period text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own budgets" ON budgets
  USING (auth.uid() = user_id);

-- Bill splits table
CREATE TABLE bill_splits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by uuid REFERENCES users NOT NULL,
  description text NOT NULL,
  amount decimal NOT NULL,
  date timestamptz DEFAULT now()
);

ALTER TABLE bill_splits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own bill splits" ON bill_splits
  USING (auth.uid() = created_by);

-- Bill participants table
CREATE TABLE bill_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bill_id uuid REFERENCES bill_splits NOT NULL,
  name text NOT NULL,
  amount decimal NOT NULL,
  paid boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bill_participants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage participants through bill splits" ON bill_participants
  USING (EXISTS (
    SELECT 1 FROM bill_splits 
    WHERE id = bill_participants.bill_id 
    AND created_by = auth.uid()
  ));