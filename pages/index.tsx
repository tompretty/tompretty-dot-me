import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Tom Pretty's personal site" />
        <title>Tom Pretty</title>
      </Head>
      <div className="max-w-xl px-6 mx-auto my-10 space-y-8">
        <header className="flex flex-col sm:flex-row items-center space-x-4">
          <div>
            <img
              className="h-32 rounded-full border-solid border-4 border-gray-900"
              src="profile.jpg"
              alt="Tom Pretty"
            />
          </div>
          <h1 className="text-5xl font-semibold text-gray-900">Tom Pretty</h1>
        </header>
        <main className="space-y-6">
          <section>
            <h2 className="sr-only">About</h2>
            <p className="text-2xl">
              Hi, I&apos;m <b>Tom</b> 👋. I&apos;m a software developer at{" "}
              <b>the Guardian</b>. I spend quite a lot of time coding 👨‍💻 but
              I&apos;m also rather fond of tennis 🎾 cooking 🍳 and my dog 🐶
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="text-2xl">
              I&apos;m still a little new to all this, so don&apos;t have too
              many of these to show off just yet. Here&apos;s a few that
              I&apos;m not too embarrassed by
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-2xl text-blue-600 hover:underline"
                  href="https://github.com/TomPretty/shopping-list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  buildmyshoppinglist.com
                </a>
                <div className="text-lg text-gray-700">
                  A web app for compiling shopping lists
                </div>
              </li>
              <li>
                <a
                  className="text-2xl text-blue-600 hover:underline"
                  href="https://cryptictofifteensquared.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cryptictofifteensquared.com
                </a>
                <div className="text-lg text-gray-700">
                  A web app for translating cryptic crossword urls to solutions
                  on{" "}
                  <a
                    className="hover:underline"
                    href="https://www.fifteensquared.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fifteensquared.net
                  </a>
                </div>
              </li>
              <li>
                <a
                  className="text-2xl text-blue-600 hover:underline"
                  href="https://github.com/TomPretty/weather_display"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  weather-display
                </a>
                <div className="text-lg text-gray-700">
                  A weather display that runs on a raspberry pi + e ink display
                </div>
              </li>
              <li>
                <div className="space-x-2">
                  <span>
                    <a
                      className="text-2xl text-blue-600 hover:underline"
                      href="https://github.com/TomPretty/vim-todo-lists"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      vim-todo-lists
                    </a>
                    ,
                  </span>
                  <span>
                    <a
                      className="text-2xl text-blue-600 hover:underline"
                      href="https://github.com/TomPretty/todoer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      todoer
                    </a>
                    ,
                  </span>
                  <a
                    className="text-2xl text-blue-600 hover:underline"
                    href="https://github.com/TomPretty/dater"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dater
                  </a>
                </div>
                <div className="text-lg text-gray-700">
                  A trio of projects for todo list goodness in vim
                </div>
              </li>
              <li>
                <a
                  className="text-2xl text-blue-600 hover:underline"
                  href="https://github.com/TomPretty/tic_tac_toe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tic-tac-toe
                </a>
                <div className="text-lg text-gray-700">A tic-tac-toe game</div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
