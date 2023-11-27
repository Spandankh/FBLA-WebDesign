const Mission = () => {
  return (
    <>
      <div class="bg-ourstory w-full h-[850px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white font-semibold">
        <div>
          <h1 class="text-3xl">OUR STORY</h1>
          <h1 class="text-5xl">GROUNDED WITH SUCCESS.</h1>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-ourstory w-auto h-[650px] bg-center bg-no-repeat object-cover"></div>
        <div class="relative text-black font-semibold flex flex-col md:mt-20">
          <div class="md:px-4">
            <div>
              <h1 class="text-[50px] mb-10">Our Start</h1>
              <p class="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
//ourstory
