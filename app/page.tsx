import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Header from "@/components/Header";
import PrimaryInfo from "@/components/info/PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "@/components/info/SecondaryInfo/SecondaryInfo";
import ThesisProject from "@/components/projects/ThesisProject";
import HotelProject from "@/components/projects/HotelProject";
import QAProject from "@/components/projects/QAProject";
import Trackr from "@/components/projects/Trackr";
import Plato from "@/components/projects/Plato";
import MoneyTracker from "@/components/projects/MoneyTracker";
import UserLogs from "@/components/projects/UserLogs";
import Portfolio from "@/components/projects/Portfolio";
import EliteMotors from "@/components/projects/EliteMotors";
import EstateLiving from "@/components/projects/EstateLiving";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl w-full space-y-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PrimaryInfo />
          <SecondaryInfo />
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Project Portfolio</CardTitle>
              <CardDescription>
                Take a look at my projects and their source code on GitHub.
              </CardDescription>
            </CardHeader>
            <Portfolio />
            <ThesisProject />
            <HotelProject />
            <QAProject />
            <Trackr />
            <Plato />
            <EstateLiving />
            <EliteMotors />
            <UserLogs />
            <MoneyTracker />
          </Card>
        </div>
      </div>
    </main>
  );
}
