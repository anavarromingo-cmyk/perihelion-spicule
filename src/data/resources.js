import { BookOpen, FileText, Phone, Globe } from 'lucide-react';

export const resources = [
    {
        id: 1,
        category: "Organizaciones Oficiales",
        icon: Globe,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        items: [
            { id: 101, title: "Consejo General de la Psicología de España (COP)", url: "https://www.cop.es", type: "Web" },
            { id: 102, title: "Sociedad Española de Cuidados Paliativos (SECPAL)", url: "https://www.secpal.org", type: "Web" },
            { id: 103, title: "Pedpal - Cuidados Paliativos Pediátricos", url: "https://www.pedpal.es", type: "Web" }
        ]
    },
    {
        id: 2,
        category: "Guías y Documentos",
        icon: FileText,
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
        items: [
            { id: 201, title: "Guía de Cuidados Paliativos Pediátricos (Ministerio de Sanidad)", url: "https://www.sanidad.gob.es/organizacion/sns/planCalidadSNS/pdf/Cuidados_paliativos_pediatricos.pdf", type: "PDF" },
            { id: 202, title: "Manejo del Duelo (SECPAL)", url: "https://www.secpal.org/biblioteca/guias-y-manuales/", type: "Web" }
        ]
    },
    {
        id: 3,
        category: "Artículos de Interés",
        icon: BookOpen,
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        items: [
            { id: 301, title: "Fatiga por Compasión en Profesionales", url: "https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1130-52742017000100006", type: "Artículo" },
            { id: 302, title: "Autocuidado en Cuidados Paliativos", url: "https://medicina-paliativa.com", type: "Web" }
        ]
    },
    {
        id: 4,
        category: "Contacto y Apoyo",
        icon: Phone,
        color: "text-rose-600",
        bgColor: "bg-rose-100",
        items: [
            { id: 401, title: "Línea de Ayuda al Profesional (COP)", url: "https://www.cop.es", type: "Contacto" }
        ]
    }
];
