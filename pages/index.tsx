import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tom Pretty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-lg mx-auto my-10">
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            🚧 Under construction 🚧
          </h1>
          <p className="text-xl text-gray-800">
            Hopefully this won&apos;t take too long to put together...
          </p>
        </header>
      </div>
    </>
  );
};

export default Home;
