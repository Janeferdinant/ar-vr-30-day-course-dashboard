import { Lesson } from "@/types/course";

export const week4Lessons: Lesson[] = [
  {
    id: "day-22",
    day: 22,
    week: 4,
    duration: 1,
    title: "XR Applications, Accessibility, and Scenario Design",
    topics: [
      "Industrial XR and Simulation-Based Training: High-Risk Scenarios and Psychological Fidelity",
      "Scenario Design Frameworks: Objective Setting, Branching Narratives, and Failure States",
      "Accessibility in Spatial Computing: Colorblindness, Motor Impairment, Seated Mode, and One-Handed Operation",
      "Ethical and Psychological Considerations: Stress Inoculation vs Traumatic Realism",
      "Scoping Educational Safety Prototypes (Non-Certified Academic Scope)"
    ],
    learningObjectives: [
      "Analyze why immersive simulations are adopted for hazardous industrial safety training.",
      "Design branching narrative decision trees for hazard recognition training.",
      "Implement accessibility affordances for seated and single-controller users in XR.",
      "Scope a realistic educational safety simulation without claiming industrial certification."
    ],
    prerequisites: ["Weeks 1–3 completed"],
    teachingContent: [
      {
        sectionTitle: "1. Why Train Hazards in Virtual Reality?",
        content: `In high-hazard environments (chemical plants, construction sites, electrical substations), training mistakes in the physical world lead to catastrophic injury or death. VR enables 'Mistake-Driven Learning':\n• Consequence Realism: Trainees experience the direct result of unsafe choices (e.g., flash fire or structural collapse) in zero-risk safety.\n• Muscle Memory: Physical repetition builds procedural muscle memory faster than classroom manuals.\n• Objective Analytics: Every head gaze angle, reaction latency, and decision is logged with metric precision.\n\nNote: Academic projects must be explicitly framed as educational prototypes, not certified industrial safety tools.`
      },
      {
        sectionTitle: "2. Accessibility in Spatial Computing",
        content: `Spatial applications must accommodate diverse user abilities:\n• Seated Mode: Dynamic height adjustment toggle for wheelchair users.\n• One-Handed Mode: Controller remapping so all functions are operable with either hand alone.\n• Color Affordance: Never rely solely on red/green warnings; always pair colors with distinct geometric icons (e.g. triangles for warnings, octagons for stop).`
      }
    ],
    instructorDemonstration: {
      title: "Designing a Hazard Recognition Decision Tree",
      steps: [
        "Sketch a flowchart for a chemical spill protocol: Detect Hazard -> Choose PPE -> Isolate Zone -> Neutralize Spill.",
        "Demonstrate branching consequences: Failing to check glove rating triggers corrosive damage feedback.",
        "Inspect XR Accessibility settings: virtual height slider and single-controller navigation."
      ],
      tips: "Stress the importance of clear pedagogical debriefing after a simulated failure so trainees understand what went wrong."
    },
    handsOnLab: {
      title: "Hazard-Recognition Scenario Flowcharting",
      durationMinutes: 30,
      instructions: [
        "Select an industrial scenario (e.g. Machine Workshop, Electrical Panel, or Biohazard Storage).",
        "Identify 3 critical safety hazards (e.g., frayed live wire, blocked fire extinguisher, chemical spill).",
        "Diagram a branching flowchart mapping safe choices versus unsafe shortcuts.",
        "Define quantitative scoring metrics (points for correct identification, penalties for safety violations)."
      ],
      expectedResult: "A comprehensive scenario flow diagram ready for 3D environment implementation."
    },
    miniProject: {
      title: "Draw a Hazard-Recognition Storyboard",
      description: "Create a detailed scenario flow diagram and visual storyboard for a hazard-recognition simulation in an industrial workshop. Detail user choices, branching consequences, feedback cues, and scoring criteria.",
      deliverable: "A scenario flow diagram mapping player decisions, hazard consequences, and scoring rubrics.",
      checklist: [
        "Identifies at least 3 distinct hazards with clear severity ratings",
        "Includes branching paths with both correct and incorrect user decisions",
        "Specifies audio, visual, and haptic feedback for each outcome",
        "Clearly states educational prototype disclaimer"
      ],
      requiredSoftware: ["Diagramming Tool (Draw.io / Figma / Miro)"],
      assessmentCriteria: [
        "Pedagogical logic and decision tree completeness (35%)",
        "Hazard identification clarity and realism (30%)",
        "Accessibility considerations (20%)",
        "Documentation presentation (15%)"
      ]
    },
    resources: [
      { title: "W3C XR Accessibility User Requirements", url: "https://www.w3.org/TR/xaur/", type: "docs" },
      { title: "Industrial Simulation & Training Frameworks", url: "https://learn.unity.com", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why must educational safety simulations include non-punitive debriefing states?",
      "How can a developer ensure that a VR simulation remains fully usable for a seated participant?"
    ]
  },
  {
    id: "day-23",
    day: 23,
    week: 4,
    duration: 2,
    title: "Environment Design and Hazard Placement",
    topics: [
      "Industrial Environment Art: Workshops, Warehouses, and Control Rooms",
      "Environmental Storytelling: Subtlety, Realism, and Wear-and-Tear Texturing",
      "Placing Environmental Hazards: Tripping, Chemical, Electrical, and Fire Hazards",
      "Volumetric Lighting, Industrial Acoustics, and Visual Focal Hierarchy",
      "Spatial Navigation Paths and Restricting Unauthorized Areas"
    ],
    learningObjectives: [
      "Construct a believable 3D industrial workshop using modular architectural assets.",
      "Integrate realistic physical hazards (e.g. frayed high-voltage cable, oil puddle, missing machine guard).",
      "Direct user visual focus using contrast, lighting temperature, and environmental cues.",
      "Establish navigation corridors and physical safety boundaries."
    ],
    prerequisites: ["Day 22 Scenario Design", "Week 1 3D Foundations"],
    teachingContent: [
      {
        sectionTitle: "1. Environmental Storytelling in Hazard Recognition",
        content: `A common mistake in educational simulations is making hazards look like cartoon video game collectibles. For authentic training, hazards must be woven naturally into the scene:\n• Frayed Electrical Cable: Subtle exposed copper strands trailing near a water puddle.\n• Chemical Container: Unlabeled drum with slight residue leaking onto concrete.\n• Overhead Crane: Suspended heavy load swinging without a warning cordon.\n\nThe environment must reward careful observation rather than mindless button clicking.`
      },
      {
        sectionTitle: "2. Visual Hierarchy and Sightlines",
        content: `Use lighting to guide the trainee:\n• Place key workbenches under bright, neutral industrial fluorescents (4000K–5000K).\n• Keep hazard zones slightly shadowed or illuminated by flickering emergency indicators.\n• Maintain unobstructed sightlines so trainees can scan the workshop from central teleport pads.`
      }
    ],
    instructorDemonstration: {
      title: "Assembling an Industrial Workshop Environment Live",
      steps: [
        "Assemble industrial warehouse walls, concrete floor with expansion joints, and overhead steel trusses.",
        "Place machinery: lathe, drill press, welding bay, and chemical storage cabinet.",
        "Seed 4 distinct hazards subtly into the scene.",
        "Adjust lighting: cool fluorescent tubes overhead, warm sodium exterior light through skylights."
      ],
      tips: "Point out why industrial safety signs (OSHA/ISO compliant) must be accurately proportioned and legible."
    },
    handsOnLab: {
      title: "Building the Workshop Hazard Environment",
      durationMinutes: 60,
      instructions: [
        "Construct an industrial workshop layout measuring at least 8m x 10m.",
        "Incorporate at least 3 distinct machinery stations.",
        "Place 3 intentional safety hazards with appropriate physical scale.",
        "Add industrial ambient sound (humming transformers, distant machinery) and optimized lighting."
      ],
      expectedResult: "A detailed, atmospheric industrial workshop scene primed for interactive hazard detection."
    },
    miniProject: {
      title: "Create a Virtual Workshop",
      description: "Build an industrial workshop scene containing at least 3 clearly identifiable safety hazards (e.g. liquid spill, exposed wiring, blocked emergency exit). The environment must feature realistic materials, industrial props, and proper scale.",
      deliverable: "A workshop scene containing identifiable safety hazards, atmospheric lighting, and navigation boundaries.",
      checklist: [
        "Believable workshop environment with industrial machinery and props",
        "At least 3 distinct hazards integrated with realistic environmental placement",
        "Lighting guides visual hierarchy without washing out hazard details",
        "Navigation colliders prevent walking through machinery or perimeter walls"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Standard URP Assets"],
      assessmentCriteria: [
        "Environment design, realism, and asset quality (35%)",
        "Subtlety and believability of hazard placements (30%)",
        "Lighting mood and visual guidance (20%)",
        "Collision setup and spatial navigation boundaries (15%)"
      ]
    },
    resources: [
      { title: "OSHA Industrial Safety Sign Specifications", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.145", type: "docs" },
      { title: "Unity Environment Art Workflows", url: "https://learn.unity.com", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why is environmental subtlety more effective for hazard training than brightly blinking cartoon markers?",
      "How does ambient audio contribute to situational awareness in industrial simulation?"
    ]
  },
  {
    id: "day-24",
    day: 24,
    week: 4,
    duration: 2,
    title: "Trigger Zones, Collision Detection, and Event-Driven C#",
    topics: [
      "Spatial Hazard Trigger Volumes and Proximity Zones",
      "Player Proximity Detection: Safe Zone vs Danger Zone Calculation",
      "Event-Driven Architecture: C# Actions, UnityEvents, and Decoupled Messaging",
      "Dynamic Hazard Activation: Timed Events, Spills, and Machine Malfunctions",
      "Tracking Violation Times and Exposure Durations"
    ],
    learningObjectives: [
      "Create invisible 3D trigger volumes representing spatial hazard danger zones.",
      "Write an event-driven HazardDetector C# script using C# Action delegates.",
      "Track trainee exposure time inside danger zones and trigger state escalation.",
      "Decouple hazard detection logic from UI and audio feedback systems."
    ],
    prerequisites: ["Day 6 Physics Triggers", "Day 23 Workshop Environment"],
    teachingContent: [
      {
        sectionTitle: "1. The Anatomy of a Spatial Danger Zone",
        content: `A hazard is rarely a single point. It is a spatial volume:\n• Danger Zone Trigger: A 3D Box/Sphere Collider set to IsTrigger = true with layer 'HazardZone'.\n• Exposure Timer: When the player's Head or Hand collider enters the volume, an internal stopwatch begins:\n  exposureTime += Time.deltaTime;\n• Escalation: If exposure exceeds threshold (e.g. 3.0 seconds near unshielded arc welding), escalate from 'Warning' to 'Severe Injury Violation'.`
      },
      {
        sectionTitle: "2. Clean Event-Driven C# Architecture",
        content: `Decoupling systems prevents messy spaghetti code. When a hazard is tripped, it broadcasts an event; UI, audio, and scoring systems listen independently without direct references.`,
        codeSnippet: {
          language: "csharp",
          title: "HazardTriggerZone.cs",
          code: `using System;\nusing UnityEngine;\n\npublic class HazardTriggerZone : MonoBehaviour\n{\n    public static event Action<string, float> OnHazardViolation;\n\n    [SerializeField] private string hazardIdentifier = "HIGH_VOLTAGE_EXPOSURE";\n    [SerializeField] private float damageRatePerSecond = 15f;\n    private bool playerInside = false;\n    private float currentExposure = 0f;\n\n    private void OnTriggerEnter(Collider other)\n    {\n        if (other.CompareTag("Player"))\n        {\n            playerInside = true;\n            Debug.Log($"[Hazard] Player entered danger zone: {hazardIdentifier}");\n        }\n    }\n\n    private void OnTriggerExit(Collider other)\n    {\n        if (other.CompareTag("Player"))\n        {\n            playerInside = false;\n            currentExposure = 0f;\n        }\n    }\n\n    private void Update()\n    {\n        if (playerInside)\n        {\n            currentExposure += Time.deltaTime;\n            OnHazardViolation?.Invoke(hazardIdentifier, damageRatePerSecond * Time.deltaTime);\n        }\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Building an Escalating Electrical Hazard Trigger",
      steps: [
        "Place a high-voltage panel with sparking particle effects.",
        "Add a BoxCollider trigger enclosing the arc flash radius (1.5 meters).",
        "Demonstrate the player stepping into the zone: audio sparks amplify, and exposure accumulates.",
        "Trigger emergency siren when exposure exceeds maximum permissible limits."
      ],
      tips: "Explain why the player trigger should be attached to the XR Origin's Camera (head), rather than the room center origin, so ducking and leaning are correctly registered."
    },
    handsOnLab: {
      title: "Implementing Event-Driven Hazard Detection",
      durationMinutes: 60,
      instructions: [
        "Configure trigger volumes around 2 different hazards in the workshop.",
        "Implement the HazardTriggerZone script with C# event broadcasting.",
        "Create a HazardManager that listens for violations and logs incident events.",
        "Verify that exiting the volume ceases violation accumulation."
      ],
      expectedResult: "A responsive, event-driven danger detection system logging player proximity violations in real-time."
    },
    miniProject: {
      title: "Detect a Simulated Safety Violation",
      description: "Code a working hazard-detection system in C#. Detect when a trainee enters an unshielded or hazardous zone without required precautions, track exposure duration, broadcast violation events, and update simulation state.",
      deliverable: "A working hazard-detection system that registers violations, measures exposure, and fires decoupled events.",
      checklist: [
        "At least 2 functional trigger zones monitoring player proximity",
        "Exposure duration tracked accurately via Time.deltaTime",
        "C# event architecture broadcasts violation incidents to listeners",
        "Clean debug logs confirm entry, duration, and exit states"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Visual Studio / VS Code"],
      assessmentCriteria: [
        "Event architecture cleanliness and decoupling (35%)",
        "Trigger detection reliability and accuracy (30%)",
        "Exposure duration calculation correctness (20%)",
        "Code hygiene and comments (15%)"
      ]
    },
    resources: [
      { title: "Unity Events & C# Delegates Tutorial", url: "https://learn.unity.com/tutorial/events-and-event-handling", type: "tutorial" },
      { title: "Collider.OnTriggerStay API Reference", url: "https://docs.unity3d.com/ScriptReference/Collider.OnTriggerStay.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why is attaching the player detection collider to the Main Camera essential in room-scale VR?",
      "What are the architecture benefits of C# static events over direct GetComponent inspector references?"
    ]
  },
  {
    id: "day-25",
    day: 25,
    week: 4,
    duration: 2,
    title: "Decision-Based Interaction, Quizzes, and Scoring",
    topics: [
      "Decision Matrices: Safety Inspection Checklists and Interactive Protocols",
      "In-Situ Interactive Decision Points (e.g. Choosing Correct Fire Extinguisher Type)",
      "Dynamic Question Generation and World-Space Multiple Choice UI",
      "Scoring Algorithms: Weighted Penalties, Time Bonuses, and Safety Pass/Fail Thresholds",
      "State Machines for Scenario Management (Briefing, Inspection, Evaluation, Debrief)"
    ],
    learningObjectives: [
      "Implement a state machine controlling simulation flow (Intro, Inspection, Quiz, Summary).",
      "Build an interactive in-world decision terminal presenting safety questions.",
      "Calculate dynamic scores reflecting hazard detection accuracy and protocol compliance.",
      "Provide constructive immediate feedback on correct and incorrect decisions."
    ],
    prerequisites: ["Day 24 Event Triggers", "Day 20 World-Space UI"],
    teachingContent: [
      {
        sectionTitle: "1. The Simulation State Machine",
        content: `Structured safety training requires well-defined phases:\n• Phase 0: Safety Briefing (Review learning objectives and PPE checklist).\n• Phase 1: Free Inspection (Walk the floor, flag hazards via spatial marker ray).\n• Phase 2: Decision Intervention (Interact with terminals, select corrective actions).\n• Phase 3: Debrief & Scorecard (Review total points, missed violations, and safety rating).`
      },
      {
        sectionTitle: "2. The Decision Evaluation Algorithm",
        content: `Score calculation balances speed and safety:\n• TotalScore = BasePoints + HazardBonus - (Violations × SeverityWeight) - TimePenalties.\nPassing requires: Score ≥ 80% AND Zero Fatal Violations (e.g. entering an energized high-voltage zone).`
      }
    ],
    instructorDemonstration: {
      title: "Interactive Hazard Inspection Clipboard",
      steps: [
        "Create an interactive handheld inspection clipboard.",
        "Add a multiple-choice quiz UI: 'What type of extinguisher is required for an electrical panel fire? (A: Water, B: CO2, C: Foam)'.",
        "Clicking B awards +100 points and updates the clipboard checklist with a green checkmark.",
        "Clicking A triggers an electrical shock visual effect and records a critical infraction."
      ],
      tips: "Never allow a student to pass the simulation if they commit a fatal infraction, regardless of how many other questions they answered correctly."
    },
    handsOnLab: {
      title: "Building an Interactive Decision Quiz Station",
      durationMinutes: 60,
      instructions: [
        "Create a world-space inspection terminal in front of a hazard zone.",
        "Implement a C# quiz manager presenting 3 multiple-choice decision options.",
        "Script logic handling correct selection (points + chime) and incorrect selection (penalty + buzzer).",
        "Display a live updated scorecard on the terminal screen."
      ],
      expectedResult: "A functional decision station that scores trainee choices and displays immediate corrective feedback."
    },
    miniProject: {
      title: "Build a Hazard-Identification Quiz",
      description: "Build an interactive hazard-identification quiz system in the virtual workshop. Trainees must approach designated hazard stations, evaluate the situation, select the proper safety response via world-space UI, and receive immediate scoring feedback.",
      deliverable: "A quiz system with correct and incorrect answer handling, score computation, and live UI updates.",
      checklist: [
        "At least 3 distinct decision points distributed across the workshop",
        "World-space UI accessible via ray-pointer or physical touch",
        "Accurate scoring calculation with distinct positive/negative feedback",
        "Summary screen displaying total score and pass/fail evaluation"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "TextMeshPro"],
      assessmentCriteria: [
        "Decision logic and scoring algorithm correctness (35%)",
        "UI clarity, accessibility, and laser-pointer ergonomics (30%)",
        "Pedagogical value of educational feedback (20%)",
        "State management and score persistence (15%)"
      ]
    },
    resources: [
      { title: "Unity State Machine Programming Patterns", url: "https://learn.unity.com", type: "tutorial" },
      { title: "Gamification & Assessment in Simulation", url: "https://docs.unity3d.com", type: "docs" }
    ],
    reflectionQuestions: [
      "Why must safety scoring weigh fatal infractions differently than minor procedural omissions?",
      "How does providing immediate educational rationale after an incorrect answer improve retention?"
    ]
  },
  {
    id: "day-26",
    day: 26,
    week: 4,
    duration: 2,
    title: "Feedback, Audio, Visual Indicators, and UI",
    topics: [
      "Multisensory Feedback Loops: Audio Alarms, Visual Warning Flashers, and Haptic Pulses",
      "Creating Volumetric Warning Indicators: Pulsing Cones, Danger Boundaries, and Floor Decals",
      "Emergency Strobe Lighting, Smoke, and Fire Particle Systems in URP",
      "Dynamic Heads-Up / World-Space Warnings: Proximity Alert Meters",
      "Designing Non-Distracting Audio Environments for High-Stress Training"
    ],
    learningObjectives: [
      "Construct multisensory warning feedback systems combining audio, visual, and haptic cues.",
      "Create volumetric danger boundary projections on the floor using decal projectors.",
      "Instantiate realistic industrial emergency smoke and electrical spark particle systems.",
      "Build a proximity alert HUD meter indicating distance to active hazards."
    ],
    prerequisites: ["Day 24 Hazard Detection", "Day 25 Quizzes"],
    teachingContent: [
      {
        sectionTitle: "1. The Multisensory Feedback Hierarchy",
        content: `When a trainee makes a critical mistake, single-channel feedback (e.g., small text) is easily missed in VR. Use synchronized tri-channel feedback:\n1. Visual: Strobe light flashes amber/red; flashing warning decal appears on floor.\n2. Auditory: Directional alarm sirens and localized electrical crackle.\n3. Haptic: Rapid heavy controller vibration indicating danger proximity.`
      },
      {
        sectionTitle: "2. URP Decal Projectors for Spatial Boundaries",
        content: `Instead of clunky box meshes, modern XR uses URP Decal Projectors to project hazard warning stripes ('CAUTION: HIGH VOLTAGE') directly conforming to uneven floors, steps, and machinery surfaces.`
      }
    ],
    instructorDemonstration: {
      title: "Building an Emergency Evacuation Siren & Decal System",
      steps: [
        "Create an industrial rotating beacon light with an amber Spot Light.",
        "Add a URP Decal Projector displaying black-and-yellow hazard stripes on the floor.",
        "Spawn a smoke particle system simulating an overheated generator.",
        "Demonstrate controller haptic pulses increasing in frequency as the player walks closer to the hazard."
      ],
      tips: "Avoid rapid full-screen strobe flashes as they can trigger photosensitive epileptic seizures; keep warning flashes localized to the hazard object itself."
    },
    handsOnLab: {
      title: "Implementing Multi-Channel Hazard Feedback",
      durationMinutes: 60,
      instructions: [
        "Configure an emergency warning beacon that activates upon violation.",
        "Add an industrial alarm audio loop with 3D spatial attenuation.",
        "Implement proximity-based haptic pulsing on the hand controllers.",
        "Add a particle effect (smoke or sparks) that activates during severe violations."
      ],
      expectedResult: "An intense, unmistakable multisensory hazard feedback system reinforcing safe spatial behavior."
    },
    miniProject: {
      title: "Add Safety Instructions and a Feedback System",
      description: "Build a comprehensive feedback and guidance system for the workshop simulation. Integrate warning sirens, rotating emergency beacons, proximity haptic pulses, and a clear floating alert HUD to guide the trainee through safety protocols.",
      deliverable: "A guided safety interaction featuring multisensory warnings, clear instructions, and visual feedback.",
      checklist: [
        "Directional audio sirens with 3D spatial sound roll-off",
        "Visual warning beacons or flashing hazard decal indicators",
        "Proximity-based haptic vibration on controller grips",
        "Floating world-space safety instruction banner guiding next steps"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "URP Decal Projector"],
      assessmentCriteria: [
        "Multisensory integration and synchronization (35%)",
        "Visual polish of particle systems and emergency lighting (30%)",
        "Audio mixing and spatial localization (20%)",
        "Adherence to photosensitivity safety guidelines (15%)"
      ]
    },
    resources: [
      { title: "Universal Render Pipeline: Decal Projector", url: "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest", type: "docs" },
      { title: "Unity Particle System Manual", url: "https://docs.unity3d.com/Manual/ParticleSystems.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why must full-screen red flashing flashes be avoided in VR headsets?",
      "How does proximity-based haptic vibration reinforce spatial distance awareness?"
    ]
  },
  {
    id: "day-27",
    day: 27,
    week: 4,
    duration: 2,
    title: "AR Companion and Information Overlays",
    topics: [
      "Cross-Platform XR Paradigms: Linking VR Environments with Mobile AR Handheld Tools",
      "Designing an AR Safety Information Companion: Overlaying Equipment Manuals and Sensor Overlays",
      "Contextual Machine Diagnostics: QR/Barcode Scanning and AR Marker Telemetry",
      "Shared Data Models between VR Training Scenarios and Field AR Inspection Apps",
      "Mobile AR UI/UX Optimization for Field Technicians"
    ],
    learningObjectives: [
      "Design an AR companion prototype that overlays safety instructions on physical machinery.",
      "Understand cross-device data modeling connecting VR simulations and field AR tools.",
      "Implement contextual diagnostic overlays triggered by machine image markers or proximity.",
      "Evaluate cross-platform user experience differences between immersive headsets and handheld AR."
    ],
    prerequisites: ["Week 2 AR Foundation", "Days 22–26 VR Safety Modules"],
    teachingContent: [
      {
        sectionTitle: "1. The XR Ecosystem: VR for Training, AR for the Field",
        content: `A central theme of modern spatial engineering is the continuum between VR and AR:\n• In the Classroom (VR): The technician practices emergency shutdown protocols in high immersion before stepping foot near dangerous machinery.\n• On the Factory Floor (AR): The technician points a mobile tablet at the actual physical machine. AR overlays real-time temperature telemetry, step-by-step lock-out/tag-out (LOTO) instructions, and hazardous valve callouts right on the equipment.`
      },
      {
        sectionTitle: "2. The Shared Data Architecture",
        content: `Both applications share the same JSON hazard and equipment data schema:\n• MachineID\n• HazardousSubstances\n• EmergencyShutdownSteps[]\n• LiveSensorTelemetry (Temperature, Pressure, Voltage)\n\nThis guarantees data consistency across both training and field execution.`
      }
    ],
    instructorDemonstration: {
      title: "Demonstrating the AR Safety Companion Concept",
      steps: [
        "Display a printed machine blueprint card on a physical table.",
        "Aim an AR Foundation camera at the blueprint: a 3D hologram of the industrial drill press appears.",
        "Demonstrate live diagnostic callouts: warning labels highlight hydraulic pressure points.",
        "Walk through a simulated Lock-Out/Tag-Out (LOTO) checklist overlay."
      ],
      tips: "Explain how industrial companies save millions by training procedures in VR first, then reinforcing them in the field with AR."
    },
    handsOnLab: {
      title: "Building the AR Equipment Safety Overlay",
      durationMinutes: 60,
      instructions: [
        "Configure an AR image tracking scene recognizing an industrial equipment target.",
        "Anchor floating 3D diagnostic telemetry cards (voltage, temperature, last inspection date).",
        "Add interactive touch buttons to cycle through the 3-step Emergency Shutdown Procedure.",
        "Test stability and legibility under varying viewing angles."
      ],
      expectedResult: "A working AR companion app presenting contextual equipment safety data over target machinery."
    },
    miniProject: {
      title: "Create an AR Safety-Information Prototype",
      description: "Build an AR safety-information prototype that presents contextual safety guidelines, equipment manuals, and emergency procedures anchored to target machinery or educational flashcards.",
      deliverable: "An AR prototype that presents safety instructions and diagnostic overlays over target machinery.",
      checklist: [
        "Image marker tracking anchors 3D diagnostics over target equipment",
        "Floating information cards display safety guidelines and emergency steps",
        "Interactive buttons allow stepping through the inspection protocol",
        "Consistent visual style and iconography matching the VR workshop"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation"],
      assessmentCriteria: [
        "AR tracking stability and alignment precision (35%)",
        "Information design and telemetry UI legibility (30%)",
        "Consistency with the VR workshop narrative (20%)",
        "Interactive control responsiveness (15%)"
      ]
    },
    resources: [
      { title: "PTC Vuforia & AR in Industrial Enterprise Case Studies", url: "https://www.ptc.com/en/technologies/augmented-reality", type: "docs" },
      { title: "AR Foundation Documentation (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/", type: "docs" }
    ],
    reflectionQuestions: [
      "How do the UI requirements of a field AR technician differ from a student in a VR headset?",
      "Why is a shared data schema between VR simulation and AR field tools critical for enterprise software?"
    ]
  },
  {
    id: "day-28",
    day: 28,
    week: 4,
    duration: 2,
    title: "Immersive Safety Training Integration",
    topics: [
      "Major Project 4 Integration: The Complete Immersive Safety Training Prototype",
      "Merging VR Hazard Environment, Trigger Detection, Scoring, Feedback, and AR Companion Concept",
      "Scenario Verification: Comprehensive Walkthrough and Edge-Case Validation",
      "Scoping and Academic Disclaimers (Educational Demonstration vs Industrial Certification)",
      "Packaging Project Artifacts, Source Repositories, and Video Walkthroughs"
    ],
    learningObjectives: [
      "Consolidate all Week 4 components into the cohesive 'Immersive Safety Training' major project.",
      "Execute an end-to-end verification run testing hazard triggers, quizzes, and score reporting.",
      "Articulate the educational prototype scope and limitations in project documentation.",
      "Demonstrate the companion AR safety prototype illustrating cross-platform integration."
    ],
    prerequisites: ["Days 22–27 completed"],
    teachingContent: [
      {
        sectionTitle: "1. Week 4 Integration: Immersive Safety Training",
        content: `Today students finalize our fourth major project: the 'Immersive Safety Training' prototype.\n\nProject Structure:\n• Environment: Industrial workshop with realistic machinery and 3 seeded hazards.\n• Event Engine: Proximity triggers and exposure timers tracking trainee safety violations.\n• Decision Station: World-space multiple choice terminals testing corrective actions.\n• Feedback System: Multisensory sirens, beacons, decals, and haptics.\n• Companion Prototype: Handheld AR overlay concept.\n\nMandatory Scoping Note: All project documentation and UI must explicitly declare: 'Educational Prototype — Not Certified for Real-World Industrial Safety Compliance'.`
      },
      {
        sectionTitle: "2. Rigorous End-to-End Verification",
        content: `Before final evaluation, verify:\n1. Zero console errors or unhandled null references.\n2. Both Safe and Unsafe paths can be traversed and scored correctly.\n3. Scoring calculations match rubric weightings.\n4. Audio triggers shut off cleanly upon exiting danger zones.`
      }
    ],
    instructorDemonstration: {
      title: "End-to-End Verification & Academic Defense Protocol",
      steps: [
        "Perform a full simulation run intentionally committing a safety violation to verify the alarm and penalty score.",
        "Perform a second run correctly identifying all hazards and executing the proper shutdown protocol.",
        "Demonstrate the companion AR diagnostic app running alongside.",
        "Review final project submission packaging."
      ],
      tips: "Remind students that software stability and edge-case handling are worth just as much as visual polish in production engineering."
    },
    handsOnLab: {
      title: "Finalizing the Immersive Safety Training Prototype",
      durationMinutes: 60,
      instructions: [
        "Assemble all workshop subsystems into the master simulation scene.",
        "Include the mandatory educational prototype disclaimer on the title and summary screens.",
        "Verify score persistence and summary report generation.",
        "Record a high-definition video walkthrough demonstrating both safe and unsafe branching paths."
      ],
      expectedResult: "A complete, verified Immersive Safety Training experience with working assessment reporting."
    },
    miniProject: {
      title: "Complete the Immersive Safety Training Prototype",
      description: "Finalize and test the complete Immersive Safety Training major project. Deliver a verified immersive simulation with realistic hazards, decision quizzes, multisensory feedback, scoring, and an accompanying AR companion prototype.",
      deliverable: "A tested immersive training experience and a demonstration of the AR companion concept (executable build or verified recording and repository).",
      checklist: [
        "Navigable industrial workshop with minimum 3 realistic hazards",
        "Functional hazard danger trigger zones and exposure timers",
        "Interactive decision quiz terminals with immediate feedback",
        "Multisensory warning systems (alarms, beacons, decals, haptics)",
        "Summary score report with pass/fail evaluation",
        "Clear educational prototype disclaimer prominently displayed",
        "Demonstration of the companion AR safety concept"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "OpenXR", "AR Foundation"],
      assessmentCriteria: [
        "Simulation completeness, interaction logic, and scoring (30%)",
        "Multisensory feedback polish and realism (25%)",
        "Companion AR prototype execution and conceptual coherence (25%)",
        "Documentation, ethical framing, and safety disclaimer compliance (20%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit Manual (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/index.html", type: "docs" },
      { title: "AR Foundation Documentation (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/", type: "docs" }
    ],
    reflectionQuestions: [
      "Why must commercial VR simulation developers clearly state software limitations and certification boundaries?",
      "What did you learn about the engineering challenges of pairing immersive VR training with handheld AR diagnostics?"
    ]
  }
];
