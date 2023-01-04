# react-parse-provider

this package helps integrate Parse Javascript SDK into react js app

## usage:
install the package

``npm install react-parse-provider``

configure as hight order component
```javascript
import React from 'react';
import { ParseProvider } from 'react-parse-provider';

function App() {
  return (
    <ParseProvider
        applicationId="YOUR_APPLICATION_ID" 
        javascriptKey="YOUR_JAVASCRIPT_KEY"
        serverUrl="HTTPS://YOUR_SERVER_URL">
      <MyComponent />
    </ParseProvider>
  );
}
 //...
```

use the parse instance in your components
```javascript
import { useParse } from 'react-parse-provider';

function MyComponent() {
  const Parse = useParse();
  // You can use the Parse object here to access the Parse JavaScript SDK functions
    return <>Hello</>
}
//...
```

# thanks
