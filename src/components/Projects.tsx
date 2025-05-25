import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  - Early warning system for potential returns
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
  - Error handling and logging system
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

  const handleCardClick = (project: typeof projects[0]) => {
    const projectWindow = window.open('', '_blank')
    if (projectWindow) {
      projectWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${project.title}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"></script>
            <script>
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      // primary: {
                      //   50: '#fff7ed',
                      //   100: '#ffedd5',
                      //   200: '#fed7aa',
                      //   300: '#fdba74',
                      //   400: '#fb923c',
                      //   500: '#f97316',
                      //   600: '#ea580c',
                      //   700: '#c2410c',
                      //   800: '#9a3412',
                      //   900: '#7c2d12',
                      // }
                    }
                  }
                }
              }
            </script>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; }
              .prose pre { background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; }
              .dark .prose pre { background-color: #1f2937; }
            </style>
          </head>
          <body class="bg-stone-50 dark:bg-stone-950 min-h-screen">
            <div class="container mx-auto px-4 py-8 max-w-4xl">
              <div class="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-lg p-8">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-16 h-16 bg-stone-300 dark:bg-stone-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="${project.icon}" alt="${project.title} icon" class="w-12 h-12 object-contain">
                  </div>
                  <div>
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">${project.title}</h1>
                    <div class="flex flex-wrap gap-2">
                      ${project.tools.map(tool => `
                        <span class="px-3 py-1 bg-stone-300 dark:bg-stone-700/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                          ${tool}
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>
                <div class="prose max-w-none mb-8">
                  <div class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                    ${project.detailedSummary}
                  </div>
                </div>
                <div class="flex flex-wrap gap-4">
                  ${project.link ? `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center px-6 py-3 bg-indigo-700 dark:bg-indigo-300 text-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-400 transition-colors duration-200">
                      ${project.type === 'tableau' ? `
                        <img src="/tableau.svg" alt="Tableau" class="w-5 h-5 mr-2" />
                        View on Tableau
                      ` : 'View Project'}
                    </a>
                  ` : ''}
                  ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center px-6 py-3 border border-stone-300 dark:border-stone-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          </body>
        </html>
      `)
      projectWindow.document.close()
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                <div className="p-6">
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
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img src="/tableau.svg" alt="Tableau" className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 