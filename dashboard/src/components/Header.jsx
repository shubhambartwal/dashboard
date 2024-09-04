
const Header = () => {
  return (
    <div className="bg-green-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Dashboard</h1>
      <div className="flex items-center">
        <span>Admin</span>
        <img src="/path-to-profile-pic" alt="Profile" className="w-8 h-8 rounded-full ml-4" />
      </div>
    </div>
  );
};

export default Header;