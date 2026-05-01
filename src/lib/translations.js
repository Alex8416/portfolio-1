export const t = {
  nav: {
    home: 'Startseite',
    solutions: 'Lösungen',
    poc: 'Referenzprojekte',
    about: 'Über uns',
    contact: 'Kontakt',
    solutionsItems: [
      { label: 'Dokumentenmanagement', href: '/solutions/dms' },
      { label: 'AI-Workflows', href: '/solutions/workflows' },
      { label: 'Automatisierungen', href: '/solutions/automations' },
      { label: 'Custom Applications', href: '/solutions/customApps' },
      { label: 'AI Agents & Chatbots', href: '/solutions/chatbots' },
    ],
  },

  hero: {
    badge: 'Intelligente Lösungen für Ihr Unternehmen',
    headline: 'Die Zukunft der Geschäftsprozesse',
    subline:
      'VAMIT transformiert manuelle Abläufe in intelligente, automatisierte Systeme. Von Dokumentenmanagement bis hin zu KI-gestützten Workflows – wir machen Ihr Unternehmen effizienter, fehlerfreier und zukunftssicher.',
    cta: 'Kostenlose Prozessanalyse anfordern',
    ctaSecondary: 'Referenzprojekte ansehen',
  },

  services: {
    headline: 'Unsere Kernleistungen',
    subline: 'Fünf Säulen für Ihre digitale Transformation',
    items: [
      {
        icon: '🗂️',
        title: 'Dokumentenmanagement (DMS)',
        desc: 'Sicheres, zentralisiertes und DSGVO-konformes digitales Archivierungssystem für alle Ihre Unternehmensdokumente.',
        href: '/solutions/dms',
      },
      {
        icon: '🤖',
        title: 'AI-Workflows',
        desc: 'Intelligente Datenextraktion und prädiktive Analysen – Ihre Prozesse lernen und optimieren sich selbst.',
        href: '/solutions/workflows',
      },
      {
        icon: '⚙️',
        title: 'Automatisierungen',
        desc: 'RPA und API-Integrationen für nahtlose Prozesse zwischen all Ihren bestehenden Systemen.',
        href: '/solutions/automations',
      },
      {
        icon: '💻',
        title: 'Custom Applications',
        desc: 'Maßgeschneiderte Web- und Unternehmensanwendungen, die exakt auf Ihre Branche und Abläufe zugeschnitten sind.',
        href: '/solutions/customApps',
      },
      {
        icon: '💬',
        title: 'AI Agents & Chatbots',
        desc: 'Mehrsprachige Konversationsschnittstellen für 24/7-Support und automatisierte Kundeninteraktion.',
        href: '/solutions/chatbots',
      },
    ],
  },

  featuredPoc: {
    badge: 'Referenzprojekt',
    headline: 'Automatisierte Rechnungsverarbeitung',
    industry: 'Fachbetriebe',
    before: {
      label: 'Vorher',
      metrics: [
        { value: '40 Std/Woche', label: 'Manuelle Bearbeitung' },
        { value: '5–10%', label: 'Fehlerquote' },
        { value: '2.000 €/Monat', label: 'Personalkosten' },
      ],
    },
    after: {
      label: 'Nachher',
      metrics: [
        { value: '4 Std/Woche', label: 'Bearbeitung' },
        { value: '<1%', label: 'Fehlerquote' },
        { value: '400 €/Monat', label: 'Personalkosten' },
      ],
    },
    highlights: [
      { value: '90%', label: 'Zeitersparnis' },
      { value: '75%', label: 'Kostensenkung' },
    ],
    cta: 'Alle Referenzprojekte ansehen',
  },

  solutions: {
    dms: {
      title: 'Dokumentenmanagement (DMS)',
      subtitle: 'Sicher. Zentral. DSGVO-konform.',
      description:
        'Schluss mit dem Papierchaos. VAMIT implementiert ein intelligentes DMS, das alle Ihre Dokumente strukturiert, durchsuchbar und sicher zugänglich macht.',
      problems: [
        'Dokumente gehen verloren oder sind schwer auffindbar',
        'DSGVO-konforme Archivierung nicht gewährleistet',
        'Mehrere Mitarbeiter arbeiten an veralteten Versionen',
        'Zugriffskontrolle fehlt oder ist nicht nachvollziehbar',
      ],
      features: [
        'Zentrale digitale Ablage mit Volltextsuche',
        'Automatische Versionskontrolle und Änderungsprotokoll',
        'Granulare Zugriffsrechte nach Rollen',
        'DSGVO-konforme Verschlüsselung und Löschfristen',
        'Nahtlose Integration in bestehende Tools (ERP, E-Mail)',
        'Mobile Verfügbarkeit – jederzeit, überall',
      ],
      cta: 'Kostenloses Gespräch buchen',
    },
    workflows: {
      title: 'AI-Workflows',
      subtitle: 'Intelligent. Lernend. Vorausschauend.',
      description:
        'Unsere KI-gestützten Workflows extrahieren automatisch Daten aus Dokumenten, erkennen Muster und treffen auf Basis von Daten bessere Entscheidungen für Ihr Unternehmen.',
      problems: [
        'Manuelle Dateneingabe kostet wertvolle Arbeitszeit',
        'Fehler durch manuelle Übertragung zwischen Systemen',
        'Fehlende Transparenz über Prozessstatus',
        'Keine datenbasierte Entscheidungsgrundlage',
      ],
      features: [
        'OCR & KI-gestützte Datenextraktion aus PDFs und Bildern',
        'Automatische Klassifizierung und Weiterleitung von Dokumenten',
        'Prädiktive Analysen für Planung und Prognosen',
        'Echtzeit-Dashboards und Berichte',
        'Selbstlernende Prozessoptimierung',
        'Anomalieerkennung und Frühwarnsystem',
      ],
      cta: 'Kostenloses Gespräch buchen',
    },
    automations: {
      title: 'Automatisierungen',
      subtitle: 'Nahtlos. Zuverlässig. Skalierbar.',
      description:
        'Von der Rechnungsverarbeitung bis zur Bestandsverwaltung: VAMIT automatisiert Ihre wiederkehrenden Prozesse mit RPA und API-Integrationen, damit Ihr Team sich auf das Wesentliche konzentrieren kann.',
      problems: [
        'Wiederkehrende, manuelle Aufgaben binden qualifiziertes Personal',
        'Daten müssen manuell zwischen verschiedenen Systemen übertragen werden',
        'Inkonsistente Prozessausführung führt zu Fehlern',
        'Keine skalierbare Lösung für wachsende Auftragsvolumen',
      ],
      features: [
        'Robotic Process Automation (RPA) für regelbasierte Abläufe',
        'API-Integrationen mit ERP, CRM und Branchensoftware',
        'Automatisierte E-Mail- und Dokumentenverarbeitung',
        'Workflow-Trigger basierend auf Ereignissen und Zeitplänen',
        'Fehlertolerante Prozesse mit automatischer Fehlerbehandlung',
        'Vollständiges Audit-Log für Compliance und Nachvollziehbarkeit',
      ],
      cta: 'Kostenloses Gespräch buchen',
    },
    customApps: {
      title: 'Custom Applications',
      subtitle: 'Maßgeschneidert. Modern. Wartungsarm.',
      description:
        'Branchensoftware passt nicht zu Ihren Prozessen? Wir entwickeln genau das, was Ihr Unternehmen braucht – als Web-App, Mobile-App oder internes Tool.',
      problems: [
        'Standardsoftware deckt Ihre spezifischen Anforderungen nicht ab',
        'Mehrere Insellösungen führen zu Datenverlust und Ineffizienz',
        'Veraltete Legacy-Systeme bremsen das Wachstum',
        'Keine mobile Verfügbarkeit für Außendienstmitarbeiter',
      ],
      features: [
        'Individuelle Web-Applikationen mit modernem Tech-Stack',
        'Mobile-first Design für iOS und Android',
        'Nahtlose Integration in bestehende Systeme',
        'Skalierbare Cloud-Architektur (AWS, Azure, GCP)',
        'Agile Entwicklung mit kurzen Release-Zyklen',
        'Langfristiger Support und Weiterentwicklung',
      ],
      cta: 'Kostenloses Gespräch buchen',
    },
    chatbots: {
      title: 'AI Agents & Chatbots',
      subtitle: 'Immer verfügbar. Mehrsprachig. Intelligent.',
      description:
        'Unsere KI-gestützten Chatbots und Agenten beantworten Kundenanfragen rund um die Uhr, führen komplexe Aufgaben aus und integrieren sich nahtlos in Ihre bestehenden Kommunikationskanäle.',
      problems: [
        'Kundenanfragen häufen sich und können nicht zeitnah beantwortet werden',
        'Routineanfragen binden wertvolle Mitarbeiterzeit',
        'Kein Support außerhalb der Geschäftszeiten',
        'Sprachbarrieren bei internationalen Kunden',
      ],
      features: [
        'Mehrsprachige Konversation (Deutsch, Englisch, und mehr)',
        'Integration in Website, WhatsApp, Telegram, E-Mail',
        'Übergabe an menschliche Mitarbeiter bei komplexen Anfragen',
        'Lernende KI, die sich an Ihren Wissensstand anpasst',
        'Automatisierte Lead-Qualifizierung und Terminbuchung',
        'Vollständige Gesprächshistorie und Analysen',
      ],
      cta: 'Kostenloses Gespräch buchen',
    },
  },

  about: {
    headline: 'Über VAMIT',
    vision: 'Die Arbeitswelt durch intelligente Automatisierung transformieren',
    description:
      'VAMIT ist ein Technologieunternehmen spezialisiert auf intelligente Automatisierung und digitale Transformation für Fachbetriebe, Baugewerbe und Vereine. Wir kombinieren tiefes technisches Know-how mit einem klaren Verständnis für die Herausforderungen mittelständischer Unternehmen.',
    mission:
      'Unsere Mission ist es, innovative Technologien zugänglich zu machen – nicht nur für Großkonzerne, sondern für jeden Betrieb, der wachsen und effizienter werden möchte.',
    expertiseHeadline: 'Unsere Expertise',
    expertise: [
      { icon: '🧠', title: 'AI & Machine Learning', desc: 'Entwicklung intelligenter Modelle für Datenextraktion, Klassifizierung und prädiktive Analysen' },
      { icon: '🗂️', title: 'Dokumentenmanagement', desc: 'Implementierung von DMS-Systemen mit DSGVO-konformer Archivierung und Volltextsuche' },
      { icon: '🔗', title: 'Enterprise Integration', desc: 'Nahtlose Verbindung von ERP, CRM, APIs und Legacy-Systemen durch modernste Integrationslösungen' },
      { icon: '💻', title: 'Full-Stack Development', desc: 'Entwicklung skalierbarer Web- und Mobile-Applikationen mit modernen Technologien' },
      { icon: '📊', title: 'Business Process Optimization', desc: 'Analyse und Neugestaltung von Geschäftsprozessen für maximale Effizienz und Transparenz' },
      { icon: '☁️', title: 'Cloud Architecture', desc: 'Design und Implementierung sicherer, skalierbarer Cloud-Infrastrukturen auf AWS, Azure und GCP' },
    ],
    industries: {
      headline: 'Unsere Kernbranchen',
      items: [
        { icon: '🔧', title: 'Fachbetriebe', desc: 'Handwerk, Elektro, SHK, Gebäudeservice' },
        { icon: '🏗️', title: 'Baugewerbe', desc: 'Bauunternehmen, GU, Subunternehmer, Planung' },
        { icon: '🤝', title: 'Vereine & Verbände', desc: 'Sport, Kultur, Berufsverbände, NGOs' },
      ],
    },
    cta: 'Termin buchen',
  },

  contact: {
    headline: 'Kontakt aufnehmen',
    subline: 'Kostenlose Erstberatung – wir analysieren Ihre Prozesse und zeigen Ihnen, wo das größte Potenzial liegt.',
    steps: ['Unternehmen', 'Branche', 'Nachricht'],
    fields: {
      company: 'Unternehmen',
      email: 'E-Mail-Adresse',
      size: 'Unternehmensgröße',
      sizeOptions: ['1–10 Mitarbeiter', '11–50 Mitarbeiter', '51–200 Mitarbeiter', '200+ Mitarbeiter'],
      industry: 'Branche',
      industryOptions: ['Fachbetriebe / Handwerk', 'Baugewerbe / Bauwirtschaft', 'Vereine / Verbände', 'Sonstige'],
      message: 'Ihre Nachricht',
      preference: 'Bevorzugte Kontaktart',
      preferenceOptions: ['E-Mail', 'Telefon', 'Video-Call'],
    },
    submit: 'Anfrage absenden',
    next: 'Weiter',
    back: 'Zurück',
    success: 'Vielen Dank! Wir werden Sie bald kontaktieren.',
    successSub: 'Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.',
    info: {
      email: 'info@vamit.de',
      phone: '+49 (0) 123 456 789',
      location: 'Deutschland',
    },
  },

  footer: {
    tagline: 'Intelligente Automatisierung für den Mittelstand.',
    solutions: 'Lösungen',
    company: 'Unternehmen',
    companyLinks: [
      { label: 'Über uns', href: '/about' },
      { label: 'Referenzprojekte', href: '/poc' },
      { label: 'Kontakt', href: '/contact' },
    ],
    legal: '© 2026 VAMIT. Alle Rechte vorbehalten.',
  },
}
