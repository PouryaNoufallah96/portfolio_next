interface ICardProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: ICardProps) => {
  return (
    <div className="flex flex-col gap-4 text-slate-100 w-full">
      <h2 className=" text-4xl font-bold capitalize "> {title} </h2>
      <div className="flex flex-col gap-3 bg-gray-800 rounded-md shadow text-lg p-3 md:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
