import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBriefcase, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const icons = {
  logout: <FontAwesomeIcon icon={faRightFromBracket} />,
  invoices: <FontAwesomeIcon icon={faBriefcase} />,
  transactions: <FontAwesomeIcon icon={faWallet} />,
  github: <FontAwesomeIcon icon={faGithub} />
};
