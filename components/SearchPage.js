import classes from "./search.module.css";
export default function Search()
{
    return (
        <slug className={classes.slug}>
            <p>   <input type="text" placeholder="Address, neighborhood, city, ZIP" classnAME="styled-input"/> </p>
        </slug>
    );
}