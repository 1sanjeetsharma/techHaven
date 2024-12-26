import React from "react";
function CheckOut() {
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully");
  };
  return (
    <div className="flex justify-center h-screen p-4">
      <form action="" method="post">
        <table className="table-auto">
          <tbody>
            <tr className="mt-5">
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="border"
                  id="name"
                  required
                />
              </td>
            </tr>
            <tr className="mt-5">
              <td>
                <label htmlFor="email">email</label>
              </td>
              <td>
                <input
                  type="email"
                  className="border"
                  name="email"
                  id="email"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">phone</label>
              </td>
              <td>
                <input
                  type="number"
                  className="border"
                  name="phone"
                  id="phone "
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address</label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  className="border"
                  id="address"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="mt-2 block w-1/3 px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          type="submit"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
