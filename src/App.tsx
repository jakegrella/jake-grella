import avatar from './avatar.png';
import picchu from './picchu.jpeg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <img
          className='avatar'
          src={avatar}
          alt='avatar of jake grella wearing a green beanie'
        />
        <h1>jake grella</h1>
      </header>
      <main>
        <img className='picchu' src={picchu} alt='machu picchu, 1911' />
        <div className='content'>
          <p>
            <a
              href='https://twitter.com/jakegrella'
              target='_blank'
              rel='noreferrer'>
              @jakegrella
            </a>{' '}
            /{' '}
            <a
              href='mailto:jake@jakegrella.com'
              target='_blank'
              rel='noreferrer'>
              jake@jakegrella.com
            </a>
          </p>
          <h2>🧢</h2>
          <ul>
            <li>northwestern mutual: july 2021 - present</li>
            <li>contractor: may - july 2021</li>
          </ul>
          <h2>🪚</h2>
          <ul>
            <li>
              <a
                href='https://headedwesttt.com'
                target='_blank'
                rel='noreferrer'>
                headedwesttt.com:
              </a>{' '}
              making real estate content businesses more efficient
            </li>
            <li>
              <a
                href='https://whalewatching.xyz'
                target='_blank'
                rel='noreferrer'>
                whalewatching.xyz:
              </a>{' '}
              view the largest crypto transactions
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
