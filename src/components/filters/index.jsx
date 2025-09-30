import { createUseStyles } from "react-jss";
import { filtersStyles } from "./styles";
import { filterSections } from "./filtersSection";
import classNames from "classnames";
import { useCallback, useState } from "react";
import Checkbox from "./checkbox/index";

const useStyles = createUseStyles(filtersStyles);

function Filters({checkedBoxes,setCheckedBoxes}) {
  const classes = useStyles();
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = useCallback((id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const toggleCheckbox = useCallback((id) => {
    setCheckedBoxes((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      return updated;
    });
  }, []);

  return (
    <div className={classes.filterSection}>
      <div className={classes.filterHeader}>
        <span>فیلترها</span>
        <button className={classes.deleteAllBtn}>حذف همه</button>
      </div>
      <div className={classes.filtersContainer}>
        {filterSections.map((filter) => (
          <div key={filter.id} className={classes.filterAccordion}>
            {filter.title && (
              <div
                onClick={() => toggleAccordion(filter.id)}
                className={classes.filterAccordionHeader}
              >
                <span>{filter.title}</span>
                <span className={classes.chevronIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.5C11.6698 15.5035 11.3497 15.3861 11.1 15.17L6.87005 11.421C6.63444 11.224 6.49829 10.9326 6.49829 10.6255C6.49829 10.3184 6.63444 10.027 6.87005 9.82999C7.38873 9.38821 8.15137 9.38821 8.67005 9.82999L12.003 12.783L15.335 9.82999C15.8537 9.38821 16.6164 9.38821 17.135 9.82999C17.3707 10.027 17.5068 10.3184 17.5068 10.6255C17.5068 10.9326 17.3707 11.224 17.135 11.421L12.905 15.17C12.6541 15.3873 12.332 15.5047 12 15.5Z"
                      fill="#AAAAAA"
                    />
                  </svg>
                </span>
              </div>
            )}
            <div
              className={classNames(classes.filterAccordionContent, {
                [classes.accordionOpen]:
                  openAccordions[filter.id] || !filter.title,
                [classes.flexRow]: !filter.title,
                [classes.flexCol]: filter.title,
              })}
            >
              {filter.options &&
                filter.options.map((option) => (
                  <Checkbox
                    label={option.label}
                    key={option.id}
                    id={option.id}
                    checked={!!checkedBoxes[option.id]}
                    toggle={toggleCheckbox}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
