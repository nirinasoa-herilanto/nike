import React, { ReactNode, memo } from 'react';

interface IAppContext {}

export type AppProviderProps = { children: ReactNode };

export const AppStoreContext = React.createContext({} as IAppContext);

const AppStoreProvider: React.FC<AppProviderProps> = ({
  children,
  ...rest
}) => {
  const value = {
    ...rest,
  } as IAppContext;

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};

/**
 * Use to consume `store`
 *
 * ```
 * const { helloWorld } = useAppStore();
 * ```
 */
export const useAppStore = () => React.useContext(AppStoreContext);

export default memo(AppStoreProvider);
