import { useState } from 'react';
import AnimatedTextScreen from './components/AnimatedTextScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'text' | 'game'>('text');

  const handleTextAnimationComplete = () => {
    console.log('Text animation completed, switching to game');
    // Called when text animation finishes
    setTimeout(() => {
      setCurrentScreen('game');
    }, 500); // Wait 1 second after text animation
  };

  const handleGameRestart = () => {
    setCurrentScreen('text');
  };

  return (
    <div className="min-h-screen bg-[rgb(15,104,162)] flex items-center justify-center">
      {currentScreen === 'text' && (
        <AnimatedTextScreen onAnimationComplete={handleTextAnimationComplete} />
      )}
      
      {currentScreen === 'game' && (
        <GameScreen onRestart={handleGameRestart} />
      )}
    </div>
  );
}

export default App;