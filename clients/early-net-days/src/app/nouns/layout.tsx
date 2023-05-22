export default async function NounsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
}