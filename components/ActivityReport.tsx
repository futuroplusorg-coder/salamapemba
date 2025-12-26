import React, { useEffect, useRef } from 'react';

// Inform TypeScript that Chart.js is available on the global scope
declare const Chart: any;

const LOGO_URL = 'https://i.postimg.cc/FFS3k8Dv/1.png';

const ActivityReport: React.FC = () => {
    const activityChartRef = useRef<HTMLCanvasElement>(null);
    const genderChartRef = useRef<HTMLCanvasElement>(null);
    const nikunkwaChartRef = useRef<HTMLCanvasElement>(null);
    const barcoChartRef = useRef<HTMLCanvasElement>(null);
    const originChartRef = useRef<HTMLCanvasElement>(null);
    const scrollTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reportData = {
            activities: [
                { name: 'Seja Pescador por 1 Dia', total: 23, women: 7, men: 16 },
                { name: '*Excursão à Aldeia Nikunkwa', total: 146, women: 48, men: 98 },
                { name: '**Passeios de Barco', total: 33, women: 23, men: 10 },
                { name: 'Excursão a Mecúfi', total: 69, women: 29, men: 40 },
                { name: 'Pequenos Exploradores', total: 22, women: 12, men: 10 }
            ],
            nikunkwa: {
                editions: ['1ª Edição', '2ª Edição', '3ª Edição', '4ª Edição'],
                participants: [33, 39, 49, 22],
                women: [14, 13, 16, 5],
                men: [19, 26, 33, 17]
            },
            barco: {
                editions: ['1ª Edição', '2ª Edição', '3ª Edição'],
                participants: [8, 12, 13],
                women: [10, 7, 6],
                men: [4, 3, 3]
            },
            genderDistribution: {
                women: 117,
                men: 173
            },
            originDistribution: {
                foreign: 48,
                national: 52
            }
        };

        const colors = {
            women: 'rgba(217, 95, 67, 0.8)', // #D95F43
            men: 'rgba(0, 160, 160, 0.8)', // #00A0A0
            foreign: 'rgba(251, 188, 5, 0.8)', // A nice yellow for contrast
            national: 'rgba(79, 209, 197, 0.8)', // #4FD1C5
            nikunkwa: 'rgba(229, 115, 75, 0.8)', // #E5734B - A variation of primary
            barco: 'rgba(79, 209, 197, 0.8)', // #4FD1C5
            background: 'rgba(255, 255, 255, 0.2)'
        };

        const chartInstances: any[] = [];

        // Gráfico de Participação por Atividade
        if (typeof Chart !== 'undefined' && activityChartRef.current) {
            const activityCtx = activityChartRef.current.getContext('2d');
            chartInstances.push(new Chart(activityCtx, {
                type: 'bar',
                data: {
                    labels: reportData.activities.map(a => a.name),
                    datasets: [
                        { label: 'Mulheres', data: reportData.activities.map(a => a.women), backgroundColor: colors.women, borderColor: 'rgba(217, 95, 67, 1)', borderWidth: 1, borderRadius: 8, borderSkipped: false },
                        { label: 'Homens', data: reportData.activities.map(a => a.men), backgroundColor: colors.men, borderColor: 'rgba(0, 160, 160, 1)', borderWidth: 1, borderRadius: 8, borderSkipped: false }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { size: 13 }, usePointStyle: true, padding: 20 } }, title: { display: true, text: 'Participação por Actividade e Género', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 20 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', titleFont: { size: 14 }, bodyFont: { size: 13 }, padding: 12, cornerRadius: 8 } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 12 } } }, y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' }, ticks: { font: { size: 12 }, padding: 10 } } } }
            }));
        }

        // Gráfico de Distribuição de Género
        if (typeof Chart !== 'undefined' && genderChartRef.current) {
            const genderCtx = genderChartRef.current.getContext('2d');
            chartInstances.push(new Chart(genderCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Mulheres', 'Homens'],
                    datasets: [{ data: [reportData.genderDistribution.women, reportData.genderDistribution.men], backgroundColor: [colors.women, colors.men], borderColor: ['rgba(217, 95, 67, 0.5)', 'rgba(0, 160, 160, 0.5)'], borderWidth: 2, borderRadius: 10, spacing: 5 }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom', labels: { font: { size: 13 }, padding: 20, usePointStyle: true } }, title: { display: true, text: 'Distribuição por Género', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 10 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', bodyFont: { size: 13 }, padding: 12, cornerRadius: 8, callbacks: { label: function(context: any) { const label = context.label || ''; const value = context.raw; const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0); const percentage = Math.round((value / total) * 100); return `${label}: ${value} (${percentage}%)`; } } } } }
            }));
        }

        // Gráfico de Evolução Nikunkwa
        if (typeof Chart !== 'undefined' && nikunkwaChartRef.current) {
            const nikunkwaCtx = nikunkwaChartRef.current.getContext('2d');
            chartInstances.push(new Chart(nikunkwaCtx, {
                type: 'line',
                data: {
                    labels: reportData.nikunkwa.editions,
                    datasets: [
                        { label: 'Total de Participantes', data: reportData.nikunkwa.participants, backgroundColor: colors.nikunkwa, borderColor: colors.nikunkwa, borderWidth: 3, fill: false, tension: 0.2, pointRadius: 6, pointHoverRadius: 8 },
                        { label: 'Mulheres', data: reportData.nikunkwa.women, backgroundColor: colors.women, borderColor: colors.women, borderWidth: 2, fill: false, tension: 0.2, pointRadius: 5, pointHoverRadius: 7 },
                        { label: 'Homens', data: reportData.nikunkwa.men, backgroundColor: colors.men, borderColor: colors.men, borderWidth: 2, fill: false, tension: 0.2, pointRadius: 5, pointHoverRadius: 7 }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { size: 13 }, padding: 20, usePointStyle: true } }, title: { display: true, text: 'Evolução da Excursão à Aldeia Nikunkwa', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 20 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', titleFont: { size: 14 }, bodyFont: { size: 13 }, padding: 12, cornerRadius: 8 } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 12 } } }, y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' }, ticks: { font: { size: 12 }, padding: 10 } } } }
            }));
        }

        // Gráfico de Evolução Passeios de Barco
        if (typeof Chart !== 'undefined' && barcoChartRef.current) {
            const barcoCtx = barcoChartRef.current.getContext('2d');
            chartInstances.push(new Chart(barcoCtx, {
                type: 'line',
                data: {
                    labels: reportData.barco.editions,
                    datasets: [
                        { label: 'Total de Participantes', data: reportData.barco.participants, backgroundColor: colors.barco, borderColor: colors.barco, borderWidth: 3, fill: false, tension: 0.2, pointRadius: 6, pointHoverRadius: 8 },
                        { label: 'Mulheres', data: reportData.barco.women, backgroundColor: colors.women, borderColor: colors.women, borderWidth: 2, fill: false, tension: 0.2, pointRadius: 5, pointHoverRadius: 7 },
                        { label: 'Homens', data: reportData.barco.men, backgroundColor: colors.men, borderColor: colors.men, borderWidth: 2, fill: false, tension: 0.2, pointRadius: 5, pointHoverRadius: 7 }
                    ]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { font: { size: 13 }, padding: 20, usePointStyle: true } }, title: { display: true, text: 'Evolução de Passeios de Barco', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 20 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', titleFont: { size: 14 }, bodyFont: { size: 13 }, padding: 12, cornerRadius: 8 } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 12 } } }, y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' }, ticks: { font: { size: 12 }, padding: 10 } } } }
            }));
        }

        // Gráfico de Origem dos Participantes
        if (typeof Chart !== 'undefined' && originChartRef.current) {
            const originCtx = originChartRef.current.getContext('2d');
            chartInstances.push(new Chart(originCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Estrangeiros', 'Nacionais'],
                    datasets: [{ data: [reportData.originDistribution.foreign, reportData.originDistribution.national], backgroundColor: [colors.foreign, colors.national], borderColor: ['rgba(251, 188, 5, 0.5)', 'rgba(79, 209, 197, 0.5)'], borderWidth: 2, borderRadius: 10, spacing: 5 }]
                },
                options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'bottom', labels: { font: { size: 13 }, padding: 20, usePointStyle: true } }, title: { display: true, text: 'Origem dos Participantes (%)', font: { size: 16, weight: 'bold' }, padding: { top: 10, bottom: 10 } }, tooltip: { backgroundColor: 'rgba(32, 33, 36, 0.9)', bodyFont: { size: 13 }, padding: 12, cornerRadius: 8, callbacks: { label: function(context: any) { return `${context.label}: ${context.parsed}%`; } } } } }
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

    return (
        <section id="activity-report" className="activity-report-section">
            <div className="container">
                <div className="report-header">
                    <div className="logo-header">
                        <img src={LOGO_URL} alt="Salama Pemba Logo" width="200" style={{mixBlendMode: 'multiply'}} />
                        <div className="header-content">
                            <h1>Relatório de Actividade</h1>
                            <p>Período: Fevereiro a Junho de 2025 | Local: Cidade de Pemba, Cabo Delgado</p>
                        </div>
                    </div>
                    
                    <div className="header-stats">
                        <div className="stats-full-row">
                            <div className="stat-box-full">
                                <div className="stat-value">293</div>
                                <div className="stat-label">Participantes</div>
                            </div>
                        </div>
                        <div className="stats-row">
                            <div className="stat-box">
                                <div className="stat-value">117</div>
                                <div className="stat-label">Mulheres</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">176</div>
                                <div className="stat-label">Homens</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">0%</div>
                                <div className="stat-label">Taxa de Acidentes</div>
                            </div>
                        </div>
                        <div className="stats-full-row">
                            <div className="stat-box-full">
                                <div className="stat-value">126h</div>
                                <div className="stat-label">Horas de Participação nas Excursões</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-grid">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-chart-bar"></i></div>
                            <h2 className="card-title">Participação por Actividade</h2>
                        </div>
                        <div className="chart-container"><canvas ref={activityChartRef}></canvas></div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-venus-mars"></i></div>
                            <h2 className="card-title">Distribuição de Género</h2>
                        </div>
                        <div className="chart-container"><canvas ref={genderChartRef}></canvas></div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-chart-line"></i></div>
                            <h2 className="card-title">*Evolução da Excursão à Nikunkwa</h2>
                        </div>
                        <div className="chart-container"><canvas ref={nikunkwaChartRef}></canvas></div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-chart-line"></i></div>
                            <h2 className="card-title">**Evolução de Passeios de Barco</h2>
                        </div>
                        <div className="chart-container"><canvas ref={barcoChartRef}></canvas></div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-globe-africa"></i></div>
                            <h2 className="card-title">Origem dos Participantes (%)</h2>
                        </div>
                        <div className="chart-container"><canvas ref={originChartRef}></canvas></div>
                    </div>
                </div>
                
                <div className="section">
                    <h2 className="section-title">Resumo das Actividades</h2>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-name">Seja Pescador por 1 Dia</div>
                            <div className="activity-stats">
                                <div className="activity-stat"><div className="stat-number">23</div><div className="stat-label">Total</div></div>
                                <div className="activity-stat"><div className="stat-number">7</div><div className="stat-label">Mulheres</div></div>
                                <div className="activity-stat"><div className="stat-number">16</div><div className="stat-label">Homens</div></div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-name">Excursão à Aldeia Nikunkwa (4 edições)</div>
                            <div className="activity-stats">
                                <div className="activity-stat"><div className="stat-number">146</div><div className="stat-label">Total</div></div>
                                <div className="activity-stat"><div className="stat-number">48</div><div className="stat-label">Mulheres</div></div>
                                <div className="activity-stat"><div className="stat-number">98</div><div className="stat-label">Homens</div></div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-name">Passeios de Barco pela Baía (3 edições)</div>
                            <div className="activity-stats">
                                <div className="activity-stat"><div className="stat-number">33</div><div className="stat-label">Total</div></div>
                                <div className="activity-stat"><div className="stat-number">23</div><div className="stat-label">Mulheres</div></div>
                                <div className="activity-stat"><div className="stat-number">10</div><div className="stat-label">Homens</div></div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-name">Excursão a Mecúfi (1 Edição)</div>
                            <div className="activity-stats">
                                <div className="activity-stat"><div className="stat-number">69</div><div className="stat-label">Total</div></div>
                                <div className="activity-stat"><div className="stat-number">29</div><div className="stat-label">Mulheres</div></div>
                                <div className="activity-stat"><div className="stat-number">40</div><div className="stat-label">Homens</div></div>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-name">Pequenos Exploradores(1 Edição)</div>
                            <div className="activity-stats">
                                <div className="activity-stat"><div className="stat-number">22</div><div className="stat-label">Total</div></div>
                                <div className="activity-stat"><div className="stat-number">12</div><div className="stat-label">Mulheres</div></div>
                                <div className="activity-stat"><div className="stat-number">10</div><div className="stat-label">Homens</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="report-footer">
                    <img src={LOGO_URL} alt="Salama Pemba Logo" width="200" style={{ mixBlendMode: 'multiply', margin: '0 auto 15px' }} />
                    <p>Relatório de Actividades - Período: Fevereiro a Junho de 2025</p>
                    <p>A promover o Turismo Comunitário em Cabo Delgado, Moçambique</p>
                </div>
                
                <div className="scroll-top" ref={scrollTopRef}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </section>
    );
};

export default ActivityReport;