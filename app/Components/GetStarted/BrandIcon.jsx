import Icons from "../Icons";

export default function BrandIcon() {
  return (
    <div className="flex items-center">
      <div className="w-12 h-8 bg-blue-500 rounded-3xl flex justify-center items-center">
        <Icons.BrandIcon />
      </div>
      <p className=" ml-3 font-semibold text-blue-500">LearnU</p>
    </div>
  );
}
