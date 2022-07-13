import React, { useState } from "react";

const buttons = [
  { name: "Weight", color: "bg-blue-500" },
  { name: "Move", color: "bg-pink-500" },
  { name: "Delete", color: "bg-yellow-500" },
  { name: "Likes", color: "bg-green-500" },
  { name: "Type", color: "bg-purple-500" },
  { name: "Alt", color: "bg-indigo-500" },
  { name: "Swap", color: "bg-gray-500" },
  { name: "Rename", color: "bg-yellow-500" },
  { name: "Cancel", color: "bg-red" },
];

const Edit:React.FC<{hit:string}> = ({hit}) => {
  const [setting, changeSetting] = useState({
    show: true,
    weight: false,
    alt: false,
    hit: false,
    rename: false,
  });
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    const button: HTMLButtonElement = event.currentTarget;
    changeSetting({ ...setting, [button.name]: false });
  };
  const showModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    const button: HTMLButtonElement = event.currentTarget;
    const name = button.name;

    switch (name) {
      case "Cancel":
        changeSetting({ ...setting, show: true });
        break;
      case "Move":
        break;
      case "Delete":
        break;
      case "Likes":
        break;
      case "Type":
        break;
      case "Alt":
        break;
      case "Swap":
        break;
      case "Rename":
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative w-full">
      <p>Hit {hit}</p>
      {setting.show ? (
        <button
          className="mr-auto btn bg-accent"
          name="show"
          onClick={() => {
            changeSetting({ ...setting, show: false });
          }}
        >
          Edit Image
        </button>
      ) : (
        <div className="flex flex-wrap">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                className={`${button.color} btn-m btn`}
                onClick={showModal}
                name={button.name}
              >
                {button.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Edit;
