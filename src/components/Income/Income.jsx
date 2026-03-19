import useState from 'react';
import './Income.css';

export default function Income() {
  return (
    <div className="Income">
          <form action=""  className="Income-form">
            <label htmlFor="incoming" className="Income-label">Revenu</label>
            <input type="text" className="Income-input" id="incoming" />
          </form>
    </div>
  );
}