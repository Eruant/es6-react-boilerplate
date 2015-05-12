import React from 'react';
import domready from 'domready';
import App from './components/app';

domready(() => React.render(<App />, document.querySelector('body')));
