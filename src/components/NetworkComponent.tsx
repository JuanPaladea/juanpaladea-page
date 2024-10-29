const NetworkComponent = () => {
  return (
    <div className="bg-gray-900 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10">
          <img
            alt="Transistor"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default NetworkComponent;
