import { useState } from 'react';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './App.css';
import DropdownMenu from './components/DropdownMenu';

function App() {
  const [theme, setTheme] = useState<string | null>(null);

  const themeClass = theme ? theme.toLowerCase() : 'secondary';

  return (
    <div className='App'>
      <a
        href='https://vitejs.dev'
        target='_blank'
      >
        <ViteLogo style={{ width: 50, height: 50 }} />
      </a>
      <a
        href='https://reactjs.org'
        target='_blank'
      >
        <ReactLogo className='logo react' />
      </a>
      <h2>
        This is a example to create a npm package using React, Vite, Boostrap
        and Github Actions
      </h2>
      <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
      >
        {`${theme || 'Default'} Theme`}
      </div>
      <div className='btn-group'>
        <button
          className={`text-capitalize btn btn-${themeClass} btn-lg"`}
          type='button'
        >
          {theme ? theme + ' theme' : 'Choose Theme'}
        </button>
        <button
          type='button'
          className={`btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`}
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <span className='visually-hidden'>Toggle Dropdown</span>
        </button>
        <DropdownMenu setState={setTheme} />
      </div>
    </div>
  );
}

export default App;
