import { BookOpen, FileText, Phone, Globe } from 'lucide-react';

export const resources = [
    {
        id: 1,
        category: "Guías Clínicas",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        items: [
            { id: 101, title: "Guía de Cuidados Paliativos Pediátricos (Ministerio de Sanidad)", url: "#", type: "PDF" },
            { id: 102, title: "Manejo del Duelo en Profesionales de la Salud", url: "#", type: "PDF" },
            { id: 103, title: "Protocolo de Sedación Paliativa", url: "#", type: "PDF" }
        ]
    },
    {
        id: 2,
        category: "Artículos Académicos",
        icon: BookOpen,
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
        items: [
            { id: 201, title: "Fatiga por Compasión en Unidades de Cuidados Intensivos Pediátricos", url: "#", type: "Link" },
            { id: 202, title: "El Impacto del Trabajo en Cuidados Paliativos", url: "#", type: "Link" },
            { id: 203, title: "Estrategias de Autocuidado para Equipos Médicos", url: "#", type: "Link" }
        ]
    },
    {
        id: 3,
        category: "Apoyo y Contacto",
        icon: Phone,
        color: "text-rose-600",
        bgColor: "bg-rose-100",
        items: [
            { id: 301, title: "Línea de Ayuda al Profesional (24/7)", url: "#", type: "Teléfono" },
            { id: 302, title: "Asociación Española de Cuidados Paliativos (SECPAL)", url: "#", type: "Web" },
            { id: 303, title: "Grupo de Apoyo Mutuo Online", url: "#", type: "Comunidad" }
        ]
    },
    {
        id: 4,
        category: "Herramientas Web",
        icon: Globe,
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        items: [
            { id: 401, title: "Calculadora de Opioides", url: "#", type: "Tool" },
            { id: 402, title: "Escalas de Evaluación del Dolor Pediátrico", url: "#", type: "Tool" }
        ]
    }
];
