import Link from 'next/link';
import styles from "../route.module.css"

const RouteLinks = ({ links }) => {
  return (
    <ul className={styles.navLinks}>
    {links.map((link, index) => {
      if (link.url && link.id) {
        return (
          <Link href={link.url} key={index} id={link.id} passHref>
            {link.text}
          </Link>
        );
      } else if (link.url) {
        return (
          <Link href={link.url} key={index} id={link.id} passHref>
            {link.text}
          </Link>
        );
      } else if (link.id) {
        return (
          <Link  href="#" key={index} id={link.id} passHref>
            {link.text}
          </Link>
        );
      } else {
        return <span key={index}>{link.text}</span>;
      }
    })}
    </ul>
  );
};

export default RouteLinks;