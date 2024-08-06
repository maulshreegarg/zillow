import classes from "./search.module.css";
import Image from "next/image";
import logoimg from "@/assets/real_estate.jpg";
export default function Search()
{
    
    return (
        <slug>
          <div className={classes.cont}>
          <Image className={classes.image} src={logoimg} 
      alt="Picture of the real estate sale" /> 
      <br/>  <br/>  <br/>  <br/>
          <div className={classes.section1}>
            <h1 className={classes.head}>
              Agents. Tours.<br/>
              Loans. Homes.
            </h1>
      <input className={classes.styledInput} type="text" placeholder="Entert an Address, Neighborhood, City, or ZIP               ⌕" />
      </div>
      <div></div>
      </div>
        </slug>
    );
}