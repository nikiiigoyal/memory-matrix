import { useState, type SetStateAction } from 'react';
import AnimatedTextScreen from './components/AnimatedTextScreen';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';

// Game flow states
const GAME_STATES = {
  ANIMATED_TEXT: 'animated_text',
  WELCOME: 'welcome',
  GAME: 'game'
};

function App() {
  const [currentState, setCurrentState] = useState(GAME_STATES.ANIMATED_TEXT);
  const [username, setUsername] = useState('');

  // Handle text animation completion
  const handleTextAnimationComplete = () => {
    console.log('Text animation completed, switching to welcome');
    setTimeout(() => {
      setCurrentState(GAME_STATES.WELCOME);
    }, 500);
  };

  // Handle username submission from WelcomeScreen
  const handleNameSubmit = (name: SetStateAction<string>) => {
    console.log('Username submitted:', name);
    setUsername(name);
    setCurrentState(GAME_STATES.GAME);
  };

  // Handle game restart
  const handleGameRestart = () => {
    console.log('Game restarted');
    setCurrentState(GAME_STATES.ANIMATED_TEXT);
    setUsername(''); // Clear username on restart
  };

  return (
    <div className="min-h-screen bg-[rgb(15,104,162)] flex items-center justify-center">
      {currentState === GAME_STATES.ANIMATED_TEXT && (
        <AnimatedTextScreen onAnimationComplete={handleTextAnimationComplete} />
      )}
      
      {currentState === GAME_STATES.WELCOME && (
        <WelcomeScreen onNameSubmit={handleNameSubmit} />
      )}
      
      {currentState === GAME_STATES.GAME && (
        <GameScreen 
          username={username}
          onRestart={handleGameRestart} 
        />
      )}
    </div>
  );
}

export default App;