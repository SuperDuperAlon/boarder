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
      <div className="user-side-navbar">
        <div className="user-side-navbar-top">
          <ul>
            {mainLinks.map((link) => {
              return (
                <a href="">
                  <li className="user-sidenav-main-link">{link}</li>
                </a>
              );
            })}
          </ul>
        </div>

        <div className="user-side-navbar-bottom">
          <div className="fs12-lh16 pad-y-8">Workspaces +</div>
          <div className="pad-y-13">email ^</div>
          <ul>
            {secondaryLinks.map((link) => {
              return <li className="fs12">{link}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
