import { MajorProject } from "@/types/course";

export const majorProjects: MajorProject[] = [
  {
    id: "project-1",
    week: 1,
    title: "3D Interactive World",
    durationHours: 13,
    description: "Students create a fully realized 3D room or campus environment featuring architectural models, PBR materials, custom lighting, navigation controls, and interactive C# elements with physics triggers.",
    problemStatement: "Modern spatial applications require solid 3D foundational mechanics before introducing headset tracking. Developers must master metric scaling, coordinate transformations, asset hierarchy, lighting optimization, and event-driven C# interactivity in an immersive desktop prototype.",
    learningOutcomes: [
      "Construct metric-scaled 3D environments maintaining a strict 1 unit = 1 meter standard.",
      "Author and apply PBR material textures (Albedo, Normal, Metallic/Smoothness) for realistic light response.",
      "Configure static batching and lighting systems to maintain stable 60+ FPS performance.",
      "Script responsive C# MonoBehaviour components managing user navigation, physics triggers, and HUD state."
    ],
    functionalRequirements: [
      "Metric-scaled 3D architecture: minimum 1 furnished room or 3-building campus complex.",
      "Custom PBR materials with normal mapping and balanced direct/indirect illumination.",
      "First-person or third-person player navigation with collision boundaries preventing wall clipping.",
      "At least 3 distinct interactive GameObjects controlled via custom C# scripts (e.g. rotating relics, moving doors, collectible items).",
      "Heads-Up Display (HUD) displaying real-time interaction feedback or score metrics.",
      "Audio and visual particle effects triggered upon player interaction."
    ],
    suggestedArchitecture: `3D World Architecture:
- Scene Manager (GameManager.cs)
  ├── Environment Root (Static geometry, Baked lightmaps, Colliders)
  ├── Player Rig (CharacterController, FirstPersonMovement.cs, Camera)
  ├── Interactive Objects (HoverAndRotate.cs, TriggerZone.cs, AudioSource)
  └── UI Canvas (HUDManager.cs, TextMeshPro Scoreboard)`,
    requiredAssets: [
      "Modular 3D architectural kit (walls, floors, doors, columns)",
      "PBR texture packs (wood, metal, concrete, glass)",
      "Custom C# movement and interaction scripts",
      "Ambient industrial/environmental sound effects and interaction chimes"
    ],
    milestones: [
      {
        id: "m1-1",
        title: "Milestone 1: Architectural Blockout & Metric Scaling",
        description: "Construct the complete geometric room or campus shell with strictly verified 1 Unit = 1 Meter metric scaling.",
        deliverable: "Enclosed 3D scene with floors, perimeter walls, doorways, and camera framing."
      },
      {
        id: "m1-2",
        title: "Milestone 2: PBR Texturing & Multi-Source Lighting",
        description: "Apply realistic PBR materials with normal maps and configure balanced directional and point lighting with soft shadows.",
        deliverable: "Textured and illuminated scene with zero z-fighting and optimized light parameters."
      },
      {
        id: "m1-3",
        title: "Milestone 3: Interactive C# Scripting & Physics Triggers",
        description: "Implement interactive scripts: object oscillation, physics triggers, collectible mechanics, and sound triggers.",
        deliverable: "Functioning C# scripts operating cleanly with frame-rate independent Time.deltaTime."
      },
      {
        id: "m1-4",
        title: "Milestone 4: UI HUD Integration & Standalone Build",
        description: "Add a real-time HUD scoreboard, profile scene performance, and compile a standalone Windows/Mac/WebGL build.",
        deliverable: "Verified standalone executable build and git repository with clean commit history."
      }
    ],
    testingChecklist: [
      "Player controller cannot penetrate solid perimeter walls or obstacles",
      "Frame rate stays above 60 FPS in 1080p full-screen mode",
      "C# scripts throw zero null reference exceptions or warnings in console",
      "All interactable items reset properly upon restarting the scene",
      "Camera near-clip plane prevents see-through polygon artifacts"
    ],
    submissionRequirements: [
      "Compiled standalone executable build or verified WebGL demonstration link",
      "Public or accessible GitHub repository containing source code and clean .gitignore",
      "Short 60-second video walkthrough demonstrating navigation and interactions",
      "Completed testing checklist and self-evaluation reflection"
    ],
    rubric: [
      {
        criteria: "3D Environment & Architectural Cohesion",
        weightPercentage: 25,
        description: "Evaluates scale accuracy, mesh alignment, visual hierarchy, and spatial composition.",
        exemplary: "Flawless metric scale, rich architectural variety, zero light leaks or z-fighting.",
        proficient: "Consistent scale and good layout with minor cosmetic alignment flaws.",
        developing: "Disproportionate scale, visible polygon gaps, or unaligned geometry."
      },
      {
        criteria: "PBR Materials & Lighting Atmosphere",
        weightPercentage: 25,
        description: "Evaluates texture quality, normal mapping depth, shadow quality, and mood.",
        exemplary: "Superb PBR textures with realistic roughness variation and balanced illumination.",
        proficient: "Adequate PBR texturing and functional lighting with decent shadow contrast.",
        developing: "Flat untextured surfaces, blown-out lighting, or harsh uncalibrated shadows."
      },
      {
        criteria: "C# Scripting & Physics Interactivity",
        weightPercentage: 30,
        description: "Evaluates code cleanliness, MonoBehaviour lifecycle usage, physics triggers, and player controls.",
        exemplary: "Modular, well-commented C# code, zero GC in update loop, smooth fluid controls.",
        proficient: "Working scripts with minor naming inconsistencies; controls function reliably.",
        developing: "Buggy or unresponsive scripts, frame-rate dependent motion, console errors."
      },
      {
        criteria: "Optimization & Build Quality",
        weightPercentage: 20,
        description: "Evaluates frame rate stability, static batching, UI polish, and standalone compilation.",
        exemplary: "Maintains 60+ FPS, draw calls heavily batched, flawless standalone execution.",
        proficient: "Solid frame rate with occasional drops; builds and executes without crashing.",
        developing: "High draw calls causing lag; build fails to compile or crashes on launch."
      }
    ],
    extensionChallenges: [
      "Implement a day/night directional sunlight rotation with dynamic skybox blending.",
      "Add an interactive minimap in the corner of the HUD showing player position.",
      "Implement persistent high-score saving using PlayerPrefs or JSON serialization."
    ]
  },
  {
    id: "project-2",
    week: 2,
    title: "AR Learning Companion",
    durationHours: 13,
    description: "Students build a mobile Augmented Reality educational application that anchors a multi-part 3D educational model to target images or tabletop surfaces, featuring multi-touch manipulation, floating billboarding labels, and audio explanations.",
    problemStatement: "Traditional textbooks present complex 3D phenomena (anatomy, planetary mechanics, engineering assemblies) as static 2D illustrations. AR bridges this pedagogical gap by superimposing interactive, metric-scaled 3D digital twins directly over learning materials.",
    learningOutcomes: [
      "Deploy AR Foundation multiplatform pipelines utilizing ARCore and ARKit.",
      "Synthesize marker-based image tracking and surface plane detection into a unified experience.",
      "Process multi-touch mobile gestures for constrained rotation, scale, and pan operations.",
      "Author world-space educational annotations with dynamic billboarding and spatial audio narration."
    ],
    functionalRequirements: [
      "Image marker tracking or horizontal plane detection for anchoring 3D content in physical space.",
      "Interactive 3D educational model (e.g., biological organ, planetary body, or mechanical assembly).",
      "Touch gesture manipulation: single-finger yaw rotation and two-finger pinch-to-scale with strict clamping.",
      "At least 3 interactive hotspot annotations connected to components via LineRenderers.",
      "World-space billboarding text panels that remain legible from any viewing angle.",
      "Synchronized voiceover narration or educational sound effects upon selecting parts.",
      "Graceful tracking-loss recovery and battery-saving plane pausing after initial placement."
    ],
    suggestedArchitecture: `AR Learning Companion Architecture:
- XR Origin (Mobile AR)
  ├── AR Tracked Image Manager / AR Plane Manager
  ├── AR Raycast Manager
  └── AR Camera with Tracked Pose Driver & Camera Background
- Content Controller (ARLearningCompanion.cs)
  ├── Touch Gesture Handler (Lean/Custom Touch Input)
  ├── Annotation Billboard Manager
  ├── Audio Narration Sequencer
  └── Tracking Status Diagnostic HUD`,
    requiredAssets: [
      "Detailed 3D educational model with separated component meshes",
      "High-contrast printable reference image target (score > 75)",
      "High-contrast UI icon set and clean sans-serif typography",
      "Educational audio voiceover narration clips"
    ],
    milestones: [
      {
        id: "m2-1",
        title: "Milestone 1: AR Foundation Setup & Tracking Pipeline",
        description: "Configure AR Session, XR Origin, and verify camera pass-through and plane/marker detection.",
        deliverable: "Verified tracking scene running in editor simulation or on mobile device."
      },
      {
        id: "m2-2",
        title: "Milestone 2: 3D Model Anchoring & Touch Manipulation",
        description: "Anchor the educational 3D model to the detected plane/card and implement rotation and pinch-to-scale gestures.",
        deliverable: "Manipulable 3D asset responding to single-finger twist and two-finger zoom with clamping."
      },
      {
        id: "m2-3",
        title: "Milestone 3: World-Space Billboarding Annotations & Audio",
        description: "Create floating informational cards that billboard toward the camera, linked by 3D leader lines, with audio triggers.",
        deliverable: "Interactive educational hotspots with audio playback and legible text panels."
      },
      {
        id: "m2-4",
        title: "Milestone 4: Performance Optimization & Mobile Packaging",
        description: "Disable plane detection post-placement, optimize texture memory, and compile mobile package/recording.",
        deliverable: "Complete mobile APK / test recording with tracking recovery handling and project README."
      }
    ],
    testingChecklist: [
      "3D model remains anchored without excessive drift or jitter during camera panning",
      "Pinch-to-scale enforces strict minimum (0.2x) and maximum (2.5x) boundaries",
      "UI labels remain legible and dark-backed against bright physical backgrounds",
      "Plane detection pauses after placement to conserve device battery and thermals",
      "Application recovers smoothly when tracking is momentarily obstructed"
    ],
    submissionRequirements: [
      "Mobile APK or verified XR Simulation video capture demonstrating marker and plane tracking",
      "Git repository link with full source code and clean asset structure",
      "Printable marker graphic PDF (if marker-based)",
      "Technical report explaining tracking parameters and mobile optimization strategies"
    ],
    rubric: [
      {
        criteria: "AR Tracking Stability & Alignment",
        weightPercentage: 30,
        description: "Evaluates marker detection speed, surface hit-testing accuracy, and stability under movement.",
        exemplary: "Instantaneous lock, zero drift, seamless tracking-loss recovery guidance.",
        proficient: "Reliable tracking with minor jitter under rapid device motion.",
        developing: "Frequent tracking drops, floating objects misaligned with physical surfaces."
      },
      {
        criteria: "Touch Manipulation & Gesture Ergonomics",
        weightPercentage: 25,
        description: "Evaluates single and multi-touch responsiveness, scale constraints, and gesture damping.",
        exemplary: "Fluid rotation and zoom, natural damping, strictly enforced physical scale boundaries.",
        proficient: "Responsive gestures with adequate clamping and acceptable touch targets.",
        developing: "Unconstrained scaling causing clipping, jerky rotation, or gesture conflicts."
      },
      {
        criteria: "Educational Value & World-Space UI",
        weightPercentage: 25,
        description: "Evaluates pedagogical depth, billboarding text legibility, leader lines, and audio narration.",
        exemplary: "Exceptional educational depth, crystal-clear billboarding, synchronized narration.",
        proficient: "Solid educational information with readable labels and working audio cues.",
        developing: "Sparse content, labels unreadable at oblique angles, or missing audio."
      },
      {
        criteria: "Mobile Performance & Thermal Hygiene",
        weightPercentage: 20,
        description: "Evaluates frame stability, texture compression, and battery-conscious resource management.",
        exemplary: "Rock-solid 60 FPS, ASTC texture compression, plane detection auto-sleep verified.",
        proficient: "Acceptable frame rate with standard textures and basic optimization.",
        developing: "Severe frame drops, excessive device heating, or memory crashes."
      }
    ],
    extensionChallenges: [
      "Implement an AR occlusion shader so real-world hands appear in front of the virtual model.",
      "Add an exploded-view animation slider separating all internal sub-assemblies smoothly.",
      "Integrate multilingual audio narration selectable via an on-screen language switcher."
    ]
  },
  {
    id: "project-3",
    week: 3,
    title: "VR Laboratory",
    durationHours: 13,
    description: "Students build an interactive virtual laboratory environment featuring comfortable spatial locomotion, near/far object grabbing, physical socket snapping, a world-space instructional board, and 3D spatial audio.",
    problemStatement: "Physical laboratory education faces logistical barriers including high reagent costs, hazardous chemical exposure, and limited equipment access. A high-fidelity VR laboratory enables risk-free experimental rehearsal with authentic spatial hand interaction and physical feedback.",
    learningOutcomes: [
      "Implement cross-platform OpenXR interaction pipelines via Unity's XR Interaction Toolkit.",
      "Design comfortable, nausea-free VR locomotion using parabolic teleportation and snap turning.",
      "Configure direct and ray interactors with custom attach transforms, velocity-tracked throwing, and haptics.",
      "Build socket interactor mechanisms with interaction layer masks for guided component assembly."
    ],
    functionalRequirements: [
      "Metric-scaled virtual laboratory room adhering to VR comfort and reach envelopes.",
      "Comfortable locomotion: Parabolic arc teleportation and snap turning (30°/45°).",
      "Near-field direct grabbing and far-field ray grabbing with controller haptic feedback.",
      "Physics-based object handling with velocity tracking for realistic momentum and throwing.",
      "At least 2 socket snap points for assembling scientific equipment or chemical apparatus.",
      "Interaction Layer Masks restricting sockets to designated valid components.",
      "Diegetic or curved world-space instructional board with TrackedDeviceGraphicRaycaster controls.",
      "HRTF spatial audio for equipment humming, fluid pouring, and state chimes.",
      "Kill-plane respawn trigger recovering tools dropped out of reach."
    ],
    suggestedArchitecture: `VR Laboratory Architecture:
- XR Origin (VR)
  ├── Locomotion System (Teleportation Provider, Snap Turn Provider)
  ├── Left Hand (XR Direct Interactor, XR Ray Interactor, Haptics)
  └── Right Hand (XR Direct Interactor, XR Ray Interactor, Haptics)
- Laboratory Environment
  ├── Workstation (Static geometry, Teleportation Areas/Anchors)
  ├── Interactable Tools (XRGrabInteractable, Velocity Tracking, AudioSource)
  ├── Assembly Station (XRSocketInteractor, Interaction Layer Masks)
  ├── Instruction Board (World Space Canvas, TrackedDeviceGraphicRaycaster)
  └── Safety Bounds (KillPlaneRespawn.cs)`,
    requiredAssets: [
      "Modular laboratory furniture (benches, fume hoods, shelves)",
      "Scientific equipment 3D models (beakers, flasks, burners, pipettes)",
      "3D spatial audio sound clips (glass clinking, bubbling, electrical humming)",
      "Curved UI canvas prefabs with laser-interactable button shaders"
    ],
    milestones: [
      {
        id: "m3-1",
        title: "Milestone 1: OpenXR Configuration & Ergonomic Layout",
        description: "Set up the XR Origin, configure 6-DoF controllers, and block out the laboratory with ergonomic reach zones.",
        deliverable: "Functional OpenXR rig operating smoothly in headset or XR Device Simulator."
      },
      {
        id: "m3-2",
        title: "Milestone 2: Locomotion & Physics Tool Handling",
        description: "Implement parabolic teleportation, snap turn, and direct/ray grabbing with velocity tracking throwing.",
        deliverable: "Navigable laboratory with interactable laboratory tools and controller haptic pulses."
      },
      {
        id: "m3-3",
        title: "Milestone 3: Sockets, Assembly & Spatial Audio",
        description: "Configure socket interactors with layer masks for multi-part apparatus assembly and 3D HRTF audio.",
        deliverable: "Functional equipment assembly station with holographic preview snapping."
      },
      {
        id: "m3-4",
        title: "Milestone 4: Instructional UI & End-to-End Experiment",
        description: "Add a world-space instruction board guiding a 3-step experiment and implement an out-of-bounds respawn trigger.",
        deliverable: "Tested VR laboratory executable build with zero dropped frames and full experiment flow."
      }
    ],
    testingChecklist: [
      "Headset tracking maintains minimum 72 FPS (or 90 FPS) without reprojection stutters",
      "Teleportation arc lands strictly on designated floor surfaces with clear orientation",
      "Grabbed items align naturally in virtual hands without awkward wrist rotation",
      "Sockets accept only compatible items and reject incompatible laboratory tools",
      "Dropped objects that fall through geometry respawn safely back onto the workbench"
    ],
    submissionRequirements: [
      "Standalone VR build (Windows OpenXR / Quest APK) or verified simulator video capture",
      "Public GitHub repository with clean OpenXR project settings",
      "First-person video demonstration walking through the complete laboratory experiment",
      "VR comfort and ergonomics documentation matrix"
    ],
    rubric: [
      {
        criteria: "VR Interaction Fidelity & Physics",
        weightPercentage: 30,
        description: "Evaluates direct/ray grabbing, hand ergonomics, velocity throwing, and socket mechanics.",
        exemplary: "Flawless grab alignment, natural throwing momentum, precise socket snapping.",
        proficient: "Reliable grabbing and throwing with working sockets and minor alignment quirks.",
        developing: "Jittery physics, objects clipping through tables, or unreliable sockets."
      },
      {
        criteria: "Locomotion Comfort & Motion Sickness Prevention",
        weightPercentage: 25,
        description: "Evaluates teleportation arc precision, snap turning, and absence of vestibular nausea triggers.",
        exemplary: "Comfortable teleportation, perfect snap angles, zero artificial acceleration.",
        proficient: "Functional teleportation and snap turning adhering to standard comfort guidelines.",
        developing: "Disorienting camera movement, clipping through walls, or nausea-inducing motion."
      },
      {
        criteria: "Instructional Spatial UI & Audio",
        weightPercentage: 25,
        description: "Evaluates world-space canvas legibility, laser interaction, and HRTF 3D spatial acoustics.",
        exemplary: "Curved legible UI, responsive laser clicks, realistic 3D acoustic immersion.",
        proficient: "Readable flat UI board with working laser raycast and basic 3D sound effects.",
        developing: "Tiny unreadable text, laser pointer misses buttons, or flat 2D mono audio."
      },
      {
        criteria: "Frame Stability & Edge-Case Robustness",
        weightPercentage: 20,
        description: "Evaluates frame timing budgets (<11.1ms), draw call batching, and object respawn safety.",
        exemplary: "Stable 90 FPS, zero garbage collection spikes, robust respawn kill-plane.",
        proficient: "Stable 72 FPS with occasional minor frame drops; handles dropped objects.",
        developing: "Sub-60 FPS causing severe jitter; lost objects disappear permanently."
      }
    ],
    extensionChallenges: [
      "Implement a dynamic liquid pouring shader that transfers volume between beakers.",
      "Add a Bunsen burner with a flame particle system that heats solutions and changes chemical colors.",
      "Integrate hand-tracking gestures (pinch, poke) alongside physical controllers."
    ]
  },
  {
    id: "project-4",
    week: 4,
    title: "Immersive Safety Training",
    durationHours: 13,
    description: "Students develop a hazard-recognition simulation featuring an industrial workshop environment, interactive decision branches, scoring algorithms, multisensory warning systems, and a companion AR prototype.",
    educationalDisclaimer: "Educational Prototype: This simulation is designed strictly for academic demonstration and instructional prototyping. It is NOT certified for real-world industrial safety compliance or commercial OSHA qualification.",
    problemStatement: "Industrial safety protocols are frequently taught via passive video lectures, resulting in poor hazard recognition and procedural recall. An immersive simulation allows trainees to safely experience the consequences of unsafe decisions while reinforcing emergency protocols through active engagement.",
    learningOutcomes: [
      "Architect complex branching scenario simulations in virtual reality.",
      "Implement invisible 3D spatial hazard trigger volumes with exposure tracking.",
      "Build decision-based quiz terminals that score safety actions and enforce failure states.",
      "Integrate tri-channel multisensory feedback (visual strobes, 3D sirens, and controller haptics).",
      "Design a companion handheld AR prototype illustrating cross-device spatial safety workflows."
    ],
    functionalRequirements: [
      "Industrial workshop scene with realistic machinery, walkways, and at least 3 distinct hazards (e.g. high-voltage arc, flammable spill, missing machine guard).",
      "Hazard detection engine monitoring player proximity and calculating cumulative exposure time.",
      "Interactive world-space decision quiz terminal offering corrective actions and equipment choices.",
      "Dynamic scoring algorithm calculating protocol adherence, time penalties, and fatal infraction disqualifications.",
      "Multisensory emergency feedback: rotating warning beacons, floor hazard decals, spatial sirens, and controller vibrations.",
      "Prominent educational prototype disclaimer displayed on opening and summary screens.",
      "Accompanying AR companion prototype demonstrating machine diagnostics and safety overlays."
    ],
    suggestedArchitecture: `Immersive Safety Training Architecture:
- Scenario Controller (SafetySimulationManager.cs)
  ├── Briefing & State Machine (Intro, Inspection, Intervention, Debrief)
  ├── Hazard Detector Network (HazardTriggerZone.cs, Event Broadcaster)
  ├── Decision & Quiz Engine (SafetyQuizTerminal.cs, ScoreCalculator.cs)
  └── Multisensory Alert Dispatcher (WarningBeacon, SpatialAudio, HapticPulse)
- Cross-Platform Companion (AR Safety Inspector)
  └── Machine Marker Tracker & Telemetry Overlay Canvas`,
    requiredAssets: [
      "Industrial warehouse / workshop 3D modular assets and machinery",
      "OSHA / ISO compliant safety sign textures and decal graphics",
      "Emergency warning audio effects (klaxons, electrical buzzing, sirens)",
      "Particle systems for industrial sparks, chemical fumes, and smoke"
    ],
    milestones: [
      {
        id: "m4-1",
        title: "Milestone 1: Scenario Storyboard & Workshop Environment",
        description: "Author scenario flow diagrams and construct the industrial workshop with 3 seeded hazards and clear corridors.",
        deliverable: "Storyboard flowchart and completed 3D workshop environment."
      },
      {
        id: "m4-2",
        title: "Milestone 2: Spatial Hazard Triggers & Event Engine",
        description: "Implement trigger zones that track player proximity, exposure duration, and fire decoupled C# violation events.",
        deliverable: "Event-driven hazard detection system logging violations with duration counters."
      },
      {
        id: "m4-3",
        title: "Milestone 3: Decision Quizzes, Feedback & Scoring",
        description: "Build world-space quiz terminals with branching consequences, alarms, warning decals, and scoring logic.",
        deliverable: "Working decision terminals with multisensory feedback and score summaries."
      },
      {
        id: "m4-4",
        title: "Milestone 4: AR Companion Prototype & Final Polish",
        description: "Build the companion AR safety diagnostic overlay, verify simulation end-to-end, and document limitations.",
        deliverable: "Tested safety simulation, companion AR prototype, and comprehensive project report."
      }
    ],
    testingChecklist: [
      "Player entering hazard zone triggers warning within 200ms",
      "Score penalties accurately reflect severity of committed safety infractions",
      "Fatal violations (e.g. touching live 480V wire) trigger immediate failure debrief",
      "Warning alarms shut off or reset upon exiting danger zones",
      "Prominent educational prototype disclaimer appears on all title and summary screens"
    ],
    submissionRequirements: [
      "Complete simulation executable build and accompanying AR companion prototype",
      "Public GitHub repository with documented architecture and scenario branching diagrams",
      "Full video walkthrough demonstrating both successful safety protocol and violation failure state",
      "Final technical report discussing simulation fidelity, accessibility, and educational scope"
    ],
    rubric: [
      {
        criteria: "Simulation Architecture & Hazard Detection",
        weightPercentage: 30,
        description: "Evaluates event-driven architecture, trigger detection precision, exposure timers, and state management.",
        exemplary: "Elegant decoupled event architecture, flawless hazard timing, robust state progression.",
        proficient: "Working trigger zones with reliable event firing and functional state machine.",
        developing: "Brittle trigger logic, missed violations, or monolithic unmaintainable code."
      },
      {
        criteria: "Decision Interactivity & Pedagogical Scoring",
        weightPercentage: 25,
        description: "Evaluates quiz terminal usability, branching consequences, and scoring algorithm fairness.",
        exemplary: "Engaging decision points, clear pedagogical feedback, nuanced weighted scoring.",
        proficient: "Functional quiz stations with correct score calculations and helpful feedback.",
        developing: "Confusing questions, broken scoring calculations, or missing feedback."
      },
      {
        criteria: "Multisensory Feedback & Polish",
        weightPercentage: 25,
        description: "Evaluates visual beacons, decals, spatial sirens, particle effects, and haptic warnings.",
        exemplary: "Urgent, synchronized multisensory warnings adhering to photosensitivity safety guidelines.",
        proficient: "Working alarms, lights, and haptics delivering clear hazard warnings.",
        developing: "Weak or unsynchronized feedback, missing audio, or jarring strobe effects."
      },
      {
        criteria: "AR Companion Prototype & Documentation",
        weightPercentage: 20,
        description: "Evaluates companion AR prototype integration, documentation quality, and explicit educational scoping.",
        exemplary: "Cohesive AR diagnostic prototype, clear documentation, transparent educational framing.",
        proficient: "Working AR concept with solid documentation and visible disclaimer.",
        developing: "Missing AR companion, inadequate documentation, or unverified safety claims."
      }
    ],
    extensionChallenges: [
      "Integrate an interactive virtual fire extinguisher with PASS protocol (Pull, Aim, Squeeze, Sweep).",
      "Implement real-time session replay showing the trainee's movement path through the workshop from a top-down view.",
      "Add a simulated multi-user spectator mode allowing instructors to observe trainee decisions remotely."
    ]
  }
];
