import React from 'react';
import Nav from '../Nav';

function Home() {
  return (
    <React.Fragment>
      <article>
        <header>
          <h1 data-gtm-article>First Article</h1>
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
        <div data-gtm-cta='buy'>
          <button>Buy Our Stuff</button>
        </div>
      </article>
      <article>
        <header>
          <h1 data-gtm-article>Second Article</h1>
        </header>
        <p>
          Amet consectetur adipisicing elit. Ipsum aut doloremque non, provident
          ipsam eaque, libero sequi voluptatem mollitia ducimus iste a ea, odio
          quas asperiores quis quia veniam sunt?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          temporibus exercitationem corrupti illo suscipit aliquam accusantium
          ullam non!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          consequatur enim nemo corporis asperiores rem. Excepturi, aliquam!
          Harum earum expedita deserunt, aperiam ducimus provident incidunt
          autem consectetur, aliquam dolorem soluta?
        </p>
        <button data-gtm-cta='buy'>BUY OUR STUFF!!!!</button>
      </article>
      <article>
        <header>
          <h1 data-gtm-article>Third Article</h1>
        </header>
        <p>
          Amet consectetur adipisicing elit. Ipsum aut doloremque non, provident
          ipsam eaque, libero sequi voluptatem mollitia ducimus iste a ea, odio
          quas asperiores quis quia veniam sunt?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          temporibus exercitationem corrupti illo suscipit aliquam accusantium
          ullam non!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          consequatur enim nemo corporis asperiores rem. Excepturi, aliquam!
          Harum earum expedita deserunt, aperiam ducimus provident incidunt
          autem consectetur, aliquam dolorem soluta?
        </p>
        <button data-gtm-cta='buy'>Buy This Product</button>
        <button data-gtm-register='new-features'>
          Get updates when we add new features
        </button>
      </article>
      <section className='callout'>
        <section>
          <h3>Dig It? Dig This!</h3>
          <button data-gtm-register>Register wit' us</button>
          <button data-gtm-subscribe='main list'>
            Subscribe to our mailing list
          </button>
        </section>

        <section>
          <h4>Sharing is caring!</h4>
          <p>Tell your buds</p>
          <button data-gtm-share='facebook'>Facebook</button>
          <button data-gtm-share='twitter'>Twitter</button>
          <button data-gtm-share='geocities'>Geocities</button>
        </section>

        <section>
          <h4>Holy Fact Sheet, Batman!</h4>
          <p>
            Need more info?{' '}
            <a href='#' data-gtm-download='factsheet'>
              Download
            </a>{' '}
            a fact sheet and be the coolest kid in town.
          </p>
        </section>

        <section>
          <h4>Spend! Spend! Spend!</h4>
          <p>Visit our HiTek ECommerce Shopping Palace.</p>
          <button data-gtm-ecomm='enter-store'>Let's go Shopping</button>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Home;
