import React, {
  useState,
  createContext,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const WindowContext = createContext({});
const WindowProvider = ({ children }) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const isMounted = useRef(true);

  const updateWindow = () => {
    if (isMounted.current) {
      if (window.innerWidth < 768) {
        setIsSmallDevice(true);
        setIsMediumDevice(false);
        setIsLargeDevice(false);
      } else if (
        window.innerWidth >= 768 &&
        window.innerWidth < 991
      ) {
        setIsMediumDevice(true);
        setIsSmallDevice(false);
        setIsLargeDevice(false);
      } else {
        setIsSmallDevice(false);
        setIsMediumDevice(false);
        setIsLargeDevice(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    updateWindow();
    window.addEventListener('resize', updateWindow);

    return () => {
      window.addEventListener('resize', updateWindow);
    };
  }, []);

  const value = useMemo(() => {
    return {
      isSmallDevice,
      isMediumDevice,
      isLargeDevice,
      setIsLargeDevice,
      setIsMediumDevice,
      setIsSmallDevice,
    };
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);
  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
};

WindowProvider.propTypes = {
  children: PropTypes.node,
};

WindowProvider.defaultProps = {
  children: <div>WindowContext</div>,
};

export default WindowProvider;
