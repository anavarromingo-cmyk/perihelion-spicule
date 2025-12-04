import React, { useState } from 'react';
import { proqolQuestions } from '../data/proqol';
import { AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import clsx from 'clsx';

const Assessment = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleOptionChange = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: parseInt(value) }));
    };

    const calculateScores = () => {
        let cs = 0;
        let bo = 0;
        let sts = 0;

        proqolQuestions.forEach(q => {
            const val = answers[q.id] || 0;
            // Simple summation for demo. Real ProQOL has reverse scoring for some items.
            // We will assume direct scoring for this simplified MVP or handle reverse if marked.
            const score = q.reverse ? (6 - val) : val;

            if (q.type === 'cs') cs += score;
            if (q.type === 'bo') bo += score;
            if (q.type === 'sts') sts += score;
        });

        return { cs, bo, sts };
    };

    const scores = showResults ? calculateScores() : null;

    const getLevel = (score) => {
        if (score <= 22) return 'Bajo';
        if (score <= 41) return 'Moderado';
        return 'Alto';
    };

    const getColor = (score, type) => {
        const level = getLevel(score);
        if (type === 'cs') {
            return level === 'Alto' ? 'text-emerald-600' : level === 'Moderado' ? 'text-yellow-600' : 'text-red-600';
        } else {
            return level === 'Bajo' ? 'text-emerald-600' : level === 'Moderado' ? 'text-yellow-600' : 'text-red-600';
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Evaluación de Calidad de Vida Profesional (ProQOL)</h1>
                <p className="text-slate-600 mb-6">
                    Responda a las siguientes preguntas basándose en cómo se ha sentido en los últimos 30 días.
                    <br />
                    <span className="text-sm text-slate-500 italic">1 = Nunca, 5 = Muy a menudo</span>
                </p>

                {!showResults ? (
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowResults(true); }}>
                        {proqolQuestions.map((q) => (
                            <div key={q.id} className="bg-slate-50 p-4 rounded-lg">
                                <p className="text-slate-900 font-medium mb-3">{q.text}</p>
                                <div className="flex justify-between sm:justify-start sm:space-x-8">
                                    {[1, 2, 3, 4, 5].map((val) => (
                                        <label key={val} className="flex flex-col items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                value={val}
                                                required
                                                onChange={(e) => handleOptionChange(q.id, e.target.value)}
                                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                                            />
                                            <span className="text-xs text-slate-500 mt-1">{val}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                        >
                            Ver Resultados
                        </button>
                    </form>
                ) : (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                <h3 className="text-emerald-900 font-semibold">Satisfacción por Compasión</h3>
                                <p className={clsx("text-2xl font-bold mt-2", getColor(scores.cs, 'cs'))}>{scores.cs}</p>
                                <p className="text-sm text-emerald-700 mt-1">Nivel {getLevel(scores.cs)}</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                <h3 className="text-amber-900 font-semibold">Burnout</h3>
                                <p className={clsx("text-2xl font-bold mt-2", getColor(scores.bo, 'bo'))}>{scores.bo}</p>
                                <p className="text-sm text-amber-700 mt-1">Nivel {getLevel(scores.bo)}</p>
                            </div>
                            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                                <h3 className="text-rose-900 font-semibold">Estrés Traumático Secundario</h3>
                                <p className={clsx("text-2xl font-bold mt-2", getColor(scores.sts, 'sts'))}>{scores.sts}</p>
                                <p className="text-sm text-rose-700 mt-1">Nivel {getLevel(scores.sts)}</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Interpretación</h3>
                            <ul className="list-disc list-inside text-slate-700 space-y-2">
                                <li><strong>Satisfacción por Compasión:</strong> El placer que deriva de poder hacer bien su trabajo.</li>
                                <li><strong>Burnout:</strong> Sentimientos de desesperanza y dificultades para enfrentar el trabajo o realizarlo eficazmente.</li>
                                <li><strong>Estrés Traumático Secundario:</strong> Sentimientos negativos impulsados por el miedo y el trauma relacionado con el trabajo.</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => { setShowResults(false); setAnswers({}); }}
                            className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                        >
                            <RefreshCw className="mr-2 h-4 w-4" /> Realizar nueva evaluación
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Assessment;
