import React from 'react';
import App from '../src/App.js';
import SiteInfo from '../src/meta.js';
import imageData from '../src/manifest.js'

import {insertRule} from 'next/css';

insertRule(`
  :root {
    --accent: #EF540D;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
  }

  html {
    height: 100%;
    font: 87.5%/1.5 -apple-system, "BlinkMacSystemFont", "SF UI", "Helvetica Neue", sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

    a:hover, a:focus {
      color: var(--accent);
    }

  p {
    margin-bottom: 1.5rem;
  }
`);

let startingIndex = -1;

export default () => (
  <App
    preface={SiteInfo.fullDescription}
    images={imageData.reverse()} />
)
