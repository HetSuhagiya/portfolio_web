class ProjectLoader {
    constructor() {
        this.projectGrid = document.querySelector('.project-grid');
        this.loadProjects();
    }

    async loadProjects() {
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error('Failed to load projects');
            }
            const data = await response.json();
            
            if (data.projects && data.projects.length > 0) {
                this.projectGrid.innerHTML = data.projects
                    .map(project => this.generateProjectCard(project))
                    .join('');
            } else {
                this.showDefaultProjects();
            }
        } catch (error) {
            console.error('Error loading projects:', error);
            this.showDefaultProjects();
        }
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
            // Add other default projects here
        ];

        this.projectGrid.innerHTML = defaultProjects
            .map(project => this.generateProjectCard(project))
            .join('');
    }

    generateProjectCard(project) {
        return `
            <div class="project-card">
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
                                ${link.text} <i class="fas fa-${link.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
} 