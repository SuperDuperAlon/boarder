export function UserDashboardSidebar() {
  const mainLinks = ["Boards", "Templates", "Home"];
  const secondaryLinks = [
    "Boards",
    "Highlights",
    "Views",
    "Members",
    "Settings",
  ];
  return (
    <>
      <div className="user-side-navabr">
        <ul>
          {mainLinks.map((link) => {
            return <a href=""><li className="user-sidenav-main-link">{link}</li></a>;
          })}
        </ul>
        <hr />
        <div>Workspaces +</div>
        <div>email ^</div>
        <ul>
          {secondaryLinks.map((link) => {
            return <li>{link}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
