import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ClipboardCheck, Users, BookOpen, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Evaluación', href: '/assessment', icon: ClipboardCheck },
        { name: 'Supervisión', href: '/supervision', icon: Users },
        { name: 'Recursos', href: '/resources', icon: BookOpen },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar for Desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-slate-200">
                <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-600">
                        <h1 className="text-white text-xl font-bold tracking-tight">Cuidar a los que Cuidan</h1>
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={clsx(
                                        isActive
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors'
                                    )}
                                >
                                    <item.icon
                                        className={clsx(
                                            isActive ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-500',
                                            'mr-3 flex-shrink-0 h-6 w-6 transition-colors'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-primary-600 h-16 flex items-center justify-between px-4 shadow-md">
                <h1 className="text-white text-lg font-bold">Cuidar a los que Cuidan</h1>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-20 bg-slate-800 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl p-4" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-primary-600">Menú</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500"><X size={24} /></button>
                        </div>
                        <nav className="space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={clsx(
                                        location.pathname === item.href ? 'bg-primary-50 text-primary-700' : 'text-slate-600',
                                        'flex items-center px-3 py-3 rounded-md text-base font-medium'
                                    )}
                                >
                                    <item.icon className="mr-3 h-6 w-6" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:pl-64 transition-all duration-300">
                <main className="flex-1 py-6 px-4 sm:px-6 md:py-8 md:px-8 mt-16 md:mt-0">
                    <Outlet />
                </main>

                <footer className="bg-white border-t border-slate-200 py-6 mt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-slate-500 text-sm">
                            &copy; 2025 Alvaro Navarro. Licencia Creative Commons Atribución-NoComercial (CC BY-NC).
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
