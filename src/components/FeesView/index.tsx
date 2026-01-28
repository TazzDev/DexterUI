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
      size={isExpanded ? "FULL" : "M"}
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

  const data = CLASS_WISE_FEES_MOCK;

  const [gradeFilter, setGradeFilter] = useState("");

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

  const filteredClasses = useMemo(() => {

    const cleanedGradeFilter = gradeFilter.trim().toLowerCase();

    if (!cleanedGradeFilter) return data;

    return data.filter((d) =>
      String(d.class).toLowerCase().localeCompare(cleanedGradeFilter) === 0
    );

  }, [data, gradeFilter]);

  const mapBarClickToClass = (index: number) => {
    const grade = filteredClasses[index].class;
    setGradeFilter(grade);
  };

  const transformed = useMemo(() => transformData(filteredClasses), [filteredClasses]);

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
                onHover(event, elements) {
                  // Turn cursor to pointer if hovering over a bar in the chart
                  if (event.native && event.native.target instanceof HTMLElement) {
                    event.native.target.style.cursor = elements.length
                      ? "pointer"
                      : "default";
                  }
                },
                onClick(_, elements) {
                  // Map the click to the grade
                  mapBarClickToClass(elements[0].index);
                },
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
            Showing {filteredClasses.length} class(es)
          </div>
        </div>

        <div className="w-px bg-black/20" />
        
        <div className="md:w-1/3 w-full bg-white/5 rounded-md p-3">
          <div className="mb-2">
            <input
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              placeholder="Filter by class..."
              className="w-full px-3 py-2 rounded-md bg-transparent border border-blue-400 text-sm focus:border-blue-500"
            />
          </div>
          <div className="max-h-72 overflow-auto">
            <table className="table-auto w-full text-sm">
              <thead className="sticky top-0 bg-card-background">
                <tr className="text-left">
                  <th className="p-1">Class</th>
                  <th className="p-1">Paid</th>
                  <th className="p-1">Pending</th>
                  <th className="p-1">% Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredClasses
                  .slice()
                  .sort((a, b) => Number(a.class) - Number(b.class))
                  .map((row) => {
                    const rowTotal = row.feesPaid + row.feesPending;
                    const pct =
                      rowTotal === 0
                        ? 0
                        : Math.round((row.feesPaid / rowTotal) * 100);
                    return (
                      <tr key={row.class} className=" px-2 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer" onClick={() => {
                        console.log(row);
                        setGradeFilter(row.class);
                      }}>
                        <td className="p-1">{row.class}</td>
                        <td className="p-1">{row.feesPaid}</td>
                        <td className="p-1">{row.feesPending}</td>
                        <td className="p-1">{pct}%</td>
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
