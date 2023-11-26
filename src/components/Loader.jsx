import { helix } from "ldrs";
helix.register();
export const Loader = () => {
  return (
    <div className="container-loader">
      <l-helix size="45" speed="2.5" color="black"></l-helix>
    </div>
  );
};




