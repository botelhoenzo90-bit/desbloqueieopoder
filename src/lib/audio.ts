
export const playSound = (type: 'click' | 'success' | 'unlock' | 'complete') => {
  // Silent catch for environments where AudioContext might be blocked or unavailable
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playTone = (freq: number, duration: number, type: OscillatorType = 'sine') => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      
      gain.gain.setValueAtTime(0.1, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(audioContext.destination);
      
      osc.start();
      osc.stop(audioContext.currentTime + duration);
    };

    switch (type) {
      case 'click':
        playTone(440, 0.1);
        break;
      case 'success':
        playTone(523.25, 0.2);
        setTimeout(() => playTone(659.25, 0.2), 100);
        break;
      case 'unlock':
        playTone(330, 0.3, 'triangle');
        setTimeout(() => playTone(440, 0.3, 'triangle'), 150);
        break;
      case 'complete':
        playTone(523.25, 0.5, 'square');
        setTimeout(() => playTone(783.99, 0.5, 'square'), 200);
        setTimeout(() => playTone(1046.50, 0.8, 'square'), 400);
        break;
    }
  } catch (e) {
    console.warn("Audio not supported or blocked", e);
  }
};
