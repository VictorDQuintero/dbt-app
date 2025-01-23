import React, { useState } from 'react';

interface DiaryEntry {
  date: string;
  moodLevel: number; // 1 to 10 scale
  urgeLevel: number; // 1 to 10 scale
  notes?: string; // Optional notes
}

const DiaryCard: React.FC = () => {
  const [notes, setNotes] = useState<string>(''); // Only dynamic state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(e.currentTarget);
    const entry: DiaryEntry = {
      date: formData.get('date') as string,
      moodLevel: parseInt(formData.get('moodLevel') as string, 10),
      urgeLevel: parseInt(formData.get('urgeLevel') as string, 10),
      notes: notes.trim() || undefined,
    };

    console.log('Diary Entry:', entry); // Replace with backend API call
    // Example: Save to database
    // fetch('/api/save-diary', { method: 'POST', body: JSON.stringify(entry) });

    // Reset form after submission
    setNotes('');
    e.currentTarget.reset();
  };

  return (
    <div>
      <h2>Diary Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={new Date().toISOString().split('T')[0]} // Pre-fill current date
            required
          />
        </div>

        <div>
          <label htmlFor="moodLevel">Mood Level (1-10):</label>
          <input
            type="number"
            id="moodLevel"
            name="moodLevel"
            min="1"
            max="10"
            required
          />
        </div>

        <div>
          <label htmlFor="urgeLevel">Urge Level (1-10):</label>
          <input
            type="number"
            id="urgeLevel"
            name="urgeLevel"
            min="1"
            max="10"
            required
          />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes about your day"
          ></textarea>
        </div>

        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default DiaryCard;
