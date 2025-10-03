import { createUseStyles } from "react-jss";
import { navLinks } from "../../../constants/navLinks";
import { headerStyles } from "./styles";
import classNames from "classnames";
import { useScroll } from "../../../hooks/useScroll";
import NamavaLogo from "../../icons/NamavaLogo";
import SearchIcon from "../../icons/SearchIcon";
import MessageIcon from "../../icons/MessageIcon";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(headerStyles);

function Header() {
  const isHeaderFixed = useScroll()
  const classes = useStyles({isHeaderFixed});

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.navContent}>
          <NamavaLogo className={classes.navLogo}/>
          <ul className={classes.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link className={classes.navLink} to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.navActions}>
          <SearchIcon className={classes.headerIcon}/>
          <MessageIcon className={classes.headerIcon}/>
          <div className={classNames(classes.userProfile , classes.headerIcon)}>
            <img src="/src/assets/images/profile-image.png" alt="عکس پروفایل" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
