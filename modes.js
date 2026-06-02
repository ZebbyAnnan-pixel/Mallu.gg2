// Game Modes Configuration
// Add new modes here to easily expand the game

export const GAME_MODES = {
  normal: {
    name: "Normal Mode",
    description: "Classic dinosaur jumping game",
    character: "images/surya.png",
    jumpSound: "audio/jumpeffect.rishi.mp3",
    gravity: 0.7,
    jumpForce: -14,
    initialSpeed: 6,
    dinoWidth: 50,
    dinoHeight: 50,
    dinoStartY: 170,
    obstacleColor: "#1e8449",
    groundY: 210,
  },
  rishi: {
    name: "Rishi Mode",
    description: "Rishi's special jumping game",
    character: "images/rishi.png",
    jumpSound: "audio/jumpeffect.rishi.mp3",
    gravity: 0.7,
    jumpForce: -14,
    initialSpeed: 6,
    dinoWidth: 50,
    dinoHeight: 50,
    dinoStartY: 170,
    obstacleColor: "#1e8449",
    groundY: 210,
  },
  // Add new modes below this line
  // Example:
  // challenge: {
  //   name: "Challenge Mode",
  //   description: "Hard difficulty with faster speed",
  //   character: "images/character.png",
  //   jumpSound: "audio/jump.mp3",
  //   gravity: 0.8,
  //   jumpForce: -14,
  //   initialSpeed: 8,
  //   dinoWidth: 50,
  //   dinoHeight: 50,
  //   dinoStartY: 170,
  //   obstacleColor: "#c0392b",
  //   groundY: 210,
  // },
};

// Get mode configuration
export function getMode(modeName) {
  return GAME_MODES[modeName] || GAME_MODES.normal;
}

// Get all available modes for UI
export function getAvailableModes() {
  return Object.entries(GAME_MODES).map(([key, value]) => ({
    id: key,
    name: value.name,
    description: value.description,
  }));
}

// Get mode button text
export function getModeButtonText(modeName) {
  const mode = GAME_MODES[modeName];
  return mode ? mode.name : "Unknown Mode";
}
