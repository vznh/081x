"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

const Knob: React.FC<{ onChange: (angle: number) => void }> = ({ onChange }) => {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const knobRef = useRef<HTMLDivElement>(null);
  const lastPositionRef = useRef<{x: number, y: number} | null>(null);
  const lastAngleRef = useRef<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    lastPositionRef.current = { x: e.clientX, y: e.clientY };

    document.body.style.cursor = 'move';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !lastPositionRef.current || !knobRef.current) return;

    const rect = knobRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const prevAngle = Math.atan2(
      lastPositionRef.current.y - centerY,
      lastPositionRef.current.x - centerX
    );

    const currentAngle = Math.atan2(
      e.clientY - centerY,
      e.clientX - centerX
    );

    let deltaAngle = currentAngle - prevAngle;

    // Wrap around for smoother rotation when crossing the boundary
    if (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    if (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    // Convert to degrees and apply to current angle
    const deltaDegrees = deltaAngle * (180 / Math.PI);
    let newAngle = lastAngleRef.current + deltaDegrees;

    // Constrain to min/max bounds (-135° to 135°)
    newAngle = Math.max(-135, Math.min(135, newAngle));

    setAngle(newAngle);
    lastAngleRef.current = newAngle;
    lastPositionRef.current = { x: e.clientX, y: e.clientY };

    onChange?.(newAngle);
  }, [isDragging, onChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    lastPositionRef.current = null;
    document.body.style.cursor = 'default';
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={knobRef}
      className={`select-none relative`}
      onMouseDown={handleMouseDown}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'center',
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
    >
      <Image
        src="/assets/knob.png"
        alt="Rotatable Knob"
        width={306}
        height={306}
        priority
        draggable={false}
        className="pointer-events-none"
      />
    </div>
  );
};

export { Knob };
