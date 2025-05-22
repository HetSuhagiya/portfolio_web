class ProjectLoader {
    constructor() {
        this.projectGrid = document.querySelector('.project-grid');
        this.loadProjects();
    }

    async loadProjects() {
        this.showDefaultProjects();
    }

    showDefaultProjects() {
        // Fallback to show default projects if API fails
        const defaultProjects = [
            {
                title: "Sales Performance Dashboard",
                summary: "Interactive dashboard analyzing global sales performance, with drill-down capabilities for regional analysis, product categories, and time-based trends.",
                tools: ["Tableau", "Data Visualization", "Sales Analytics"],
                links: [
                    {
                        url: "dashboard1.html",
                        text: "View Interactive Dashboard",
                        icon: "external-link-alt"
                    },
                    {
                        url: "https://public.tableau.com/views/Dashboard_17376208048500/Dashboard1",
                        text: "Open in Tableau Public",
                        icon: "external-link-alt"
                    }
                ]
            },
            {
                title: "Refunds Overview Dashboard",
                summary: "Comprehensive visualization of transaction refunds, analyzing patterns and trends across different business segments and time periods.",
                tools: ["Tableau", "Financial Analysis", "Refund Analytics"],
                links: [
                    {
                        url: "dashboard2.html",
                        text: "View Interactive Dashboard",
                        icon: "external-link-alt"
                    },
                    {
                        url: "https://public.tableau.com/views/TransactionDashboard_17428246737940/RefundsOverview",
                        text: "Open in Tableau Public",
                        icon: "external-link-alt"
                    }
                ]
            },
            {
                title: "Sales Analysis Project",
                summary: "Comprehensive SQL analysis of sales data across different product categories, seasons, and regions. Key findings include product performance analysis, seasonal trends, Black Friday sales impact, and regional performance metrics.",
                tools: ["SQL", "Data Analysis", "Sales Analytics", "Business Intelligence"],
                links: [
                    {
                        url: "https://github.com/HetSuhagiya/SQL-Sales-Analysis",
                        text: "View Project on GitHub",
                        icon: "fab fa-github"
                    },
                    {
                        url: "pdfviewer.html",
                        text: "View Detailed Report",
                        icon: "fas fa-file-pdf"
                    }
                ]
            },
            {
                title: "Data Pipeline: Kaggle API to PostgreSQL",
                summary: "Built an automated ETL pipeline to reduce manual overhead and support structured analysis of external datasets. Cleaned and transformed over 100,000 rows using Python (Pandas), supporting data quality and time-series insight generation. Loaded processed data into PostgreSQL to enable repeatable analysis and reporting for internal tools.",
                tools: ["Python", "Pandas", "Kaggle API", "PostgreSQL", "ETL"],
                links: [
                    {
                        url: "https://github.com/HetSuhagiya/ETL.git",
                        text: "View on GitHub",
                        icon: "fab fa-github"
                    }
                ]
            }
            // Add other default projects here
        ];

        this.projectGrid.innerHTML = defaultProjects
            .map(project => this.generateProjectCard(project))
            .join('');
    }

    generateProjectCard(project) {
        return `
            <div class="project-card fade-in">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-summary">${project.summary}</p>
                    <div class="project-tools">
                        ${project.tools.map(tool => `
                            <span class="tool">${tool}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" 
                               class="project-link"
                               ${link.url.startsWith('http') ? 'target="_blank"' : ''}>
                                ${link.text} <i class="${link.icon.includes('fab') ? link.icon : 'fas fa-' + link.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize the ProjectLoader when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectLoader();
}); 