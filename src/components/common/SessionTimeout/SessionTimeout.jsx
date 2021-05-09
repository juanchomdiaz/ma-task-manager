import useSessionTimeout from '@hooks/Session/useSessionTimeout';
import AlertModal from './components/AlertModal';

const SessionTimeout = () => {
  const { handleReset, showModal, remaining } = useSessionTimeout();

  return (
    <>
      {showModal && (
        <AlertModal
          show={showModal}
          countDown={Math.round(remaining / 1000)}
          handler={handleReset}
        />
      )}
    </>
  );
};

export default SessionTimeout;
