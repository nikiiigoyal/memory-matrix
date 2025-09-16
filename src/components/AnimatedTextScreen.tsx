import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

interface AnimatedTextScreenProps {
  onAnimationComplete: () => void;
}

function AnimatedTextScreen({ onAnimationComplete }: AnimatedTextScreenProps) {
  const { RiveComponent, rive } = useRive({
    src: 'memoryMagic_text.riv', 
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

  
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-[#313131]">
      <RiveComponent 
        
        className=" w-[1000px] h-[600px] " 
      />
    </div>
  );
}

export default AnimatedTextScreen;