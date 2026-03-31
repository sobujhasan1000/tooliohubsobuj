export default function AdminHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome Admin 👋</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-white p-5 rounded shadow">
          <h2>Total Blogs</h2>
          <p className="text-2xl font-bold">10</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2>Visitors</h2>
          <p className="text-2xl font-bold">1.2K</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2>Comments</h2>
          <p className="text-2xl font-bold">320</p>
        </div>

      </div>
    </div>
  );
}