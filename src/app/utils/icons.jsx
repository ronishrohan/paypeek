import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBriefcase, faWallet, faStickyNote, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faIndianRupeeSign, faDollarSign } from "@fortawesome/free-solid-svg-icons";


export const icons = {
  logout: <FontAwesomeIcon icon={faRightFromBracket} />,
  invoices: <FontAwesomeIcon icon={faBriefcase} />,
  transactions: <FontAwesomeIcon icon={faWallet} />,
  github: <FontAwesomeIcon icon={faGithub} />,
  new: <FontAwesomeIcon icon={faStickyNote} />,
  link: <FontAwesomeIcon icon={faSquareArrowUpRight} />,
  google: <FontAwesomeIcon icon={faGoogle} />,
};

