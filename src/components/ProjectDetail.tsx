import React from 'react';
import SalesDashboardCharts from './SalesDashboardCharts';
import CountUp from './CountUp';

const summary = `This project explores product category performance and regional trends using SQL and Tableau. The aim was to uncover what drives sales, how seasons impact demand, and where opportunities lie for business growth.`;
const keyStats = [
  { label: 'Total Sales', value: 1851425, prefix: '£' },
  { label: 'Categories', value: 6 },
  { label: 'Countries', value: 6 },
  { label: 'Seasons', value: 4 },
  { label: 'Timeframe', value: 12, suffix: ' Months' },
];
const keyInsights = [
  {
    icon: '📦',
    title: 'Product Performance Insights',
    points: [
      'Outerwear contributed the most sales (£589,675), making up 26.91% of total sales. It performed well in every season, even summer.',
      'Footwear led in total orders (3,460) and had strong Black Friday sales.',
      'T-shirts and Sweatpants had the lowest performance despite deep discounts, signaling a need for better product positioning or design.',
      'Suggested strategies: Adjust discounts for Outerwear (currently 60%) to increase profitability. Introduce targeted marketing for underperforming items.'
    ]
  },
  {
    icon: '📅',
    title: 'Seasonal Trends',
    points: [
      'Winter had the highest seasonal sales (£561,495), followed by Spring and Fall. Summer was slightly behind but still strong.',
      'Seasonal sales were fairly balanced, indicating year-round demand.',
      'Black Friday spike: Footwear and Outerwear dominated, showing the importance of seasonal promotions.'
    ]
  },
  {
    icon: '🌍',
    title: 'Regional Highlights',
    points: [
      'Top 3 countries: China (£172,375), India (£164,650), UK (£161,540)',
      'Lowest sales: Brazil, Italy, Netherlands — offering potential for market development.',
      'Action point: Focus marketing in lower-performing regions and expand in high-performing markets with tailored promotions.'
    ]
  }
];
const businessMeaning = `The analysis highlights that Outerwear and Footwear are core revenue drivers. Despite deep discounts, some categories still underperform, indicating issues beyond pricing. Sales are stable across seasons, which is promising for inventory planning. Future efforts should focus on improving low-performing categories and capturing growth in new regions.`;

const chartCards = [
  {
    title: 'Sales by Product Category',
    chartKey: 'categorySales',
    caption: 'Outerwear and Footwear dominate the sales share. T-shirts and Sweatpants lag behind, despite high discounts.'
  },
  {
    title: 'Total Sales vs Orders per Product',
    chartKey: 'ordersVsSales',
    caption: 'Footwear received the most orders despite Outerwear making more in revenue, suggesting higher pricing or seasonal bulk buys.'
  },
  {
    title: 'Monthly Sales Trend',
    chartKey: 'monthlySales',
    caption: 'Sales peaked in September, with a strong run through summer. Slight dip observed in February and November.'
  },
  {
    title: 'Country-wise Sales Distribution',
    chartKey: 'countrySales',
    caption: 'China, India, and the UK lead in revenue. Growth potential identified in Brazil, Italy, and the Netherlands.'
  },
  {
    title: 'Total Sales by Season',
    chartKey: 'seasonalSales',
    caption: 'Winter leads with the highest seasonal sales, but overall seasonal distribution remains fairly balanced.'
  },
  {
    title: 'Outerwear Sales by Season',
    chartKey: 'outerwearSeasonal',
    caption: 'Outerwear performs well year-round, not just in winter, proving its versatility and strong customer preference.'
  },
  {
    title: 'Black Friday (November) Sales by Product',
    chartKey: 'blackFriday',
    caption: 'Footwear and Outerwear led Black Friday sales, with Denim and Hoodie also performing well.'
  },
];

const ProjectDetail: React.FC = () => (
  <div className="w-full min-h-screen bg-gray-50 pb-16">
    {/* Hero/Header Section */}
    <section className="w-full bg-white shadow-sm pt-16 pb-12 mb-10 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Sales Analysis Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">{summary}</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {keyStats.map(stat => (
            <div key={stat.label} className="bg-indigo-50 text-indigo-800 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm">
              <span className="block text-xs font-medium text-indigo-500">{stat.label}</span>
              <span className="block text-lg font-bold">
                {stat.prefix || ''}
                <CountUp from={0} to={stat.value} separator="," duration={1} className="count-up-text" />
                {stat.suffix || ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Insights Section */}
    <section className="max-w-5xl mx-auto px-4 mb-14">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {keyInsights.map(card => (
          <div key={card.title} className="bg-white rounded-2xl shadow p-6 flex flex-col h-full border-t-4 border-indigo-200">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-2">{card.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm pl-1">
              {card.points.map((point, idx) => (
                <li key={idx} className="flex items-start"><span className="mr-2 text-indigo-400">•</span>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Visual Insights Section */}
    <section className="max-w-5xl mx-auto px-4 mb-14">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Visual Insights</h2>
      <div className="flex flex-col gap-10">
        {/* Render each chart in a card with spacing, title, and caption */}
        <SalesDashboardCharts cardMode />
      </div>
    </section>

    {/* Business Takeaways Section */}
    <section className="max-w-5xl mx-auto px-4 mb-14">
      <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-xl p-6 shadow flex items-start">
        <span className="text-3xl mr-4 text-indigo-400">💡</span>
        <div>
          <h2 className="text-xl font-bold text-indigo-800 mb-2">What This Means for Business</h2>
          <p className="text-gray-700 text-base">{businessMeaning}</p>
        </div>
      </div>
    </section>

    {/* Footer Links */}
    <footer className="max-w-5xl mx-auto px-4 w-full py-6 flex flex-wrap gap-4 border-t border-gray-200 mt-6">
      <a href="https://public.tableau.com/app/profile/hetsuhagiya/viz/Dashboard_17376208048500/Dashboard1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-indigo-700 text-neutral-100 rounded-lg hover:bg-indigo-800 transition-colors duration-200">
        <img src="/tableau.svg" alt="Tableau" className="w-5 h-5 mr-2" />
        View on Tableau
      </a>
      <a href="https://github.com/HetSuhagiya/SQL-Sales-Analysis.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-stone-300 text-gray-800 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        View on GitHub
      </a>
    </footer>
  </div>
);

export default ProjectDetail; 