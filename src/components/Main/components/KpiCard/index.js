const KpiCard = ({ label, value }) => {
  return (
    <div className=" flex flex-col gap-3 rounded-md bg-white p-5 drop-shadow-md">
      <div className="flex gap-2 text-sm font-medium">
        <div className="h-5 w-5 rounded-full bg-blue-500"></div>
        <span>{label}</span>
      </div>
      <div className="text-2xl font-bold ">{value.toFixed(2)}</div>
    </div>
  );
};

export default KpiCard;
