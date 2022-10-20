const HomePage = (): JSX.Element => {
  return (
    <div className="flex h-screen w-screen flex-col bg-indigo-500 items-center justify-center">
      <head>
        <link
          href="https://fonts.google.com/specimen/Quicksand/about?query=quicksand"
          rel="stylesheet"
        />
      </head>
      <div className="h-36 bg-primary w-28 rounded-lg mb-4 hover:drop-shadow-2xl  items-center justify-center flex cursor-pointer flex-col">
        <input
          type="text"
          aria-label="name"
          alt="name"
          className="border-2 border-gray-500 mb-2 w-24 rounded-full shadow-md"
        />
        ❗️
      </div>
      <h1 className="text-3xl font-extrabold text-white font-body">
        Hello world!
      </h1>
    </div>
  );
};

export default HomePage;
