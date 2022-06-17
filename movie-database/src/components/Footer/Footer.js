/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledFooter from "./styled.footer";

 function Footer() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
     <StyledFooter>
       <footer>
         <h2>Movie App</h2>
         <p>Created by Ekaameliaa</p>
       </footer>
     </StyledFooter>
   );
 }
 
 export default Footer;