import { useCallback, useState } from 'react';
import FakeLogin from './pages/FakeLogin';
import IntroGate from './pages/IntroGate';

const PROXY_URL = 'https://dashboard.aidenybarras-egirl-is.online';

const App = () => {
  const [phase, setPhase] = useState('login');

  const handleLoginSuccess = useCallback(() => {
    setPhase('gate');
  }, []);

  const handleBypass = useCallback(() => {
    window.location.href = PROXY_URL;
  }, []);

  if (phase === 'login') {
    return <FakeLogin onSuccess={handleLoginSuccess} />;
  }

  return <IntroGate onContinue={handleBypass} />;
};

export default App;
