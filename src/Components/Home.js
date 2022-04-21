import React from 'react';
import Feed from './Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Photos" description="Dogs site home with photos feed." />
      <Feed />
    </section>
  );
};

export default Home;
