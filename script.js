// Topic data structure - Interview Questions
const topics = [
    { name: 'Core DevOps Concepts', count: 5, start: 1, end: 5, type: 'question' },
    { name: 'Docker', count: 5, start: 6, end: 10, type: 'question' },
    { name: 'Kubernetes', count: 5, start: 11, end: 15, type: 'question' },
    { name: 'CI/CD', count: 5, start: 16, end: 20, type: 'question' },
    { name: 'Cloud Platforms', count: 5, start: 21, end: 25, type: 'question' },
    { name: 'Infrastructure as Code', count: 5, start: 26, end: 30, type: 'question' },
    { name: 'Monitoring and Logging', count: 5, start: 31, end: 35, type: 'question' },
    { name: 'Security and Compliance', count: 5, start: 36, end: 40, type: 'question' },
    { name: 'Linux Administration', count: 5, start: 41, end: 45, type: 'question' },
    { name: 'Version Control', count: 5, start: 46, end: 50, type: 'question' },
    { name: 'Configuration Management', count: 5, start: 51, end: 55, type: 'question' },
    { name: 'Scalability and High Availability', count: 5, start: 56, end: 60, type: 'question' },
    { name: 'Backup and Disaster Recovery', count: 5, start: 61, end: 65, type: 'question' },
    { name: 'Cloud Native Architecture', count: 5, start: 66, end: 70, type: 'question' },
    { name: 'Performance Testing', count: 5, start: 71, end: 75, type: 'question' },
    { name: 'API Gateway and Service Mesh', count: 5, start: 76, end: 80, type: 'question' },
    { name: 'Container Orchestration Advanced', count: 5, start: 81, end: 85, type: 'question' },
    { name: 'DevOps Tools and Automation', count: 5, start: 86, end: 90, type: 'question' },
    { name: 'Cloud Cost Optimization', count: 5, start: 91, end: 95, type: 'question' },
    { name: 'Site Reliability Engineering (SRE)', count: 5, start: 96, end: 100, type: 'question' },
    { name: 'DevOps Metrics and KPIs', count: 5, start: 101, end: 105, type: 'question' },
    { name: 'Serverless Architecture', count: 5, start: 106, end: 110, type: 'question' },
    { name: 'Database Management in DevOps', count: 5, start: 111, end: 115, type: 'question' },
    { name: 'Network Security', count: 5, start: 116, end: 120, type: 'question' },
    { name: 'Incident Management', count: 5, start: 121, end: 125, type: 'question' },
    { name: 'DevOps Culture and Practices', count: 5, start: 126, end: 130, type: 'question' },
    { name: 'Infrastructure Monitoring', count: 5, start: 131, end: 135, type: 'question' },
    { name: 'Cloud Migration', count: 5, start: 136, end: 140, type: 'question' },
    { name: 'Advanced DevOps & Cloud', count: 20, start: 141, end: 160, type: 'question' },
    { name: 'Operating System', count: 2, start: 0, end: 0, type: 'exercise' },
    { name: 'SQL', count: 12, start: 0, end: 0, type: 'exercise' },
    { name: 'Misc', count: 1, start: 0, end: 0, type: 'exercise' }
];

// Scenarios data structure
const scenarios = [
    { name: 'Kubernetes Troubleshooting Scenarios', count: 490, type: 'scenario' },
    { name: 'Docker Scenarios', count: 37, type: 'scenario' },
    { name: 'CI/CD Scenarios', count: 11, type: 'scenario' },
    { name: 'Cloud Platforms Scenarios', count: 5, type: 'scenario' },
    { name: 'Infrastructure as Code Scenarios', count: 5, type: 'scenario' },
    { name: 'Monitoring and Logging Scenarios', count: 5, type: 'scenario' },
    { name: 'Security and Compliance Scenarios', count: 4, type: 'scenario' },
    { name: 'Linux Administration Scenarios', count: 5, type: 'scenario' },
    { name: 'Version Control Scenarios', count: 5, type: 'scenario' },
    { name: 'Configuration Management Scenarios', count: 4, type: 'scenario' },
    { name: 'Scalability and High Availability Scenarios', count: 4, type: 'scenario' },
    { name: 'Backup and Disaster Recovery Scenarios', count: 4, type: 'scenario' },
    { name: 'Serverless Architecture Scenarios', count: 10, type: 'scenario' },
    { name: 'API Gateway and Service Mesh Scenarios', count: 11, type: 'scenario' },
    { name: 'Cloud Cost Optimization Scenarios', count: 9, type: 'scenario' },
    { name: 'Cloud Migration Scenarios', count: 9, type: 'scenario' },
    { name: 'Cloud Native Architecture Scenarios', count: 9, type: 'scenario' },
    { name: 'Container Orchestration Scenarios', count: 11, type: 'scenario' },
    { name: 'Database Management Scenarios', count: 4, type: 'scenario' },
    { name: 'Database Management in DevOps Scenarios', count: 9, type: 'scenario' },
    { name: 'DevOps Culture and Practices Scenarios', count: 11, type: 'scenario' },
    { name: 'DevOps Metrics and KPIs Scenarios', count: 10, type: 'scenario' },
    { name: 'Advanced DevOps Tools and Automation Scenarios', count: 3, type: 'scenario' },
    { name: 'DevOps Tools and Automation Scenarios', count: 4, type: 'scenario' },
    { name: 'Incident Management Scenarios', count: 10, type: 'scenario' },
    { name: 'Infrastructure Monitoring Scenarios', count: 7, type: 'scenario' },
    { name: 'Kubernetes Scenarios', count: 3, type: 'scenario' },
    { name: 'Network Security Scenarios', count: 12, type: 'scenario' },
    { name: 'Performance Testing Scenarios', count: 11, type: 'scenario' },
    { name: 'Site Reliability Engineering (SRE) Scenarios', count: 10, type: 'scenario' }
];

// Real example scenarios for selected categories
const scenarioExamples = {
    'Kubernetes Troubleshooting Scenarios': [
        {
            title: 'Pods stuck in Pending state',
            problem: 'Newly created application pods remain in Pending for several minutes and never start.',
            diagnosis: [
                'kubectl get pods -n <ns>',
                'kubectl describe pod <pod-name> -n <ns>',
                'kubectl get nodes',
                'kubectl describe node <node-name>'
            ],
            rootCause: 'Cluster did not have enough free CPU/memory that satisfied the pod resource requests, so the scheduler could not place the pods on any node.',
            fix: [
                'Reduce resource requests/limits for the workload (if over-provisioned).',
                'Scale the node group or add more worker nodes.',
                'Evict unused workloads or clean up test namespaces to free resources.'
            ]
        },
        {
            title: 'CrashLoopBackOff after new image deploy',
            problem: 'After deploying a new version of the service, pods go into CrashLoopBackOff.',
            diagnosis: [
                'kubectl get pods -n <ns>',
                'kubectl describe pod <pod-name> -n <ns>',
                'kubectl logs <pod-name> -n <ns> --previous',
                'Check config maps/secrets mounted into the pod'
            ],
            rootCause: 'Application failed during startup due to a breaking configuration change (missing env var / invalid DB URL) introduced with the new image.',
            fix: [
                'Roll back to the previous working image version using deployment rollout undo.',
                'Fix the configuration (env vars, ConfigMap, Secret) and redeploy.',
                'Add a startup health check to fail fast during CI/CD instead of in production.'
            ]
        },
        {
            title: 'Service not reachable inside cluster',
            problem: 'Other services cannot reach a backend using its Kubernetes service name.',
            diagnosis: [
                'kubectl get svc -n <ns>',
                'kubectl describe svc <service-name> -n <ns>',
                'kubectl get endpoints <service-name> -n <ns>',
                'kubectl exec -it <pod> -n <ns> -- nslookup <service-name>'
            ],
            rootCause: 'The Service selectors did not match any pod labels, so the service had zero endpoints.',
            fix: [
                'Align pod labels and service selectors (app, version, component, etc.).',
                'Verify that the deployment creates pods in the same namespace as the service.',
                'Add unit tests or policies to validate label/selector consistency before deployment.'
            ]
        }
    ],
    'Docker Scenarios': [
        {
            title: 'Container keeps exiting immediately',
            problem: 'docker run se bhi container start hota hai par turant exit ho jata hai.',
            diagnosis: [
                'docker ps -a',
                'docker logs <container-id>',
                'Check CMD/ENTRYPOINT in Dockerfile'
            ],
            rootCause: 'Image ka ENTRYPOINT ek short-lived command run kar raha hai (jaise echo, script error) jo foreground mein continuously nahi chal raha.',
            fix: [
                'Dockerfile mein sahi long-running process (jaise web server) ko ENTRYPOINT/CMD banaao.',
                'Agar custom script use kar rahe ho to last line par main process run karao (e.g. exec gunicorn ...).'
            ]
        },
        {
            title: 'Image size is very large',
            problem: 'Docker images hundreds of MB/GB ho gaye, pull/push bahut slow hai.',
            diagnosis: [
                'docker images',
                'Dive / docker history se layers inspect karo',
                'Dockerfile mein unnecessary files / build tools check karo'
            ],
            rootCause: 'Single-stage Dockerfile mein build-time dependencies, cache files aur unused artifacts final image mein aa gaye.',
            fix: [
                'Multi-stage builds use karo (build stage + slim runtime stage).',
                '.dockerignore file add karo (logs, node_modules, venv, tests, docs).',
                'Alpine / slim base images use karo jahan possible ho.'
            ]
        }
    ],
    'CI/CD Scenarios': [
        {
            title: 'Pipeline green but deployment failing',
            problem: 'CI pipeline successfully pass ho raha hai, lekin production deploy hone ke baad service down ho jati hai.',
            diagnosis: [
                'CI logs mein tests aur coverage check karo.',
                'CD logs (Jenkins, GitHub Actions, ArgoCD, etc.) inspect karo.',
                'Production pods/services logs dekh kar actual error samjho.'
            ],
            rootCause: 'Pipeline sirf unit tests run kar raha tha, integration/smoke tests aur environment specific checks missing the.',
            fix: [
                'CI pipeline mein integration, smoke aur basic end-to-end tests add karo.',
                'Pre-deploy validation step add karo (DB migration dry-run, config validation).',
                'Canary/blue-green jaise safe deployment strategies enable karo.'
            ]
        },
        {
            title: 'Frequent merge conflicts on release branch',
            problem: 'Har release se pehle release branch rebase/merge karte waqt bahut zyada conflicts aate hain.',
            diagnosis: [
                'Git history inspect karo (branching strategy).',
                'Check karo ki long-lived feature branches kitne time tak open rehte hain.',
                'Deployment frequency aur change size ka data nikalo.'
            ],
            rootCause: 'Long-lived feature branches aur infrequent merges ke wajah se divergence badh gaya; trunk-based / short-lived branches follow nahi ho rahe.',
            fix: [
                'Trunk-based development ya short-lived feature branches adopt karo.',
                'Feature flags use karke chhote-chhote incremental merges karo.',
                'Branch protection + automated tests lagao taaki frequent safe merges ho saken.'
            ]
        }
    ]
};

// Questions data - This will be loaded from README.md
let questionsData = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadQuestionsData();
    renderTopics();
    renderScenarios();
    setupEventListeners();
});

// Load questions from questions.json
async function loadQuestionsData() {
    try {
        const response = await fetch('questions.json');
        if (response.ok) {
            questionsData = await response.json();
            console.log(`Loaded ${Object.keys(questionsData).length} questions`);
            updateTopicCounts();
            renderTopics(); // Re-render with updated counts
        } else {
            // Fallback: try loading from README.md
            const mdResponse = await fetch('README.md');
            const text = await mdResponse.text();
            parseQuestionsFromMarkdown(text);
            updateTopicCounts();
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        // Fallback: create sample data
        createSampleQuestions();
    }
}

// Parse questions from markdown
function parseQuestionsFromMarkdown(markdown) {
    const lines = markdown.split('\n');
    let currentQuestion = null;
    let currentAnswer = [];
    let inAnswer = false;
    let questionNumber = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Match question headers (### What is...) or numbered questions (1. ### What is...)
        const questionMatch = line.match(/^(?:\d+\.\s*)?###\s+(.+)$/);
        if (questionMatch) {
            if (currentQuestion && currentAnswer.length > 0) {
                const answerText = currentAnswer.join('\n').trim();
                if (answerText && !answerText.includes('[⬆ Back to Top]')) {
                    questionsData[currentQuestion.id] = {
                        question: currentQuestion.text,
                        answer: answerText,
                        number: currentQuestion.number
                    };
                }
            }
            const questionText = questionMatch[1].trim();
            const questionId = questionText.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
            
            // Extract question number if present
            const numMatch = line.match(/^(\d+)\./);
            if (numMatch) {
                questionNumber = parseInt(numMatch[1]);
            } else {
                questionNumber++;
            }
            
            currentQuestion = { id: questionId, text: questionText, number: questionNumber };
            currentAnswer = [];
            inAnswer = true;
            continue;
        }

        // Collect answer content
        if (inAnswer && currentQuestion) {
            // Stop at back to top link (but include content before it)
            if (line.match(/\[⬆ Back to Top\]/)) {
                continue;
            }
            // Stop if we hit a section header (##)
            if (line.match(/^##\s+/)) {
                inAnswer = false;
                continue;
            }
            if (line.trim() || currentAnswer.length > 0) {
                currentAnswer.push(line);
            }
        }
    }

    // Save last question
    if (currentQuestion && currentAnswer.length > 0) {
        const answerText = currentAnswer.join('\n').trim();
        if (answerText && !answerText.includes('[⬆ Back to Top]')) {
            questionsData[currentQuestion.id] = {
                question: currentQuestion.text,
                answer: answerText,
                number: currentQuestion.number
            };
        }
    }

    if (Object.keys(questionsData).length === 0) {
        createSampleQuestions();
    }
}

// Create sample questions if markdown parsing fails
function createSampleQuestions() {
    topics.forEach(topic => {
        for (let i = topic.start; i <= topic.end; i++) {
            const questionId = `question-${i}`;
            questionsData[questionId] = {
                question: `Sample Question ${i}`,
                answer: `This is a sample answer for question ${i}. The actual content will be loaded from README.md file.`
            };
        }
    });
}

// Render topics grid
function renderTopics(filteredTopics = topics.filter(t => t.type === 'question' || t.type === 'exercise')) {
    const grid = document.getElementById('topicsGrid');
    grid.innerHTML = '';

    filteredTopics.forEach(topic => {
        const actualCount = topic.actualCount !== undefined ? topic.actualCount : topic.count;
        const itemType = topic.type === 'exercise' ? 'exercises' : 'questions';
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-title">${topic.name}</div>
            <div class="topic-description">Contains ${actualCount} DevOps ${itemType} about ${topic.name}</div>
            <div class="topic-count">${topic.type === 'exercise' ? 'Exercises' : 'Questions'}: ${actualCount}${actualCount < topic.count ? ` (${topic.count} planned)` : ''}</div>
        `;
        if (topic.type === 'question') {
            card.addEventListener('click', () => showTopicQuestions(topic));
        } else {
            card.style.cursor = 'default';
            card.style.opacity = '0.7';
        }
        grid.appendChild(card);
    });
}

// Render scenarios grid
function renderScenarios(filteredScenarios = scenarios) {
    const grid = document.getElementById('scenariosGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    filteredScenarios.forEach(scenario => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-title">${scenario.name}</div>
            <div class="topic-description">Real-world troubleshooting scenarios for ${scenario.name.replace(' Scenarios', '')}</div>
            <div class="topic-count">Scenarios: ${scenario.count}</div>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => showScenarioDetails(scenario));
        grid.appendChild(card);
    });
}

// Update topic counts based on actual questions
function updateTopicCounts() {
    topics.forEach(topic => {
        const count = Object.values(questionsData).filter(q => 
            q.number >= topic.start && q.number <= topic.end
        ).length;
        topic.actualCount = count;
    });
}

// Show questions for a topic
function showTopicQuestions(topic) {
    const modal = document.getElementById('questionModal');
    const modalBody = document.getElementById('modalBody');
    
    let content = `<h3>${topic.name}</h3>`;
    let foundQuestions = [];
    
    // Find questions by number
    Object.values(questionsData).forEach(q => {
        if (q.number >= topic.start && q.number <= topic.end) {
            foundQuestions.push(q);
        }
    });
    
    // Sort by question number
    foundQuestions.sort((a, b) => a.number - b.number);
    
    if (foundQuestions.length === 0) {
        content += `<p style="color: var(--text-primary);">No questions available for this topic yet. Questions may be added in future updates.</p>`;
    } else {
        // Show count info
        if (foundQuestions.length < topic.count) {
            content += `<p style="color: var(--text-green); margin-bottom: 20px;">Showing ${foundQuestions.length} of ${topic.count} questions for this topic.</p>`;
        }
        
        foundQuestions.forEach(q => {
            content += `
                <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">
                    <h4 style="color: var(--text-blue); margin-bottom: 10px;">${q.number}. ${q.question}</h4>
                    <div style="color: var(--text-primary);">${formatAnswer(q.answer)}</div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Show details for a scenario category
function showScenarioDetails(scenario) {
    const modal = document.getElementById('questionModal');
    const modalBody = document.getElementById('modalBody');

    let content = `<h3>${scenario.name}</h3>`;
    content += `
        <p style="color: var(--text-green); margin-bottom: 16px;">
            Real-world troubleshooting scenarios for <strong>${scenario.name.replace(' Scenarios', '')}</strong>.
        </p>
        <p style="color: var(--text-primary); margin-bottom: 12px;">
            This section will contain <strong>${scenario.count}</strong> curated scenarios with:
        </p>
        <ul style="margin-left: 20px; margin-bottom: 16px;">
            <li>Problem statement and system context</li>
            <li>Step-by-step diagnosis commands and checks</li>
            <li>Likely root causes and how to confirm them</li>
            <li>Production-safe fixes and prevention tips</li>
        </ul>
        <p style="color: var(--text-primary);">
            Full scenario content is not yet added to this offline version.
            You can still practice by picking a topic and thinking through:
            <em>What would I check first? What metrics/logs would I open?
            How would I roll out a safe fix?</em>
        </p>
    `;

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Format answer text
function formatAnswer(text) {
    if (!text) return 'Answer not available.';
    
    // Convert markdown to HTML
    let html = text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<p>${html}</p>`;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const questionsSection = document.getElementById('questionsSection');
    const scenariosSection = document.getElementById('scenariosSection');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm) {
            // Filter questions
            const filteredQuestions = topics.filter(topic => 
                (topic.type === 'question' || topic.type === 'exercise') &&
                topic.name.toLowerCase().includes(searchTerm)
            );
            renderTopics(filteredQuestions);
            
            // Filter scenarios
            const filteredScenarios = scenarios.filter(scenario => 
                scenario.name.toLowerCase().includes(searchTerm)
            );
            renderScenarios(filteredScenarios);
            
            // Show/hide sections based on results
            questionsSection.style.display = filteredQuestions.length > 0 ? 'block' : 'none';
            scenariosSection.style.display = filteredScenarios.length > 0 ? 'block' : 'none';
        } else {
            // Show all
            renderTopics();
            renderScenarios();
            questionsSection.style.display = 'block';
            scenariosSection.style.display = 'block';
        }
    });

    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', () => {
        loadQuestionsData();
        searchInput.value = '';
        renderTopics();
        renderScenarios();
        questionsSection.style.display = 'block';
        scenariosSection.style.display = 'block';
    });

    // Modal close
    const modal = document.getElementById('questionModal');
    const closeBtn = document.getElementById('closeModal');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.innerHTML = isLight ? '<span class="sun-icon">☀️</span>' : '<span class="moon-icon">🌙</span>';
    });
}

