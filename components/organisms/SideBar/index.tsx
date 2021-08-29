import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function SideBar(props: SideBarProps) {
  const {activeMenu} = props;

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="iconmenu-overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="iconmenu-transactions"
            href="/member/transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem title="Messages" icon="iconmenu-messages" href="/member" />
          <MenuItem title="Card" icon="cardIcon" href="/member" />
          <MenuItem title="Rewards" icon="rewardsIcon" href="/member" />
          <MenuItem
            title="Settings"
            icon="settingsIcon"
            href="/member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <MenuItem title="Log Out" icon="iogOutIcon" href="/member" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
