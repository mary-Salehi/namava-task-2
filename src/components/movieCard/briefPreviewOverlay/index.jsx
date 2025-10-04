import { convertToPersianNumbers } from "../../../utils/convertToPersianNumbers";
import HeartIcon from "../../icons/HeartIcon";
import ImdbIcon from "../../icons/ImdbIcon";
import MicIcon from "../../icons/micIcon";
import SubtitleIcon from "../../icons/SubtitleIcon";
import { useStyles } from "./styles";

function BriefPreview({ briefPreview, isHovered, movie }) {
  const classes = useStyles({ isHovered });
  return (
    <div className={classes.overlay}>
      <div className={classes.info}>
        <div>
          <span>{movie.type === "Movie" ? "فیلم" : "سریال"} - </span>
          <span>{convertToPersianNumbers(briefPreview.year)}</span>
        </div>

        <div className={classes.flexRow}>
          <HeartIcon className={classes.icon} />
          <span>{convertToPersianNumbers(briefPreview.hit)}%</span>
        </div>

        {briefPreview.imdb && (
          <div className={classes.flexRow}>
            <ImdbIcon />
            <span>{briefPreview.imdb}</span>
          </div>
        )}

        <div>
          {(briefPreview.hasPersianSubtitle ||
            briefPreview.dubsType !== "None") && (
            <div className={classes.flexRow}>
              {briefPreview.dubsType !== "None" ? (
                <div className={classes.flexRow}>
                  <MicIcon className={classes.icon} />
                  {briefPreview.dubsType === "ExclusiveDubs"
                    ? "دوبله نماوا"
                    : "دوبله اختصاصی"}
                </div>
              ) : briefPreview.dubsType == "None" ? (
                <div className={classes.flexRow}>
                  <SubtitleIcon className={classes.icon} />
                  <span>زیرنویس</span>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BriefPreview;
