'use client';

import React, { useState } from 'react';

function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function range(size: number, startAt = 0): number[] {
  return [...Array(size).keys()].map(i => i + startAt);
}

interface CalendarProps {
  mode: 'single' | 'range';
  selected?: Date | Date[];
  onSelect: (date: Date) => void;
  initialFocus?: boolean;
  fromDate?: Date;
  toDate?: Date;
  className?: string;
}

export function Calendar({
  mode,
  selected,
  onSelect,
  initialFocus,
  fromDate = new Date(1970, 0, 1),
  toDate = new Date(2100, 11, 31),
  className = '',
}: CalendarProps) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(month, year);
  const days = range(daysInMonth, 1);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isSelected = (date: number): boolean => {
    if (!selected) return false;
    if (mode === 'range' && Array.isArray(selected) && selected.length === 2) {
      return date >= selected[0].getDate() && date <= selected[1].getDate();
    }
    if (selected instanceof Date) {
      return date === selected.getDate();
    }
    return false;
  };

  function selectDate(day: number) {
    const date = new Date(year, month, day);
    if (date < fromDate || date > toDate) return;
    onSelect(date);
  }

  return (
    <div className={`calendar ${className} text-gha-white`}>
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={() => {
            if (month === 0) {
              setMonth(11);
              setYear(year - 1);
            } else setMonth(month - 1);
          }}
        >
          &lt;
        </button>
        <div>{`${today.toLocaleString('default', { month: 'long' })} ${year}`}</div>
        <button
          onClick={() => {
            if (month === 11) {
              setMonth(0);
              setYear(year + 1);
            } else setMonth(month + 1);
          }}
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {weekdays.map(day => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
        {days.map(day => (
          <button
            type="button"
            key={day}
            onClick={() => selectDate(day)}
            className={`rounded-md py-1 hover:bg-gha-orange hover:text-gha-dark ${isSelected(day) ? 'bg-gha-orange text-gha-dark' : ''}`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
