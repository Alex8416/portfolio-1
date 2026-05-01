export const pocs = [
  {
    id: 1,
    title: 'Automatisierte Rechnungsverarbeitung',
    industry: 'Fachbetriebe',
    category: 'AI-Workflows',
    problem:
      'Ein mittelständischer Elektrobetrieb verarbeitete wöchentlich über 200 Eingangsrechnungen manuell – fehleranfällig, zeitintensiv und nicht skalierbar.',
    before: {
      time: '40 Std/Woche',
      errorRate: '5–10%',
      cost: '2.000 €/Monat',
      details: ['Manuelle Dateneingabe aus Papierdokumenten', 'Keine automatische Validierung', 'Verzögerungen bei Genehmigungen', 'Fehlende Revisionssicherheit'],
    },
    after: {
      time: '4 Std/Woche',
      errorRate: '<1%',
      cost: '400 €/Monat',
      details: ['KI-gestützte OCR-Extraktion', 'Automatische Prüfung gegen ERP-Daten', 'Digitaler Genehmigungsworkflow', 'Vollständiges Audit-Log'],
    },
    savings: [
      { value: '90%', label: 'Zeitersparnis' },
      { value: '75%', label: 'Kostensenkung' },
      { value: '36 Std', label: 'Freigespielt pro Woche' },
    ],
  },
  {
    id: 2,
    title: 'Automatisierte Baustellen-Dokumentation',
    industry: 'Baugewerbe',
    category: 'Custom Applications',
    problem:
      'Ein Bauunternehmen dokumentierte Baufortschritte, Mängel und Abnahmen auf Papier. Dokumente gingen verloren, Projektmanager waren nicht aktuell informiert.',
    before: {
      time: '15 Std/Woche',
      errorRate: 'Hohe Verlustrate',
      cost: '1.200 €/Monat',
      details: ['Papierbasierte Bautagebücher', 'Fotos ohne Metadaten und Zuordnung', 'Verzögerter Informationsfluss', 'Kein zentrales Projektarchiv'],
    },
    after: {
      time: '3 Std/Woche',
      errorRate: '0% Dokumentverlust',
      cost: '200 €/Monat',
      details: ['Mobile App für Vor-Ort-Dokumentation', 'Automatische GPS-Zuordnung', 'Echtzeit-Synchronisation', 'Zentrales digitales Projektarchiv'],
    },
    savings: [
      { value: '80%', label: 'Zeitersparnis' },
      { value: '83%', label: 'Kostensenkung' },
      { value: '0', label: 'Verlorene Dokumente' },
    ],
  },
  {
    id: 3,
    title: 'Intelligente Mitglieder-Verwaltung',
    industry: 'Vereine',
    category: 'Custom Applications',
    problem:
      'Ein Sportverein mit 800 Mitgliedern verwaltete Beiträge, Anmeldungen und Kommunikation in Excel-Tabellen und über manuelle E-Mails.',
    before: {
      time: '20 Std/Woche',
      errorRate: '15% Fehler',
      cost: '800 €/Monat',
      details: ['Excel-basierte Mitgliederverwaltung', 'Manuelle Beitragsüberwachung', 'Individuelle E-Mails für Kommunikation', 'Keine Self-Service-Möglichkeit'],
    },
    after: {
      time: '2 Std/Woche',
      errorRate: '<1% Fehler',
      cost: '100 €/Monat',
      details: ['Digitales Mitgliederportal', 'Automatische SEPA-Lastschriften', 'Automatisierte Newsletter', 'Mitglieder-Self-Service'],
    },
    savings: [
      { value: '90%', label: 'Zeitersparnis' },
      { value: '87%', label: 'Kostensenkung' },
      { value: '800', label: 'Zufriedene Mitglieder' },
    ],
  },
  {
    id: 4,
    title: 'Lieferantenrechnungs-Compliance',
    industry: 'Fachbetriebe',
    category: 'Automatisierungen',
    problem:
      'Ein SHK-Betrieb kämpfte mit der automatischen Prüfung von Lieferantenrechnungen auf Korrektheit, Duplikate und Compliance-Anforderungen.',
    before: {
      time: '8 Std/Woche',
      errorRate: '8% Fehler',
      cost: '600 €/Monat',
      details: ['Manuelle Duplikatprüfung', 'Keine automatische Budgetprüfung', 'Compliance-Lücken bei USt-ID', 'Verzögerte Zahlungsfreigaben'],
    },
    after: {
      time: '1 Std/Woche',
      errorRate: '0.1% Fehler',
      cost: '80 €/Monat',
      details: ['Automatische Duplikaterkennung', 'Echtzeit-Budgetabgleich', 'USt-ID-Validierung via API', 'Regelbasierte Freigabe-Workflows'],
    },
    savings: [
      { value: '87%', label: 'Zeitersparnis' },
      { value: '87%', label: 'Kostensenkung' },
      { value: '100%', label: 'Compliance-Rate' },
    ],
  },
  {
    id: 5,
    title: 'Automatisierte Projektbudgetabstimmung',
    industry: 'Baugewerbe',
    category: 'AI-Workflows',
    problem:
      'Budgetabstimmungen zwischen Projektleitung, Buchhaltung und Controlling dauerten Tage – kritische Abweichungen wurden zu spät erkannt.',
    before: {
      time: '12 Std/Woche',
      errorRate: 'Spät erkannte Abweichungen',
      cost: '1.500 €/Monat',
      details: ['Manuelle Excel-Abstimmungen', 'Kein Echtzeit-Budgetüberblick', 'Informationssilos zwischen Abteilungen', 'Fehlende Frühwarnsysteme'],
    },
    after: {
      time: '1 Std/Woche',
      errorRate: 'Echtzeit-Warnungen',
      cost: '150 €/Monat',
      details: ['Automatischer ERP-Datenabruf', 'Echtzeit-Budget-Dashboard', 'Automatische Abweichungsmeldungen', 'Wöchentliche Management-Reports'],
    },
    savings: [
      { value: '92%', label: 'Zeitersparnis' },
      { value: '90%', label: 'Kostensenkung' },
      { value: 'Echtzeit', label: 'Budgetüberblick' },
    ],
  },
  {
    id: 6,
    title: 'Vereins-Event-Registrierung',
    industry: 'Vereine',
    category: 'Custom Applications',
    problem:
      'Ein Kulturverein organisierte Veranstaltungen manuell: Anmeldungen per E-Mail, Zahlungen per Überweisung, Erinnerungen per Telefon.',
    before: {
      time: '10 Std/Event',
      errorRate: '20% No-Shows',
      cost: '400 €/Event',
      details: ['E-Mail-basierte Anmeldungen', 'Manuelle Zahlungsverfolgung', 'Kein automatisiertes Reminder-System', 'Wartelisten per Tabelle'],
    },
    after: {
      time: '1 Std/Event',
      errorRate: '5% No-Shows',
      cost: '40 €/Event',
      details: ['Online-Anmeldeportal mit Zahlungsintegration', 'Automatische Bestätigungs-E-Mails', 'SMS/E-Mail-Erinnerungen', 'Digitale Warteliste und Check-in'],
    },
    savings: [
      { value: '90%', label: 'Zeitersparnis' },
      { value: '90%', label: 'Kostensenkung' },
      { value: '75%', label: 'Weniger No-Shows' },
    ],
  },
]
