import Image from "next/image";
import React from "react";
import { SingleDesign } from "../../types/types";
const FullDesign: React.FC<{
  metal: string;
  MainImg: SingleDesign;
  ImageQuery: string;
}> = (props) => {
  return (
    <React.Fragment>
      <section className="flex flex-wrap overflow-hidden rounded bg-white text-center md:px-2">
        <div className="my-2 flex w-full flex-col md:flex-row md:p-0">
          {/* Hero Design  */}
          <div className="bg-violet rounded-t rounded-b-none md:w-3/5">
            <div className="my-2 flex relative h-full w-full min-w-[8] flex-col rounded-t rounded-b-none md:m-3 md:my-auto">
              {/* Image  */}
              <Image
                src={`/images/designs/images/${
                  props.MainImg.path +
                  props.MainImg.image +
                  "." +
                  props.MainImg.img_type
                }`}
                layout="fill"
                alt={props.MainImg.alt}
                className="shadow-lg2 relative rounded object-contain md:max-h-[75vh] md:min-h-[15rem] md:max-w-[100%]"
              />
            </div>
          </div>
          {/* Product Detail  */}
          <div className="text-left md:w-2/5 md:px-6 lg:px-4">
            <h1 className="text-primary text-3xl font-semibold">
              Product Detail
            </h1>
            <ul className="mt-6 space-y-2 md:space-y-4">
              <li className="border-b border-gray-200">
                <span>
                  <div className="border-b border-gray-200">
                    {/* Price Breakup  */}
                    <template slot="accordion-trigger">
                      <span className="font-bold">Price -</span>
                      <span v-if="MainImg.weight">N/A</span>
                      <span v-else>N/A</span>
                    </template>
                    <template slot="accordion-content">
                      <span>N/A</span>
                    </template>
                  </div>
                </span>
              </li>
              <li className="flex border-b border-gray-200">
                <span className="font-bold">Weight -</span>
                <div className="ml-auto">
                  <span className="text-right">
                    {props.MainImg.weight} gm{" "}
                  </span>
                </div>
              </li>
              <li className="flex w-full border-b border-gray-200">
                <span className="font-bold">Purity -</span>

                <span className="ml-auto">
                  &quot;22K(91.6)&quot; : &quot;92.5&quot;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FullDesign;
