import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { options } from "./input";
import plane from "../images/paper-plane.png";
import globe from "../images/globe.png";

const Autopopulate = () => {
  const items = options;
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filtereditems =
    query === ""
      ? items
      : items.filter((i) =>
          i.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex justify-center items-center">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-full">
          <div className="relative w-full cursor-default overflow-hidden rounded-[12px] text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 bg-nobleBlack-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center w-full border-r border-nobleBlack-600 border-solid py-5 pl-5">
                <img src={globe} alt="Go" height={24} width={24} />
                <Combobox.Input
                  className="w-full border-none outline-none py-3 px-2 text-[16px] leading-6 font-medium text-nobleBlack-100 bg-transparent"
                  displayValue={(i) => i.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div className="p-5 ">
                <Combobox.Button className="flex justify-center items-center bg-nobleBlack-600 rounded-[12px] w-[48px] h-[48px]">
                  <img src={plane} alt="Go" height={24} width={24} />
                </Combobox.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="mt-1 max-h-70 w-full overflow-auto bg-transparent text-base focus:outline-none sm:text-sm">
              {filtereditems.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 text-[16px] leading-6 font-medium text-nobleBlack-100">
                  Nothing found.
                </div>
              ) : (
                filtereditems.map((i) => (
                  <Combobox.Option
                    key={i.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-4 ${
                        active ? "bg-nobleBlack-700" : ""
                      }`
                    }
                    value={i}
                  >
                    {({ selected, active }) => (
                      <div className="flex items-center w-full pl-5">
                        <img src={globe} alt="Go" height={24} width={24} />
                        <span className="w-full border-none outline-none px-2 text-[16px] leading-6 font-medium text-nobleBlack-100 focus:ring-0 bg-transparent">
                          {i.name}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Autopopulate;
