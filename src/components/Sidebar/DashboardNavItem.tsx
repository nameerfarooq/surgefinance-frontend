interface DashboardNavItemProps {
  icon: string;
  title: string;
  active?: boolean;
}

const DashboardNavItem: React.FC<DashboardNavItemProps> = ({
  icon,
  title,
  active = false,
}) => {
  return (
    <div className={`dashboard-nav-item ${active ? "active" : ""}`}>
      <div className="left">
        <img src={icon} alt="" />
      </div>
      <div className="right">
        <h1 className={`text-1 ${active ? "active" : ""}`}>{title}</h1>
      </div>
    </div>
  );
};

export default DashboardNavItem;
