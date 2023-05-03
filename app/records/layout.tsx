import { Sidebar } from "@/components/Sidebar";

export default function RecordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Sidebar />

        <main className="pl-60 py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
