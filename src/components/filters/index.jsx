import { useStyles } from "./styles";
import { filterSections } from "./filtersSection";
import classNames from "classnames";
import { useCallback, useState } from "react";
import Checkbox from "./checkbox/index";
import ChevronDownIcon from "../icons/ChevronDownIcon";


function Filters({ checkedBoxes, setCheckedBoxes }) {
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
                <ChevronDownIcon className={classes.chevronIcon} />
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
