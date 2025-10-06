import { convertToPersianNumbers } from "../../../utils/convertToPersianNumbers";
import HeartIcon from "../../icons/HeartIcon";
import ImdbIcon from "../../icons/ImdbIcon";
import MicIcon from "../../icons/micIcon";
import SubtitleIcon from "../../icons/SubtitleIcon";
import { useStyles } from "./styles";

function BriefPreview({ briefPreview, isHovered, movie }) {
  const classes = useStyles({ isHovered });

  const showAudioTrack = (briefPreview) => {
  if (!briefPreview.hasPersianSubtitle && briefPreview.dubsType === "None") {
    return null;
  }

  if (briefPreview.dubsType !== "None") {
    const dubText = briefPreview.dubsType === "ExclusiveDubs" 
      ? "دوبله نماوا" 
      : "دوبله اختصاصی";
    
    return (
      <div className={classes.flexRow}>
        <MicIcon className={classes.icon} />
        {dubText}
      </div>
    );
  }


  if (briefPreview.hasPersianSubtitle) {
    return (
      <div className={classes.flexRow}>
        <SubtitleIcon className={classes.icon} />
        <span>زیرنویس</span>
      </div>
    );
  }

  return null;
};

  return (
    <div className={classes.overlay}>
      <div className={classes.info}>
        <div>
          <span>{movie.type === "Movie" ? "فیلم" : "سریال"} - </span>
          <span>{convertToPersianNumbers(briefPreview.year)}</span>
        </div>

        {briefPreview.hit !== 0 && (
          <div className={classes.flexRow}>
            <HeartIcon className={classes.icon} />
            <span>{convertToPersianNumbers(briefPreview.hit)}%</span>
          </div>
        )}

        {briefPreview.imdb && (
          <div className={classes.flexRow}>
            <ImdbIcon />
            <span>{briefPreview.imdb}</span>
          </div>
        )}

        {showAudioTrack(briefPreview)}
      </div>
    </div>
  );
}

export default BriefPreview;
