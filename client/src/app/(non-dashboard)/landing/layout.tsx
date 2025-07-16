import Navbar from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`w-full h-full flex flex-col pt-[${NAVBAR_HEIGHT}px]`}>
      <Navbar />
      {children}
    </div>
  );
}
