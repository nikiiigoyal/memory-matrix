/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRive } from '@rive-app/react-canvas';

interface GameScreenProps {
  onRestart?: () => void; 
}

function GameScreen({ onRestart }: GameScreenProps) {
  const { RiveComponent, rive } = useRive({
    src: 'memory_game.riv', 
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      console.log('Game Rive file loaded successfully!');
      
      if (rive) {
        setTimeout(() => {
          rive.resizeDrawingSurfaceToCanvas();
        }, 1000);
      }
    },
  });

  return (
    <div 
      className="mx-5 my-5 block"
      style={{
        width: '800px',
        height: '685px',
      }}
    >
      <RiveComponent 
        width={1266}
        height={685}
        className="block w-full h-full"
      />
    </div>
  );
}

export default GameScreen;