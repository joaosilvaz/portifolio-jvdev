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

    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    return () => {
      (tiltNode as any).vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
