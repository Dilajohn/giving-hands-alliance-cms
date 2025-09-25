'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from '@radix-ui/react-icons';

import { Button } from './button';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

import { Calendar } from './calendar';

interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface DateRangePickerProps {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  className?: string;
}

export function DateRangePicker({ dateRange, setDateRange, className = '' }: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);

  const formattedStart = dateRange?.start ? format(dateRange.start, 'MMM dd, yyyy') : '';
  const formattedEnd = dateRange?.end ? format(dateRange.end, 'MMM dd, yyyy') : '';

  function onSelectDate(date: Date) {
    if (!dateRange?.start || (dateRange.start && dateRange.end)) {
      setDateRange({ start: date, end: null });
    } else if (date < dateRange.start) {
      setDateRange({ start: date, end: dateRange.start });
    } else {
      setDateRange({ start: dateRange.start, end: date });
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          variant="outline"
          className={`w-[240px] justify-start text-left font-normal bg-gha-dark/70 text-gha-white border border-gha-gray hover:border-gha-orange hover:text-gha-orange ${className}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{formattedStart && formattedEnd ? `${formattedStart} - ${formattedEnd}` : 'Select Date Range'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-gha-dark/80 backdrop-blur-md border border-gha-orange rounded-md shadow-lg">
        <Calendar
          mode="range"
          selected={dateRange?.start && dateRange?.end ? [dateRange.start, dateRange.end] : undefined}
          onSelect={onSelectDate}
          initialFocus
          fromDate={new Date(2020, 0, 1)}
          toDate={new Date(2030, 11, 31)}
          className="bg-transparent text-gha-white rounded-md"
        />
      </PopoverContent>
    </Popover>
  );
}
