'use client';

import { useState, useEffect } from 'react';

export default function LiveDate() {
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            setDate(now.toLocaleDateString('en-US', options).toUpperCase());
        };

        updateDate();
        const timer = setInterval(updateDate, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">
                {date || "LOADING DATE..."}
            </p>
        </div>
    );
}