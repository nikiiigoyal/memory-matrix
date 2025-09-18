/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRive } from '@rive-app/react-canvas';

interface GameScreenProps {
  username: string;
  onRestart?: () => void; 
}

function GameScreen({ username, onRestart }: GameScreenProps) {

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
    <div className="min-h-screen bg-[rgb(15,104,162)]">
      {/* Game Header with username */}
      <div className='flex justify-between items-center'>
      <div className="shadow-lg p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center ">
          <h1 className="text-xl font-bold text-gray-800">
            Welcome {username}!👋
          </h1>
          <div className="text-sm text-gray-600">
            Click on tiles and match them up!
          </div>
        </div>
      </div>
       <div className="mt-4 text-center">
            <button
              onClick={onRestart}
              className="px-6 py-2 bg-[rgb(237,101,48)] text-white rounded-lg hover:bg-gray-300 transition-colors"
            >
              🔄 Restart Game
            </button>
          </div>
          </div>

      {/* Game Container */}
      <div className="flex items-center justify-center">
        <div className= "">
          {/* Your Rive Game with proper sizing */}
          <div 
            className="mx-auto block"
            style={{
              width: '800px',
              height: '685px',
            }}
          >
            <RiveComponent 
              width={1266}
              height={600}
              className="block w-full h-full"
            />
          </div>
          
          {/* Game Controls */}
         
        </div>
      </div>
    </div>
  );
}

export default GameScreen;