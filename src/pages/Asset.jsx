import React from "react";
import AddAsset from "../components/AddAsset";

const Asset = () => {
  return (
    <section className="p-3">
      <div className="flex items-center justify-between mb-3 px-10">
        <h1 className="text-2xl font-semibold">Assets</h1>
        <AddAsset />
      </div>
      <div className="px-10 py-2 mx-10 border">
        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            <thead className="border">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="boder">
              <tr className="border">
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Asset;
