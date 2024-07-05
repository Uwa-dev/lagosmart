import Image from 'next/image';

interface SolutionProps {
  backgroundImage: string;
  title: string;
}

const Site = ({ backgroundImage, title }: SolutionProps) => {
  const isRetail = title === 'Retail';
  const containerClass = isRetail ? 'rectangle-format' : 'square-format';

  return (
    <div className={`${containerClass} ${backgroundImage}`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    { backgroundImage: '/transportation.jpg', title: 'Transportation' },
    { backgroundImage: '/energy.jpg', title: 'Energy' },
    { backgroundImage: '/traffic.png', title: 'Traffic' },
    { backgroundImage: '/banking.png', title: 'Banking & Finance' },
    { backgroundImage: '/building.jpg', title: 'Building' },
    { backgroundImage: '/retai', title: 'Retail' }, // Retail will use the rectangle format
  ];

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-1">
      <div>
        <h1 className="text-center text-4xl font-bold mb-6">Solutions</h1>
      </div>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {solutions.map((solution, index) => (
          <Site key={index} backgroundImage={solution.backgroundImage} title={solution.title} />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
