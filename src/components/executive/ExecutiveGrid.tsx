import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
}

export default function ExecutiveGrid({
  left,
  right,
  bottomLeft,
  bottomRight,
}: Props) {
  return (
    <div className="space-y-6">

      {/* FILA SUPERIOR */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-6">
          {left}
        </div>

        <div className="col-span-6">
          {right}
        </div>

      </div>

      {/* FILA INFERIOR */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          {bottomLeft}
        </div>

        <div className="col-span-4">
          {bottomRight}
        </div>

      </div>

    </div>
  );
}