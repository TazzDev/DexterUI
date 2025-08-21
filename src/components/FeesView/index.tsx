import React, { useMemo, useState } from "react";
import Card from "../Card/Card";
import { Bar } from "react-chartjs-2";
import { CLASS_WISE_FEES_MOCK } from "../../../DATA_MOCKS/classWiseFeesMock";
import { transformData } from "../../utils/utils";
import KpiStrip from "./KpiStrip";

const FeesView: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      size={isExpanded ? "M" : "M"}
      styleOverride={isExpanded ? "w-full md:w-[84rem]" : ""}
    >
      <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-4">
        <h1>Fees</h1>
        <button
          className="bg-blue-400 text-white text-xs cursor-pointer px-4 py-2 rounded-md"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
      {isExpanded ? (
        <ExpandedFeesView />
      ) : (
        <CollapsedFeesView />
      )}
    </Card>
  );
};

const ExpandedFeesView: React.FC = () => {
  const [query, setQuery] = useState("");
  const data = CLASS_WISE_FEES_MOCK;

  const { totalPaid, totalPending, completionPct } = useMemo(() => {
    const totals = data.reduce(
      (acc, item) => {
        acc.totalPaid += item.feesPaid;
        acc.totalPending += item.feesPending;
        return acc;
      },
      { totalPaid: 0, totalPending: 0 }
    );
    const grandTotalCalc = totals.totalPaid + totals.totalPending;
    const pct =
      grandTotalCalc === 0
        ? 0
        : Math.round((totals.totalPaid / grandTotalCalc) * 100);
    return {
      totalPaid: totals.totalPaid,
      totalPending: totals.totalPending,
      completionPct: pct,
    };
  }, [data]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return data;
    return data.filter((d) =>
      String(d.class).toLowerCase().includes(normalized)
    );
  }, [data, query]);

  const transformed = useMemo(() => transformData(filtered), [filtered]);

  return (
    <div className="flex flex-col gap-4">
      <KpiStrip totalPaid={totalPaid} totalPending={totalPending} completionPct={completionPct} />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 w-full bg-white/5 rounded-md p-3">
          <div className="h-80">
            <Bar
              data={transformed}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Fees by Class (Expanded)",
                  },
                  legend: {
                    position: "bottom" as const,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: { stacked: true },
                  y: { stacked: true },
                },
              }}
            />
          </div>
          <div className="h-2" />
          <div className="text-xs opacity-70">
            Showing {filtered.length} class(es)
          </div>
        </div>

        <div className="md:w-1/3 w-full bg-white/5 rounded-md p-3">
          <div className="mb-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by class..."
              className="w-full px-3 py-2 rounded-md bg-transparent border border-blue-400 text-sm focus:border-blue-500"
            />
          </div>
          <div className="max-h-72 overflow-auto">
            <table className="table-auto w-full text-sm">
              <thead className="sticky top-0 bg-card-background">
                <tr className="text-left">
                  <th className="py-2 pr-2">Class</th>
                  <th className="py-2 pr-2">Paid</th>
                  <th className="py-2 pr-2">Pending</th>
                  <th className="py-2">% Paid</th>
                </tr>
              </thead>
              <tbody>
                {filtered
                  .slice()
                  .sort((a, b) => Number(a.class) - Number(b.class))
                  .map((row) => {
                    const rowTotal = row.feesPaid + row.feesPending;
                    const pct =
                      rowTotal === 0
                        ? 0
                        : Math.round((row.feesPaid / rowTotal) * 100);
                    return (
                      <tr key={row.class} className="odd:bg-white/5">
                        <td className="py-1 pr-2">{row.class}</td>
                        <td className="py-1 pr-2">{row.feesPaid}</td>
                        <td className="py-1 pr-2">{row.feesPending}</td>
                        <td className="py-1">{pct}%</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollapsedFeesView: React.FC = () => {
  const data = CLASS_WISE_FEES_MOCK;
  const { totalPaid, totalPending, completionPct } = useMemo(() => {
    const totals = data.reduce(
      (acc, item) => {
        acc.totalPaid += item.feesPaid;
        acc.totalPending += item.feesPending;
        return acc;
      },
      { totalPaid: 0, totalPending: 0 }
    );
    const grandTotalCalc = totals.totalPaid + totals.totalPending;
    const pct = grandTotalCalc === 0 ? 0 : Math.round((totals.totalPaid / grandTotalCalc) * 100);
    return { totalPaid: totals.totalPaid, totalPending: totals.totalPending, completionPct: pct };
  }, [data]);

  return (
    <div>
      <KpiStrip
        totalPaid={totalPaid}
        totalPending={totalPending}
        completionPct={completionPct}
        dense
        containerClassName="bg-blue-500 text-white rounded-md px-3 py-2"
        itemClassName="bg-blue-600/60 rounded-md px-2 py-1"
        labelClassName="text-white/90"
        valueClassName="text-white"
      />
      <Bar
        data={transformData(CLASS_WISE_FEES_MOCK)}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Fees",
            },
          },
          responsive: true,
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        }}
      />
    </div>
  );
};

export { FeesView, ExpandedFeesView };
