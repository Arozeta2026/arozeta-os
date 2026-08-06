"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SidePanel({
  open,
  onClose,
  children,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">

      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-[520px] bg-slate-900 border-l border-slate-700 shadow-2xl">

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}