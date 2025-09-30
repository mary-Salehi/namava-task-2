import { Player } from "@lottiefiles/react-lottie-player";
import pageLoaderAnimation from './lottieAnimations/page-loader-animation.json';

function Loader() {
  return (
    <Player
      autoplay
      loop
      src={pageLoaderAnimation}
      style={{ height: "100px", width: "100px" }}
    />
  );
}

export default Loader;
