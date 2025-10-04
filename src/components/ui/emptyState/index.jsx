import EmptyStateIcon from "../../icons/EmptyStateIcon";
import { useStyles } from "./styles.";

function EmptyState() {
  const classes = useStyles();
  return (
    <div className={classes.emptyState}>
      <EmptyStateIcon/>
      <p>
        عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق
        فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
      </p>
    </div>
  );
}

export default EmptyState;
