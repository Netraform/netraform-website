export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-display font-extrabold text-lg animate-pulse">
        N
      </div>
      <div className="w-40 h-1 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-1/3 bg-primary rounded-full animate-[loadbar_1.1s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes loadbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  )
}
