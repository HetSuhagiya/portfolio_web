import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, LineChart, Line, ComposedChart, Area, ZAxis
} from 'recharts';

const categorySalesData = [
  { category: 'Outerwear', sales: 589675 },
  { category: 'Footwear', sales: 504035 },
  { category: 'Denim', sales: 350645 },
  { category: 'Hoodie', sales: 329315 },
  { category: 'Sweatpants', sales: 234940 },
  { category: 'T-shirt', sales: 182815 },
];

const ordersVsSalesData = [
  { category: 'Footwear', sales: 504035, orders: 3460 },
  { category: 'Outerwear', sales: 589675, orders: 3400 },
  { category: 'Sweatpants', sales: 234940, orders: 2500 },
  { category: 'T-shirts', sales: 182815, orders: 2100 },
  { category: 'Denim', sales: 350645, orders: 3000 },
  { category: 'Hoodies', sales: 329315, orders: 3247 },
];

const monthlySalesData = [
  { month: 'Jan', sales: 180000 },
  { month: 'Feb', sales: 172575 },
  { month: 'Mar', sales: 175000 },
  { month: 'Apr', sales: 185000 },
  { month: 'May', sales: 189765 },
  { month: 'Jun', sales: 186240 },
  { month: 'Jul', sales: 185000 },
  { month: 'Aug', sales: 180000 },
  { month: 'Sep', sales: 192735 },
  { month: 'Oct', sales: 181000 },
  { month: 'Nov', sales: 173735 },
  { month: 'Dec', sales: 178000 },
];

const countrySalesData = [
  { country: 'China', sales: 172375 },
  { country: 'India', sales: 164650 },
  { country: 'UK', sales: 161540 },
  { country: 'Brazil', sales: 144405 },
  { country: 'Italy', sales: 147705 },
  { country: 'Netherlands', sales: 148685 },
];

const seasonalSalesData = [
  { season: 'Winter', sales: 561495 },
  { season: 'Spring', sales: 553290 },
  { season: 'Fall', sales: 549800 },
  { season: 'Summer', sales: 526840 },
];

const outerwearSeasonalData = [
  { season: 'Winter', sales: 157565 },
  { season: 'Spring', sales: 152475 },
  { season: 'Fall', sales: 142300 },
  { season: 'Summer', sales: 137335 },
];

const blackFridayData = [
  { product: 'Footwear', sales: 41495 },
  { product: 'Outerwear', sales: 40030 },
  { product: 'Denim', sales: 30400 },
  { product: 'Hoodie', sales: 28675 },
  { product: 'Sweatpants', sales: 18355 },
  { product: 'T-shirt', sales: 14780 },
];

const chartCards = [
  {
    title: 'Sales by Product Category',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <BarChart data={categorySalesData} layout="vertical" margin={{ left: 60, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={v => `£${v.toLocaleString()}`} />
          <YAxis dataKey="category" type="category" width={120} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 8, 8]}>
            <LabelList dataKey="sales" position="right" formatter={v => `£${v.toLocaleString()}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    caption: 'Outerwear and Footwear dominate the sales share. T-shirts and Sweatpants lag behind, despite high discounts.'
  },
  {
    title: 'Monthly Sales Trend',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <LineChart data={monthlySalesData} margin={{ left: 30, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    ),
    caption: 'Sales peaked in September, with a strong run through summer. Slight dip observed in February and November.'
  },
  {
    title: 'Country-wise Sales Distribution',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <BarChart data={countrySalesData} margin={{ left: 30, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]}>
            <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    caption: 'China, India, and the UK lead in revenue. Growth potential identified in Brazil, Italy, and the Netherlands.'
  },
  {
    title: 'Total Sales by Season',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <BarChart data={seasonalSalesData} margin={{ left: 30, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="season" />
          <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]}>
            <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    caption: 'Winter leads with the highest seasonal sales, but overall seasonal distribution remains fairly balanced.'
  },
  {
    title: 'Outerwear Sales by Season',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <LineChart data={outerwearSeasonalData} margin={{ left: 30, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="season" />
          <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    ),
    caption: 'Outerwear performs well year-round, not just in winter, proving its versatility and strong customer preference.'
  },
  {
    title: 'Black Friday (November) Sales by Product',
    chart: (
      <ResponsiveContainer width="100%" minWidth={320} minHeight={320} height={340}>
        <BarChart data={blackFridayData} margin={{ left: 30, right: 30, top: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
          <Tooltip formatter={v => `£${v.toLocaleString()}`} />
          <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]}>
            <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    caption: 'Footwear and Outerwear led Black Friday sales, with Denim and Hoodie also performing well.'
  },
];

const SalesDashboardCharts: React.FC<{ cardMode?: boolean }> = ({ cardMode }) => {
  if (cardMode) {
    return (
      <div className="flex flex-col gap-10">
        {chartCards.map((card, idx) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-stretch"
            style={{ minWidth: 0 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
            <div className="w-full" style={{ minHeight: 320, marginBottom: 16 }}>
              {card.chart}
            </div>
            <div className="text-gray-600 text-sm mt-2" style={{ minHeight: 32 }}>{card.caption}</div>
          </div>
        ))}
      </div>
    );
  }
  // fallback: render all charts stacked (legacy)
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 8 }}>
      {/* 1. Category-Wise Sales Contribution Bar Chart */}
      <div>
        <div className={chartTitleClass}>Sales by Product Category</div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={categorySalesData} layout="vertical" margin={{ left: 40, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v => `£${v.toLocaleString()}`} />
            <YAxis dataKey="category" type="category" width={110} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Bar dataKey="sales" fill="#6366f1">
              <LabelList dataKey="sales" position="right" formatter={v => `£${v.toLocaleString()}`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>Outerwear and Footwear dominate the sales share. T-shirts and Sweatpants lag behind, despite high discounts.</div>
      </div>

      {/* 2. Monthly Sales Trend Line Chart */}
      <div>
        <div className={chartTitleClass}>Monthly Sales Trend</div>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={monthlySalesData} margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>Sales peaked in September, with a strong run through summer. Slight dip observed in February and November.</div>
      </div>

      {/* 3. Sales by Country (Bar Chart) */}
      <div>
        <div className={chartTitleClass}>Country-wise Sales Distribution</div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={countrySalesData} margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Bar dataKey="sales" fill="#6366f1">
              <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>China, India, and the UK lead in revenue. Growth potential identified in Brazil, Italy, and the Netherlands.</div>
      </div>

      {/* 4. Seasonal Sales Comparison (Bar Chart) */}
      <div>
        <div className={chartTitleClass}>Total Sales by Season</div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={seasonalSalesData} margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="season" />
            <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Bar dataKey="sales" fill="#6366f1">
              <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>Winter leads with the highest seasonal sales, but overall seasonal distribution remains fairly balanced.</div>
      </div>

      {/* 5. Outerwear Performance Across Seasons (Line Chart) */}
      <div>
        <div className={chartTitleClass}>Outerwear Sales by Season</div>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={outerwearSeasonalData} margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="season" />
            <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>Outerwear performs well year-round, not just in winter, proving its versatility and strong customer preference.</div>
      </div>

      {/* 6. Black Friday Product Sales (Bar Chart) */}
      <div>
        <div className={chartTitleClass}>Black Friday (November) Sales by Product</div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={blackFridayData} margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis tickFormatter={v => `£${v.toLocaleString()}`} />
            <Tooltip formatter={v => `£${v.toLocaleString()}`} />
            <Bar dataKey="sales" fill="#6366f1">
              <LabelList dataKey="sales" position="top" formatter={v => `£${v.toLocaleString()}`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className={chartCaptionClass}>Footwear and Outerwear led Black Friday sales, with Denim and Hoodie also performing well.</div>
      </div>
    </div>
  );
};

export default SalesDashboardCharts; 