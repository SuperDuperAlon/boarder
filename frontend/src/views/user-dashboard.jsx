import { UserDashboardSidebar } from "../cmps/user-dashboard/user-side-navbar";

export function UserDashboard() {
  const recentBoards = ["1", "2", "3", "4", "5", "6"];
  const myBoards = ["1", "2", "3", "4", "5", "6"];
  const workspaceLinks = ["Boards", "Views", "Members", "Settings"];

  return (
    <section className="user-dashboard">
      <div className="user-dashboard-inner">
        <UserDashboardSidebar />
        <div>
          <div>
            <h1>Recently Viewed</h1>
            <ul>
              {recentBoards.map((board) => {
                return <li>{board}</li>;
              })}
            </ul>
          </div>
          <h1>Your Workspaces</h1>
          <div>
            <h2>alon's workspace</h2>
            <ul>
              {workspaceLinks.map((link) => {
                return <li>{link}</li>;
              })}
            </ul>
            <div>
              <ul>
                {myBoards.map((board) => {
                  return <li>{board}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
