// Diccionario de enfermedades emocionales — datos
// Cada entrada: n=nombre, c=categoría, k=palabras clave, e=emoción central,
// r=qué podría estar reprimido, v=qué puede estar pasando en la vida,
// q=preguntas de reflexión, a=aviso opcional (condiciones médicas serias)
//
// Contenido redactado de forma original, como lectura simbólica/reflexiva
// inspirada en las tradiciones de la medicina psicosomática, la metafísica del
// cuerpo y la biodescodificación. No es evidencia médica ni diagnóstico.

const AVISO_SERIO =
  "Es una condición médica que requiere seguimiento profesional. Ninguna emoción la causa por sí sola: la lectura de abajo es una invitación a mirarte, no una explicación de por qué apareció.";

const ENTRIES = [
  // ───────── CABEZA Y SISTEMA NERVIOSO
  {
    n: "Dolor de cabeza (cefalea tensional)",
    c: "Cabeza y sistema nervioso",
    k: "cefalea jaqueca cabeza presión estrés tensión",
    e: "Exigencia y sobrepensamiento.",
    r: "Enojo contenido, la necesidad de tenerlo todo bajo control y opiniones propias que no se dicen en voz alta.",
    v: "Épocas de mucha presión, decisiones sin resolver, un «deber ser» muy alto y poco descanso mental.",
    q: [
      "¿Qué estoy intentando resolver solo con la cabeza?",
      "¿Qué me exijo que nadie más me está exigiendo?",
      "¿Qué decisión estoy postergando?"
    ]
  },
  {
    n: "Migraña",
    c: "Cabeza y sistema nervioso",
    k: "jaqueca dolor de cabeza fuerte aura luz",
    e: "Perfeccionismo y tensión acumulada.",
    r: "Rabia por cargar más de lo que corresponde, necesidades propias que se dejan siempre para después.",
    v: "Períodos de alta responsabilidad seguidos de un freno brusco; vínculos donde se cede constantemente para evitar conflicto.",
    q: [
      "¿Cuándo fue la última vez que descansé sin sentir culpa?",
      "¿Qué necesito pedir y no estoy pidiendo?",
      "¿Qué estándar me impuse que ya no me sirve?"
    ]
  },
  {
    n: "Insomnio",
    c: "Cabeza y sistema nervioso",
    k: "dormir sueño desvelo no puedo dormir noche",
    e: "Alerta permanente y falta de confianza en soltar.",
    r: "Preocupaciones que no se nombran, duelos sin hacer, miedo a bajar la guardia.",
    v: "Cambios grandes, incertidumbre económica o afectiva, tareas pendientes que la mente no deja cerrar.",
    q: [
      "¿Qué se me aparece justo cuando apoyo la cabeza en la almohada?",
      "¿Qué siento que, si dejo de vigilar, se va a descontrolar?",
      "¿Qué conversación o decisión sigue abierta?"
    ],
    a: "Si el insomnio dura semanas, conviene consultar con un profesional de la salud."
  },
  {
    n: "Mareos y vértigo",
    c: "Cabeza y sistema nervioso",
    k: "vértigo mareo inestabilidad equilibrio desorientación",
    e: "Pérdida de rumbo y de piso.",
    r: "Miedo a elegir un camino, dispersión, la sensación de que todo se mueve y nada es firme.",
    v: "Mudanzas, cambios laborales, crisis de sentido, muchos caminos abiertos a la vez.",
    q: [
      "¿Dónde siento que perdí mi centro?",
      "¿Qué elección estoy evitando hacer?",
      "¿Qué me daría sensación de suelo firme hoy?"
    ],
    a: "Los mareos recurrentes requieren evaluación médica antes de cualquier otra lectura."
  },
  {
    n: "Ataques de pánico",
    c: "Cabeza y sistema nervioso",
    k: "pánico ansiedad angustia miedo taquicardia ahogo",
    e: "Un miedo al que no se le dio lugar.",
    r: "Miedos esquivados durante años, emociones intensas que se tapan con actividad constante.",
    v: "Sobrecarga, pérdidas, cambios vividos como amenaza, mucho tiempo sosteniendo la fachada de «estoy bien».",
    q: [
      "¿Qué miedo vengo evitando mirar de frente?",
      "¿Qué emoción se activa justo antes de la crisis?",
      "¿A quién podría contarle esto sin tener que aparentar fortaleza?"
    ],
    a: "El pánico se trata muy bien con apoyo psicológico y/o médico. Pedir ayuda es parte del camino."
  },
  {
    n: "Agotamiento y fatiga crónica",
    c: "Cabeza y sistema nervioso",
    k: "cansancio burnout fatiga sin energía agotado estrés laboral",
    e: "Dar de más sin recibir.",
    r: "Tristeza y rabia por una entrega que no se reconoce; la dificultad de pedir ayuda y de decir basta.",
    v: "Cuidar a otros, un trabajo sin sentido, vínculos desiguales, años de «aguantar».",
    q: [
      "¿Dónde doy más de lo que tengo?",
      "¿Qué me da energía y qué me la quita, sin filtro?",
      "¿Qué le diría un amigo que me quiere si me viera así?"
    ],
    a: "El cansancio persistente tiene muchas causas físicas posibles (anemia, tiroides, déficits). Descartarlas es el primer paso."
  },

  // ───────── GARGANTA Y RESPIRACIÓN
  {
    n: "Dolor de garganta y afonía",
    c: "Garganta y respiración",
    k: "garganta faringitis amigdalitis voz ronquera sin voz",
    e: "Lo no dicho.",
    r: "Cosas que se quieren expresar y se callan, enojos que se tragan, miedo a la reacción del otro.",
    v: "Conversaciones pendientes, ambientes donde no se puede opinar, roles que piden complacer.",
    q: [
      "¿Qué quiero decir y no me animo?",
      "¿A quién le estoy diciendo que sí cuando siento que no?",
      "¿Qué pasaría si dijera mi verdad con calma?"
    ]
  },
  {
    n: "Resfriado y gripe",
    c: "Garganta y respiración",
    k: "gripe resfrío catarro mocos congestión",
    e: "Saturación y necesidad de pausa.",
    r: "Cansancio emocional acumulado, una tristeza pequeña sin atender, exceso de estímulos.",
    v: "Cambios de etapa, demasiados compromisos, ninguna pausa en la agenda.",
    q: [
      "¿Qué estoy sosteniendo que me cuesta más de lo que admito?",
      "¿Qué pausa me estoy negando?",
      "¿Qué llanto pendiente tengo?"
    ]
  },
  {
    n: "Sinusitis y congestión nasal",
    c: "Garganta y respiración",
    k: "sinusitis nariz tapada rinitis mocos sinus",
    e: "Fastidio con alguien cercano o falta de espacio propio.",
    r: "Llanto contenido, irritación que se calla por mantener la armonía.",
    v: "Convivencias que asfixian, personas que invaden, exigencias del entorno.",
    q: [
      "¿Quién o qué me irrita y no lo digo?",
      "¿Dónde me falta aire, espacio, silencio?",
      "¿Qué límite necesito poner?"
    ]
  },
  {
    n: "Asma",
    c: "Garganta y respiración",
    k: "asma ahogo falta de aire broncoespasmo respirar sofocación",
    e: "Sensación de sofoco y dificultad para tomar espacio.",
    r: "Llanto no expresado, miedo a perder vínculos, hipercontrol del entorno para sentirse seguro.",
    v: "Ambientes sobreprotectores o tensos, separaciones, historias donde expresarse no era seguro.",
    q: [
      "¿Dónde siento que no tengo aire propio?",
      "¿Qué emoción se me queda atrapada en el pecho?",
      "¿Qué cambiaría si me permitiera pedir lo que necesito?"
    ],
    a: "El asma requiere tratamiento médico continuo. Esta lectura no lo reemplaza de ningún modo."
  },
  {
    n: "Bronquitis y tos persistente",
    c: "Garganta y respiración",
    k: "tos bronquios bronquitis pecho flema",
    e: "Conflicto y tensión en el entorno cercano.",
    r: "Discusiones que se evitan, ganas de «sacar» algo que no sale con palabras.",
    v: "Hogares o equipos de trabajo con tensión sostenida, enojos que se cocinan a fuego lento.",
    q: [
      "¿Qué quiero sacar de adentro?",
      "¿Qué conflicto estoy esquivando?",
      "¿Dónde podría hablar sin ser juzgado?"
    ]
  },

  // ───────── CORAZÓN Y CIRCULACIÓN
  {
    n: "Hipertensión",
    c: "Corazón y circulación",
    k: "presión alta tensión arterial presión sanguínea",
    e: "Presión sostenida y contención.",
    r: "Rabia o resentimiento que se guarda, sobreexigencia, dificultad para pedir.",
    v: "Roles con mucha responsabilidad, personas que «aguantan todo» y no se permiten delegar.",
    q: [
      "¿Qué estoy aguantando por no incomodar?",
      "¿Qué parte de la presión me la pongo yo?",
      "¿Qué podría soltar o delegar esta semana?"
    ],
    a: "La presión alta necesita control médico regular."
  },
  {
    n: "Palpitaciones y taquicardia",
    c: "Corazón y circulación",
    k: "corazón latidos palpitaciones taquicardia arritmia",
    e: "Anticipación y alarma.",
    r: "Miedo o emociones intensas sin cauce, deseos que no se permite sentir.",
    v: "Decisiones afectivas importantes, expectativas altas, cambios que activan la alerta.",
    q: [
      "¿Qué estoy anticipando que todavía no pasó?",
      "¿Qué deseo mío estoy callando?",
      "¿Qué necesita mi corazón en este momento?"
    ],
    a: "Ante palpitaciones nuevas o persistentes, consultar a un médico/cardiólogo es lo primero."
  },
  {
    n: "Manos y pies fríos (mala circulación)",
    c: "Corazón y circulación",
    k: "circulación frío extremidades manos frías pies fríos",
    e: "Retraimiento y cautela.",
    r: "Miedo a mostrarse, dificultad para recibir o dar afecto, poca confianza en el flujo de la vida.",
    v: "Períodos de aislamiento, desconfianza después de una desilusión.",
    q: [
      "¿Dónde me retraigo para protegerme?",
      "¿A quién me costaría abrirme hoy?",
      "¿Qué calor necesito?"
    ]
  },
  {
    n: "Várices",
    c: "Corazón y circulación",
    k: "várices piernas pesadas venas circulación",
    e: "Sensación de peso y de estar estancado.",
    r: "Desmotivación, quedarse en situaciones que no se eligieron, cargar con deberes ajenos.",
    v: "Trabajos o roles vividos como carga, mucho estar de pie sosteniendo.",
    q: [
      "¿Qué siento como un peso que no es mío?",
      "¿Dónde me quedé por obligación?",
      "¿Qué camino me daría ligereza?"
    ]
  },

  // ───────── DIGESTIVO
  {
    n: "Gastritis",
    c: "Digestivo",
    k: "estómago gastritis dolor de estómago ardor úlcera",
    e: "Lo que no se puede «digerir».",
    r: "Enojo tragado, preocupación constante, disgustos que no se resolvieron.",
    v: "Conflictos laborales o familiares, tensión sostenida, comer apurado y con preocupación.",
    q: [
      "¿Qué situación no logro digerir?",
      "¿Qué disgusto me tragué en silencio?",
      "¿Cómo se siente mi estómago cuando pienso en esa persona o tema?"
    ]
  },
  {
    n: "Acidez y reflujo",
    c: "Digestivo",
    k: "reflujo acidez agruras ardor pecho",
    e: "Irritación que sube.",
    r: "Impaciencia, ganas de decir algo que se queda en el pecho, rabia por no poder frenar el ritmo.",
    v: "Vida acelerada, comidas tensas, discusiones sin cerrar.",
    q: [
      "¿Qué se me sube y no sale?",
      "¿Dónde estoy yendo más rápido de lo que quiero?",
      "¿Qué me irrita y no estoy nombrando?"
    ]
  },
  {
    n: "Colon irritable",
    c: "Digestivo",
    k: "colon intestino irritable colitis gases distensión panza",
    e: "Inseguridad y anticipación.",
    r: "Miedo al futuro, al juicio de otros, a no poder controlar lo que viene.",
    v: "Transiciones, exámenes, relaciones inciertas, perfeccionismo.",
    q: [
      "¿Qué estoy tratando de controlar?",
      "¿Qué me da miedo que salga mal?",
      "¿Qué haría si confiara un poco más?"
    ]
  },
  {
    n: "Estreñimiento",
    c: "Digestivo",
    k: "constipación estreñido no evacuar retención",
    e: "Retención y dificultad para soltar.",
    r: "Apego a lo viejo (personas, situaciones, rencores), control sobre recursos o afectos.",
    v: "Duelos sin hacer, mudanzas, finales de ciclo que cuesta aceptar.",
    q: [
      "¿Qué me cuesta soltar?",
      "¿Qué ciclo ya terminó y todavía no lo cerré?",
      "¿Qué me da miedo perder si dejo ir?"
    ]
  },
  {
    n: "Diarrea",
    c: "Digestivo",
    k: "diarrea evacuación urgencia nervios intestino suelto",
    e: "Rechazo rápido y miedo.",
    r: "Un miedo agudo, ganas de expulsar algo ya, nerviosismo que no se nombra.",
    v: "Situaciones puntuales de presión: exámenes, entrevistas, enfrentamientos.",
    q: [
      "¿Qué quiero sacarme de encima urgentemente?",
      "¿Qué me da miedo enfrentar?",
      "¿Qué me tranquilizaría ahora?"
    ]
  },
  {
    n: "Náuseas",
    c: "Digestivo",
    k: "náusea ganas de vomitar asco rechazo vómito",
    e: "Rechazo a algo que se está viviendo.",
    r: "Asco o rechazo hacia una situación o persona, dificultad para decir que no.",
    v: "Obligaciones que no se desean, situaciones que no se eligieron.",
    q: [
      "¿Qué estoy aceptando que mi cuerpo rechaza?",
      "¿Qué «no» no me animo a decir?",
      "¿Qué cambiaría si lo dijera?"
    ]
  },
  {
    n: "Cálculos biliares",
    c: "Digestivo",
    k: "vesícula bilis piedras cálculos hígado amargura",
    e: "Amargura y rencor endurecidos.",
    r: "Resentimiento antiguo, juicios, orgullo que impide perdonar.",
    v: "Heridas viejas sin cerrar, culpas, vínculos donde el reproche se acumuló.",
    q: [
      "¿A quién o qué le guardo rencor?",
      "¿Qué herida sigo defendiendo?",
      "¿Qué se abriría si me permitiera soltar la amargura?"
    ]
  },
  {
    n: "Hemorroides",
    c: "Digestivo",
    k: "almorranas hemorroides ano presión",
    e: "Presión por cumplir y asuntos que cuesta soltar.",
    r: "Exigencia, temor a dejar cosas sin terminar, tensión sostenida.",
    v: "Fechas límite, tareas acumuladas, sensación de estar «empujando» todo el tiempo.",
    q: [
      "¿Qué estoy forzando?",
      "¿Qué plazo me estoy imponiendo?",
      "¿Dónde puedo aflojar la presión?"
    ]
  },

  // ───────── PIEL
  {
    n: "Acné",
    c: "Piel",
    k: "granos acné espinillas piel adolescencia",
    e: "Inseguridad y rechazo de uno mismo.",
    r: "Dudas sobre el propio valor, necesidad de aceptación, ganas de alejarse del mundo.",
    v: "Cambios de etapa, comparación con otros, momentos donde mostrarse se siente riesgoso.",
    q: [
      "¿Qué parte de mí no me animo a mostrar?",
      "¿Con qué ojos me miro en el espejo?",
      "¿Qué aprobación estoy buscando?"
    ]
  },
  {
    n: "Eczema y dermatitis",
    c: "Piel",
    k: "eczema dermatitis piel picazón irritación atópica comezón",
    e: "Irritación en el contacto y los límites.",
    r: "Necesidad de contacto no satisfecha, enojo contenido, sensibilidad ante invasiones.",
    v: "Separaciones, relaciones invasivas, cambios que dejan sin protección.",
    q: [
      "¿Dónde me siento invadido o desprotegido?",
      "¿Qué contacto me falta?",
      "¿Qué límite me cuesta poner?"
    ]
  },
  {
    n: "Psoriasis",
    c: "Piel",
    k: "psoriasis piel escamas placas",
    e: "Armadura frente al dolor.",
    r: "Dolores antiguos de rechazo, dificultad para mostrarse vulnerable.",
    v: "Épocas de gran estrés, historias de haberse sentido herido o expuesto.",
    q: [
      "¿De qué me estoy protegiendo?",
      "¿Qué parte de mí quedó herida y no se mostró?",
      "¿Qué sería sentirme a salvo en mi piel?"
    ],
    a: "Es una condición inflamatoria crónica con tratamientos médicos eficaces; esta lectura es solo complementaria."
  },
  {
    n: "Urticaria",
    c: "Piel",
    k: "urticaria ronchas picazón alergia piel",
    e: "Impulso contenido, irritación súbita.",
    r: "Impaciencia, enojo que no sale, miedo a perder el control.",
    v: "Momentos de tensión donde se calla lo que se siente.",
    q: [
      "¿Qué se quiere «salir» de mí?",
      "¿Con quién estoy conteniendo la rabia?",
      "¿Qué impaciencia estoy tapando?"
    ]
  },
  {
    n: "Herpes labial",
    c: "Piel",
    k: "herpes boca labios fuegos",
    e: "Palabras o afectos contenidos.",
    r: "Lo que se quiso decir y no se dijo, vínculos difíciles, tensión previa.",
    v: "Épocas de estrés, discusiones sin resolver, cansancio emocional.",
    q: [
      "¿Qué palabras se me quedaron en la boca?",
      "¿Qué vínculo me tensiona?",
      "¿Qué descanso necesito?"
    ]
  },
  {
    n: "Caída del cabello",
    c: "Piel",
    k: "pelo cabello alopecia calvicie caída",
    e: "Preocupación y sensación de desprotección.",
    r: "Sobrecarga mental, duelo, sentirse sin sostén.",
    v: "Shocks emocionales, épocas de estrés prolongado.",
    q: [
      "¿Qué me preocupa de forma constante?",
      "¿Qué pérdida estoy procesando?",
      "¿En quién puedo apoyarme?"
    ],
    a: "La caída del cabello puede tener causas médicas (tiroides, hierro, hormonas). Conviene descartarlas."
  },

  // ───────── MÚSCULOS Y HUESOS
  {
    n: "Dolor cervical (cuello)",
    c: "Músculos y huesos",
    k: "cuello cervical contractura rigidez tortícolis",
    e: "Rigidez frente a lo que viene.",
    r: "Dificultad para ver «el otro lado» de las cosas, terquedad, miedo a girar el rumbo.",
    v: "Decisiones de cambio, discusiones donde nadie cede.",
    q: [
      "¿Qué punto de vista me cuesta mirar?",
      "¿Qué cambio me da rigidez?",
      "¿Dónde puedo ser más flexible?"
    ]
  },
  {
    n: "Dolor de hombros",
    c: "Músculos y huesos",
    k: "hombros trapecio carga espalda alta",
    e: "Cargar responsabilidades que no son propias.",
    r: "Cansancio por hacerse cargo de todo, enojo por falta de reconocimiento.",
    v: "Roles de sostén familiar o laboral, ser «el responsable» de todos.",
    q: [
      "¿Qué carga ajena llevo encima?",
      "¿Qué puedo devolver?",
      "¿Quién podría compartir esto conmigo?"
    ]
  },
  {
    n: "Dolor de espalda alta (dorsal)",
    c: "Músculos y huesos",
    k: "espalda dorsal omóplatos dolor espalda arriba",
    e: "Falta de apoyo emocional.",
    r: "Tristeza, soledad, sentir que nadie sostiene.",
    v: "Etapas de aislamiento, relaciones con poca reciprocidad.",
    q: [
      "¿Dónde siento que nadie me respalda?",
      "¿A quién le pediría apoyo?",
      "¿Qué me daría sensación de compañía?"
    ]
  },
  {
    n: "Lumbalgia (espalda baja)",
    c: "Músculos y huesos",
    k: "lumbar lumbago espalda baja cintura dolor lumbar",
    e: "Inseguridad material y de sostén.",
    r: "Miedo al futuro, a no tener lo suficiente, sostenerlo todo en soledad.",
    v: "Preocupaciones económicas, ser el único soporte de un proyecto o de una familia.",
    q: [
      "¿Qué me da inseguridad respecto de mi sustento?",
      "¿Qué estoy sosteniendo solo?",
      "¿Qué recurso tengo que no estoy viendo?"
    ]
  },
  {
    n: "Ciática",
    c: "Músculos y huesos",
    k: "ciática nervio ciático pierna dolor irradiado",
    e: "Sentirse entre dos caminos, y culpa.",
    r: "Dilemas sin resolver, presión por sostener, culpa por decisiones propias.",
    v: "Encrucijadas, deber vs. deseo.",
    q: [
      "¿Entre qué dos opciones estoy atrapado?",
      "¿Qué culpa llevo?",
      "¿Qué decisión me daría alivio, aunque cueste?"
    ]
  },
  {
    n: "Artritis y dolor articular",
    c: "Músculos y huesos",
    k: "artritis artrosis articulaciones dolor de huesos rigidez",
    e: "Rigidez ante el cambio y crítica.",
    r: "Resentimiento hacia uno mismo o hacia otros, dureza, autoexigencia.",
    v: "Roles muy fijos, dificultad para adaptarse a nuevas etapas.",
    q: [
      "¿Qué tan duro soy conmigo?",
      "¿Qué resentimiento sigue vivo?",
      "¿Dónde puedo flexibilizar?"
    ]
  },
  {
    n: "Fibromialgia",
    c: "Músculos y huesos",
    k: "fibromialgia dolor generalizado dolor crónico sensibilidad",
    e: "Sobreexigencia e hipersensibilidad.",
    r: "Años de callar necesidades, rabia y tristeza acumuladas, historias de dolor sin espacio para expresarse.",
    v: "Cuidadores, personas muy responsables, vidas con poco permiso para el descanso.",
    q: [
      "¿Qué dolor emocional vengo cargando hace años?",
      "¿Qué parte mía nunca tuvo permiso para descansar?",
      "¿Qué trato amable me merezco?"
    ],
    a: "El dolor es real y multifactorial. El acompañamiento médico y psicológico es clave; esta lectura no explica su origen."
  },
  {
    n: "Dolor de rodilla",
    c: "Músculos y huesos",
    k: "rodilla rótula articulación avanzar flexibilidad",
    e: "Orgullo o miedo a ceder y avanzar.",
    r: "Dificultad para flexibilizarse, miedo a dar el próximo paso.",
    v: "Cambios que cuesta aceptar, situaciones donde ceder se siente como perder.",
    q: [
      "¿Qué paso me da miedo dar?",
      "¿En qué me resisto a ceder?",
      "¿Qué se abriría si me flexibilizara un poco?"
    ]
  },
  {
    n: "Bruxismo y tensión mandibular",
    c: "Músculos y huesos",
    k: "bruxismo dientes mandíbula apretar rechinar ATM",
    e: "Rabia contenida.",
    r: "Ganas de morder, gritar o decir «basta» que se contienen durante el día.",
    v: "Ambientes donde no se puede expresar enojo, presión sostenida.",
    q: [
      "¿Qué rabia estoy apretando?",
      "¿Qué me gustaría decir con firmeza?",
      "¿Cómo puedo descargar tensión durante el día?"
    ]
  },

  // ───────── SISTEMA HORMONAL Y METABÓLICO
  {
    n: "Hipotiroidismo",
    c: "Sistema hormonal y metabólico",
    k: "tiroides hipotiroidismo lentitud cansancio frío",
    e: "Sentirse sin voz ni tiempo propio.",
    r: "Frustración por no poder expresarse ni actuar, humillaciones guardadas, desánimo.",
    v: "Años de postergarse por otros, esperar «el momento» que no llega.",
    q: [
      "¿Qué proyecto o palabra postergué demasiado?",
      "¿Dónde me sentí humillado y no lo dije?",
      "¿Qué haría si pudiera elegir mi ritmo?"
    ],
    a: "Requiere diagnóstico y tratamiento médico."
  },
  {
    n: "Hipertiroidismo",
    c: "Sistema hormonal y metabólico",
    k: "tiroides hipertiroidismo acelerado nervios",
    e: "Urgencia y sensación de que no alcanza.",
    r: "Alarma constante, sobreexigencia, miedo a quedarse atrás.",
    v: "Épocas de aceleración y mucha demanda, ritmos que no dan respiro.",
    q: [
      "¿Qué me apura tanto?",
      "¿Por qué siento que no llego?",
      "¿Qué pasaría si fuera más despacio?"
    ],
    a: "Requiere diagnóstico y tratamiento médico."
  },
  {
    n: "Diabetes",
    c: "Sistema hormonal y metabólico",
    k: "azúcar glucosa insulina diabetes dulce",
    e: "Dulzura que falta y necesidad de control.",
    r: "Tristeza, nostalgia, hambre de afecto, necesidad de controlarlo todo.",
    v: "Pérdidas afectivas, vidas donde el cuidado propio quedó en segundo plano.",
    q: [
      "¿Qué dulzura siento que me falta?",
      "¿Dónde me exijo controlar todo?",
      "¿Qué afecto necesito recibir?"
    ],
    a: AVISO_SERIO + " La diabetes tiene componentes genéticos, metabólicos y ambientales bien estudiados."
  },

  // ───────── OJOS Y OÍDOS
  {
    n: "Miopía",
    c: "Ojos y oídos",
    k: "vista miopía lentes ver de lejos ojos",
    e: "Temor al futuro.",
    r: "Miedo a lo que viene, preferir lo cercano y conocido.",
    v: "Épocas de incertidumbre, dificultad para planear a largo plazo.",
    q: [
      "¿Qué futuro me da miedo mirar?",
      "¿Qué me da seguridad de cerca?",
      "¿Qué horizonte me gustaría ver?"
    ]
  },
  {
    n: "Conjuntivitis",
    c: "Ojos y oídos",
    k: "ojos irritados conjuntivitis ojo rojo lagrimeo",
    e: "Irritación frente a lo que se ve.",
    r: "Enojo al mirar una situación, lágrimas retenidas.",
    v: "Escenas que molestan y no se pueden cambiar.",
    q: [
      "¿Qué no quiero ver?",
      "¿Qué me irrita mirar?",
      "¿Qué lágrimas retengo?"
    ]
  },
  {
    n: "Tinnitus (zumbido en los oídos)",
    c: "Ojos y oídos",
    k: "tinnitus zumbido oídos pitido ruido interno acúfenos",
    e: "Ruido interno cuando falta silencio.",
    r: "Lo que no se quiere escuchar, estrés sostenido, voz interior ignorada.",
    v: "Vidas muy ruidosas, mucha exigencia, poco espacio de silencio.",
    q: [
      "¿Qué no quiero escuchar de mí?",
      "¿Cuánto silencio tengo en mi día?",
      "¿Qué voz interior estoy tapando?"
    ],
    a: "El zumbido persistente merece una evaluación otorrinolaringológica."
  },

  // ───────── URINARIO Y GINECOLÓGICO
  {
    n: "Cistitis",
    c: "Urinario y ginecológico",
    k: "cistitis infección urinaria ardor orina vejiga",
    e: "Irritación en los vínculos y límites invadidos.",
    r: "Enojo con la pareja o el entorno, dificultad para marcar territorio.",
    v: "Relaciones donde se siente falta de respeto, convivencias tensas.",
    q: [
      "¿Quién me irrita y no lo digo?",
      "¿Qué territorio propio siento invadido?",
      "¿Qué límite necesito poner?"
    ]
  },
  {
    n: "Cálculos renales",
    c: "Urinario y ginecológico",
    k: "riñón piedras renales cálculos cólico renal",
    e: "Emociones endurecidas.",
    r: "Duelos sin llorar, tristezas cristalizadas.",
    v: "Pérdidas que no se procesaron, años de «hacerse fuerte».",
    q: [
      "¿Qué duelo no me permití sentir?",
      "¿Qué tristeza guardo?",
      "¿Qué lágrimas esperan salir?"
    ]
  },
  {
    n: "Dolor menstrual",
    c: "Urinario y ginecológico",
    k: "menstruación regla dolor menstrual cólicos ciclo útero",
    e: "Vínculo con lo femenino, el descanso y el ciclo.",
    r: "Rechazo al rol impuesto, cansancio, enojo con exigencias que no respetan el ritmo del cuerpo.",
    v: "Vidas que no dan tregua en los días de menstruación, mensajes culturales sobre «ser mujer».",
    q: [
      "¿Cómo me llevo con mi ciclo?",
      "¿Qué descanso me niego en esos días?",
      "¿Qué aprendí sobre lo femenino que ya no me sirve?"
    ],
    a: "El dolor muy intenso puede indicar endometriosis u otras condiciones. Consulta ginecológica."
  },

  // ───────── INMUNIDAD Y SISTEMAS COMPLEJOS
  {
    n: "Alergias",
    c: "Inmunidad y sistemas complejos",
    k: "alergia rinitis alérgica sensibilidad reacción",
    e: "Hipersensibilidad ante lo que no se tolera.",
    r: "Rechazo a una persona o situación, límites no puestos, miedo a perder el control.",
    v: "Épocas en que algo «no cae bien» pero se tolera por obligación.",
    q: [
      "¿Qué «no tolero» pero sigo aguantando?",
      "¿Dónde me falta decir basta?",
      "¿Qué me hace sentir invadido?"
    ]
  },
  {
    n: "Enfermedades autoinmunes (en general)",
    c: "Inmunidad y sistemas complejos",
    k: "autoinmune lupus esclerosis tiroiditis celiaquía inmunidad ataque",
    e: "Conflicto interno y autoexigencia.",
    r: "Autocrítica muy dura, dificultad para poner límites, sentirse invadido.",
    v: "Años de exigirse mucho, vínculos donde fue difícil proteger el propio espacio.",
    q: [
      "¿Cuán amable es mi voz interna?",
      "¿Dónde me ataco a mí mismo?",
      "¿Qué límite me ayudaría a sentirme a salvo?"
    ],
    a: AVISO_SERIO
  },
  {
    n: "Cáncer",
    c: "Inmunidad y sistemas complejos",
    k: "cáncer tumor oncología diagnóstico quimioterapia",
    e: "Lo que el diagnóstico despierta.",
    r: "Algunas tradiciones hablan de duelos o resentimientos sostenidos en silencio. Importante: la investigación no demuestra que las emociones causen cáncer ni que una «actitud positiva» determine su curso. Nadie «se lo buscó».",
    v: "Un diagnóstico suele remover preguntas profundas: el sentido, los vínculos, lo pendiente, el tiempo. Ahí sí hay mucho para acompañar emocionalmente.",
    q: [
      "¿Qué necesito en este momento: contención, información, compañía?",
      "¿Qué cosas importantes quiero decir, hacer o resolver?",
      "¿Quién puede acompañarme sin juzgarme?"
    ],
    a: AVISO_SERIO + " La culpa no tiene lugar en esta conversación: el acompañamiento emocional ayuda a vivir el proceso, no es la causa ni la cura."
  }
];

const FUENTES = [
  {
    t: "Franz Alexander y el desarrollo de la medicina psicosomática (PMC)",
    u: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6865280",
    d: "Revisión sobre teoría psicodinámica, emociones y salud física."
  },
  {
    t: "The Clinical Domains of Psychosomatic Medicine (J Clin Psychiatry, 2005)",
    u: "https://psychiatrist.com/jcp/clinical-domains-psychosomatic-medicine",
    d: "Panorama clínico del campo psicosomático."
  },
  {
    t: "Persistent physical symptoms: definition, genesis, and management (The Lancet, 2024)",
    u: "https://eprints.whiterose.ac.uk/id/eprint/213570/1/PIIS0140673624006238.pdf",
    d: "Revisión actual sobre síntomas físicos persistentes y su tratamiento."
  },
  {
    t: "Alexitimia y dolor crónico (Health Psychology, 2026 — Johns Hopkins)",
    u: "https://www.healthday.com/health-news/pain-management/understanding-emotions-could-be-key-to-quelling-chronic-pain",
    d: "Estudio longitudinal: la dificultad para reconocer y expresar emociones predice mayor impacto del dolor."
  },
  {
    t: "Alexithymia in chronic back pain: systematic review (Elander et al., 2021)",
    u: "https://repository.derby.ac.uk/item/92x5q/a-systematic-review-of-evidence-about-the-role-of-alexithymia-in-chronic-back-pain",
    d: "Revisión sistemática que vincula alexitimia con dolor de espalda crónico."
  },
  {
    t: "Medicina psicosomática (Wikipedia) — sección de críticas",
    u: "https://en.wikipedia.org/wiki/Psychosomatic_medicine",
    d: "Resume la evidencia mixta y la falta de apoyo a la idea de que la «actitud» determine la evolución del cáncer."
  },
  {
    t: "Diccionario de enfermedades emocionales y biodescodificación (iProfesional)",
    u: "https://www.iprofesional.com/health-tech/342057-diccionario-de-enfermedades-emocionales-y-biodescodificacion",
    d: "Presentación divulgativa del enfoque de la biodescodificación y su «diccionario»."
  },
  {
    t: "Diccionario BioEmocional (J. M. Vilanova, 2016)",
    u: "https://static1.squarespace.com/static/5d16d0929563110001ed7c57/t/60dbd71469f30c1a67b91f29/1625020183131/Diccionario-BioEmocional-2016.pdf",
    d: "Ejemplo de diccionario bioemocional dentro de la tradición de la bioneuroemoción."
  },
  {
    t: "Biodescodificación: el significado emocional del dolor de espalda (MDZ)",
    u: "https://www.mdzol.com/tendencias/biodescodificacion-el-significado-emocional-que-esconde-el-dolor-espalda-n1343123",
    d: "Divulgación que además señala que la biodescodificación se considera pseudociencia."
  },
  {
    t: "Diccionario de las enfermedades emocionales (Euroinnova)",
    u: "https://www.euroinnova.com/blog/diccionario-enfermedades-emocionales",
    d: "Recopilación A–Z de dolencias y su posible interpretación emocional."
  }
];
