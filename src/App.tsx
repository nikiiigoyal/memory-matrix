import { useRive } from '@rive-app/react-canvas';
import { useState } from 'react';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  
  const { RiveComponent, rive } = useRive({
    src: '/memory_game.riv',
    autoplay: gameStarted,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      console.log('Rive file loaded successfully!');
      // Force resize after load
      if (rive) {
        setTimeout(() => {
          rive.resizeDrawingSurfaceToCanvas();
        }, 100);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!gameStarted ? (
        <div className="text-center p-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Memory Game</h2>
          <button 
            onClick={() => setGameStarted(true)}
            className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Play Game
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;