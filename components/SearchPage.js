import classes from "./search.module.css";

export default function Search()
{
    
    return (
        <slug className={classes.slug}>
            <hr className="styledHr" />
      <input className={classes.styledInput} type="text" placeholder="Address, neighborhood, city, ZIP" />
        </slug>
    );
}