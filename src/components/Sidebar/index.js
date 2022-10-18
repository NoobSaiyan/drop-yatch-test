const Sidebar = () => {
  return (
    <div className="bg-slate-50 px-6 py-10 ">
      <p className=" text-lg font-bold text-blue-500 ">Dashboard</p>
      <div className=" flex flex-col gap-5 py-10 ">
        <p className=" font-medium ">Analytical</p>
        <p className=" font-medium ">Ecommerce</p>
        <p className=" font-medium ">Notes</p>
        <p className=" font-medium ">Calender</p>
        <p className=" font-medium ">Extras</p>
      </div>
    </div>
  );
};
export default Sidebar;
