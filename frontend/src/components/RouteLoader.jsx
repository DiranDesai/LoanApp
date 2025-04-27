import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LoaderContext } from '../context/LoaderContext';

const RouteLoader = () => {
  const location = useLocation();
  const { setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [location, setIsLoading]);

  return null;
};

export default RouteLoader;
