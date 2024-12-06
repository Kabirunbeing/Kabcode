import ContestRatings from "./components/Contests";
import DiscussionForum from "./components/DIscussionForum";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import CodeLearningTracker from "./components/LearningTracker";
import ProblemsList from "./components/ProblemsList";

export default function App() {
  return (
   <>
   <Header/>
   <HeroSection/>
   <ProblemsList/>
   <DiscussionForum/>
   <CodeLearningTracker/>
   <ContestRatings/>
   </>
  )
}