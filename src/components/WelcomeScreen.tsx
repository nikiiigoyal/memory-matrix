/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
interface welcomeNAmeScreenProps {
  onNameSubmit: any;
}

const WelcomeScreen = ({onNameSubmit} : welcomeNAmeScreenProps) => {
    const [inputValue,setInputValue] = useState('');
    const handleSubmit = () => {
        if (inputValue.trim()) {
            onNameSubmit(inputValue.trim());
    }
}
    return (
        <>
        
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-[#fffff5ed] rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🧠 Memory Magic
          </h1>
          <p className="text-gray-600">
            Test your memory skills with this fun matching game!
          </p>
        </div>

        {/* Username Input */}
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your name to get started:
            </label>
            <input
              id="username"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Your name here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-lg capitalize"
              maxLength={20}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Start Playing! 🎮
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">How to play:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Click on tiles to flip them</li>
            <li>• Match pairs of identical cards</li>
            {/* <li>• Complete the level with minimum attempts</li> */}
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}
export default WelcomeScreen