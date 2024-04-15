import { forwardRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ isValid = true, className, ...props }, ref) => {
    return (
      <div className={styles['input-wrapper']}>
        <input
          placeholder="Search..."
          ref={ref}
          className={cn(styles["input"], className, {
            [styles["invalid"]]: isValid,
          })}
          {...props}
        />
        <img className={styles['input-icon']} src='/search.svg' alt='search'/>
      </div>
    );
  }
);

export default Search;
