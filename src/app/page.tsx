import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";
import Preview from "@/components/Preview/Preview";

export default async function Home() {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <Preview />
        <AboutMe />
      </div>
    </div>
  );
}
