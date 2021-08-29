import cx from 'classnames';
import Link from 'next/link';
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
// let cx = classNames.bind(styles);

export default function Menu(props: Partial<MenuProps>) {
  const {title, active, href = '/'} = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle}>{title}</a>
      </Link>
    </li>
  );
}
