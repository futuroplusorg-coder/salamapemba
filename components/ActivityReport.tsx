import React, { useEffect, useRef } from 'react';

// Inform TypeScript that Chart.js is available on the global scope
declare const Chart: any;

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

// Icon components for the new section
const UsersIcon = () => <i className="fas fa-users"></i>;
const HandsHelpingIcon = () => <i className="fas fa-hands-helping"></i>;
const MoneyBillWaveIcon = () => <i className="fas fa-money-bill-wave"></i>;
const VenusIcon = () => <i className="fas fa-venus"></i>;
const GraduationCapIcon = () => <i className="fas fa-graduation-cap"></i>;
const ShieldAltIcon = () => <i className="fas fa-shield-alt"></i>;

interface Conquista {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ActivityReport: React.FC = () => {
    const activityChartRef = useRef<HTMLCanvasElement>(null);
    const genderChartRef = useRef<HTMLCanvasElement>(null);
    const activitiesPieChartRef = useRef<HTMLCanvasElement>(null);
    const scrollTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dados do relatório atualizados com a correção
        const reportData = {
            activities: [
                { name: 'Seja Pescador', total: 23 },
                { name: 'Excursões Nikunkwa', total: 146 },
                { name: 'Passeios de Barco', total: 111 },
                { name: 'Excursão Mecúfi', total: 69 },
                { name: 'Pequenos Exploradores', total: 22 },
                { name: 'Descobrindo Futuro', total: 20 },
                { name: 'Comunidade Murrebue', total: 16 },
                { name: 'Aldeia de Namau', total: 28 },
                { name: 'City Tour Pemba', total: 18 },
                { name: 'Roundtable Cultura', total: 22 },
                { name: 'Natal Solidário', total: 147 }
            ],
            genderDistribution: {
                women: 156,
                men: 466
            }
        };

        const colors = {
            women: 'rgba(234, 67, 53, 0.8)',
            men: 'rgba(66, 133, 244, 0.8)',
            activityColors: [
                'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)',
                'rgba(199, 199, 199, 0.8)', 'rgba(83, 102, 255, 0.8)', 'rgba(40, 159, 64, 0.8)',
                'rgba(210, 105, 30, 0.8)', 'rgba(220, 20, 60, 0.8)'
            ]
        };
        
        const chartInstances: any[] = [];

        // Gráfico de Participação por Actividade (apenas total)
        if (typeof Chart !== 'undefined' && activityChartRef.current) {
            const activityCtx = activityChartRef.current.getContext('2d');
            chartInstances.push(new Chart(activityCtx, {
                type: 'bar',
                data: {
                    labels: reportData.activities.map(a => a.name),
                    datasets: [{
                        label: 'Total de Participantes',
                        data: reportData.activities.map(a => a.total),
                        backgroundColor: reportData.activities.map((_, index) => colors.activityColors[index % colors.activityColors.length]),
                        borderColor: reportData.activities.map((_, index) => colors.activityColors[index % colors.activityColors.length]),
                        borderWidth: 1, borderRadius: 8, borderSkipped: false
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { size: 13 }, usePointStyle: true, padding: 20 } }, title: { display: true, text: 'Participação por Actividade', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 20 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', titleFont: { size: 14 }, bodyFont: { size: 13 }, padding: 12, cornerRadius: 8, callbacks: { label: function(context: any) { const total = reportData.activities.reduce((sum, activity) => sum + activity.total, 0); const percentage = ((context.raw / total) * 100).toFixed(1); return `Participantes: ${context.raw} (${percentage}%)`; } } } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 11 }, maxRotation: 45, minRotation: 45 } }, y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' }, ticks: { font: { size: 12 }, padding: 10 } } } }
            }));
        }

        // Gráfico de Distribuição de Género
        if (typeof Chart !== 'undefined' && genderChartRef.current) {
            const genderCtx = genderChartRef.current.getContext('2d');
            chartInstances.push(new Chart(genderCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Mulheres', 'Homens'],
                    datasets: [{ data: [reportData.genderDistribution.women, reportData.genderDistribution.men], backgroundColor: [colors.women, colors.men], borderColor: ['rgba(234, 67, 53, 0.5)', 'rgba(66, 133, 244, 0.5)'], borderWidth: 2, borderRadius: 10, spacing: 5 }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom', labels: { font: { size: 13 }, padding: 20, usePointStyle: true } }, title: { display: true, text: 'Distribuição por Género', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 10 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', bodyFont: { size: 13 }, padding: 12, cornerRadius: 8, callbacks: { label: function(context: any) { const label = context.label || ''; const value = context.raw; const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0); const percentage = Math.round((value / total) * 100); return `${label}: ${value} (${percentage}%)`; } } } } }
            }));
        }
        
        // Gráfico de Pizza para Distribuição de Participantes por Actividade
        if (typeof Chart !== 'undefined' && activitiesPieChartRef.current) {
            const activitiesPieCtx = activitiesPieChartRef.current.getContext('2d');
            chartInstances.push(new Chart(activitiesPieCtx, {
                type: 'pie',
                data: {
                    labels: reportData.activities.map(a => a.name),
                    datasets: [{ data: reportData.activities.map(a => a.total), backgroundColor: reportData.activities.map((_, index) => colors.activityColors[index % colors.activityColors.length]), borderColor: 'rgba(255, 255, 255, 0.8)', borderWidth: 2, borderRadius: 10, spacing: 5 }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { font: { size: 11 }, padding: 15, usePointStyle: true, boxWidth: 10 } }, title: { display: true, text: 'Distribuição de Participantes por Actividade', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 10 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', bodyFont: { size: 13 }, padding: 12, cornerRadius: 8, callbacks: { label: function(context: any) { const label = context.label || ''; const value = context.raw; const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0); const percentage = ((value / total) * 100).toFixed(1); return `${label}: ${value} (${percentage}%)`; } } } } }
            }));
        }

        // Scroll to top functionality
        const scrollTopBtn = scrollTopRef.current;
        const handleScroll = () => {
            if (scrollTopBtn) {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            }
        };
        const handleScrollClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        window.addEventListener('scroll', handleScroll);
        scrollTopBtn?.addEventListener('click', handleScrollClick);

        return () => {
            chartInstances.forEach(chart => chart.destroy());
            window.removeEventListener('scroll', handleScroll);
            scrollTopBtn?.removeEventListener('click', handleScrollClick);
        };
    }, []);

    const conquistas: Conquista[] = [
        { icon: <UsersIcon />, title: "Participação Directa", description: "A Salama Pemba já envolveu directamente 622 participantes, entre nacionais e estrangeiros, promovendo o turismo comunitário inclusivo." },
        { icon: <HandsHelpingIcon />, title: "Inclusão Social", description: "Promoveu activamente a inclusão social, garantindo que diferentes grupos da comunidade tenham acesso às actividades turísticas." },
        { icon: <MoneyBillWaveIcon />, title: "Geração de Rendimento", description: "Gerou rendimento local através do turismo comunitário, contribuindo para o desenvolvimento económico sustentável da região." },
        { icon: <VenusIcon />, title: "Empoderamento Feminino", description: "28 mulheres empoderadas através da valorização da gastronomia tradicional, criando oportunidades de empreendedorismo." },
        { icon: <GraduationCapIcon />, title: "Educação para Jovens", description: "Desenvolveu actividades educativas para crianças e jovens, promovendo a consciência ambiental e cultural." },
        { icon: <ShieldAltIcon />, title: "Segurança Total", description: "Manteve uma taxa zero de acidentes em todas as actividades, garantindo a segurança de todos os participantes." }
    ];

    const activitiesList = [
        { name: 'Seja Pescador por 1 Dia', total: 23 },
        { name: 'Excursões à Aldeia Nikunkwa / Metuge (4 edições)', total: 146 },
        { name: 'Passeios de Barco pela Baía / Wimbe - Ulondo (11 edições)', total: 111 },
        { name: 'Excursão a Mecúfi (1 edição)', total: 69 },
        { name: 'Salama Pemba Junior – Pequenos Exploradores (1 edição)', total: 22 },
        { name: 'Salama Pemba Junior – Descobrindo O Futuro (1 edição)', total: 20 },
        { name: 'Um dia na Comunidade de Murrebue (2 edições)', total: 16 },
        { name: 'Excursões à Aldeia de Namau / Metuge (4 edições)', total: 28 },
        { name: 'Salama Pemba City Tour / Pemba (1 edição)', total: 18 },
        { name: 'Roundtable Fazedores de Cultura (1 edição)', total: 22 },
        { name: 'Natal Solidário Salama Pemba e Parceiros 2025', total: 147 }
    ];

    return (
        <section id="activity-report" className="activity-report-section">
            <div className="container">
                <header className="report-header">
                    <div className="logo-header">
                        <img src={LOGO_URL} alt="Salama Pemba Logo" width="200" style={{mixBlendMode: 'multiply'}} />
                        <div className="header-content">
                            <h1>Relatório de Actividade</h1>
                            <p>Período: Fevereiro a Dezembro de 2025 | Local: Cidade de Pemba, Cabo Delgado</p>
                        </div>
                    </div>
                    
                    <div className="header-stats">
                        <div className="stats-full-row">
                            <div className="stat-box-full">
                                <div className="stat-value">622</div>
                                <div className="stat-label">Total de Participantes</div>
                            </div>
                        </div>
                        <div className="stats-row">
                            <div className="stat-box">
                                <div className="stat-value">156</div>
                                <div className="stat-label">Mulheres</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">466</div>
                                <div className="stat-label">Homens</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">0%</div>
                                <div className="stat-label">Taxa de Acidentes</div>
                            </div>
                        </div>
                        <div className="stats-full-row">
                            <div className="stat-box-full">
                                <div className="stat-value">142h</div>
                                <div className="stat-label">Horas de Participação</div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="dashboard-grid">
                    <div className="card">
                        <div className="card-header"><div className="card-icon"><i className="fas fa-chart-bar"></i></div><h2 className="card-title">Participação por Actividade</h2></div>
                        <div className="chart-container"><canvas ref={activityChartRef}></canvas></div>
                    </div>
                    <div className="card">
                        <div className="card-header"><div className="card-icon"><i className="fas fa-venus-mars"></i></div><h2 className="card-title">Distribuição de Género</h2></div>
                        <div className="chart-container"><canvas ref={genderChartRef}></canvas></div>
                    </div>
                    <div className="card">
                        <div className="card-header"><div className="card-icon"><i className="fas fa-chart-pie"></i></div><h2 className="card-title">Distribuição por Actividade</h2></div>
                        <div className="chart-container"><canvas ref={activitiesPieChartRef}></canvas></div>
                    </div>
                </div>
                
                <div className="section">
                    <h2 className="section-title">Resumo das Actividades (Fevereiro-Dezembro 2025)</h2>
                    <div className="activity-list">
                        {activitiesList.map((activity, index) => (
                             <div key={index} className="activity-item">
                                <div className="activity-name">{activity.name}</div>
                                <div className="activity-stats">
                                    <div className="activity-stat">
                                        <div className="stat-number">{activity.total}</div>
                                        <div className="stat-label">Total</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">Conquistas e Impacto Social</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conquistas.map((item, index) => (
                             <div key={index} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#00A0A0] hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                    <span className="text-[#D95F43] mr-3 text-2xl">{item.icon}</span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.description.replace(/(\d+)/g, '<span class="font-bold text-[#D95F43]">$1</span>') }}></p>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="report-footer">
                    <img src={LOGO_URL} alt="Salama Pemba Logo" width="200" style={{ mixBlendMode: 'multiply', margin: '0 auto 15px' }} />
                    <p>Relatório de Actividades - Período: Fevereiro a Dezembro de 2025</p>
                    <p>Promovendo Turismo Comunitário em Cabo Delgado, Moçambique</p>
                </footer>
                
                <div className="scroll-top" ref={scrollTopRef}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </section>
    );
};

export default ActivityReport;