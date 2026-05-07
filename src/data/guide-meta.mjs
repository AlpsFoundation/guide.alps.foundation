export const guideMeta = {
  en: {
    title: "How to Start a Psychedelic Student Association at Your University",
    description:
      "A practical playbook for students ready to bring evidence-based psychedelic education and harm reduction to their campus, and to plug into the growing European network.",
    ogImageAlt: "How to Start a Psychedelic Student Association at Your University — guide.alps.foundation",
  },
  fr: {
    title: "Comment créer une association étudiante psychédélique dans votre université",
    description:
      "Un guide pratique pour les étudiants prêts à apporter une éducation psychédélique fondée sur les preuves et la réduction des risques sur leur campus, tout en rejoignant le réseau européen en développement.",
    ogImageAlt: "Comment créer une association étudiante psychédélique dans votre université — guide.alps.foundation",
  },
  de: {
    title: "Wie man eine psychedelische Studierendenvereinigung an der Universität gründet",
    description:
      "Ein praktischer Leitfaden für Studierende, die evidenzbasierte psychedelische Bildung und Schadensminderung an ihren Campus bringen und sich mit dem wachsenden europäischen Netzwerk verbinden möchten.",
    ogImageAlt: "Wie man eine psychedelische Studierendenvereinigung an der Universität gründet — guide.alps.foundation",
  },
  it: {
    title: "Come creare un'associazione studentesca psichedelica nella tua università",
    description:
      "Una guida pratica per studenti pronti a portare educazione psichedelica basata sulle evidenze e riduzione del rischio nel proprio campus, collegandosi alla rete europea in crescita.",
    ogImageAlt: "Come creare un'associazione studentesca psichedelica nella tua università — guide.alps.foundation",
  },
  es: {
    title: "Cómo crear una asociación estudiantil psicodélica en tu universidad",
    description:
      "Una guía práctica para estudiantes que quieren llevar educación psicodélica basada en evidencia y reducción de riesgos a su campus, conectándose con la red europea en crecimiento.",
    ogImageAlt: "Cómo crear una asociación estudiantil psicodélica en tu universidad — guide.alps.foundation",
  },
  pt: {
    title: "Como criar uma associação estudantil psicadélica na vossa universidade",
    description:
      "Um guia prático para estudantes que querem levar educação psicadélica baseada em evidência e redução de riscos ao vosso campus, ligando-se à rede europeia em crescimento.",
    ogImageAlt: "Como criar uma associação estudantil psicadélica na vossa universidade — guide.alps.foundation",
  },
};

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const getOgImagePath = (locale) => (locale === "en" ? "/og-image.jpg" : `/og-image-${locale}.jpg`);
