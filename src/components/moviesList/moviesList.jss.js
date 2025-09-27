import { theme } from "../../styles/theme";

export const moviesListStyles = {
  moviesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '14px',
    rowGap: '20px',

    [theme.mq(theme.breakpoints.desktop)]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
      columnGap: '16px',
    rowGap: '24px',
    }
  }
}