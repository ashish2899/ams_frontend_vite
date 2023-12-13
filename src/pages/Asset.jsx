import React, { useEffect, useState } from "react";
import AddAsset from "../components/AddAsset";
import AssetTable from "../components/assetComponents/AssetTable";
import { assetList } from "../constants/index";
import axios from "axios";

const Asset = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/asset");
      setData(res.data.data);
      return data;
    };
    getData();
  }, []);
  return (
    <section className="p-3">
      <div className="flex items-center justify-between mb-3 px-10">
        <h1 className="text-2xl font-semibold">Assets</h1>
        <AddAsset />
      </div>
      <div className="px-10 py-2 mx-5">
        <div className="w-full overflow-x-auto">
          <AssetTable data={data} />
        </div>
      </div>
    </section>
  );
};

export default Asset;
