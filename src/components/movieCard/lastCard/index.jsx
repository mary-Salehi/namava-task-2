import { Player } from "@lottiefiles/react-lottie-player";
import cardLoading from "./lottieAnimations/cardLoading.json";

function LastCard() {
  return <Player autoplay loop src={cardLoading} />;
}

export default LastCard;
