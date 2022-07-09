import React from "react";

function upload() {
  return (
    <div className="min-h-[80vh]">
      <div className="w-full text-center">
        <label className="flex flex-row items-center w-full px-4 py-4 mx-auto mt-2 text-3xl text-center duration-150 bg-purple-600 rounded-md cursor-pointer hover:bg-purple-400 ">
          <span className="mx-auto my-auto mt-2 text-3xl text-white">
            Select Files
          </span>
          <input
            type="file"
            accept="image/*"
            name="images"
            // @change="uploadImage"
            id="images"
            multiple
            className="hidden"
          />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-x-3">
        {/* <v-select
          placeholder="Select Category For All"
          className="mt-2 text-xl text-black bg-green-200 md:w-1/2"
          :options="category"
          v-model="parentDesignCategory"
          @input="updateCategory"
        ></v-select>
        <v-select
          placeholder="Select Type For All"
          className="w-full mt-2 text-xl text-black bg-green-200 md:w-1/2"
          :options="type"
          v-model="parentDesignType"
          @input="updateType"
        ></v-select> */}
      </div>
      <div className="flex flex-wrap">
        <button
          // click="submitAllForm"
          className="w-full h-16 p-3 mt-2 mb-6 text-xl font-bold tracking-wide text-gray-100 uppercase transition duration-300 rounded-lg cursor-pointer bg-accent hover:opacity-80"
        >
          Submit All
        </button>
      </div>
    </div>
  );
}

export default upload;
