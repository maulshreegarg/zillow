import classes from "./search.module.css";
export default function Search()
{
    return (
        <slug className={classes.slug}>
          <div>
      <input className={classes.styledInput} type="text" placeholder="Address, neighborhood, city, ZIP" />
    </div>
        </slug>
    );
}