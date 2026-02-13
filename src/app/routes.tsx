import { createHashRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CommunityPage } from "./pages/CommunityPage";
import { MyPage } from "./pages/MyPage";
import { ResultsPage } from "./pages/ResultsPage";
import { LeadPagesIndex } from "./pages/LeadPagesIndex";
import { LeadPage1 } from "./pages/LeadPage1";
import { LeadPage2 } from "./pages/LeadPage2";
import { LeadPage3 } from "./pages/LeadPage3";
import { LeadPage4 } from "./pages/LeadPage4";
import { LeadPage5 } from "./pages/LeadPage5";

// Use HashRouter for GitHub Pages compatibility (no server-side routing)
export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/community",
    element: <CommunityPage />,
  },
  {
    path: "/my",
    element: <MyPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/lead",
    element: <LeadPagesIndex />,
  },
  {
    path: "/lead/free-trial",
    element: <LeadPage1 />,
  },
  {
    path: "/lead/enterprise",
    element: <LeadPage2 />,
  },
  {
    path: "/lead/early-access",
    element: <LeadPage3 />,
  },
  {
    path: "/lead/global",
    element: <LeadPage4 />,
  },
  {
    path: "/lead/growth",
    element: <LeadPage5 />,
  },
]);
