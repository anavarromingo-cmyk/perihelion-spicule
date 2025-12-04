export const proqolQuestions = [
    { id: 1, text: "Estoy contento.", type: "bo", reverse: true },
    { id: 2, text: "Me preocupa más de una persona a la que ayudo.", type: "sts" },
    { id: 3, text: "Me satisface poder ayudar a la gente.", type: "cs" },
    { id: 4, text: "Me siento conectado con los demás.", type: "bo", reverse: true },
    { id: 5, text: "Me sobresalto con sonidos inesperados.", type: "sts" },
    { id: 6, text: "Me siento vigorizado después de trabajar con quienes ayudo.", type: "cs" },
    { id: 7, text: "Me resulta difícil separar mi vida personal de mi vida como ayudante.", type: "sts" },
    { id: 8, text: "No soy tan productivo en el trabajo porque pierdo el sueño por experiencias traumáticas de una persona a la que ayudo.", type: "bo" },
    { id: 9, text: "Creo que puedo haberme visto afectado por el estrés traumático de aquellos a los que ayudo.", type: "sts" },
    { id: 10, text: "Me siento atrapado por mi trabajo como ayudante.", type: "bo" },
    { id: 11, text: "Debido a mi trabajo como ayudante, me he sentido 'al límite' por varias cosas.", type: "sts" },
    { id: 12, text: "Me gusta mi trabajo como ayudante.", type: "cs" },
    { id: 13, text: "Me siento deprimido por las experiencias traumáticas de las personas a las que ayudo.", type: "sts" },
    { id: 14, text: "Me siento como si estuviera experimentando el trauma de alguien a quien he ayudado.", type: "sts" },
    { id: 15, text: "Tengo creencias que me sostienen.", type: "bo", reverse: true },
    { id: 16, text: "Estoy satisfecho de cómo soy capaz de mantenerme al día con las técnicas y protocolos de ayuda.", type: "cs" },
    { id: 17, text: "Soy la persona que siempre quise ser.", type: "bo", reverse: true },
    { id: 18, text: "Mi trabajo me hace sentir satisfecho.", type: "cs" },
    { id: 19, text: "Me siento agotado por mi trabajo como ayudante.", type: "bo" },
    { id: 20, text: "Tengo pensamientos y sentimientos felices sobre aquellos a quienes ayudo y cómo podría ayudarles.", type: "cs" },
    { id: 21, text: "Me siento abrumado porque mi carga de trabajo parece interminable.", type: "bo" },
    { id: 22, text: "Creo que puedo marcar la diferencia a través de mi trabajo.", type: "cs" },
    { id: 23, text: "Evito ciertas actividades o situaciones porque me recuerdan experiencias aterradoras de las personas a las que ayudo.", type: "sts" },
    { id: 24, text: "Estoy orgulloso de lo que puedo hacer para ayudar.", type: "cs" },
    { id: 25, text: "Como resultado de mi ayuda, tengo pensamientos intrusivos y aterradores.", type: "sts" },
    { id: 26, text: "Me siento 'empantanado' por el sistema.", type: "bo" },
    { id: 27, text: "Tengo pensamientos de que soy un 'éxito' como ayudante.", type: "cs" },
    { id: 28, text: "No puedo recordar partes importantes de mi trabajo con víctimas de traumas.", type: "sts" },
    { id: 29, text: "Soy una persona muy cariñosa.", type: "bo", reverse: true },
    { id: 30, text: "Estoy contento de haber elegido este trabajo.", type: "cs" }
];

export const scoreRanges = {
    cs: { low: 22, high: 41, label: "Satisfacción por Compasión" },
    bo: { low: 22, high: 41, label: "Burnout" },
    sts: { low: 22, high: 41, label: "Estrés Traumático Secundario" }
};
