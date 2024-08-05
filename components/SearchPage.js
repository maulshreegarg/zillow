import classes from "./search.module.css";
import Image from "next/image";
import logoimg from "@/assets/real_estate.jpg";
export default function Search()
{
    
    return (
        <slug>
          <div className="cont">
          <Image className={classes.realest} src={logoimg} 
      alt="Picture of the real estate sale" /> 
          <div className="section1">
            <h1 className={classes.head}>
              Agents. Tours.<br/>
              Loans. Homes.
            </h1>
      <input className={classes.styledInput} type="text" placeholder="Entert an Address, Neighborhood, City, or ZIP                                                      ⌕" />
      </div>
      <div></div>
      </div>
        </slug>
    );
}