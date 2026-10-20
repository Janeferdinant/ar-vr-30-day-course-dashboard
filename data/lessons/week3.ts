import { Lesson } from "@/types/course";

export const week3Lessons: Lesson[] = [
  {
    id: "day-15",
    day: 15,
    week: 3,
    duration: 1,
    title: "VR Hardware, Immersion, Comfort, and Interaction",
    topics: [
      "Virtual Reality Hardware Ecosystem: Standalone HMDs vs PC VR vs Spatial Computers",
      "Human Perception in VR: Stereopsis, Interpupillary Distance (IPD), and Field of View (FOV)",
      "Cyber-Sickness and Vestibular Discrepancy: Vection, Acceleration, and Motion Sickness",
      "VR Ergonomics: Neck Fatigue, Arm Reach Zones, and Gorilla-Arm Syndrome",
      "Designing for Physical Space: Room-Scale, Standing, and Seated Paradigms"
    ],
    learningObjectives: [
      "Explain the neurobiology of simulator sickness caused by vestibular-ocular conflicts.",
      "Calculate comfort cones and optimal physical reach zones for VR interactions.",
      "Understand the trade-offs between standalone Qualcomm Snapdragon XR chips and tethered PC VR rigs.",
      "Design an annotated layout for a virtual laboratory adhering to VR safety guidelines."
    ],
    prerequisites: ["Weeks 1 & 2 completed"],
    teachingContent: [
      {
        sectionTitle: "1. The Neurobiology of Cyber-Sickness",
        content: `VR sickness occurs when there is a mismatch between sensory inputs:\n• Vestibular System: Senses physical balance and head acceleration via inner ear semicircular canals.\n• Visual System: Sees artificial acceleration and rotation rendered on display lenses.\n\nWhen your eyes see your virtual body sprinting or rolling forward while your inner ear feels stationary, the brain interprets this conflict as neurotoxin ingestion (poisoning), triggering nausea and cold sweats.\n\nRules for Motion Comfort:\n• Never artificially accelerate or roll the camera.\n• Keep frame rates rock-solid (minimum 72 FPS, ideally 90–120 FPS).\n• Use Teleportation or dynamic tunneling vignettes during locomotion.`
      },
      {
        sectionTitle: "2. Ergonomic Reach Volumes in Spatial UI",
        content: `Users in VR fatigue quickly if forced to reach outward with straight arms ('Gorilla-Arm Syndrome').\n• Primary Reach Zone (Comfortable): Within 0.3m to 0.5m of the torso at elbow height.\n• Maximum Reach Zone: Up to 0.7m. Should be reserved only for occasional actions.\n• Far Interaction Zone: Anything beyond 1.0m must be accessible via ray interactors or magnetic pulling.`
      }
    ],
    instructorDemonstration: {
      title: "Measuring FOV, IPD Calibration & Reach Envelopes",
      steps: [
        "Demonstrate physical headset IPD adjustment and explain how incorrect IPD causes eye strain and misjudged 3D depth.",
        "Visualize comfortable interaction spheres around a virtual mannequin.",
        "Demonstrate how dynamic vignetting (tunnel vision during movement) mitigates peripheral optic flow."
      ],
      tips: "Never use smooth rotation without a snap-turn option; smooth turning is the number one trigger of acute nausea in novice VR users."
    },
    handsOnLab: {
      title: "VR Environment Ergonomics Sketching",
      durationMinutes: 30,
      instructions: [
        "Sketch a 4m x 4m Virtual Laboratory floor plan.",
        "Map primary workbench areas, chemical storage shelves, and emergency eyewash stations within ergonomic reach envelopes.",
        "Designate clear boundary zones to prevent physical wall collisions.",
        "Annotate user teleport landing pads and seated/standing options."
      ],
      expectedResult: "A detailed architectural blueprint designed specifically around human spatial comfort in VR."
    },
    miniProject: {
      title: "Sketch a VR Laboratory Layout",
      description: "Produce an annotated design and spatial layout blueprint for an educational Virtual Chemistry/Physics Laboratory. Clearly specify interaction benches, equipment zones, safety boundaries, reach dimensions, and comfort considerations.",
      deliverable: "An annotated environment design blueprint detailing spatial dimensions, ergonomic reach zones, and interaction stations.",
      checklist: [
        "Exact dimensions specified in metric scale (e.g., 6m x 6m room)",
        "Primary interaction stations positioned within 0.4m–0.6m ergonomic reach",
        "Clear safety walkways and teleportation arrival anchors",
        "Documented locomotion strategy (snap turn + vignette teleport)"
      ],
      requiredSoftware: ["Diagramming Tool (Draw.io / Figma) or Unity Blockout"],
      assessmentCriteria: [
        "Adherence to VR human factor ergonomics (35%)",
        "Safety and comfort design considerations (30%)",
        "Completeness of laboratory workstation layout (20%)",
        "Clarity of technical annotations (15%)"
      ]
    },
    resources: [
      { title: "Unity Learn VR Development Pathway (Official)", url: "https://learn.unity.com/pathway/vr-development", type: "docs" },
      { title: "Meta Quest VR Design Guidelines", url: "https://developer.oculus.com/resources/design/", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why does peripheral visual motion provoke motion sickness more intensely than central foveal motion?",
      "How does providing a stable visual horizon or virtual cockpit reduce vestibular discomfort?"
    ]
  },
  {
    id: "day-16",
    day: 16,
    week: 3,
    duration: 2,
    title: "OpenXR and XR Project Configuration",
    topics: [
      "The OpenXR Open Standard (Khronos Group) and Hardware Portability",
      "XR Interaction Toolkit (XRI) Architecture and Package Setup",
      "Configuring the XR Origin (VR Rig): Head, Left Hand, Right Hand Tracking",
      "Input Action Maps, Controller Bindings, and Haptic Profiles",
      "Testing VR via the XR Device Simulator (Headset-Free Development)"
    ],
    learningObjectives: [
      "Understand the OpenXR cross-platform specification eliminating vendor lock-in.",
      "Configure a project with the OpenXR plugin and XR Interaction Toolkit 2.6+ / 3.0+.",
      "Set up an XR Origin with tracked controllers and input action maps.",
      "Operate the XR Device Simulator with mouse/keyboard to test VR interactions without physical hardware."
    ],
    prerequisites: ["Day 15 VR fundamentals"],
    teachingContent: [
      {
        sectionTitle: "1. The OpenXR Paradigm Shift",
        content: `Historically, developers had to build separate codebases for Oculus SDK, SteamVR, and Windows Mixed Reality. The Khronos Group's OpenXR standard unified this:\n• High-Level Application (Unity / XRI)\n  └── OpenXR Loader API\n      ├── Meta Quest Runtime (Android / PC)\n      ├── SteamVR Runtime (PC)\n      └── Apple visionOS / Windows Mixed Reality Runtime\n\nCode written once against OpenXR runs on any conforming hardware.`
      },
      {
        sectionTitle: "2. The XR Origin (VR) Hierarchy",
        content: `In Virtual Reality, the XR Origin contains:\n• Camera Offset: Compensates for physical tracking height.\n• Main Camera: Tracked by HMD position/rotation.\n• LeftHand Controller & RightHand Controller: Driven by TrackedPoseDriver, receiving controller position, rotation, thumbstick, grip, and trigger inputs.\n• XR Interaction Manager: Central broker mediating interactors and interactables.`
      }
    ],
    instructorDemonstration: {
      title: "Zero-to-VR Configuration & Device Simulation",
      steps: [
        "Install XR Interaction Toolkit and OpenXR Plugin from Unity Package Manager.",
        "Import the Starter Assets (Input Actions and Controller Prefabs).",
        "Enable the XR Device Simulator in Project Settings.",
        "Press Play: Show controlling head rotation with right-click mouse look, switching hands with Shift/Space, and pulling triggers."
      ],
      tips: "The XR Device Simulator is a huge productivity booster; students do not need to constantly put on and take off physical headsets to test code logic."
    },
    handsOnLab: {
      title: "Configuring the OpenXR Interaction Rig",
      durationMinutes: 60,
      instructions: [
        "Initialize an empty scene and instantiate the complete XR Origin (VR) rig.",
        "Assign the XRI Default Input Actions asset to both controllers.",
        "Add visual 3D hand/controller models to both hand anchors.",
        "Verify head tracking and dual-controller 6-DoF articulation in the XR Device Simulator."
      ],
      expectedResult: "A fully configured VR scene with 6-DoF head and hand tracking verified in simulation or physical HMD."
    },
    miniProject: {
      title: "Create a Basic VR-Ready Scene",
      description: "Configure a clean VR project from scratch using OpenXR and the XR Interaction Toolkit. Set up the XR Origin, camera tracking, left/right hand controllers with visual models, and verify interaction responsiveness in the XR Device Simulator or physical headset.",
      deliverable: "A configured scene with a testable interaction setup, 6-DoF controllers, and verified input bindings.",
      checklist: [
        "OpenXR and XR Interaction Toolkit properly installed with zero conflicts",
        "XR Origin configured with Left/Right hand controllers and tracking drivers",
        "Visual 3D controller/hand models render at accurate hand offsets",
        "Verified 6-DoF head and controller articulation in simulator or HMD"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "XR Interaction Toolkit", "OpenXR Plugin"],
      assessmentCriteria: [
        "XR Origin hierarchy correctness and input mapping (35%)",
        "OpenXR configuration and driver compatibility (30%)",
        "Controller visual representation and alignment (20%)",
        "Simulator operational readiness (15%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit Manual (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/index.html", type: "docs" },
      { title: "Khronos OpenXR Specification", url: "https://www.khronos.org/openxr/", type: "docs" }
    ],
    reflectionQuestions: [
      "Why did the industry transition from proprietary vendor SDKs to the OpenXR standard?",
      "How does the XR Device Simulator accelerate team development cycles when headset quantities are limited?"
    ]
  },
  {
    id: "day-17",
    day: 17,
    week: 3,
    duration: 2,
    title: "Locomotion and Spatial Navigation",
    topics: [
      "Locomotion Taxonomies: Discrete Teleportation vs Continuous Smooth Locomotion",
      "Teleportation Provider: Teleportation Area vs Teleportation Anchor",
      "Snap Turn vs Smooth Turn and Tunneling Vignette Comfort Filters",
      "Collision Handling, NavMesh Constraints, and Character Controller Drivers",
      "Guiding Spatial Flow and Preventing Out-of-Bounds Glitching"
    ],
    learningObjectives: [
      "Implement comfortable teleportation using XR Teleportation Areas and Anchors.",
      "Configure snap turning with configurable angle increments (e.g. 45 degrees).",
      "Implement a dynamic tunneling vignette shader to restrict peripheral vision during continuous motion.",
      "Construct a multi-room virtual museum with intuitive spatial navigation."
    ],
    prerequisites: ["Day 16 OpenXR setup"],
    teachingContent: [
      {
        sectionTitle: "1. Locomotion Mechanics: Teleport vs Smooth",
        content: `Locomotion is how the user moves beyond their physical room boundaries:\n• Teleportation: The user aims a parabolic ray at the floor; upon releasing the button, their avatar instanly shifts to the target. Because there is zero acceleration, this causes zero motion sickness!\n• Continuous Movement: Left thumbstick glides the player smoothly forward. High immersion, but can provoke nausea unless accompanied by a Tunneling Vignette (darkening peripheral edges to reduce optic flow).`
      },
      {
        sectionTitle: "2. Setting Up Teleportation in XRI",
        content: `Key components required:\n• Locomotion System: Coordinates all locomotion providers.\n• Teleportation Provider: Mediates teleport requests.\n• Snap Turn Provider: Rotates the user by 30°–45° per stick flick.\n• Teleportation Area: Attached to floor colliders where landing is permitted.\n• Teleportation Anchor: Specific designated spots (e.g. in front of a museum exhibit) that also enforce a specific arrival orientation.`
      }
    ],
    instructorDemonstration: {
      title: "Teleport Ray Arc Configuration & Tunneling Vignette",
      steps: [
        "Add Locomotion System, Teleportation Provider, and Snap Turn Provider to XR Origin.",
        "Configure the Left Controller with an XR Ray Interactor set to Parabolic Curved Arc.",
        "Apply Teleportation Area to museum floor.",
        "Demonstrate switching from smooth stick movement to snap teleport with vignette activated."
      ],
      tips: "Always configure parabolic ray curves rather than straight line rays for teleportation; parabolic curves feel natural and can reach up onto stages or over obstacles."
    },
    handsOnLab: {
      title: "Constructing a Navigable Virtual Gallery",
      durationMinutes: 60,
      instructions: [
        "Build a multi-gallery virtual museum layout with 3 exhibit rooms.",
        "Designate the main floors as Teleportation Areas.",
        "Place Teleportation Anchors in front of each showcase pedestal to guarantee optimal viewing angles.",
        "Add Snap Turn with 45° increments on the right thumbstick.",
        "Walk/teleport through all 3 rooms testing boundaries."
      ],
      expectedResult: "A comfortably navigable virtual exhibition with zero vestibular disorientation."
    },
    miniProject: {
      title: "Build a Small Virtual Museum",
      description: "Build a navigable virtual museum or exhibition space with at least 3 display pedestals. Implement both Teleportation (with parabolic arc feedback) and Snap Turn locomotion, ensuring players can freely explore without clipping through walls.",
      deliverable: "A navigable virtual environment featuring comfortable teleportation and exhibition pedestals.",
      checklist: [
        "Parabolic teleportation ray functioning on floor areas",
        "At least 2 dedicated Teleportation Anchors with predefined arrival orientations",
        "Snap Turn configured with 30° or 45° increments",
        "Collision barriers prevent walking or teleporting through exterior walls"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "XR Interaction Toolkit"],
      assessmentCriteria: [
        "Locomotion comfort and arc responsiveness (35%)",
        "Environment design and scale accuracy (30%)",
        "Teleport anchor placement and orientation correctness (20%)",
        "Boundary enforcement and collision robustness (15%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit: Locomotion Providers", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/locomotion.html", type: "docs" },
      { title: "VR Locomotion Comfort Principles (Unity Learn)", url: "https://learn.unity.com/pathway/vr-development", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why is snap turn universally preferred over smooth turn for nausea prevention in VR?",
      "How does a Teleportation Anchor enhance educational museum experiences compared to an unrestricted Teleportation Area?"
    ]
  },
  {
    id: "day-18",
    day: 18,
    week: 3,
    duration: 2,
    title: "Ray Interaction, Direct Selection, and Grabbing",
    topics: [
      "The XR Interaction Toolkit Interactor Taxonomy: Direct vs Ray Interactor",
      "Near-Field Interaction: XR Direct Interactor and Hand Triggers",
      "Far-Field Interaction: XR Ray Interactor, Reticles, and Visual Line Renderers",
      "Grabbing Mechanics: Velocity Tracking, Instant Snapping, and Kinematic Attachment",
      "Controller Haptic Impulse Delivery (Vibration Amplitudes and Frequencies)"
    ],
    learningObjectives: [
      "Configure XR Direct Interactor for natural hands-on grabbing of nearby items.",
      "Configure XR Ray Interactor for targeting and pulling distant objects.",
      "Understand XR Grab Interactable movement types (Velocity Tracking vs Kinematic).",
      "Trigger controller haptic vibration impulses on hover and grab events."
    ],
    prerequisites: ["Day 16 OpenXR setup"],
    teachingContent: [
      {
        sectionTitle: "1. Direct vs Ray Interactors",
        content: `XR Interaction Toolkit divides interaction into two essential modalities:\n• Direct Interactor: Requires the physical virtual hand to enter the object's collider volume. Pressing Grip grabs the object naturally (near-field).\n• Ray Interactor: Projects a 3D ray into the distance. Useful for picking up fallen objects from the floor without bending down, and selecting world-space UI menus.`
      },
      {
        sectionTitle: "2. Movement Types for Grabbed Objects",
        content: `When an object is grabbed via 'XRGrabInteractable':\n• Instantaneous: Teleports the object directly to the hand transform. Ignores physical weight; can penetrate walls.\n• Kinematic: Object transform is moved by physics during FixedUpdate. Pushes other dynamic items.\n• Velocity Tracking: Rigidbody velocities are applied to pull the object toward the hand. Yields authentic physical inertia, weight sensation, and allows throwing with accurate momentum!`
      }
    ],
    instructorDemonstration: {
      title: "Building an Interactive Physics Tool Bench",
      steps: [
        "Create a workbench with laboratory tools (beakers, magnifying glasses, clipboards).",
        "Add XRGrabInteractable with Velocity Tracking movement type.",
        "Configure custom Attach Points so tools align ergonomically in the hand grip.",
        "Demonstrate throwing beakers across the room with realistic velocity transfer.",
        "Add haptic pulse: 'interactor.SendHapticImpulse(0.5f, 0.1f)' on hover."
      ],
      tips: "Explain why Velocity Tracking is mandatory if you want users to throw objects naturally in VR."
    },
    handsOnLab: {
      title: "Dual Near/Far Hand Interaction Setup",
      durationMinutes: 60,
      instructions: [
        "Attach XRDirectInteractor to the hand sphere trigger colliders.",
        "Attach XRRayInteractor with straight line renderers for distant selection.",
        "Create 3 grab interactable items with distinct weights and attach transforms.",
        "Add haptic feedback that vibrates the controller when an object is hovered."
      ],
      expectedResult: "Hands that can grab nearby props directly and laser-point to select distant objects."
    },
    miniProject: {
      title: "Create a Virtual Object-Handling Activity",
      description: "Build an interactive VR tool-handling workstation. Users can pick up, inspect, manipulate, and throw various laboratory items (test tubes, flasks, microscopes) using near-field direct grab and far-field ray selection with controller haptic feedback.",
      deliverable: "Interactable objects that can be selected, grabbed, thrown, and inspected with tactile haptic confirmation.",
      checklist: [
        "Direct grabbing with realistic attach orientation points",
        "Far-field ray interaction allowing distant object selection",
        "Velocity Tracking configured for realistic throwing physics",
        "Haptic impulses triggered on hover and grab events"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "XR Interaction Toolkit"],
      assessmentCriteria: [
        "Grab responsiveness and hand-attach ergonomics (35%)",
        "Throwing physics fidelity and velocity tracking (25%)",
        "Ray interactor visual styling and precision (20%)",
        "Haptic feedback implementation (20%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit: Interactables & Interactors", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/interactables.html", type: "docs" },
      { title: "Haptics Delivery API in Unity XRI", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/api/UnityEngine.XR.Interaction.Toolkit.XRBaseController.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why does Velocity Tracking prevent grabbed objects from clipping through solid tables?",
      "How do custom attach transforms solve awkward hand-holding angles for tools like flashlights or pipettes?"
    ]
  },
  {
    id: "day-19",
    day: 19,
    week: 3,
    duration: 2,
    title: "Interactable Objects, Physics, and Socket Placement",
    topics: [
      "XR Socket Interactor: Snapping, Magnetic Attachment, and Key-Lock Systems",
      "Interaction Filters and Interaction Layer Masks",
      "Two-Handed Interactions: Secondary Attach Points and Weapon/Tool Grips",
      "Physics Constraints: Configurable Joints, Hinges (Doors/Drawers), and Levers",
      "Physical Hand Collision vs Ghost Hands in Virtual Manipulation"
    ],
    learningObjectives: [
      "Implement XR Socket Interactors for component assembly and puzzle mechanics.",
      "Configure Interaction Layer Masks to prevent sockets from accepting invalid objects.",
      "Build realistic physical hinges and levers using HingeJoint and ConfigurableJoint.",
      "Assemble a multi-part machine or scientific apparatus inside VR."
    ],
    prerequisites: ["Day 18 Grabbing and Interactors"],
    teachingContent: [
      {
        sectionTitle: "1. The XR Socket Interactor System",
        content: `A Socket Interactor is a stationary drop-zone that automatically snaps interactable objects into place when brought within proximity.\n• Hover Meshes: Displays a semi-transparent holographic preview of the object when hovering over the socket.\n• Attach Transform: Governs the precise orientation and position of the snapped item.\n• Layer Masks: Restrict sockets (e.g. a 'Battery Socket' must only accept items on the 'Battery' interaction layer, rejecting beakers or chairs).`
      },
      {
        sectionTitle: "2. Scripting Physical Knobs, Levers, and Valves",
        content: `Physical lab instruments require twisting knobs or sliding levers. Using Unity's HingeJoint and limits, we constrain Rigidbody movement to specific rotational arcs (e.g. 0° to 90° for a valve).`,
        codeSnippet: {
          language: "csharp",
          title: "LabSocketDetector.cs",
          code: `using UnityEngine;\nusing UnityEngine.XR.Interaction.Toolkit;\n\npublic class LabSocketDetector : MonoBehaviour\n{\n    [SerializeField] private XRSocketInteractor socketInteractor;\n    [SerializeField] private AudioSource snapAudio;\n    [SerializeField] private ParticleSystem completeVFX;\n\n    private void OnEnable()\n    {\n        socketInteractor.selectEntered.AddListener(OnObjectSnapped);\n        socketInteractor.selectExited.AddListener(OnObjectRemoved);\n    }\n\n    private void OnDisable()\n    {\n        socketInteractor.selectEntered.RemoveListener(OnObjectSnapped);\n        socketInteractor.selectExited.RemoveListener(OnObjectRemoved);\n    }\n\n    private void OnObjectSnapped(SelectEnterEventArgs args)\n    {\n        snapAudio?.Play();\n        completeVFX?.Play();\n        Debug.Log($"[Socket] Component {args.interactableObject.transform.name} locked into place.");\n    }\n\n    private void OnObjectRemoved(SelectExitEventArgs args)\n    {\n        Debug.Log($"[Socket] Component removed.");\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Building an Interactive Centrifuge & Test Tube Rack",
      steps: [
        "Create a centrifuge model with a motorized rotor and lid with a HingeJoint.",
        "Add 4 XRSocketInteractors inside the centrifuge slots.",
        "Configure Interaction Layers so only 'TestTube' interactables can snap into the slots.",
        "Demonstrate holographic hover preview showing where the tube will seat.",
        "Script the centrifuge to spin only when the lid is closed and tubes are balanced."
      ],
      tips: "Explain why socket interaction layers are critical to prevent users from accidentally sticking clipboards or entire tables into small test tube slots!"
    },
    handsOnLab: {
      title: "Assembling a Modular Scientific Apparatus",
      durationMinutes: 60,
      instructions: [
        "Create a base chassis with 2 distinct socket points (e.g., Battery Slot and Glass Beaker Station).",
        "Configure custom interaction layers ('BatteryLayer' and 'BeakerLayer').",
        "Create matching interactables with appropriate layer masks.",
        "Write a validation script that confirms when both components are properly docked."
      ],
      expectedResult: "A functional modular assembly system with holographic preview snapping and state confirmation."
    },
    miniProject: {
      title: "Assemble a Virtual Machine from Components",
      description: "Build an interactive mechanical assembly activity (such as assembling a microscope, chemical filtration rig, or battery-powered motor). The player must grab parts, place them into correct snap sockets, pull a physical lever, and observe the machine power on.",
      deliverable: "A working assembly activity with socket snapping, layer mask validation, and mechanical feedback.",
      checklist: [
        "At least 2 distinct functional socket snap points",
        "Layer masks enforce correct component placement and reject invalid items",
        "Holographic hover mesh preview before release",
        "A physical lever or button (HingeJoint/spring) that activates the assembled machine",
        "Audio and visual state feedback upon successful completion"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "XR Interaction Toolkit"],
      assessmentCriteria: [
        "Socket configuration, snapping precision, and layer filtering (35%)",
        "Physical lever/button mechanical realism (25%)",
        "Audio/visual feedback polish (20%)",
        "Code modularity and event handling (20%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit: Sockets", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/socket-interactor.html", type: "docs" },
      { title: "Unity Joint Physics Manual", url: "https://docs.unity3d.com/Manual/Joints.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why are interaction layer masks mandatory when using multiple sockets in a compact space?",
      "What is the UX difference between an instant-snap socket versus an animated interpolated seating animation?"
    ]
  },
  {
    id: "day-20",
    day: 20,
    week: 3,
    duration: 2,
    title: "World-Space UI, Audio, and Instructions",
    topics: [
      "Spatial UI Paradigms in VR: Diegetic vs Non-Diegetic Interfaces",
      "World-Space Unity UI Canvases and Tracked Device Graphic Raycasters",
      "Curved Canvases and Ergonomic Viewing Distance (1.5m - 2.0m)",
      "3D Spatial Audio: HRTF (Head-Related Transfer Functions), Occlusion, and Reverberation",
      "Instructional Step Sequencers and Interactive Lab Guides"
    ],
    learningObjectives: [
      "Design diegetic world-space interfaces (e.g. touchscreens embedded in laboratory machinery).",
      "Configure TrackedDeviceGraphicRaycaster for VR controller laser-pointer UI interaction.",
      "Apply Head-Related Transfer Function (HRTF) spatial audio for precise acoustic localization.",
      "Build a step-by-step guided lab manual guiding the user through an experiment."
    ],
    prerequisites: ["Day 16 OpenXR setup", "Day 18 Ray interaction"],
    teachingContent: [
      {
        sectionTitle: "1. Spatial UI: Diegetic vs Non-Diegetic",
        content: `In standard video games, UI is plastered across the 2D screen monitor (HUD). In VR, screen-space HUDs cause severe eye-strain and double vision (diplopia) due to vergence-accommodation conflict!\n\nVR UI Types:\n• Non-Diegetic: World-space panels floating at a comfortable focal distance (1.5m to 2.5m).\n• Diegetic: UI integrated naturally into physical objects inside the virtual fiction (e.g., a digital timer on an oven, a gauge on a chemical canister, a tablet in the player's hand).`
      },
      {
        sectionTitle: "2. Setting Up TrackedDeviceGraphicRaycaster",
        content: `For a World-Space Canvas to respond to XR Ray Interactors:\n1. Set Canvas Render Mode to 'World Space'.\n2. Remove the default Graphic Raycaster component.\n3. Add 'TrackedDeviceGraphicRaycaster'.\n4. Add a BoxCollider or let the raycaster detect element rectangles.`
      }
    ],
    instructorDemonstration: {
      title: "Interactive Spatial Tablet & HRTF Audio Demonstration",
      steps: [
        "Create a handheld laboratory tablet containing instruction steps and digital buttons.",
        "Demonstrate clicking World-Space UI buttons using the controller's laser ray.",
        "Configure Unity's Audio Spatializer (HRTF) on a humming generator machine.",
        "Demonstrate blindfolded audio localization: moving the head changes sound panning and frequency absorption realistically."
      ],
      tips: "Always keep text sizes in VR larger than 24pt and use high-contrast sans-serif typefaces to account for headset display resolution."
    },
    handsOnLab: {
      title: "Interactive Laboratory Experiment Guide",
      durationMinutes: 60,
      instructions: [
        "Create a curved instructional display board mounted on the laboratory wall.",
        "Implement TrackedDeviceGraphicRaycaster with Next Step, Previous Step, and Reset buttons.",
        "Script a step manager that updates current experiment tasks (e.g., 'Step 1: Pick up flask; Step 2: Pour into beaker').",
        "Attach 3D spatial sound effects to button clicks and chemical bubbling."
      ],
      expectedResult: "A clean, legible spatial UI providing step-by-step lab instructions with responsive laser-pointer interaction."
    },
    miniProject: {
      title: "Build an Interactive Science Experiment",
      description: "Build a guided virtual science experiment (such as an acid-base titration, electrical circuit wiring, or optics prism alignment). Features include a world-space instructional board, responsive laser UI controls, 3D spatial sound cues, and interactive task progression.",
      deliverable: "A guided VR activity with step-by-step experiment instructions, spatial UI, and interactive feedback.",
      checklist: [
        "World-space canvas configured with TrackedDeviceGraphicRaycaster",
        "Laser-pointer interaction with buttons and step advancement",
        "At least 3 sequential instructional steps with completion verification",
        "3D spatial audio provides audio cues for chemical reactions or equipment states"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "XR Interaction Toolkit", "TextMeshPro"],
      assessmentCriteria: [
        "Instructional UI clarity, typography, and contrast (35%)",
        "Laser interaction responsiveness (25%)",
        "Spatial audio fidelity and positioning (20%)",
        "Step sequencing logic and completion verification (20%)"
      ]
    },
    resources: [
      { title: "XR Interaction Toolkit: UI Interaction", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/ui-interaction.html", type: "docs" },
      { title: "Spatial Sound & HRTF in Unity", url: "https://docs.unity3d.com/Manual/AudioSpatializerSDK.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why does a screen-space HUD cause severe visual fatigue in VR headsets?",
      "How does curved canvas geometry enhance spatial UI usability at wide viewing angles?"
    ]
  },
  {
    id: "day-21",
    day: 21,
    week: 3,
    duration: 2,
    title: "VR Laboratory Integration",
    topics: [
      "Major Project 3 Architecture: The VR Laboratory Simulation",
      "Consolidating Navigation, Grabbing, Socket Mechanics, and Spatial UI",
      "Testing Frame Rate Targets (72/90/120 FPS) and Frame Timing Budgets",
      "Handling Edge Cases: Lost Objects, Floor Penetration, and Bounds Resetting",
      "Demonstration Preparation and Peer Review Assessment"
    ],
    learningObjectives: [
      "Integrate all Week 3 systems into the cohesive 'VR Laboratory' major project.",
      "Verify that the experience runs at a stable 72+ FPS without stutter or frame drops.",
      "Implement an auto-respawn system for dropped tools falling through floor boundaries.",
      "Conduct a comprehensive usability review evaluating immersion, safety, and learning effectiveness."
    ],
    prerequisites: ["Days 15–20 VR modules"],
    teachingContent: [
      {
        sectionTitle: "1. The VR Laboratory Architecture",
        content: `Today students finalize Week 3's major milestone: the 'VR Laboratory'.\n\nCore Systems Breakdown:\n• Locomotion Hub: Teleportation Areas and Anchors with Snap Turn and Vignette comfort.\n• Workbench Station: Direct grabbing with custom attach transforms and Velocity Tracking throwing.\n• Apparatus Assembly: Socket Interactors with interaction layer masks for chemical/electronic tools.\n• Experiment Director: World-space UI tracking multi-step experiment instructions with spatial sound.`
      },
      {
        sectionTitle: "2. Performance Profiling for VR Frame Timing",
        content: `In 90 FPS VR, each frame must complete within 11.1 milliseconds:\n• Application CPU Logic: < 4ms\n• Render Thread: < 3ms\n• GPU Draw & Post-Processing: < 4ms\n\nIf any single frame exceeds 11.1ms, the display drops frames, reprojection / Asynchronous Spacewarp kicks in, and visual ghosting occurs.`
      }
    ],
    instructorDemonstration: {
      title: "VR Laboratory Usability Audit & Physics Edge-Case Testing",
      steps: [
        "Conduct a live play-through of the complete multi-step lab experiment.",
        "Demonstrate throwing a test tube off into a dark corner: show how the 'ObjectRespawnManager' catches it and respawns it cleanly on the workbench.",
        "Demonstrate the XR Profiler overlay verifying 0 dropped frames.",
        "Review rubric grading standards for the Week 3 project submission."
      ],
      tips: "Always include a respawn plane under your floor; in physics simulations, fast-moving hand collisions will occasionally pop small objects through floors."
    },
    handsOnLab: {
      title: "Finalizing and Stress-Testing the VR Laboratory",
      durationMinutes: 60,
      instructions: [
        "Merge locomotion, grabbing, sockets, UI boards, and audio into the master VR Laboratory scene.",
        "Implement a kill-plane collider under the room that respawns dropped items back onto the table.",
        "Verify all 3 distinct interaction mechanics (e.g. Teleport, Grab & Pour, Socket Lock).",
        "Record a first-person VR demonstration video showcasing all milestone requirements."
      ],
      expectedResult: "A fully functional, stable virtual laboratory ready for grading and peer review."
    },
    miniProject: {
      title: "Complete the VR Laboratory",
      description: "Finalize and test the complete VR Laboratory major project. The environment must feature comfortable navigation, direct and ray object manipulation, socket component assembly, a world-space instruction board, and spatial audio feedback.",
      deliverable: "A navigable virtual laboratory with at least three distinct interactions (executable build or verified recording and repository).",
      checklist: [
        "Navigable virtual laboratory scene adhering to VR ergonomic comfort standards",
        "Smooth teleportation and snap turning",
        "Direct and ray grabbing with tactile haptic feedback",
        "At least one socket component assembly station with layer filtering",
        "World-space instruction board guiding a 3-step experiment",
        "Kill-plane respawn mechanism for fallen objects"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "OpenXR", "XR Interaction Toolkit"],
      assessmentCriteria: [
        "Interaction fidelity and physics robustness (30%)",
        "Locomotion comfort and absence of nausea triggers (25%)",
        "Pedagogical value and instructional UI clarity (25%)",
        "Scene optimization and frame rate stability (20%)"
      ]
    },
    resources: [
      { title: "Unity Learn VR Development Pathway (Official)", url: "https://learn.unity.com/pathway/vr-development", type: "docs" },
      { title: "XR Interaction Toolkit Manual (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/index.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why is an out-of-bounds object respawn trigger essential for every physics-driven VR experience?",
      "How did the design of your virtual laboratory prevent users from experiencing physical reach fatigue?"
    ]
  }
];
