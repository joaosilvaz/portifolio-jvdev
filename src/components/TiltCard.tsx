'use client';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const tiltRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;
        if (!tiltNode) return;
      
        // use tiltNode aqui
      
        return () => {
          // cleanup usando tiltNode se necessário
        };
      }, []);
      


    return (
        <div ref={tiltRef} className={className}>
            {children}
        </div>
    );
}
