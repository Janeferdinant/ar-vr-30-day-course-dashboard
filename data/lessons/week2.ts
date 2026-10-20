import { Lesson } from "@/types/course";

export const week2Lessons: Lesson[] = [
  {
    id: "day-8",
    day: 8,
    week: 2,
    duration: 1,
    title: "AR Fundamentals and Tracking",
    topics: [
      "Augmented Reality Core Principles: Alignment, Real-Time Registration, and 3D Anchor Points",
      "Tracking Taxonomies: Marker-Based vs Markerless (VIO / SLAM)",
      "Visual-Inertial Odometry (VIO) Sensor Fusion: Optical Flow + Accelerometers + Gyroscopes",
      "Environmental Understanding: Feature Points, Lighting Estimation, and Depth API",
      "Mobile Hardware Requirements: ARCore (Android) and ARKit (iOS) Specifications"
    ],
    learningObjectives: [
      "Explain how Visual-Inertial Odometry calculates 6-DoF device pose in unmapped physical spaces.",
      "Compare marker-based tracking (fiducials/images) with plane and surface detection.",
      "Understand the limitations of optical tracking (featureless walls, reflective surfaces, low light).",
      "Survey mobile device hardware capabilities required for mobile AR."
    ],
    prerequisites: ["Week 1 3D Foundations"],
    teachingContent: [
      {
        sectionTitle: "1. The Anatomy of Visual-Inertial Odometry (VIO)",
        content: `Mobile Augmented Reality (ARCore and ARKit) does not rely on external satellites or base stations. Instead, it fuses two continuous data streams:\n1. Camera Vision: Detects high-contrast geometric 'feature points' across successive camera frames to calculate relative displacement (optical flow).\n2. IMU (Inertial Measurement Unit): Reads raw acceleration and angular velocity at 500Hz - 1000Hz.\n\nBy running an Extended Kalman Filter (EKF), the system corrects sensor drift while bridging fast head/hand movements that would otherwise blur optical tracking.`
      },
      {
        sectionTitle: "2. Real-World Tracking Failure Modes",
        content: `Understanding tracking edge cases is essential for AR UX design:\n• Textureless Surfaces: Pure white walls offer zero trackable feature points.\n• Dynamic Environments: Crowds walking through the frame corrupt optical flow vectors.\n• Specular Reflections: Shiny glass and mirrors confuse depth parallax calculations.\n• Fast Rotations: Excessive motion blur causes sudden loss of tracking (relocalization required).`
      }
    ],
    instructorDemonstration: {
      title: "Real-Time Feature Point Cloud Visualization",
      steps: [
        "Project an active AR session camera feed displaying visual feature points on screen.",
        "Demonstrate how point density multiplies over textured carpet or book covers compared to a polished white desk.",
        "Deliberately cover the camera lens to show IMU dead reckoning and immediate tracking degradation."
      ],
      tips: "Highlight why user onboarding tutorials in AR apps instruct users to slowly pan their device across textured surfaces."
    },
    handsOnLab: {
      title: "AR Environmental Tracking Analysis",
      durationMinutes: 30,
      instructions: [
        "Audit 3 distinct real-world spaces (e.g. well-lit classroom, dim hallway, glass conference room).",
        "Document lighting levels, surface reflectivity, and feature density in each room.",
        "Evaluate which tracking method (Image Marker vs Horizontal Plane vs Vertical Wall) would succeed reliably in each environment."
      ],
      expectedResult: "A completed environmental audit report classifying physical surfaces according to AR trackability scores."
    },
    miniProject: {
      title: "Analyse AR Applications and Their Tracking Methods",
      description: "Analyze at least four leading commercial AR applications (e.g., IKEA Place, Pokémon GO, Google Translate Live, Quiver 3D) and dissect their underlying tracking mechanisms.",
      deliverable: "A structured tracking comparison document outlining tracking methods, sensor pipelines, and failure recovery strategies.",
      checklist: [
        "Analyze minimum 4 commercial AR apps across different domains",
        "Categorize tracking as Marker-based, Ground Plane, Facial Mesh, or World SLAM",
        "Identify fallback UI behaviors when tracking is lost",
        "Synthesize recommendations for robust tracking in educational AR"
      ],
      requiredSoftware: ["Web Browser / Markdown Editor"],
      assessmentCriteria: [
        "Accuracy of technical tracking categorization (30%)",
        "Depth of sensor pipeline analysis (30%)",
        "Evaluation of edge case handling (20%)",
        "Presentation and documentation clarity (20%)"
      ]
    },
    resources: [
      { title: "AR Foundation Documentation (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/", type: "docs" },
      { title: "Google ARCore Fundamentals", url: "https://developers.google.com/ar/discover/concepts", type: "docs" }
    ],
    reflectionQuestions: [
      "Why does standard smartphone AR struggle with pure black or mirror-finish surfaces?",
      "How does temporal filtering help stabilize virtual object jitter on shaky mobile cameras?"
    ]
  },
  {
    id: "day-9",
    day: 9,
    week: 2,
    duration: 2,
    title: "AR Foundation Setup",
    topics: [
      "Unity AR Foundation Architecture: Subsystems, Providers, and Multiplatform Abstraction",
      "Configuring the AR Session and AR Session Origin / XR Origin",
      "Camera Background, AR Pose Driver, and Physical Camera Subsystems",
      "Android ARCore and Apple ARKit XR Plugin Management",
      "Unity XR Simulation: Testing AR Directly Inside the Unity Editor"
    ],
    learningObjectives: [
      "Install and configure Unity's AR Foundation package along with platform provider plugins.",
      "Construct a valid AR scene hierarchy containing AR Session and XR Origin.",
      "Configure camera permissions, Gradle build settings, and target SDK requirements.",
      "Simulate mobile AR spatial movement inside the Unity Editor using XR Simulation."
    ],
    prerequisites: ["Day 8 AR Fundamentals"],
    teachingContent: [
      {
        sectionTitle: "1. The AR Foundation Architecture",
        content: `Unity's AR Foundation is a unified API layer that wraps native vendor SDKs:\n• Unity AR Foundation (High-level C# API)\n  ├── ARCore XR Plugin (Android / NDK)\n  ├── ARKit XR Plugin (iOS / Objective-C)\n  └── XR Simulation (Editor Playmode testing)\n\nKey Core Components:\n• AR Session: Manages the lifecycle of the AR experience (Starting, Pausing, Resetting).\n• XR Origin: Converts trackable device poses into Unity world coordinates and hosts the Camera.`
      },
      {
        sectionTitle: "2. Setting Up an AR Scene Hierarchy",
        content: `A functioning AR scene requires:\n1. Delete the standard Main Camera.\n2. Add 'AR Session' GameObject (contains ARSession and ARInputManager).\n3. Add 'XR Origin (Mobile AR)' GameObject (contains ARCamera, TrackedPoseDriver, and ARCameraBackground for live video feed rendering).`
      }
    ],
    instructorDemonstration: {
      title: "Configuring Project Settings & XR Simulation",
      steps: [
        "Open Project Settings > XR Plug-in Management.",
        "Enable Google ARCore for Android and Apple ARKit for iOS.",
        "Configure the XR Simulation Environment to test plane finding in a virtual bedroom without building to a physical phone.",
        "Demonstrate live play testing and simulated camera translation."
      ],
      tips: "Point out that if ARCameraBackground is missing, the phone screen renders black instead of showing the device camera feed."
    },
    handsOnLab: {
      title: "Configuring a Universal AR Foundation Project",
      durationMinutes: 60,
      instructions: [
        "Install the AR Foundation package and XR Simulation via Package Manager.",
        "Configure XR Plug-in Management for Standalone (XR Simulation) and Mobile platforms.",
        "Construct an AR Session and XR Origin with an AR Camera.",
        "Load the XR Simulation Bedroom environment and walk through the virtual room in Play Mode."
      ],
      expectedResult: "A verified AR scene executing smoothly in the Unity Editor with synthetic camera pass-through."
    },
    miniProject: {
      title: "Launch a Basic AR Scene",
      description: "Set up and launch a fully functioning AR Foundation scene. The scene must correctly initialize the AR camera pass-through, handle tracking state transitions, and verify compatibility in the editor simulator or on an Android/iOS device.",
      deliverable: "A functioning AR setup or a verified editor simulation displaying camera feed and session diagnostics.",
      checklist: [
        "AR Foundation and platform plugins correctly installed",
        "AR Session and XR Origin properly configured in scene hierarchy",
        "Camera background rendering verified without clipping glitches",
        "Editor XR Simulation or physical mobile device build operational"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation Package"],
      assessmentCriteria: [
        "Project settings and plugin configuration (30%)",
        "Correctness of XR Origin and Session setup (30%)",
        "Successful execution in simulation or device (25%)",
        "Error-free console log (15%)"
      ]
    },
    resources: [
      { title: "AR Foundation Documentation (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/", type: "docs" },
      { title: "Configuring XR Plug-in Management", url: "https://docs.unity3d.com/Packages/com.unity.xr.management@latest", type: "docs" }
    ],
    reflectionQuestions: [
      "Why does AR Foundation decouple the AR Session from the XR Origin?",
      "How does XR Simulation reduce mobile AR development iteration times?"
    ]
  },
  {
    id: "day-10",
    day: 10,
    week: 2,
    duration: 2,
    title: "Image Tracking",
    topics: [
      "Marker-Based Tracking vs 2D Natural Feature Tracking (NFT)",
      "Creating and Grading XR Reference Image Libraries",
      "The ARTrackedImageManager Component and Prefab Spawning",
      "Handling Tracking States: None, Limited, and Tracking",
      "Anchoring 3D Digital Content onto Printed Graphic Markers"
    ],
    learningObjectives: [
      "Compile a Reference Image Library with optimal feature scores (no repetitive patterns).",
      "Implement the ARTrackedImageManager component on the XR Origin.",
      "Write event-driven C# code responding to trackedImagesChanged events.",
      "Anchor animated 3D models to physical target cards in real-time."
    ],
    prerequisites: ["Day 9 AR Foundation setup"],
    teachingContent: [
      {
        sectionTitle: "1. What Makes a Good AR Image Marker?",
        content: `AR image detection relies on high spatial frequency grayscale gradients:\n• High Contrast: Sharp edges, distinct corners, asymmetrical designs.\n• Non-Repetitive: Avoid checkerboards, grids, or radial symmetry.\n• Matte Finish: Highly glossy printed paper causes light reflections that blind the camera.\n• Physical Dimensions: Accurately specify marker width in meters (e.g. 0.15m for 15cm print).`
      },
      {
        sectionTitle: "2. Scripting ARTrackedImageManager Events",
        content: `Instead of polling every frame, AR Foundation exposes the 'trackedImagesChanged' event with added, updated, and removed collections.`,
        codeSnippet: {
          language: "csharp",
          title: "ImageTrackingSpawner.cs",
          code: `using UnityEngine;\nusing UnityEngine.XR.ARFoundation;\nusing UnityEngine.XR.ARSubsystems;\n\npublic class ImageTrackingSpawner : MonoBehaviour\n{\n    [SerializeField] private ARTrackedImageManager imageManager;\n    [SerializeField] private GameObject spawnedPrefab;\n\n    private void OnEnable() => imageManager.trackedImagesChanged += OnTrackedImagesChanged;\n    private void OnDisable() => imageManager.trackedImagesChanged -= OnTrackedImagesChanged;\n\n    private void OnTrackedImagesChanged(ARTrackedImagesChangedEventArgs eventArgs)\n    {\n        foreach (var trackedImage in eventArgs.added)\n        {\n            UpdateImage(trackedImage);\n        }\n        foreach (var trackedImage in eventArgs.updated)\n        {\n            UpdateImage(trackedImage);\n        }\n    }\n\n    private void UpdateImage(ARTrackedImage trackedImage)\n    {\n        bool isTracking = trackedImage.trackingState == TrackingState.Tracking;\n        spawnedPrefab.SetActive(isTracking);\n        if (isTracking)\n        {\n            spawnedPrefab.transform.position = trackedImage.transform.position;\n            spawnedPrefab.transform.rotation = trackedImage.transform.rotation;\n        }\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Building an Interactive AR Card Game Spawner",
      steps: [
        "Create an XR Reference Image Library containing a museum artifact card and an animal flashcard.",
        "Demonstrate the image quality rating tool in the Inspector (striving for 80-100 score).",
        "Attach ARTrackedImageManager to XR Origin and link the spawner script.",
        "Hold the printed card up to the webcam/device camera: the 3D model appears instantly anchored to the card surface."
      ],
      tips: "Explain how specifying physical size accurately prevents the 3D model from appearing at the wrong scale or floating meters away."
    },
    handsOnLab: {
      title: "Multi-Image Target Spawner Implementation",
      durationMinutes: 60,
      instructions: [
        "Select 2 high-contrast reference images and compile them into an Image Library.",
        "Define exact physical dimensions (e.g. 0.1m).",
        "Create 2 distinct 3D indicator models (e.g., an animated turbine and an architectural monument).",
        "Write a manager script that associates each specific image name with its corresponding 3D prefab."
      ],
      expectedResult: "Different 3D models spawn on their respective image markers and follow card movement smoothly."
    },
    miniProject: {
      title: "Display a 3D Object When a Printed Image Is Recognised",
      description: "Build an AR application that monitors camera input for a custom target image (such as an educational flashcard or book illustration) and instantiates a detailed 3D animated model aligned directly with the physical marker.",
      deliverable: "A marker-triggered AR demonstration running in editor simulation or mobile device with responsive tracking state handling.",
      checklist: [
        "XR Reference Image Library created with quality score > 70",
        "ARTrackedImageManager implemented with event subscriptions",
        "3D model matches the orientation and position of the target card",
        "Smooth visual disable/hide behavior when tracking state drops to Limited/None"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation", "Printable or On-Screen Image Target"],
      assessmentCriteria: [
        "Marker tracking fidelity and alignment (35%)",
        "Script architecture and event hygiene (30%)",
        "Visual model quality and scale calibration (20%)",
        "User experience when marker is occluded (15%)"
      ]
    },
    resources: [
      { title: "AR Foundation: Tracked Image Manager", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/image-tracking.html", type: "docs" },
      { title: "Image Tracking Best Practices", url: "https://developers.google.com/ar/develop/augmented-images", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why does a low-contrast image cause jitter in the calculated 3D transformation matrix?",
      "How does setting TrackingState.Limited handling improve visual stability when markers are partially obscured?"
    ]
  },
  {
    id: "day-11",
    day: 11,
    week: 2,
    duration: 2,
    title: "Plane Detection, Raycasting, and Object Placement",
    topics: [
      "Horizontal vs Vertical Surface Reconstruction (Floors, Tables, Walls)",
      "The ARPlaneManager and ARPlane Visualizer Components",
      "AR Raycasting: Performing Screen-to-World Hit Tests Against Spatial Planes",
      "Reticles, Placement Indicators, and Visual Affordance Design",
      "Instantiating and Anchoring 3D Digital Content into Physical Architecture"
    ],
    learningObjectives: [
      "Enable horizontal and vertical plane detection via the ARPlaneManager.",
      "Cast real-time raycasts from screen touch coordinates into AR trackable surfaces.",
      "Create an animated placement reticle that adheres to detected planes.",
      "Spawn interactive 3D assets anchored to real-world floors or table tops."
    ],
    prerequisites: ["Day 9 AR Foundation setup", "Day 6 Raycasting basics"],
    teachingContent: [
      {
        sectionTitle: "1. Surface Plane Detection & Convex Polygons",
        content: `As the device camera sweeps across the room, AR Foundation detects clusters of coplanar feature points. It computes an expanding 2D polygon with a center pose, extent vectors, and surface normal (+Y pointing upwards for floors, +Z pointing inwards for walls).\n\nPlane Types:\n• Horizontal Up: Floors, desks, stages.\n• Horizontal Down: Ceilings.\n• Vertical: Walls, doors, whiteboards.`
      },
      {
        sectionTitle: "2. The ARRaycastManager Pipeline",
        content: `Standard Physics.Raycast tests against virtual colliders. In contrast, 'ARRaycastManager.Raycast' tests against the real physical world's detected trackables!`,
        codeSnippet: {
          language: "csharp",
          title: "ARPlacementManager.cs",
          code: `using System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.XR.ARFoundation;\nusing UnityEngine.XR.ARSubsystems;\n\npublic class ARPlacementManager : MonoBehaviour\n{\n    [SerializeField] private ARRaycastManager raycastManager;\n    [SerializeField] private GameObject objectToPlace;\n    [SerializeField] private GameObject placementIndicator;\n\n    private Pose placementPose;\n    private bool placementPoseIsValid = false;\n    private static List<ARRaycastHit> hits = new List<ARRaycastHit>();\n\n    private void Update()\n    {\n        UpdatePlacementPose();\n        UpdatePlacementIndicator();\n\n        if (placementPoseIsValid && Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)\n        {\n            PlaceObject();\n        }\n    }\n\n    private void UpdatePlacementPose()\n    {\n        var screenCenter = new Vector2(Screen.width * 0.5f, Screen.height * 0.5f);\n        placementPoseIsValid = raycastManager.Raycast(screenCenter, hits, TrackableType.PlaneWithinPolygon);\n\n        if (placementPoseIsValid)\n        {\n            placementPose = hits[0].pose;\n        }\n    }\n\n    private void UpdatePlacementIndicator()\n    {\n        placementIndicator.SetActive(placementPoseIsValid);\n        if (placementPoseIsValid)\n        {\n            placementIndicator.transform.SetPositionAndRotation(placementPose.position, placementPose.rotation);\n        }\n    }\n\n    private void PlaceObject()\n    {\n        Instantiate(objectToPlace, placementPose.position, placementPose.rotation);\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Building a Live Table-Top Furniture Placer",
      steps: [
        "Attach ARPlaneManager and ARRaycastManager to XR Origin.",
        "Assign a subtle feathered mesh visualizer to visualize expanding floor planes.",
        "Create a pulsing circular reticle with a subtle dot in the center.",
        "Demonstrate tapping the screen to spawn a metric-scaled chair that rests securely on the floor plane."
      ],
      tips: "Point out how TrackableType.PlaneWithinPolygon prevents objects from being placed off the edge of tables into empty air."
    },
    handsOnLab: {
      title: "Placement Reticle and Tap-to-Place Implementation",
      durationMinutes: 60,
      instructions: [
        "Configure ARPlaneManager to track Horizontal surfaces.",
        "Create an animated placement indicator ring that conforms to surface angles.",
        "Write a tap-to-spawn controller supporting single or multiple instance placements.",
        "Test on floor surfaces and measure placement accuracy."
      ],
      expectedResult: "A robust placement system with visual reticle confirmation before spawning."
    },
    miniProject: {
      title: "Place a Virtual Chair on a Real Floor",
      description: "Build an AR placement application that detects real-world floors or tabletops, guides the user with a dynamic surface-snapping reticle, and places a scaled 3D chair model flat on the detected ground plane.",
      deliverable: "An AR placement prototype with surface detection, placement reticle, and tap-to-place functionality.",
      checklist: [
        "Horizontal plane detection functioning reliably",
        "Center-screen raycasting with visual indicator reticle",
        "Spawned object adheres strictly to surface orientation",
        "Option to toggle plane mesh visibility after initial placement"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation"],
      assessmentCriteria: [
        "Accuracy of raycast hit testing and surface alignment (35%)",
        "Reticle visual feedback and state management (30%)",
        "Scale realism of placed 3D asset (20%)",
        "Code modularity and exception handling (15%)"
      ]
    },
    resources: [
      { title: "AR Foundation Plane Manager Manual", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/plane-detection.html", type: "docs" },
      { title: "Raycasting in AR Foundation", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/raycasting.html", type: "docs" }
    ],
    reflectionQuestions: [
      "Why should you generally disable or hide AR plane meshes once the user has successfully placed an object?",
      "What is the mathematical difference between raycasting against TrackableType.PlaneWithinPolygon versus PlaneWithinBounds?"
    ]
  },
  {
    id: "day-12",
    day: 12,
    week: 2,
    duration: 2,
    title: "Scaling, Rotation, Gestures, and Manipulation",
    topics: [
      "Mobile Multi-Touch Processing: One-Finger Drag vs Two-Finger Pinch and Twist",
      "LeanTouch and Native Gesture Recognition Architectures",
      "Constrained Object Transformations: Clamping Min/Max Scale in Real-World Meters",
      "Camera-Facing Billboarding vs Object-Space Rotation",
      "Haptic Feedback and Audio Confirmation for Spatial Gestures"
    ],
    learningObjectives: [
      "Process multi-touch inputs to distinguish pan, pinch-to-scale, and two-finger rotation.",
      "Apply mathematical constraints preventing objects from scaling to microscopic or room-filling extremes.",
      "Implement smooth damping algorithms (Mathf.SmoothDamp / Slerp) for tactile responsiveness.",
      "Build an interactive 3D product visualizer that users can inspect from all angles."
    ],
    prerequisites: ["Day 11 Plane Placement"],
    teachingContent: [
      {
        sectionTitle: "1. Multi-Touch Mathematics for AR Manipulation",
        content: `Processing touches without third-party bloat requires tracking touch delta vectors:\n• Translation: Delta position of single touch (TouchPhase.Moved).\n• Pinch-to-Scale: Calculate distance between Touch 0 and Touch 1 in current frame vs previous frame:\n  scaleFactor = (currentDistance - prevDistance) * sensitivity;\n• Twist-to-Rotate: Calculate angle of line connecting Touch 0 and Touch 1 relative to horizontal axis across consecutive frames.`
      },
      {
        sectionTitle: "2. Setting Physical Scale Envelopes",
        content: `In AR, allowing infinite scaling breaks realism. Always clamp scales within meaningful real-world boundaries:\ntransform.localScale = Vector3.ClampMagnitude(transform.localScale, maxScale);\nEnsure minimum scale (e.g., 0.1m) and maximum scale (e.g., 1.5m).`
      }
    ],
    instructorDemonstration: {
      title: "Tactile AR Object Inspector Scripting",
      steps: [
        "Create a standalone 'ARManipulator.cs' script.",
        "Demonstrate one-finger touch rotation around the local Y axis.",
        "Demonstrate two-finger pinch-to-scale with elastic rubber-band clamping at boundaries.",
        "Add subtle mobile haptic vibrations on reaching minimum/maximum bounds."
      ],
      tips: "Never allow rotation around the X or Z axis on placed floor objects; tumbling a chair sideways feels disorienting and unrealistic in AR."
    },
    handsOnLab: {
      title: "Interactive Touch Manipulation Script",
      durationMinutes: 60,
      instructions: [
        "Write a C# touch gesture handler supporting rotation and scaling.",
        "Clamp object scale between 0.2x and 2.5x of original asset dimensions.",
        "Implement a 'Reset Orientation' button to snap the object back to facing the camera.",
        "Verify smooth gesture interpolation without stuttering."
      ],
      expectedResult: "A fluid, manipulable 3D asset that rotates and scales seamlessly under multi-touch gestures."
    },
    miniProject: {
      title: "Create an Interactive 3D Product Viewer",
      description: "Build an interactive AR product viewer (e.g., consumer electronics, sneaker, or automotive component). Users can place the model on a tabletop, rotate it with one finger, pinch to inspect internal details, and tap parts to trigger animations.",
      deliverable: "A manipulable virtual product with smooth multi-touch gestures, scale constraints, and inspection controls.",
      checklist: [
        "Smooth single-finger rotation around the vertical Y axis",
        "Two-finger pinch-to-scale with strict minimum and maximum limits",
        "Touch gesture damping prevents abrupt halting or jitter",
        "Interactive highlight or callout when touching specific components"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation"],
      assessmentCriteria: [
        "Gesture responsiveness and smoothness (35%)",
        "Scale constraint mathematical robustness (25%)",
        "Visual aesthetic and model inspection ergonomics (25%)",
        "Edge case handling for cancelled touches (15%)"
      ]
    },
    resources: [
      { title: "Unity Input System Touch API", url: "https://docs.unity3d.com/Packages/com.unity.inputsystem@latest", type: "docs" },
      { title: "Mobile AR UX Design Guidelines (Google)", url: "https://designguidelines.withgoogle.com/ar-design/", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why is clamping rotation to the Y-axis (yaw) critical for architectural and furniture AR?",
      "How do touch gestures conflict with camera movement, and how do we prioritize touch targets?"
    ]
  },
  {
    id: "day-13",
    day: 13,
    week: 2,
    duration: 2,
    title: "UI, Labels, Audio, and Educational Content",
    topics: [
      "World-Space UI in AR: Floating Information Cards and Billboarding",
      "Dynamic Connecting Leader Lines (LineRenderer) Pointing to 3D Anatomy/Parts",
      "Spatial Audio in AR: 3D Sound Attenuation, Doppler, and Directional Cues",
      "Interactive Step-by-Step Educational Steppers and Narration Triggers",
      "Designing Accessible AR Interfaces for Varying Environments"
    ],
    learningObjectives: [
      "Construct World-Space Canvas overlays that hover dynamically over 3D model hotspots.",
      "Script camera-facing billboarding so informational text is always legible.",
      "Use LineRenderer to draw dynamic leader lines from labels to specific model sub-assemblies.",
      "Trigger synchronized audio narration and visual highlights during educational walkthroughs."
    ],
    prerequisites: ["Day 11 Plane Placement", "Day 12 Manipulation"],
    teachingContent: [
      {
        sectionTitle: "1. The Billboarding Technique in Augmented Reality",
        content: `In mobile AR, the user walks physically around the 3D model. If a UI label is static in world space, it quickly becomes viewed edge-on and unreadable.\n\nBillboarding solves this by forcing the label's transform to rotate toward the camera every frame:\ntransform.LookAt(transform.position + Camera.main.transform.rotation * Vector3.forward,\n                 Camera.main.transform.rotation * Vector3.up);`
      },
      {
        sectionTitle: "2. Dynamic 3D Annotation Lines with LineRenderer",
        content: `Connecting a floating UI card to an anatomical hotspot (e.g., the aorta of a heart or turbine blade of an engine) requires a real-time 3D line that flexes as the user scales or inspects the object.`,
        codeSnippet: {
          language: "csharp",
          title: "AnnotationLeaderLine.cs",
          code: `using UnityEngine;\n\n[RequireComponent(typeof(LineRenderer))]\npublic class AnnotationLeaderLine : MonoBehaviour\n{\n    [SerializeField] private Transform targetHotspot;\n    [SerializeField] private Transform labelCardAnchor;\n    private LineRenderer lineRenderer;\n\n    private void Awake()\n    {\n        lineRenderer = GetComponent<LineRenderer>();\n        lineRenderer.positionCount = 2;\n        lineRenderer.useWorldSpace = true;\n    }\n\n    private void LateUpdate()\n    {\n        if (targetHotspot != null && labelCardAnchor != null)\n        {\n            lineRenderer.SetPosition(0, targetHotspot.position);\n            lineRenderer.SetPosition(1, labelCardAnchor.position);\n        }\n    }\n}`
        }
      }
    ],
    instructorDemonstration: {
      title: "Assembling an Exploded-View Educational Explainer",
      steps: [
        "Take a multi-part 3D model (e.g. human heart or planetary globe).",
        "Add 3 interactive hotspot colliders on key anatomical sections.",
        "Demonstrate floating world-space text cards with billboard scripts.",
        "Implement audio narration that plays educational commentary when a hotspot is tapped."
      ],
      tips: "Point out why dark semi-transparent backplates behind text are essential so white text remains readable against bright real-world walls."
    },
    handsOnLab: {
      title: "Interactive Educational Annotation System",
      durationMinutes: 60,
      instructions: [
        "Configure a World-Space Canvas with TextMeshPro and rounded card styling.",
        "Attach a billboard script ensuring it faces the ARCamera.",
        "Add a LineRenderer linking the card to a specific 3D feature.",
        "Integrate an AudioSource playing voiceover explanations on tap."
      ],
      expectedResult: "A readable, responsive floating annotation card anchored to a 3D model component with audio narration."
    },
    miniProject: {
      title: "Build an AR Anatomy or Solar-System Explainer",
      description: "Build an interactive educational AR prototype (e.g., human heart anatomy, plant cell organelles, or planetary solar system). Features include world-space informative cards, dynamic leader lines, audio explanations, and step-through navigation.",
      deliverable: "An interactive educational AR prototype featuring 3D model inspection, floating billboarding labels, and audio narration.",
      checklist: [
        "Interactive 3D educational model with at least 3 distinct labeled parts",
        "World-space UI annotations with readable dark backdrop panels",
        "Billboarding ensures labels always orient legibly toward the viewer",
        "Synchronized audio narration or sound effects upon part selection",
        "Back / Next step controls for structured learning sequence"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation", "TextMeshPro"],
      assessmentCriteria: [
        "Pedagogical clarity and educational value (30%)",
        "Billboarding and UI legibility in varied lighting (30%)",
        "Audio integration and spatial cues (20%)",
        "Interaction ergonomics and flow (20%)"
      ]
    },
    resources: [
      { title: "Designing Spatial UI in Unity", url: "https://docs.unity3d.com/Packages/com.unity.ugui@latest", type: "docs" },
      { title: "Spatial Audio Engineering Fundamentals", url: "https://docs.unity3d.com/Manual/AudioSpatializerSDK.html", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why must UI text in AR have an opaque or frosted background panel rather than naked floating typography?",
      "How does 3D spatial audio assist users in locating off-screen AR objects?"
    ]
  },
  {
    id: "day-14",
    day: 14,
    week: 2,
    duration: 2,
    title: "AR Learning Companion Integration",
    topics: [
      "Major Project 2 Integration: Architecture and State Management",
      "Combining Image Tracking and Surface Placement in One Pipeline",
      "Tracking Recovery and Graceful Degradation Strategies",
      "Performance Optimization on Mobile SoCs (Thermal Throttling & Battery)",
      "Testing Protocols across Multiple Lighting and Physical Environments"
    ],
    learningObjectives: [
      "Integrate marker tracking, plane detection, touch manipulation, and UI labels into Major Project 2.",
      "Implement robust tracking recovery states to prevent disorientation when tracking drops.",
      "Profile CPU/GPU load on mobile hardware to eliminate thermal throttling.",
      "Package and submit the AR Learning Companion with comprehensive documentation."
    ],
    prerequisites: ["Days 8–13 AR Foundation modules"],
    teachingContent: [
      {
        sectionTitle: "1. The AR Learning Companion Architecture",
        content: `Today students assemble Week 2's major project: the 'AR Learning Companion'. This application turns textbooks, museum exhibits, or study flashcards into interactive 3D spatial learning stations.\n\nArchitecture Modules:\n• AR Trackable Manager: Discovers image markers or floor surfaces.\n• Content Controller: Spawns the educational module and binds data.\n• Interaction Engine: Handles single/multi-touch rotation, scaling, and part selection.\n• Annotation & Audio Subsystem: Displays billboarded cards and plays guided narration.`
      },
      {
        sectionTitle: "2. Managing Mobile Thermals and Battery Life",
        content: `Running camera optical analysis, GPU rendering, and physics simultaneously will heat up a phone within minutes. Key optimization techniques:\n• Target 60 FPS (or 30 FPS on budget devices) via Application.targetFrameRate.\n• Disable plane detection once the model is placed.\n• Compress all textures to ASTC format.\n• Avoid real-time shadow casters; use a simple circular blob shadow under the model.`
      }
    ],
    instructorDemonstration: {
      title: "End-to-End AR Project Audit & Profiling",
      steps: [
        "Deploy the project to a mobile device via USB debugging.",
        "Profile with Unity Profiler / Android Logcat / Xcode Instruments.",
        "Demonstrate switching plane detection off after initial placement to recover 25% CPU overhead.",
        "Verify smooth relocalization when walking 5 meters away and returning to the marker."
      ],
      tips: "Show students how to detect when the phone battery is low or thermal throttling kicks in."
    },
    handsOnLab: {
      title: "Finalizing the AR Learning Companion",
      durationMinutes: 60,
      instructions: [
        "Merge all Day 8–13 subsystems into a master scene.",
        "Implement an 'Auto-Sleep' feature for the plane manager once placement is locked.",
        "Add a visual 'Tracking Lost - Realign Phone' banner when TrackingState drops.",
        "Document performance metrics and create demonstration video recording."
      ],
      expectedResult: "A complete, robust AR educational tool ready for student and instructor review."
    },
    miniProject: {
      title: "Complete the AR Learning Companion",
      description: "Finalize and test the complete AR Learning Companion major project. Ensure stable surface/marker anchoring, interactive touch manipulation, informative billboarding labels, voiceover narration, and tracking-loss recovery.",
      deliverable: "A tested AR demonstration with 3D content and interactive information (build, video walkthrough, and source repository).",
      checklist: [
        "Reliable initialization on physical device or verified editor simulation",
        "Fluid touch gestures (rotate, scale with constraints)",
        "Minimum 3 interactive educational annotations with audio cues",
        "Plane detection automatically paused after placement to save battery",
        "Clear tracking-loss recovery UI guidelines"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "AR Foundation", "Mobile Device / XR Simulator"],
      assessmentCriteria: [
        "System stability and tracking robustness (30%)",
        "Touch interaction fluidity and scale constraints (25%)",
        "Educational content depth and UI legibility (25%)",
        "Optimization and thermal performance hygiene (20%)"
      ]
    },
    resources: [
      { title: "AR Foundation Documentation (Official)", url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/", type: "docs" },
      { title: "Mobile AR Performance Optimization Guide", url: "https://docs.unity.cn/Manual/mobile-optimisation.html", type: "tutorial" }
    ],
    reflectionQuestions: [
      "Why is turning off plane detection after object placement considered an essential mobile AR best practice?",
      "How did your tracking recovery UI guide the user back into an operational state when they moved too quickly?"
    ]
  }
];
