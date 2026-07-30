/*
  # Contact Messages Table

  Stores messages submitted through the portfolio contact form.

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS
    - Allow anonymous users to INSERT (public contact form)
    - No SELECT/UPDATE/DELETE policies (only owner via service role)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
