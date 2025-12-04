import React, { useState } from 'react';
import { resources } from '../data/resources';
import { Search, ExternalLink, Download } from 'lucide-react';

const Resources = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredResources = resources.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Centro de Recursos</h1>
                <p className="text-slate-600 text-lg">
                    Material de apoyo, guías clínicas y herramientas para fortalecer tu práctica y bienestar.
                </p>
            </div>

            <div className="relative max-w-xl mx-auto mb-12">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm shadow-sm"
                    placeholder="Buscar recursos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredResources.map((category) => (
                    <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6 border-b border-slate-50 flex items-center space-x-4">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${category.bgColor}`}>
                                <category.icon className={`h-6 w-6 ${category.color}`} />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900">{category.category}</h2>
                        </div>
                        <ul className="divide-y divide-slate-50">
                            {category.items.map((item) => (
                                <li key={item.id} className="group hover:bg-slate-50 transition-colors">
                                    <a href={item.url} className="block p-6 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-slate-700 font-medium group-hover:text-primary-700 transition-colors">
                                                {item.title}
                                            </span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                                {item.type}
                                            </span>
                                        </div>
                                        {item.type === 'PDF' ? (
                                            <Download className="h-4 w-4 text-slate-400 group-hover:text-primary-500" />
                                        ) : (
                                            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-500" />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {filteredResources.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-500">No se encontraron recursos que coincidan con tu búsqueda.</p>
                </div>
            )}
        </div>
    );
};

export default Resources;
