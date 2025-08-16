// components/Background
// Will use camera feed as background, else wavy texture.
"use client";
import React from "react";

const Background = () => {
  const ref = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    let stream: MediaStream;

    const start = async () => {
      try {
        stream = await navigator
          .mediaDevices
          .getUserMedia({ video: true, audio: false });

        ref!.current!.srcObject = stream;
      } catch {
        console.log("Either the user didn't want video feed, or there was an unexpected error. Running fallback background.");
      }
    };

    start();

    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
    }
  }, []);

  return <div className="w-full h-full">
    <video
      ref={ref}
      autoPlay
      playsInline
      muted
      className="w-full h-full object-cover"
    />
  </div>

}

export { Background };
