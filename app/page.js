import Image from "next/image";
import Header from "@/components/headerPage";
import Search from "@/components/SearchPage";
export default function Home() {
  return (
    <>
     <Header/>
     <Search/>
   <main> 
    <div class="signupsec">
      <p>
        Get home recommendation
      </p>
      <p>
      Sign in for a more personalized experience.
      </p>
    </div>
  </main>
  </>
  );
}
