import React, { useState } from 'react';
import { supervisionSteps } from '../data/sevenEyedModel';
import { ChevronRight, ChevronLeft, Save, PlayCircle } from 'lucide-react';

const Supervision = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [notes, setNotes] = useState({});
    const [sessionStarted, setSessionStarted] = useState(false);

    const handleNoteChange = (stepId, value) => {
        setNotes(prev => ({ ...prev, [stepId]: value }));
    };

    const currentStep = supervisionSteps[activeStep];

    const handleNext = () => {
        if (activeStep < supervisionSteps.length - 1) {
            setActiveStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    };

    if (!sessionStarted) {
        return (
            <div className="max-w-2xl mx-auto text-center py-12">
                <div className="bg-indigo-50 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                    <PlayCircle className="h-10 w-10 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Nueva Sesión de Supervisión</h1>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Esta herramienta te guiará a través del Modelo de los Siete Ojos para explorar un caso clínico o una situación de equipo en profundidad.
                </p>
                <button
                    onClick={() => setSessionStarted(true)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                    Comenzar Sesión
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-slate-500">Paso {activeStep + 1} de {supervisionSteps.length}</h2>
                    <div className="text-sm text-slate-400">Progreso: {Math.round(((activeStep + 1) / supervisionSteps.length) * 100)}%</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${((activeStep + 1) / supervisionSteps.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[500px]">
                {/* Left Panel: Guide */}
                <div className="md:w-1/3 bg-slate-50 p-6 border-r border-slate-100">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{currentStep.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm">{currentStep.description}</p>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Preguntas Guía</h4>
                        <ul className="space-y-3">
                            {currentStep.prompts.map((prompt, idx) => (
                                <li key={idx} className="flex items-start text-sm text-slate-700">
                                    <span className="mr-2 text-indigo-500">•</span>
                                    {prompt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Panel: Notes */}
                <div className="md:w-2/3 p-6 flex flex-col">
                    <label htmlFor={`notes-${currentStep.id}`} className="block text-sm font-medium text-slate-700 mb-2">
                        Notas de la sesión
                    </label>
                    <textarea
                        id={`notes-${currentStep.id}`}
                        className="flex-1 w-full p-4 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none text-slate-900"
                        placeholder="Escribe tus reflexiones aquí..."
                        value={notes[currentStep.id] || ''}
                        onChange={(e) => handleNoteChange(currentStep.id, e.target.value)}
                    ></textarea>

                    <div className="mt-6 flex justify-between items-center">
                        <button
                            onClick={handlePrev}
                            disabled={activeStep === 0}
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${activeStep === 0
                                    ? 'text-slate-300 cursor-not-allowed'
                                    : 'text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                        </button>

                        {activeStep === supervisionSteps.length - 1 ? (
                            <button
                                onClick={() => alert('Sesión guardada (simulación)')}
                                className="flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                <Save className="mr-2 h-4 w-4" /> Finalizar
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supervision;
