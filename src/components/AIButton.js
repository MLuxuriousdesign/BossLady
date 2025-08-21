import { useState } from 'react';

export default function AIButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 bg-gold p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        👑
      </button>

      {open && (
        <div className="fixed bottom-20 right-8 bg-black text-cream p-4 rounded shadow-lg w-64">
          <h4 className="font-bold mb-2">Luxury Concierge</h4>
          <p>Hello! How can I assist your royal shopping experience today?</p>
        </div>
      )}
    </>
  );
}