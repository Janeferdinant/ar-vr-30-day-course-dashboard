import { Lesson } from "@/types/course";

export const week1Lessons: Lesson[] = [
  {
    id: "day-1",
    day: 1,
    week: 1,
    duration: 1,
    title: "Introduction to AR, VR, MR, XR, and Applications",
    topics: [
      "Milgram's Reality-Virtuality Continuum",
      "Optical See-Through vs Video Pass-Through AR",
      "Virtual Reality Immersive Systems (6-DoF vs 3-DoF)",
      "Spatial Computing Ecosystem and Hardware Taxonomy",
      "Industry Case Studies: Healthcare, Architecture, Aerospace, and Gaming"
    ],
    learningObjectives: [
      "Differentiate between Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), and Extended Reality (XR).",
      "Explain the fundamental sensor pipelines required for spatial orientation and position tracking.",
      "Analyze at least five commercial applications of immersive technology across varying industries.",
      "Understand the course structure, milestones, and technical prerequisites."
    ],
    prerequisites: ["Basic computer literacy", "Familiarity with 3D concepts (X, Y, Z axes)"],
    teachingContent: [
      {
        sectionTitle: "1. The Reality-Virtuality Spectrum",
        content: `Extended Reality (XR) is an umbrella term encompassing Augmented Reality (AR), Mixed Reality (MR), and Virtual Reality (VR). In 1994, Paul Milgram and Fumio Kishino defined the 'Virtuality Continuum', describing a smooth transition between completely real physical environments and fully synthetic virtual environments.\n\nKey definitions:\n• Real Environment: The unmodified physical world.\n• Augmented Reality (AR): Digital synthetic overlays anchored to physical perception without occluding real-world geometry entirely.\n• Augmented Virtuality (AV): Real-world sensory inputs (e.g., live video feeds, real physical hands) mapped into a predominantly virtual space.\n• Virtual Reality (VR): Complete immersion where visual and auditory cues isolate the user from the physical room.\n• Mixed Reality (MR): The convergence where physical and digital objects co-exist and interact in real time.`
      },
      {
        sectionTitle: "2. Degrees of Freedom (DoF) and Spatial Tracking",
        content: `Understanding human motion tracking is central to spatial computing:\n• 3-DoF (Rotational): Pitch, Yaw, Roll. Used in simple viewers (Google Cardboard, legacy 360 video).\n• 6-DoF (Positional + Rotational): Includes translation along X (surge), Y (heave), and Z (sway). 6-DoF enables walking through virtual spaces, crouching, and reaching around obstacles.\n\nInside-Out vs Outside-In Tracking:\nModern headsets (Meta Quest, Apple Vision Pro, HTC Vive XR Elite) utilize 'Inside-Out' computer vision tracking with multiple optical cameras and Inertial Measurement Units (IMUs) running SLAM (Simultaneous Localization and Mapping).`
      }
    ],
    instructorDemonstration: {
      title: "Deconstructing an XR Hardware Stack & SLAM Demonstration",
      steps: [
        "Present optical tracking camera placements on a modern standalone XR headset.",
        "Demonstrate visual feature point tracking and point cloud reconstruction of the lecture room.",
        "Compare head-mounted display latency targets (<20ms motion-to-photon latency) versus standard monitor refresh rates."
      ],
      tips: "Emphasize that motion sickness in early VR stemmed primarily from latency exceeding 20ms and mismatched vestibular-ocular reflexes."
    },
    handsOnLab: {
      title: "Spatial Computing Taxonomy & Sensor Mapping",
      durationMinutes: 30,
      instructions: [
        "Identify 3 AR devices (e.g., Magic Leap 2, Apple Vision Pro, XREAL Air 2) and 3 VR headsets.",
        "Categorize their display architectures (waveguide vs micro-OLED passthrough).",
        "Document the tracking method (inside-out optical SLAM vs laser lighthouse outside-in).",
        "Compile findings into a structured taxonomy matrix."
      ],
      expectedResult: "A completed hardware analysis grid evaluating latency, field-of-view (FOV), and tracking fidelity."
    },
    miniProject: {
      title: "Create an AR/VR Use-Case Comparison Board",
      description: "Produce an analytical comparison board evaluating real-world spatial computing applications across healthcare, industrial maintenance, architectural visualization, aviation simulation, and education.",
      deliverable: "A visual comparison board with at least 5 application examples detailing problem solved, modality (AR vs VR), tracking requirements, and user benefit.",
      checklist: [
        "Include minimum 5 distinct industrial or academic use-cases",
        "Identify whether each uses AR, VR, or MR and explain why",
        "Detail required hardware specs (3-DoF vs 6-DoF, pass-through resolution)",
        "Highlight measured ROI or efficacy metrics (e.g. 40% reduction in training errors)"
      ],
      requiredSoftware: ["Miro / Figma or Markdown Presentation Canvas", "Web Browser"],
      assessmentCriteria: [
        "Accurate classification along Milgram's continuum (25%)",
        "Technical depth regarding sensor requirements (25%)",
        "Clarity of comparative analysis (25%)",
        "Completeness of real-world citations (25%)"
      ]
    },
    resources: [
      { title: "Milgram & Kishino (1994) Taxonomy Paper", url: "https://doi.org/10.1117/12.197316", type: "docs" },
      { title: "Unity XR Spatial Computing Overview", url: "https://learn.unity.com/pathway/vr-development", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why is optical see-through AR more challenging for outdoor lighting conditions than video pass-through?",
      "Under what operational conditions would a business choose 3-DoF over 6-DoF?"
    ]
  },
  {
    id: "day-2",
    day: 2,
    week: 1,
    duration: 2,
    title: "Unity Setup and the 3D Editor",
    topics: [
      "Unity Hub, LTS Releases, and Project Architecture",
      "The Editor Interface: Scene, Game, Hierarchy, Inspector, and Project Views",
      "GameObjects, Components, and the Entity-Component Paradigm",
      "Scene Navigation, Viewport Gizmos, and Snapping Tools",
      "Primitive 3D Meshes, Mesh Renderers, and Mesh Filters"
    ],
    learningObjectives: [
      "Install and configure Unity Hub with the 2022.3 LTS or Unity 6 LTS release.",
      "Navigate the Unity 3D viewport using standard hotkeys (Flythrough, Orbit, Pan, Frame).",
      "Construct composite geometric forms using primitive GameObjects.",
      "Inspect and configure GameObject components, understanding the decoupling of data and rendering."
    ],
    prerequisites: ["Completed Day 1 overview", "Unity Hub installed"],
    teachingContent: [
      {
        sectionTitle: "1. The Unity Scene Hierarchy and Component Model",
        content: `Unity uses a composition-over-inheritance architectural pattern. Every object in a 3D scene is a 'GameObject'. A GameObject alone has only one mandatory component: the 'Transform'.\n\nAll behaviors and visual representations come from attached components:\n• MeshFilter: Holds the 3D geometric mesh data (vertices, edges, normals, UVs).\n• MeshRenderer: Interfaces with the GPU to shade and rasterize the geometry using Materials.\n• Colliders: Define geometric boundaries for physics simulation and raycasting.\n• AudioSource, Light, Camera: Specialized sensory components.`
      },
      {
        sectionTitle: "2. Editor Viewports & Hotkey Fluency",
        content: `Mastering 3D navigation speed is vital:\n• Q: Hand Tool (Pan)\n• W: Move Tool (Translate gizmo)\n• E: Rotate Tool (Euler rotation gizmo)\n• R: Scale Tool (Extrude/contract gizmo)\n• F: Frame selected object\n• Right Click + WASD: First-person flythrough mode in Scene view.`
      }
    ],
    instructorDemonstration: {
      title: "Building an Architectural Room Shell Live",
      steps: [
        "Create a clean 3D Core Unity project using the Universal Render Pipeline (URP).",
        "Demonstrate unit scaling: 1 Unity Unit = 1 Real-World Meter (crucial for XR!).",
        "Construct room boundaries with primitive cubes using Vertex Snapping (V key)."
      ],
      tips: "Always instill the 1 Unit = 1 Meter golden rule on Day 2. If models are scaled arbitrarily, VR camera IPD and physics calculations will fail later."
    },
    handsOnLab: {
      title: "Constructing Scaled Architectural Volumes",
      durationMinutes: 60,
      instructions: [
        "Open Unity and initialize a new 3D URP project.",
        "Create a floor plane sized 6m x 6m (scale: 6, 1, 6).",
        "Build 4 surrounding walls with thickness 0.2m and height 3.0m.",
        "Add a doorway opening using two wall segments and a lintel block.",
        "Position the Main Camera at eye level (Y = 1.7m) facing the room center."
      ],
      expectedResult: "A fully enclosed, metric-scaled architectural room with proper camera framing."
    },
    miniProject: {
      title: "Build a Basic 3D Room",
      description: "Build an architectural 3D room in Unity matching real-world dimensions (minimum 5m x 4m x 2.8m) with floor, perimeter walls, a doorway opening, a skylight aperture, and an eye-height camera.",
      deliverable: "A Unity scene with floor, walls, camera, and lighting, organized into clean parent-child hierarchies.",
      checklist: [
        "Metric room dimensions strictly maintained (1 unit = 1 meter)",
        "Properly aligned walls with no light leaks or overlapping z-fighting",
        "Main Camera placed at Y = 1.6m - 1.7m (standard standing eye-height)",
        "Hierarchy grouped under clean empty parent GameObjects (e.g. '_Environment')"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Unity Hub"],
      assessmentCriteria: [
        "Dimensional accuracy and metric scale (30%)",
        "Hierarchy hygiene and naming conventions (30%)",
        "Camera composition and viewport framing (20%)",
        "Absence of z-fighting mesh overlap (20%)"
      ]
    },
    resources: [
      { title: "Unity Manual: GameObjects & Components", url: "https://docs.unity3d.com/Manual/class-GameObject.html", type: "docs" },
      { title: "Universal Render Pipeline Fundamentals", url: "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest", type: "docs" }
    ],
    reflectionQuestions: [
      "Why is maintaining a 1 Unity Unit = 1 Meter standard non-negotiable for AR and VR projects?",
      "What visual artifact occurs when two polygons share the exact same 3D spatial coordinate, and how do we prevent it?"
    ]
  },
  {
    id: "day-3",
    day: 3,
    week: 1,
    duration: 2,
    title: "Transformations, Coordinate Systems, Hierarchy, and Prefabs",
    topics: [
      "Cartesian Coordinates: Left-Handed vs Right-Handed Conventions",
      "Local vs World Transformations (Vectors, Euler Angles, and Quaternions)",
      "Scene Graphs, Parent-Child Matrix Concatenation, and Pivot Points",
      "Prefab Architecture: Assets, Instances, Overrides, and Nested Prefabs",
      "Modular Scene Construction Principles"
    ],
    learningObjectives: [
      "Understand Unity's left-handed coordinate system (+Y up, +X right, +Z forward).",
      "Calculate relative local offsets versus absolute world-space coordinates.",
      "Create, edit, and unpack Prefabs for modular reusable scene generation.",
      "Construct a multi-structure 3D campus using modular building blocks."
    ],
    prerequisites: ["Day 2 Unity Editor basics"],
    teachingContent: [
      {
        sectionTitle: "1. Coordinate Transformations & Vector Mathematics",
        content: `In 3D engines, space is calculated through hierarchical transformation matrices. When GameObject B is childed to GameObject A:\nWorldMatrix(B) = WorldMatrix(A) × LocalMatrix(B)\n\nImplications:\n• Moving or rotating the Parent moves/rotates all descendants.\n• Local Position is relative to the parent's pivot point.\n• World Position is relative to the scene origin (0, 0, 0).\n• Scaling a parent applies non-uniform shear to children if parent rotations are skewed.`
      },
      {
        sectionTitle: "2. The Power of Prefabs in XR Workflows",
        content: `A Prefab is an asset template stored in your Project directory. Changes to a Prefab asset automatically propagate to all scene instances.\n• Prefab Mode: Dedicated isolation workspace to edit assets without scene clutter.\n• Overrides: Instance-level modifications that can be applied back to the asset or reverted.\n• Nested Prefabs: Building complex assemblies (e.g. a 'CampusBuilding' composed of 'WallSegment' and 'WindowUnit' prefabs).`
      }
    ],
    instructorDemonstration: {
      title: "Modular Asset Creation & Pivot Point Manipulation",
      steps: [
        "Construct a modular archway and column assembly.",
        "Demonstrate creating an empty GameObject parent to adjust the pivot point to the bottom corner for grid snapping.",
        "Drag the GameObject into the Project window to generate a Prefab asset.",
        "Instantiate 10 copies and modify the master Prefab color to demonstrate real-time propagation."
      ],
      tips: "Explain why pivot point location matters for door hinges and rotating mechanisms in VR."
    },
    handsOnLab: {
      title: "Prefab-Driven Architectural Blockout",
      durationMinutes: 60,
      instructions: [
        "Create 3 distinct architectural prefabs: BuildingTower, ConnectingBridge, and CourtyardTree.",
        "Set custom pivot points at the base of each building.",
        "Assemble a 3-building layout using prefab instances.",
        "Apply an override to one instance and save it as a Prefab Variant."
      ],
      expectedResult: "A modular, organized 3D layout powered by Prefabs and Prefab Variants."
    },
    miniProject: {
      title: "Create a Miniature 3D Campus",
      description: "Design and organize a miniature 3D campus scene featuring at least 3 distinct building complexes, walkways, courtyards, and modular architectural structures built entirely using Prefabs.",
      deliverable: "An organised scene containing multiple buildings or structures utilizing prefab architecture with clean hierarchies.",
      checklist: [
        "Minimum 3 unique Prefab templates created in an Assets/Prefabs folder",
        "At least 6 instantiated buildings across a landscaped base plane",
        "Proper use of empty GameObject organizational folders in the Hierarchy",
        "At least one Prefab Variant created and styled distinctly"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6"],
      assessmentCriteria: [
        "Proper Prefab usage and asset hygiene (30%)",
        "Spatial layout, composition, and scale cohesion (30%)",
        "Parent-child hierarchy cleanliness (20%)",
        "Creativity in modular assembly (20%)"
      ]
    },
    resources: [
      { title: "Unity Prefab System Manual", url: "https://docs.unity3d.com/Manual/Prefabs.html", type: "docs" },
      { title: "Linear Algebra for Game Developers (Vectors & Matrices)", url: "https://learn.unity.com", type: "tutorial" }
    ],
    reflectionQuestions: [
      "What happens to a child's world scale when a parent GameObject is scaled non-uniformly (e.g. 1, 2, 0.5)?",
      "Why are Prefabs essential when collaborating in team Git repositories?"
    ]
  },
  {
    id: "day-4",
    day: 4,
    week: 1,
    duration: 2,
    title: "Materials, Textures, Lighting, and Cameras",
    topics: [
      "Physically Based Rendering (PBR) Workflows (Metallic vs Smoothness)",
      "Texture Maps: Albedo, Normal Maps, Height, Metallic, and Ambient Occlusion",
      "Light Types: Directional, Point, Spot, and Area Lights",
      "Direct vs Indirect Illumination, Realtime vs Baked Lightmaps",
      "Camera Optics: Field of View (FOV), Clipping Planes, Skyboxes, and Composition"
    ],
    learningObjectives: [
      "Configure PBR materials in the Universal Render Pipeline (URP).",
      "Use Normal Maps to simulate microscopic surface detail without adding polygon overhead.",
      "Differentiate between Directional (sunlight), Point (lamps), and Spot (flashlight) lighting.",
      "Set camera composition parameters and evaluate VR frame rate impact of real-time shadows."
    ],
    prerequisites: ["Day 2 & 3 hierarchy and 3D modeling fundamentals"],
    teachingContent: [
      {
        sectionTitle: "1. Physically Based Rendering (PBR) in Real-Time 3D",
        content: `PBR guarantees that materials respond photorealistically under any lighting environment by obeying conservation of energy.\nKey Texture Channels:\n• Base Map (Albedo): Pure surface diffuse color, free of pre-baked shadows.\n• Metallic: Greyscale map (0 = dielectric/plastic/wood, 1 = conductive metal).\n• Smoothness (Roughness inverse): Governs specular reflection sharpness.\n• Normal Map: Encodes surface angle deviations into RGB vectors (tangent space), creating the illusion of deep grooves, bricks, and bevels on flat geometry.`
      },
      {
        sectionTitle: "2. Lighting Architectures for XR Performance",
        content: `Real-time dynamic lights and real-time shadow casting are computationally expensive, particularly in VR where scenes must render twice (once per eye) at 72 to 120 FPS.\n• Baked Lighting: High-fidelity indirect bounces computed offline and baked into 2D Lightmap textures. Zero runtime GPU cost!\n• Mixed Lighting: Combines baked ambient bounce with dynamic shadows for moving avatars.`
      }
    ],
    instructorDemonstration: {
      title: "Transforming a Flat Room into a Photorealistic Interior",
      steps: [
        "Take the Day 2 architectural room.",
        "Create wood parquet, polished marble, and matte painted wall URP materials.",
        "Import and assign Normal Maps, showing the drastic change in depth under glancing light angles.",
        "Position a Directional sunlight casting soft shadows through a window aperture and warm Point lights on interior sconces."
      ],
      tips: "Demonstrate the Frame Debugger to show how many draw calls a single real-time shadow-casting light can add."
    },
    handsOnLab: {
      title: "PBR Interior Material & Lighting Lab",
      durationMinutes: 60,
      instructions: [
        "Download or create 3 PBR material sets (Albedo, Normal, Metallic/Smoothness).",
        "Apply them to the floor, walls, and ceiling of your interior room.",
        "Configure a 3-point lighting setup: Key Light (warm directional), Fill Light (subtle ambient sky), Rim Light (spotlight accent).",
        "Adjust Camera Near Clip to 0.1m and Far Clip to 100m to eliminate clipping glitches."
      ],
      expectedResult: "A richly shaded interior scene with realistic material reflections and depth."
    },
    miniProject: {
      title: "Design a Furnished Room",
      description: "Furnish and illuminate the 3D room designed on Day 2. Add realistic PBR materials, furniture props (tables, chairs, lamps), realistic lighting with shadows, and an atmospheric skybox.",
      deliverable: "A visually polished 3D interior featuring at least 4 custom PBR materials, multi-source lighting, and framed camera views.",
      checklist: [
        "At least 4 distinct PBR materials (wood, metal, fabric, stone)",
        "Proper normal map setup with appropriate visual depth",
        "Multi-source lighting with balanced ambient color temperature",
        "Camera framed with high visual fidelity and depth of field considerations"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Standard URP Material Pipeline"],
      assessmentCriteria: [
        "Visual aesthetics and material fidelity (35%)",
        "Lighting mood and shadow balance (35%)",
        "Clean asset organization and naming (15%)",
        "Viewport performance / absence of excessive overdraw (15%)"
      ]
    },
    resources: [
      { title: "Unity PBR Material Guidelines", url: "https://docs.unity3d.com/Manual/StandardShaderMaterialCharts.html", type: "docs" },
      { title: "URP Lighting Fundamentals", url: "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why must normal maps be marked as 'Normal map' type in the Unity Texture Importer?",
      "Why are real-time area lights generally restricted in standalone mobile VR hardware like Meta Quest 3?"
    ]
  },
  {
    id: "day-5",
    day: 5,
    week: 1,
    duration: 2,
    title: "C# Programming for Interactive 3D Applications",
    topics: [
      "C# Scripting Fundamentals for Unity: Classes, Namespaces, and Data Types",
      "The MonoBehaviour Lifecycle: Awake(), Start(), Update(), FixedUpdate()",
      "Component Access: GetComponent<T>(), SerializedField, and Public Variables",
      "Mathematical Movement: Vector3.Lerp, Time.deltaTime, and PingPong",
      "User Input Systems: Legacy Input vs Modern Input System"
    ],
    learningObjectives: [
      "Write clean C# MonoBehaviour scripts attached to GameObjects.",
      "Understand the execution order of unity events and the significance of Time.deltaTime for frame-rate independent motion.",
      "Expose parameters to the Unity Inspector using [SerializeField].",
      "Program an interactive 3D object that rotates, hovers, and responds to player interaction."
    ],
    prerequisites: ["Days 1–4 Unity fundamentals", "Basic programming knowledge (variables, if/else, methods)"],
    teachingContent: [
      {
        sectionTitle: "1. The MonoBehaviour Lifecycle Order",
        content: `Every interactive script in Unity inherits from 'MonoBehaviour'. Key lifecycle stages:\n• Awake(): Called immediately when the prefab/scene loads, before Start. Used for internal self-referential initialization.\n• Start(): Called on the frame when the script is enabled, before Update. Used for external dependencies.\n• Update(): Executed once every rendered frame. Variable delta time!\n• FixedUpdate(): Executed on a fixed physics interval (default 50Hz / 20ms). Used strictly for Rigidbody physics calculations.`
      },
      {
        sectionTitle: "2. Frame-Rate Independent Translation",
        content: `Because frame rates fluctuate (e.g. 60 FPS on laptop, 90 FPS in VR), calculating motion as:\ntransform.position += Vector3.forward * speed;\ncauses objects to move faster on high-refresh displays!\n\nSolution: Multiply by Time.deltaTime:\ntransform.position += Vector3.forward * (speed * Time.deltaTime);`,
        codeSnippet: {
          language: "csharp",
          title: "HoverAndRotate.cs",
          code: `using UnityEngine;\n\npublic class HoverAndRotate : MonoBehaviour\n{\n    [Header("Rotation Settings")]\n    [SerializeField] private Vector3 rotationSpeed = new Vector3(0f, 45f, 0f);\n\n    [Header("Hover Oscillation")]\n    [SerializeField] private float hoverAmplitude = 0.25f;\n    [SerializeField] private float hoverFrequency = 1.5f;\n\n    private Vector3 initialPosition;\n\n    private void Start()\n    {\n        initialPosition = transform.position;\n    }\n\n    private void Update()\n    {\n        // Frame-rate independent rotation\n        transform.Rotate(rotationSpeed * Time.deltaTime);\n\n        // Sinusoidal floating animation\n        float newY = initialPosition.y + Mathf.Sin(Time.time * hoverFrequency) * hoverAmplitude;\n        transform.position = new Vector3(transform.position.x, newY, transform.position.z);\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Interactive C# Component with Inspector Customization",
      steps: [
        "Create a new C# script 'InteractiveRelic.cs' and attach to a floating gem model.",
        "Demonstrate [SerializeField] private vs public fields in the Inspector.",
        "Implement mouse hover color changes using OnMouseEnter() and OnMouseExit().",
        "Demonstrate live tweaking of variables in Play Mode and explain why edits revert when stopping Play Mode."
      ],
      tips: "Show students the visual difference between Update() with and without Time.deltaTime by capping frame rates."
    },
    handsOnLab: {
      title: "Scripting an Oscillating Interactive 3D Artifact",
      durationMinutes: 60,
      instructions: [
        "Create a 3D pedestal with an animated floating crystal artifact.",
        "Write a C# script controlling continuous rotation around the Y axis.",
        "Add a floating sine wave oscillation.",
        "Add an interactive click handler that cycles the artifact's emission material color on click."
      ],
      expectedResult: "A smoothly hovering, spinning crystal that changes colors when clicked."
    },
    miniProject: {
      title: "Create a Rotating, Interactive Object",
      description: "Code a working C# script that controls an object's rotation, hover floating behavior, and reacts to player input (keyboard, mouse, or click) with dynamic speed or visual state changes.",
      deliverable: "A working C# script and Unity scene that controls an object's interactive behavior with clean code comments.",
      checklist: [
        "Script cleanly inherits from MonoBehaviour with serialized configuration fields",
        "Motion strictly multiplied by Time.deltaTime for frame-rate independence",
        "Provides user feedback (e.g. speed boost or color change) upon interaction",
        "Code adheres to C# naming conventions (PascalCase methods, camelCase variables)"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Visual Studio or VS Code / Rider"],
      assessmentCriteria: [
        "Code correctness and mathematical implementation (35%)",
        "Frame-rate independence via Time.deltaTime (25%)",
        "Inspector exposure and usability (20%)",
        "Code readability and comments (20%)"
      ]
    },
    resources: [
      { title: "Unity C# Scripting API Reference", url: "https://docs.unity3d.com/ScriptReference/", type: "docs" },
      { title: "Execution Order of Event Functions", url: "https://docs.unity3d.com/Manual/execution-order.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why should you never write physics forces inside Update() instead of FixedUpdate()?",
      "Why is [SerializeField] private preferred over public variables in professional Unity engineering?"
    ]
  },
  {
    id: "day-6",
    day: 6,
    week: 1,
    duration: 2,
    title: "Physics, Colliders, Triggers, UI, and Navigation",
    topics: [
      "Rigidbody Dynamics: Mass, Drag, Kinematic vs Non-Kinematic",
      "Collision Matrix: Box, Sphere, Capsule, and Mesh Colliders",
      "Physics Events: OnCollisionEnter vs OnTriggerEnter",
      "Unity UI (uGUI): Screen-Space vs World-Space Canvases",
      "Player Character Controller & Basic First-Person Navigation"
    ],
    learningObjectives: [
      "Simulate realistic physical motion using Unity's PhysX engine.",
      "Distinguish between hard physical collisions and trigger volume sensor zones.",
      "Implement a Heads-Up Display (HUD) displaying player score and interaction prompts.",
      "Script an interactive object-collection mechanic that updates game state."
    ],
    prerequisites: ["Day 5 C# fundamentals"],
    teachingContent: [
      {
        sectionTitle: "1. Collisions vs Triggers in PhysX",
        content: `Two GameObjects require Colliders to register physical contact. At least one must have a Rigidbody!\n• Non-Trigger Colliders: Calculate impulse forces, bounce, and friction. Triggers 'OnCollisionEnter(Collision collision)' with full contact point vectors.\n• IsTrigger = True: Intangible volume. Objects pass right through. Triggers 'OnTriggerEnter(Collider other)'. Perfect for pick-up items, zone boundaries, and safe zone detectors in XR.`
      },
      {
        sectionTitle: "2. Scripting a Collection Trigger & HUD Counter",
        content: `When the player touches a collectible, the item increments the game manager's score and destroys or disables itself.`,
        codeSnippet: {
          language: "csharp",
          title: "CollectibleItem.cs",
          code: `using UnityEngine;\n\npublic class CollectibleItem : MonoBehaviour\n{\n    [SerializeField] private int pointValue = 10;\n    [SerializeField] private AudioClip collectSound;\n    [SerializeField] private GameObject particleVFX;\n\n    private void OnTriggerEnter(Collider other)\n    {\n        if (other.CompareTag("Player"))\n        {\n            // Award points through Game Manager\n            GameManager.Instance.AddScore(pointValue);\n\n            // Spawn effect and audio\n            if (particleVFX != null)\n                Instantiate(particleVFX, transform.position, Quaternion.identity);\n\n            // Destroy collectible\n            Destroy(gameObject);\n        }\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Creating a Physics Playground & First-Person Controller",
      steps: [
        "Add a CharacterController to a Capsule GameObject representing the player.",
        "Demonstrate building a responsive first-person movement script with WASD and mouse-look.",
        "Scatter bouncy spheres with PhysicMaterials (bounciness = 0.9).",
        "Place floating coins with IsTrigger enabled and demonstrate tag-filtered detection."
      ],
      tips: "Warn students against using MeshColliders with non-convex settings on dynamic moving bodies, as PhysX will throw errors."
    },
    handsOnLab: {
      title: "Building an Interactive Collection Game Loop",
      durationMinutes: 60,
      instructions: [
        "Configure a player character with a First-Person Controller and Tag 'Player'.",
        "Create a Collectible Coin prefab with a rotating script and Sphere Collider set to IsTrigger.",
        "Build a simple Canvas with a TextMeshPro label showing 'Score: 0'.",
        "Write a GameManager singleton that tracks collected items and triggers a 'Victory!' UI banner when all items are collected."
      ],
      expectedResult: "A playable first-person scene where walking into coins increments the on-screen score until game completion."
    },
    miniProject: {
      title: "Create an Object-Collection Game",
      description: "Build a playable 3D object-collection prototype in Unity. Include a first-person or third-person navigable player, at least 5 collectible items with trigger detection, audio or visual feedback, and a live UI score display.",
      deliverable: "A playable prototype with scoring or collection feedback and a functioning HUD.",
      checklist: [
        "Working player movement and camera controls",
        "At least 5 collectible items distributed throughout the room or campus",
        "Trigger volumes reliably detect player collision via Tags",
        "UI canvas displays real-time score updates",
        "Audio or particle feedback triggered upon collection"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "TextMeshPro"],
      assessmentCriteria: [
        "Gameplay functionality and control smoothness (35%)",
        "Physics and trigger configuration accuracy (25%)",
        "UI clarity and responsiveness (20%)",
        "User feedback polish (visuals/audio) (20%)"
      ]
    },
    resources: [
      { title: "Unity Physics Engine Overview", url: "https://docs.unity3d.com/Manual/PhysicsOverview.html", type: "docs" },
      { title: "TextMeshPro User Guide", url: "https://docs.unity3d.com/Packages/com.unity.textmeshpro@latest", type: "docs" }
    ],
    reflectionQuestions: [
      "Why is CharacterController often preferred over Rigidbody for player movement in indoor simulation environments?",
      "What is the performance implication of checking gameObject.tag == 'Player' versus other.CompareTag('Player')?"
    ]
  },
  {
    id: "day-7",
    day: 7,
    week: 1,
    duration: 2,
    title: "Week 1 Integration and Presentation",
    topics: [
      "Project Architecture Review and Asset Hygiene",
      "Scene Optimization: Occlusion Culling, Static Batching, and Lighting Bake",
      "Building the 3D Interactive World (Major Project 1)",
      "Standalone Executable Builds (Windows/Mac/WebGL)",
      "Peer Review Rubrics and Technical Demonstration Protocols"
    ],
    learningObjectives: [
      "Integrate architecture, PBR materials, dynamic lighting, C# interactivity, and UI into a cohesive world.",
      "Profile scene performance and configure static flags for draw-call batching.",
      "Create a standalone executable build of Week 1's Major Project.",
      "Present and defend the technical implementation during live peer review."
    ],
    prerequisites: ["Days 1–6 complete code and environment assets"],
    teachingContent: [
      {
        sectionTitle: "1. Week 1 Culmination: 3D Interactive World",
        content: `Today marks the integration of Week 1's foundational skills into our first major project: the '3D Interactive World'.\n\nQuality Criteria Checklist:\n• Consistent Architectural Scale (1 Unit = 1m).\n• Rich PBR Materials with Normal and Roughness variation.\n• Balanced Atmosphere: Directional sunlight + localized point/spot accent lights.\n• Interactivity: C# scripts handling object transformation, physics triggers, and player state.\n• User Experience: On-screen instructions and HUD feedback.`
      },
      {
        sectionTitle: "2. Build Settings and Optimization Verification",
        content: `Before creating a standalone build, mark all immovable environment geometry as 'Static'. This allows Unity to perform:\n1. Static Batching: Combines multiple identical meshes to slash draw calls from 100+ down to <20.\n2. Lightmapping: Pre-baking soft indirect ambient occlusion.\n3. Occlusion Culling: Eliminates hidden polygons behind walls from rendering.`
      }
    ],
    instructorDemonstration: {
      title: "Project Profiling & Production Build Workflow",
      steps: [
        "Open the Unity Profiler (Ctrl+7) and inspect Rendering & CPU frame times.",
        "Demonstrate Static Batching reduction in Batches/SetPass Calls using the Game view Stats overlay.",
        "Configure Build Settings: Scene list, Target Platform, Fullscreen mode.",
        "Produce an optimized standalone Windows 64-bit build."
      ],
      tips: "Show students how forgotten unreferenced textures in the Project tab can bloat build sizes if not properly cleaned."
    },
    handsOnLab: {
      title: "Polishing, Profiling & Standalone Compilation",
      durationMinutes: 60,
      instructions: [
        "Consolidate all Week 1 assets into the final 3D Interactive World scene.",
        "Audit the Hierarchy: Ensure zero console warnings or errors.",
        "Set all static geometry to 'Static' and verify draw call reduction.",
        "Export a standalone Windows or WebGL build and test execution outside the Unity editor."
      ],
      expectedResult: "A verified standalone executable build delivering a stable 60+ FPS."
    },
    miniProject: {
      title: "Complete the 3D Interactive World",
      description: "Finalize and integrate the 3D Interactive World major project. Present a fully navigable, furnished environment featuring interactive elements, audio feedback, physics triggers, and a polished user interface.",
      deliverable: "A working 3D environment and short project demonstration (executable build or verified recording and repository).",
      checklist: [
        "Complete 3D room or campus scene with furnished interiors",
        "Minimum 3 distinct interactive C# scripts functioning simultaneously",
        "Physics triggers with particle/sound/UI feedback",
        "Executable build exported and tested without crashes",
        "Project repository committed with clean .gitignore"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Git"],
      assessmentCriteria: [
        "Visual design, lighting, and material cohesion (30%)",
        "Technical execution of C# scripts and physics (30%)",
        "Scene optimization and frame stability (20%)",
        "Presentation clarity and documentation (20%)"
      ]
    },
    resources: [
      { title: "Unity Profiler Documentation", url: "https://docs.unity3d.com/Manual/Profiler.html", type: "docs" },
      { title: "Unity Build Pipeline", url: "https://docs.unity3d.com/Manual/BuildSettings.html", type: "docs" }
    ],
    reflectionQuestions: [
      "What was the single greatest performance bottleneck you discovered in your scene when profiling?",
      "How do the 3D foundations built this week translate directly into Augmented and Virtual Reality workflows in Weeks 2 and 3?"
    ]
  }
];
