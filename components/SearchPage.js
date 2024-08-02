import classes from "./search.module.css";

export default function Search()
{
    
    return (
        <slug className={classes.slug}>
            <hr/>
          <div className={classes.styledInput}>
      <input  type="text" placeholder="Address, neighborhood, city, ZIP" />
    </div>
        </slug>
    );
}