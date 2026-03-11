function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">
        Welcome to Products App
      </h1>

      {/* images row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

        {/* left image */}
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.wi4oNAwQgr3l-XizA-5-BAHaLI?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="product1"
          className="w-40 sm:w-52 md:w-60 object-contain"
        />

        {/* center image */}
        <img
          src="https://4.imimg.com/data4/SJ/KF/MY-26478092/adn-kfkt-502-500x500.jpg"
          alt="product2"
          className="w-40 sm:w-55 md:w-65 object-contain"
        />

        {/* right image */}
        <img
          src="https://thumbs.dreamstime.com/b/cute-little-children-boys-girls-dressed-glamour-outfits-trendy-hairstyles-posing-against-beige-studio-cute-little-314180562.jpg"
          alt="product3"
          className="w-40 sm:w-52 md:w-60 object-contain"
        />

      </div>

      <p className="text-gray-700 mt-6 text-sm sm:text-base">
        Browse and explore different products easily.
      </p>

    </div>
  );
}

export default Home;