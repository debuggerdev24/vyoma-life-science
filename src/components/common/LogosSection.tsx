const LogosSection = () => {
  return (
    <section className="bg-white flex border border-[#E5E7DE] w-full mx-auto justify-center">
      <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
        <img className="h-20 w-full" src="/cargill.png" alt="Cargill" />
      </div>
      <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
        <img className="h-20 w-full" src="/syngenta.png" alt="Syngenta" />
      </div>

      <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
        <img src="/corteva.png" className="h-20 w-full" alt="Corteva" />
      </div>
      <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
        <img src="/cf.png" className="h-20 w-full" alt="CF" />
      </div>
      <div className="px-[30px] py-[60px] border-r border-[#E5E7DE]">
        <img src="/vital.png" className="h-20 w-full" alt="vital" />
      </div>
      <div className="px-[30px] py-[60px] ">
        <img
          src="/LouisDreyfus.png"
          className="h-20 w-full"
          alt="Louis Dreyfus"
        />
      </div>
    </section>
  );
};

export default LogosSection;
