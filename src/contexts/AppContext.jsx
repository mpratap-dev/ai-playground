import React, { PureComponent } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends PureComponent {
  render() {
    const { dispatchTab, tabState, children } = this.props;

    return (
      <AppContext.Provider value={{ dispatchTab, tabState }}>
        {children}
      </AppContext.Provider>
    );
  }
}
