// components/StoreProviderWrapper.jsx
import { StoreProvider } from 'easy-peasy';
import  createAppStore from './store';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function StoreProviderWrapper({ children }) {
    const axiosPrivate = useAxiosPrivate(); // Now we can use the hook here
    const store = createAppStore(axiosPrivate);

    return <StoreProvider store={store}>{children}</StoreProvider>;
}

export default StoreProviderWrapper;