/* eslint-disable react/prop-types */

import  loading  from "../assets/loading.png";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
<<<<<<< HEAD:BuddyForm/src/component/Generating.jsx
        Generating
=======
      Have a complaint?
>>>>>>> 93fb3706c4d08b982bcf07b8e5ebdd8e89ab6b64:brainwave-main/src/components/Generating.jsx
    </div>
  );
};

export default Generating;
