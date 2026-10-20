import { ResourceCategory } from "@/types/course";

export const courseResources: ResourceCategory[] = [
  {
    id: "unity-fundamentals",
    category: "Unity Fundamentals",
    description: "Core real-time 3D engine concepts, Universal Render Pipeline (URP), scene graph, and lighting workflows.",
    iconName: "Box",
    items: [
      {
        title: "Unity Universal Render Pipeline (URP) Manual",
        description: "Official guide to multiplatform real-time rendering, PBR shaders, and camera stacks optimized for mobile and VR.",
        url: "https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest",
        type: "official-doc",
        isPrimary: true,
        badge: "Official Manual"
      },
      {
        title: "Unity 3D GameKit & Editor Workflows",
        description: "Comprehensive step-by-step documentation on GameObject-Component architecture, hierarchy organization, and prefabs.",
        url: "https://learn.unity.com",
        type: "video-course",
        badge: "Tutorial Series"
      },
      {
        title: "Standard PBR Material Calibration Charts",
        description: "Physically Based Rendering reference charts for realistic metallic, smoothness, and specular albedo values.",
        url: "https://docs.unity3d.com/Manual/StandardShaderMaterialCharts.html",
        type: "official-doc"
      }
    ]
  },
  {
    id: "csharp-scripting",
    category: "C# Scripting for 3D & XR",
    description: "MonoBehaviour event lifecycle, math vector routines, physics queries, and event-driven architectures.",
    iconName: "Code2",
    items: [
      {
        title: "Unity Scripting Reference API",
        description: "Authoritative reference for Transform, Vector3, Quaternion, Rigidbody, and event delegates.",
        url: "https://docs.unity3d.com/ScriptReference/",
        type: "official-doc",
        isPrimary: true,
        badge: "Core API"
      },
      {
        title: "Order of Execution for Event Functions",
        description: "Essential visualization of Awake, OnEnable, Start, FixedUpdate, Update, LateUpdate, and OnDestroy sequence.",
        url: "https://docs.unity3d.com/Manual/execution-order.html",
        type: "official-doc"
      },
      {
        title: "C# Performance Optimization Patterns",
        description: "Eliminating garbage collection spikes, object pooling, and efficient cache-friendly component queries.",
        url: "https://learn.unity.com/tutorial/fixing-performance-problems-optimizing-scripts",
        type: "official-doc"
      }
    ]
  },
  {
    id: "ar-foundation",
    category: "AR Foundation",
    description: "Cross-platform mobile augmented reality framework bridging ARCore (Android) and ARKit (iOS).",
    iconName: "Layers",
    items: [
      {
        title: "AR Foundation Documentation (Official 6.0 Package)",
        description: "Core documentation for AR Session, XR Origin, subsystem lifecycles, and multi-device deployment.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/",
        type: "official-doc",
        isPrimary: true,
        badge: "Required Reading"
      },
      {
        title: "Google ARCore Developer Concepts",
        description: "Fundamental principles of mobile Visual-Inertial Odometry, environmental lighting estimation, and point clouds.",
        url: "https://developers.google.com/ar/discover/concepts",
        type: "official-doc"
      },
      {
        title: "Apple ARKit Human Interface Guidelines",
        description: "Human-centered design principles for comfortable mobile augmented reality interactions and onboarding.",
        url: "https://developer.apple.com/design/human-interface-guidelines/augmented-reality",
        type: "official-doc"
      }
    ]
  },
  {
    id: "image-tracking-planes",
    category: "Image Tracking and Plane Detection",
    description: "Natural feature tracking, surface detection, AR raycast hit-testing, and dynamic reticle systems.",
    iconName: "Scan",
    items: [
      {
        title: "AR Tracked Image Manager User Manual",
        description: "Configuring Reference Image Libraries, image quality evaluation scores, and dynamic 3D model spawning.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/image-tracking.html",
        type: "official-doc",
        isPrimary: true
      },
      {
        title: "AR Plane Manager & Surface Classification",
        description: "Detecting horizontal floors, tabletops, and vertical walls with boundary polygon hit testing.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/plane-detection.html",
        type: "official-doc"
      },
      {
        title: "AR Raycasting & Screen-to-World Hit Testing",
        description: "Testing touch positions against detected physical surfaces with TrackableType.PlaneWithinPolygon.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/manual/features/raycasting.html",
        type: "official-doc"
      }
    ]
  },
  {
    id: "openxr",
    category: "OpenXR Specification & Runtimes",
    description: "The royalty-free open standard from Khronos Group enabling cross-platform portable VR/XR deployment.",
    iconName: "Glasses",
    items: [
      {
        title: "Khronos OpenXR Official Specification",
        description: "The global open standard specification for virtual reality and augmented reality devices.",
        url: "https://www.khronos.org/openxr/",
        type: "official-doc",
        isPrimary: true,
        badge: "Open Standard"
      },
      {
        title: "Unity OpenXR Plugin Manual",
        description: "Configuring OpenXR features, interaction profiles (Meta Quest, HTC Vive, Windows MR), and validation checks.",
        url: "https://docs.unity3d.com/Packages/com.unity.xr.openxr@latest",
        type: "official-doc"
      },
      {
        title: "XR Device Simulator Guide",
        description: "Testing 6-DoF HMD navigation, controller tracking, and triggers directly inside the editor without a headset.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/xr-device-simulator.html",
        type: "official-doc"
      }
    ]
  },
  {
    id: "xr-interaction-toolkit",
    category: "XR Interaction Toolkit (XRI)",
    description: "High-level component-based interaction system providing VR locomotion, grabbing, sockets, and spatial UI.",
    iconName: "HandMetal",
    items: [
      {
        title: "XR Interaction Toolkit Manual (Official v2.6+)",
        description: "Authoritative documentation for XR Origin, Direct/Ray Interactors, Grab Interactables, and Sockets.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/index.html",
        type: "official-doc",
        isPrimary: true,
        badge: "Required Manual"
      },
      {
        title: "Unity Learn VR Development Pathway",
        description: "Official structured learning pathway covering VR fundamentals, locomotion, ergonomics, and spatial design.",
        url: "https://learn.unity.com/pathway/vr-development",
        type: "video-course",
        isPrimary: true,
        badge: "Official Course"
      },
      {
        title: "XR Sockets & Interaction Layer Masks",
        description: "Configuring key-lock snap points, hover meshes, and collision layer filtering for multi-part assemblies.",
        url: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/socket-interactor.html",
        type: "official-doc"
      }
    ]
  },
  {
    id: "blender-3d-assets",
    category: "Blender and 3D Assets",
    description: "3D asset creation, metric scale calibration, UV unwrapping, and optimizing polygon counts for real-time XR.",
    iconName: "Palette",
    items: [
      {
        title: "Blender Official Manual",
        description: "Free and open-source 3D creation suite: modeling, UV unwrapping, baking normals, and exporting FBX/glTF.",
        url: "https://docs.blender.org/manual/en/latest/",
        type: "official-doc"
      },
      {
        title: "Kenney.nl Free Game Assets (CC0)",
        description: "Public domain modular 3D architectural kits, furniture props, and textures perfectly suited for prototype worlds.",
        url: "https://kenney.nl/assets",
        type: "asset-store",
        badge: "Free CC0 Assets"
      },
      {
        title: "Poly Pizza Low-Poly 3D Models",
        description: "Thousands of lightweight low-poly 3D models ideal for mobile AR and standalone VR frame budgets.",
        url: "https://poly.pizza",
        type: "asset-store"
      }
    ]
  },
  {
    id: "testing-optimization",
    category: "Testing and Optimisation",
    description: "Profiling frame timing budgets, memory leak prevention, draw call batching, and thermal management.",
    iconName: "Cpu",
    items: [
      {
        title: "Unity Profiler User Manual",
        description: "Diagnosing CPU usage, GPU draw timings, rendering bottlenecks, and garbage collection allocations.",
        url: "https://docs.unity3d.com/Manual/Profiler.html",
        type: "official-doc",
        isPrimary: true
      },
      {
        title: "Mobile & Standalone XR Performance Optimization",
        description: "ASTC texture compression, occlusion culling, static batching, and managing mobile thermal throttling.",
        url: "https://docs.unity.cn/Manual/mobile-optimisation.html",
        type: "official-doc"
      },
      {
        title: "Meta Quest Performance Guidelines & OVR Metrics",
        description: "Profiling 72/90/120 Hz frame deadlines, fixed foveated rendering, and GPU level scaling.",
        url: "https://developer.oculus.com/documentation/unity/ts-insights/",
        type: "official-doc"
      }
    ]
  },
  {
    id: "portfolio-git",
    category: "Portfolio and Git Workflows",
    description: "Version control for binary assets with Git LFS, technical portfolio presentation, and project showcase strategies.",
    iconName: "FolderGit2",
    items: [
      {
        title: "Git Large File Storage (Git LFS)",
        description: "Managing large 3D models, textures, audio, and builds in Git without bloating repository clone times.",
        url: "https://git-lfs.github.com/",
        type: "tool",
        isPrimary: true
      },
      {
        title: "GitHub Unity .gitignore Official Template",
        description: "Standard ignore file excluding temporary Library/, Temp/, and Obj/ folders from version control.",
        url: "https://github.com/github/gitignore/blob/main/Unity.gitignore",
        type: "tool"
      },
      {
        title: "Showcasing Spatial Computing Projects",
        description: "Structuring technical case studies, video showreels, and architecture diagrams for prospective employers.",
        url: "https://github.com",
        type: "library"
      }
    ]
  }
];

export const softwarePrerequisites = [
  {
    title: "Unity Hub & Unity 2022.3 LTS or Unity 6",
    requiredVersion: "2022.3.x LTS or 6000.0.x",
    purpose: "Primary real-time 3D engine, package management, and multiplatform build system.",
    link: "https://unity.com/download"
  },
  {
    title: "Visual Studio 2022 / VS Code with C# Dev Kit",
    requiredVersion: "Latest stable",
    purpose: "C# IDE with code completion, Unity debugger integration, and Roslyn analyzers.",
    link: "https://visualstudio.microsoft.com/"
  },
  {
    title: "Git & Git LFS",
    requiredVersion: "Git 2.40+ & LFS 3.3+",
    purpose: "Version control, binary 3D asset tracking, and collaborative code review workflows.",
    link: "https://git-scm.com/"
  },
  {
    title: "Android SDK / Xcode (Optional for Mobile Testing)",
    requiredVersion: "Android API 28+ / iOS 15+",
    purpose: "Building standalone APKs for Meta Quest / Android AR or iOS ARKit builds.",
    link: "https://developer.android.com/studio"
  },
  {
    title: "XR Device Simulator (Built-in to Unity)",
    requiredVersion: "Included with XRI 2.5+",
    purpose: "Full 6-DoF head and hand interaction testing using standard keyboard and mouse.",
    link: "https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/xr-device-simulator.html"
  }
];
