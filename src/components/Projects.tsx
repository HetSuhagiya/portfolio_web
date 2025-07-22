import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TrueFocus from "./TrueFocus";
import { useState, useRef, useEffect } from 'react';
import SalesDashboardCharts from './SalesDashboardCharts';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Sales Analysis Dashboard',
    summary: 'Comprehensive sales analysis covering product performance, seasonal trends, and regional insights. Key findings include best-selling products (Outerwear and Footwear), seasonal patterns, and regional performance across multiple countries.',
    detailedSummary: `Comprehensive sales analysis covering product performance, seasonal trends, and regional insights. Key findings include:

• Product Performance:
  - Identified best-selling products: Outerwear and Footwear categories
  - Analyzed product category performance across different regions
  - Tracked seasonal variations in product demand

• Regional Analysis:
  - Mapped sales distribution across multiple countries
  - Identified high-performing and emerging markets
  - Analyzed regional preferences and buying patterns

• Interactive Features:
  - Dynamic filtering by product category, region, and time period
  - Drill-down capabilities for detailed analysis
  - Real-time sales metrics and KPIs

• Key Insights:
  - Seasonal patterns affecting sales performance
  - Regional variations in product preferences
  - Growth opportunities in emerging markets`,
    tools: ['Tableau', 'SQL', 'Data Analysis'],
    link: 'https://public.tableau.com/app/profile/hetsuhagiya/viz/Dashboard_17376208048500/Dashboard1',
    github: 'https://github.com/HetSuhagiya/SQL-Sales-Analysis.git',
    icon: '/Proj_icons/sales_analysis.png',
    type: 'tableau'
  },
  {
    title: 'Refund Analysis',
    summary: 'Developed an interactive dashboard to analyse refund patterns, track transaction metrics, and identify key factors affecting customer returns.',
    detailedSummary: `Developed an interactive dashboard to analyse refund patterns and customer behavior. Key features include:

• Refund Analysis:
  - Detailed breakdown of refund reasons and patterns
  - Customer segment analysis for return behavior
  - Product category performance in terms of returns

• Transaction Metrics:
  - Real-time tracking of refund rates
  - Average processing time for refunds
  - Cost analysis of returns by category

• Predictive Analytics:
  - Identification of high-risk transactions
  - Customer behavior prediction

• Actionable Insights:
  - Recommendations for reducing refund rates
  - Product quality improvement suggestions
  - Customer service optimization strategies`,
    tools: ['Tableau', 'SQL', 'Data Analysis'],
    link: 'https://public.tableau.com/app/profile/hetsuhagiya/viz/TransactionDashboard_17428246737940/RefundsOverview',
    icon: '/Proj_icons/finance_analysis.png',
    type: 'tableau'
  },
  {
    title: 'Data Pipeline: Kaggle API to PostgreSQL',
    summary: 'Built an automated ETL pipeline using the Kaggle API to reduce manual data handling and support faster insight generation.',
    detailedSummary: `Built an automated ETL pipeline for efficient data processing and analysis. Key components include:

• Data Extraction:
  - Automated data retrieval from Kaggle API
  - Support for multiple dataset formats
  - Scheduled data updates and synchronization

• Data Transformation:
  - Automated data cleaning and preprocessing
  - Feature engineering and data enrichment
  - Data validation and quality checks

• Data Loading:
  - Efficient data storage in PostgreSQL
  - Optimized database schema design
  - Automated backup and recovery

• Pipeline Features:
  - Data validation at each stage
  - Performance monitoring and optimization
  - Automated testing and maintenance`,
    tools: ['Python', 'Pandas', 'Kaggle API', 'PostgreSQL'],
    link: 'https://github.com/hetsuhagiya/etl-pipeline',
    github: 'https://github.com/HetSuhagiya/ETL.git',
    icon: '/Proj_icons/ETL.png',
    type: 'github'
  },
  {
    title: 'Medical Health Application',
    summary: 'Developed a web dashboard using Django and Plotly Dash to help users explore activity metrics and trends.',
    detailedSummary: `Developed a comprehensive health monitoring and analysis platform. Key features include:

• Data Integration:
  - Integration with Google Fit API
  - Support for multiple data sources (CSVs, APIs)
  - Real-time data synchronization

• Dashboard Features:
  - Interactive activity metrics visualization
  - Customizable health tracking parameters
  - Real-time data updates and alerts

• AI-Powered Analysis:
  - GPT-based health insights generation
  - Personalized health recommendations
  - Natural language query support

• User Experience:
  - Intuitive data exploration interface
  - Customizable dashboard layouts
  - Mobile-responsive design
  - Real-time data visualization
  - Personalized health insights`,
    tools: ['Django', 'Plotly Dash', 'Google Fit API', 'Python', 'GPT-based Models'],
    link: 'https://github.com/GHMProjects/Health-Dashboard',
    github: 'https://github.com/GHMProjects/Health-Dashboard',
    icon: '/Proj_icons/health_analysis.png',
    type: 'github'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };
  const visibleCount = getVisibleCount();
  useEffect(() => {
    const updateDragWidth = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const totalWidth = container.scrollWidth;
        const visibleWidth = container.offsetWidth;
        setDragWidth(totalWidth - visibleWidth);
      }
    };
    updateDragWidth();
    window.addEventListener('resize', updateDragWidth);
    return () => window.removeEventListener('resize', updateDragWidth);
  }, [visibleCount, projects.length]);
  const maxIndex = Math.max(0, projects.length - visibleCount);

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.title === 'Sales Analysis Dashboard') {
      navigate('/projects/sales-analysis-dashboard');
    }
    // Add more slugs for other projects as needed
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, projects.length - visibleCount));
  };

  // Scroll to the correct card when carouselIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.querySelectorAll('.project-card')[carouselIndex];
      if (card) {
        const cardLeft = (card as HTMLElement).offsetLeft;
        container.scrollTo({ left: cardLeft, behavior: 'smooth' });
      }
    }
  }, [carouselIndex]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center">
          <TrueFocus
            sentence="My Projects"
            manualMode={false}
            blurAmount={5}
            borderColor="#6366f1"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <div className="relative flex items-center max-w-6xl mx-auto">
          {/* Left navigation button (outside carousel) */}
          <button
            onClick={handlePrev}
            className="z-10 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed absolute left-[-2.5rem] md:left-[-3rem]"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            disabled={carouselIndex === 0}
            aria-label="Previous projects"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div
            className="overflow-x-auto scrollbar-hide w-full"
            ref={carouselRef}
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 project-card"
                  style={{ flexBasis: `calc(100%/${visibleCount})`, maxWidth: `calc(100%/${visibleCount})` }}
                >
                  <div
                    className="group bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                    onClick={() => handleCardClick(project)}
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-stone-300 dark:bg-stone-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <img
                            src={project.icon}
                            alt={`${project.title} icon`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex gap-2">
                          {project.type === 'tableau' && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                              onClick={e => e.stopPropagation()}
                            >
                              <img src="/tableau.svg" alt="Tableau" className="w-5 h-5" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 transition-colors duration-200"
                              onClick={e => e.stopPropagation()}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"></svg>
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 bg-slate-200 dark:bg-slate-700/30 text-slate-800 dark:text-slate-200 rounded-full text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right navigation button (outside carousel) */}
          <button
            onClick={handleNext}
            className="z-10 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed absolute right-[-2.5rem] md:right-[-3rem]"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            disabled={carouselIndex >= projects.length - visibleCount}
            aria-label="Next projects"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
} 