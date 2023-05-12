import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/organisums/header";
import Upper from "../components/organisums/upper";
import Blogs from "../components/organisums/blogs";
import Profile from "../components/moluculs/profile";
import Ranking from "../components/organisums/ranking";
import Archive from "../components/organisums/archive";
import Footer from "../components/organisums/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black">
      <header className="mb-[40px]">
        <Header />
      </header>
      <main className="w-[1170px] mx-auto">
        <div className="mb-[40px]">
          <Upper />
        </div>
        <div className="flex">
          <div className="w-[760px]">
            <Blogs />
          </div>
          <div className="w-[350px] ml-[45px]">
            <Profile />
            <Ranking />
            <Archive />
          </div>
        </div>
      </main>

      <footer className="border-t">
        <Footer />
      </footer>
    </div>
  );
}
