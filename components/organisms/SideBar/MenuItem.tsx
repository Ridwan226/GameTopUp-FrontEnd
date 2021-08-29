import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon:
    | 'iconmenu-overview'
    | 'iconmenu-transactions'
    | 'iogOutIcon'
    | 'iconmenu-messages'
    | 'rewardsIcon'
    | 'settingsIcon'
    | 'cardIcon';
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {title, icon, active, href} = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width="25" height="25" alt="Icon" />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">
            {/* Overview */}
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}
