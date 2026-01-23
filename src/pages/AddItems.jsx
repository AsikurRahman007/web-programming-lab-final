import InputForm from "../components/InputForm/InputForm";

const AddItems = () => {
  return (
    <div className="border-4 border-black pt-10 lg:pt-20 w-5/6 mx-auto">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-black font-bold text-center">
          Add Items
        </h1>
        <p className="text-base md:text-lg lg:text-xl  text-center mt-6 w-5/6 lg:w-3/4 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <InputForm></InputForm>
    </div>
  );
};

export default AddItems;
