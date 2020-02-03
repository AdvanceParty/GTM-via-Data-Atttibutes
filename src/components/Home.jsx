import React from 'react';

function Home() {
  return (
    <React.Fragment>
      <h2 data-gtm-content='title'>Home</h2>
      <section className='callout'>
        <section>
          <h3>Dig It? Dig This!</h3>
          <button data-gtm-account='register'>Create an account</button>
          <button data-gtm-subscribe='main-list'>
            Subscribe to our mailing list
          </button>
        </section>

        <section data-gtm-social='share'>
          <h4>Sharing is caring!</h4>
          <p>Tell your buds</p>
          <button title='Facebook'>Facebook</button>
          <button title='Twitter'>Twitter</button>
          <button title='Geocities'>Geocities</button>
        </section>

        <section data-gtm-cta='downloads'>
          <h4>Holy Fact Sheet, Batman!</h4>
          <p>
            Need more info?{' '}
            <a href='downloads/FactSheet.pdf'>read the FactSheet</a> and be the
            coolest kid in town.
          </p>
          <p>
            Or, if you prefer takeaways,{' '}
            <a href='downloads/FactSheet.zip'>download a zipped version</a> for
            keepsies.
          </p>
        </section>

        <section>
          <h4>Spend! Spend! Spend!</h4>
          <p>Visit our HiTek ECommerce Shopping Palace.</p>
          <p>
            <a href='#top'>This should be an untagged internal page link.</a>
          </p>
          <button data-gtm-cta='enter-store'>Let's go Shopping</button>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Home;
