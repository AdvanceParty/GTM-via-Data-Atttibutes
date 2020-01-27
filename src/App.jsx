import React from 'react';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Hello There, Friend</h1>
      </header>
      <nav data-gtm-nav='primary'>
        <ul>
          <li>
            <a href='#App'>Nav 1</a>
          </li>
          <li>
            <a href='#App'>Nav 2</a>
          </li>
          <li>
            <a href='#App'>Nav 3</a>
          </li>
          <li>
            <a href='#App'>Nav 4</a>
          </li>
          <li>
            <a href='#App'>Nav 5</a>
          </li>
          <li>
            <a href='#App'>Nav 6</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>This is a nice thing</h2>
        <article>
          <header>
            <h1>First Article</h1>
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aut
            doloremque non, provident ipsam eaque, libero sequi voluptatem
            mollitia ducimus iste a ea, odio quas asperiores quis quia veniam
            sunt?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            temporibus exercitationem corrupti illo suscipit aliquam accusantium
            ullam non! Quos, autem odit error aliquam reiciendis reprehenderit
            quidem rem distinctio. Fuga, hic.
          </p>
        </article>
        <button data-gtm-cta='purchase'>Buy Our Stuff</button>
        <article>
          <header>
            <div className='section' data-gtm-content='article'>
              <h1>Second Article</h1>
              <p>
                Amet consectetur adipisicing elit. Ipsum aut doloremque non,
                provident ipsam eaque, libero sequi voluptatem mollitia ducimus
                iste a ea, odio quas asperiores quis quia veniam sunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                temporibus exercitationem corrupti illo suscipit aliquam
                accusantium ullam non!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                consequatur enim nemo corporis asperiores rem. Excepturi,
                aliquam! Harum earum expedita deserunt, aperiam ducimus
                provident incidunt autem consectetur, aliquam dolorem soluta?
              </p>
            </div>
          </header>
        </article>
        <button data-gtm-cta='purchase'>Buy Our Stuff</button>
      </main>
      <footer>
        <h3>Extra Stuff</h3>
        <nav data-gtm-nav='secondary'>
          <ul>
            <li>
              <a href='#App'>Privacy</a>
            </li>
            <li>
              <a href='#App'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#App'>Media</a>
            </li>
            <li>
              <a href='#App'>Disclaimer</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
