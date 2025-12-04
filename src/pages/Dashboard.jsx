import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido, Supervisor</h1>
                <p className="text-slate-600 text-lg">
                    Este espacio está diseñado para apoyarte en el cuidado de tu equipo de cuidados paliativos pediátricos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Assessment Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="h-6 w-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Evaluación de Bienestar</h3>
                    <p className="text-slate-600 mb-4">
                        Mide la fatiga por compasión y el burnout utilizando la escala ProQOL.
                    </p>
                    <Link to="/assessment" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        Iniciar evaluación <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                {/* Supervision Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Asistente de Supervisión</h3>
                    <p className="text-slate-600 mb-4">
                        Guía interactiva basada en el modelo de los Siete Ojos para tus sesiones.
                    </p>
                    <Link to="/supervision" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        Nueva sesión <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                {/* Team Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Gestión de Equipos</h3>
                    <p className="text-slate-600 mb-4">
                        Recursos y estrategias para fortalecer la cohesión y resolver conflictos.
                    </p>
                    <Link to="/resources" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        Ver recursos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Consejo del día</h2>
                <blockquote className="text-primary-800 italic text-lg border-l-4 border-primary-400 pl-4">
                    "El autocuidado no es un lujo, es una responsabilidad ética para quienes cuidan de otros."
                </blockquote>
            </div>
        </div>
    );
};

export default Dashboard;
