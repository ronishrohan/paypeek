import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBriefcase, faWallet, faStickyNote, faSquareArrowUpRight, faCircleNotch, faTrashCan, faArrowRightLong, faXmark, faGhost } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faGoogle, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faIndianRupeeSign, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import loading from "../loading";


export const icons = {
  logout: <FontAwesomeIcon icon={faRightFromBracket} />,
  invoices: <FontAwesomeIcon icon={faBriefcase} />,
  transactions: <FontAwesomeIcon icon={faWallet} />,
  github: <FontAwesomeIcon icon={faGithub} />,
  new: <FontAwesomeIcon icon={faStickyNote} />,
  link: <FontAwesomeIcon icon={faSquareArrowUpRight} />,
  google: <FontAwesomeIcon icon={faGoogle} />,
  loading: <FontAwesomeIcon icon={faCircleNotch} ></FontAwesomeIcon>,
  remove: <FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>,
  rightarrow: <FontAwesomeIcon icon={faArrowRightLong} ></FontAwesomeIcon>,
  discord: <FontAwesomeIcon icon={faDiscord} ></FontAwesomeIcon>,
  reddit: <FontAwesomeIcon icon={faReddit} ></FontAwesomeIcon>,
  close: <FontAwesomeIcon icon={faXmark} ></FontAwesomeIcon>,
  ghost: <FontAwesomeIcon icon={faGhost} ></FontAwesomeIcon>
};

