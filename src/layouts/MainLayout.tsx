type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] w-screen bg-black flex justify-center">
      <main className="w-full max-w-[375px] bg-white">{children}</main>
    </div>
  );
}
