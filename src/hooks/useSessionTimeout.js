import { useSession, signOut } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

const useSessionTimeout = () => {
  const [session, loading] = useSession();

  const timeout = 1000 * 60 * 5;
  const timeoutAlert = 1000 * 60;

  const [remaining, setRemaining] = useState(timeout);

  const [showModal, setShowModal] = useState(false);

  const [timer, setTimer] = useState();

  const handleOnActive = () => console.log('active');
  const handleOnIdle = () => signOut();

  const { start, reset, getRemainingTime } = useIdleTimer({
    timeout: timeout,
    events: [],
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    crossTab: true,
  });

  const handleReset = () => {
    reset();
    setShowModal(false);
  };

  useEffect(() => {
    if (session) {
      if (!timer) {
        start();

        setTimer(
          setInterval(() => {
            setRemaining(getRemainingTime());
          }, 1000)
        );
      }
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  }, [session]);

  useEffect(() => {
    if (remaining <= timeoutAlert) {
      setShowModal(true);
    }

    //console.log(Math.round(remaining / 1000) + ' segs');
  }, [remaining]);

  return { handleReset, remaining, showModal };
};

export default useSessionTimeout;
