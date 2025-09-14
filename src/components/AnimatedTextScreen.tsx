import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

interface AnimatedTextScreenProps {
  onAnimationComplete: () => void;
}

function AnimatedTextScreen({ onAnimationComplete }: AnimatedTextScreenProps) {
  const { RiveComponent, rive } = useRive({
    src: 'memory_magic_text.riv', // Added slash back
    autoplay: true,
    onLoad: () => {
      console.log('Rive file loaded successfully!');
    },
  });

  // Check rive instance when it's ready
  useEffect(() => {
    if (rive) {
      console.log('Rive instance is ready!');
      console.log('Available animations:', rive.animationNames);
      console.log('Is playing:', rive.isPlaying);

       rive.play("Text Run");
      console.log('Playing "Text Run" animation');
    }
  }, [rive]);

  // Simple timer - adjust this to match your animation length
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 75000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <RiveComponent 
        width={1000} 
        height={600} 
        className="border-2 border-red-200" 
      />
    </div>
  );
}

export default AnimatedTextScreen;