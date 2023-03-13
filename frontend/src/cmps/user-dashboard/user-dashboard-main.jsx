import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTrello } from "react-icons/fa";

export function UserDashboardMain() {
  const recentBoards = ["1", "2", "3", "4", "5", "6"];
  const myBoards = ["1", "2", "3", "4", "5", "6"];
  const workspaceLinks = ["Boards", "Views", "Members", "Settings"];

  return (
    <>
      <div>
        <div className="mar-y-40">
          <div className="mar-b-10 fw600 fs16-lh24">
            {" "}
            <AiOutlineClockCircle /> Recently Viewed
          </div>
          <ul className="rect-list">
            {recentBoards.map((board) => {
              return <li className="text-white">Project #{board}</li>;
            })}
          </ul>
        </div>
        <div className="mar-y-20 txt-dg1 uppercase fs16 fw600">Your Workspaces</div>
        <div className="">
          <div className="flex mar-b-11">
            <div className="fs16">alon's workspace</div>
            <ul className="horizontal-list mar-l-8">
              {workspaceLinks.map((link) => {
                return (
                  <li>
                    {" "}
                    <FaTrello />
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mar-b-20">
            <ul className="rect-list">
              {myBoards.map((board) => {
                return <li className="text-white">board #{board}</li>;
              })}
              <li className="rect-list create-board">Create New Board</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
