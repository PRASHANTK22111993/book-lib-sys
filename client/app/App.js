import React from 'react';
import RoterCompostion from './RouterInfo';
import { MainStoreComponent } from '../shared/utils';

/**
 * Main App Component Which will Hold the Store Data
 * @param {*} param0 
 */
const App = ({ storeRef }) => {
  return (
    <MainStoreComponent storeRef={storeRef}>
      <RoterCompostion />
    </MainStoreComponent>
  );
};

// Default Export
export default App;