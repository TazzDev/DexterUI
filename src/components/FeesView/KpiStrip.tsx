import React from "react";

interface KpiStripProps {
  totalPaid: number;
  totalPending: number;
  completionPct: number;
  containerClassName?: string;
  itemClassName?: string;
  dense?: boolean;
  labelClassName?: string;
  valueClassName?: string;
  paidClassName?: string;
  pendingClassName?: string;
  completionClassName?: string;
}

const KpiStrip: React.FC<KpiStripProps> = ({ totalPaid, totalPending, completionPct, containerClassName = "", itemClassName, dense = false, labelClassName = "", valueClassName = "", paidClassName = "", pendingClassName = "", completionClassName = "" }) => {
  const containerBase = dense
    ? "grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2 items-center"
    : "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4";
  const itemBase = itemClassName ?? (dense ? "bg-white/5 rounded-md px-2 py-1" : "bg-white/5 rounded-md p-3");
  const labelBase = dense ? "text-xs opacity-90" : "text-sm opacity-80";
  const valueBase = dense ? "text-sm font-semibold" : "text-2xl font-semibold";
  return (
    <div className={`${containerBase} ${containerClassName}`}>
      <div className={`${itemBase} ${paidClassName}`}>
        <p className={`${labelBase} ${labelClassName}`}>Total Paid</p>
        <p className={`${valueBase} ${valueClassName}`}>{totalPaid}</p>
      </div>
      <div className={`${itemBase} ${pendingClassName}`}>
        <p className={`${labelBase} ${labelClassName}`}>Total Pending</p>
        <p className={`${valueBase} ${valueClassName}`}>{totalPending}</p>
      </div>
      <div className={`${itemBase} ${completionClassName}`}>
        <p className={`${labelBase} ${labelClassName}`}>Completion</p>
        <p className={`${valueBase} ${valueClassName}`}>{completionPct}%</p>
      </div>
    </div>
  );
};

export default KpiStrip;


