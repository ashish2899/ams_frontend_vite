import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdAdd, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AddAsset() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    description: "",
    purchase_cost: "",
    purchase_date: "",
  });

  const assetSubmit = async (e) => {
    e.preventDefault();
    const { name, description, purchase_cost, purchase_date } = data;
    try {
      const { data } = await axios.post("/asset", {
        name,
        description,
        purchase_cost,
        purchase_date,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Asset add successfully.");
        navigate("/asset");
      }
    } catch (error) {
      console.log(error);
      toast.error("Asset not added.");
    }
  };
  return (
    <>
      <button
        className="flex gap-2 bg-blue-500 text-white active:bg-blue-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Asset <MdAdd className="h-5 w-5 mr-3" />
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-40 bg-black opacity-75" />
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <form>
                  <div className="flex items-center justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Asset</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black bg-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <MdClose className="h-5 w-5" />
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="name"
                        value={data.name}
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="description"
                        value={data.description}
                        onChange={(e) =>
                          setData({
                            ...data,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="purchase_cost"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Purchase Cost
                      </label>
                      <input
                        type="number"
                        id="purchase_cost"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="purchase_cost"
                        value={data.purchase_cost}
                        onChange={(e) =>
                          setData({
                            ...data,
                            purchase_cost: e.target.value,
                          })
                        }
                        placeholder="Purchase Cost"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="purchase_date"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Purchase Date
                      </label>
                      <input
                        type="date"
                        id="purchase_date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="purchase_date"
                        value={data.purchase_date}
                        onChange={(e) =>
                          setData({
                            ...data,
                            purchase_date: e.target.value,
                          })
                        }
                        placeholder="Purchase Date"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={(e) => {
                        setShowModal(false);
                        assetSubmit(e);
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
