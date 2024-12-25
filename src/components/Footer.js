//Icons
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <div class="footer">
        <h2>BHROMAON</h2>
        <p>Safe Travel Anywhere</p>
        <div class="fotter-icons">
          <a href="/">
            <MdOutlineFacebook className="facebookIcon footerIcons" />
          </a>
          <a href="/">
            <FaTwitter className="twitterIcon footerIcons" />
          </a>
          <a href="/">
            <FaInstagram className="instagramIcon footerIcons" />
          </a>
          <a href="/">
            <FaYoutube className="youtubeIcon footerIcons" />
          </a>
          <a href="/">
            <FaPinterest className="pinterestIcon footerIcons" />
          </a>
        </div>
      </div>
    </>
  );
}
