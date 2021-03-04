import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
