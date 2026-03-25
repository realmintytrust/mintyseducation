import { useCallback, useState } from 'react';
import FakeLogin from './pages/FakeLogin';
import IntroGate from './pages/IntroGate';
import DogeApp from './DogeApp';

const App = () => {
  const [phase, setPhase] = useState('login');

  const handleLoginSuccess = useCallback(() => {
    setPhase('gate');
  }, []);

  const handleBypass = useCallback(() => {
    setPhase('app');
  }, []);

  if (phase === 'login') {
    return <FakeLogin onSuccess={handleLoginSuccess} />;
  }

  if (phase === 'gate') {
    return <IntroGate onContinue={handleBypass} />;
  }

  return <DogeApp />;
};

export default App;
