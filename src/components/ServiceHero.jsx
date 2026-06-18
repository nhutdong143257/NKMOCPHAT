const ServiceHero = ({ service }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <img
        src={service.img}
        alt={service.title}
        className="rounded-xl shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-semibold mb-10 uppercase">
          {service.title}
        </h1>
        <div className="w-24 h-1 bg-lime-600 mb-3 rounded-full"></div>

        <h1 className="text-lg mb-4 uppercase">{service.shortDesc}</h1>

        <p className="text-gray-600 mb-6">{service.desc}</p>

        <button className="btn bg-lime-600 hover:bg-lime-700 text-white border-none">
          Nhận báo giá ngay
        </button>
      </div>
    </div>
  );
};

export default ServiceHero;
