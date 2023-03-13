import { UserDashboardSidebar } from "../cmps/user-dashboard/user-side-navbar";
import { UserDashboardMain } from "../cmps/user-dashboard/user-dashboard-main";

export function UserDashboard() {
  return (
    <section className="user-dashboard">
      <div className="user-dashboard-inner">
        <UserDashboardSidebar />
        <UserDashboardMain />
      </div>
    </section>
  );
}
