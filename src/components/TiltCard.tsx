// components/TiltCard.tsx
'use client';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 15,
                speed: 500,
                glare: true,
                'max-glare': 0.3,
                scale: 1.05,
            });
        }

        return () => {
            (tiltRef.current as any)?.vanillaTilt?.destroy();
        };
    }, []);

    return (
        <div ref={tiltRef} className={className}>
            {children}
        </div>
    );
}
