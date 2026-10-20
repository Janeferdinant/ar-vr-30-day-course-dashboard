import { Lesson } from "@/types/course";

export const showcaseLessons: Lesson[] = [
  {
    id: "day-29",
    day: 29,
    week: 5,
    duration: 2,
    title: "Testing, Debugging, Optimisation, and Release",
    topics: [
      "Rigorous Quality Assurance for XR: Performance Profiling and Frame Drop Hunting",
      "Memory Management: Garbage Collection (GC) Allocations, Memory Leaks, and Texture Compression (ASTC/DXT)",
      "Cross-Platform Build Pipelines: Android APKs, Meta Quest standalone packages, and Windows/Mac executables",
      "Professional Repository Hygiene: Git LFS, .gitignore, and Clean Architecture",
      "Writing Production-Grade README Documentation and Verification Test Checklists"
    ],
    learningObjectives: [
      "Conduct in-depth profiling using the Unity Profiler and Memory Profiler.",
      "Identify and eliminate per-frame GC allocations (zero garbage in Update loop).",
      "Configure Git Large File Storage (LFS) for binary textures and FBX 3D meshes.",
      "Prepare a release-ready standalone build accompanied by a comprehensive test matrix and README."
    ],
    prerequisites: ["Completion of Weeks 1 through 4"],
    teachingContent: [
      {
        sectionTitle: "1. The Zero-Garbage Mandate in XR",
        content: `In standard PC games, a 50ms Garbage Collection pause causes a brief micro-stutter that players barely notice. In VR or AR, a 50ms freeze causes instantaneous display shearing, dropped frames, and acute nausea!\n\nRules to Eliminate GC Allocations:\n• Never instantiate new objects or allocate arrays inside Update() or FixedUpdate().\n• Cache component references in Awake() or Start(); never call GetComponent<T>() per frame.\n• Use non-allocating physics queries: Physics.RaycastNonAlloc and Physics.OverlapSphereNonAlloc.\n• Avoid string concatenation in loops; use StringBuilder or TextMeshPro SetText().`
      },
      {
        sectionTitle: "2. Git LFS and Repository Architecture for XR Teams",
        content: `Standard Git repositories cannot efficiently handle 100MB 3D models or 4K textures. Every edit balloons the repository size. Solution: Git LFS (Large File Storage):\n• Store text code (C#, JSON, YAML) in standard git commits.\n• Route binary formats (*.fbx, *.obj, *.png, *.wav, *.mp4) through Git LFS pointer files.\n• Maintain strict .gitignore files excluding Library/, Temp/, and Build/ directories.`
      }
    ],
    instructorDemonstration: {
      title: "Eliminating GC Spikes & Finalizing Build Pipelines",
      steps: [
        "Open the Unity Profiler CPU Usage tab and sort by GC Alloc.",
        "Highlight an offending script generating 2KB of GC every frame and refactor it live.",
        "Demonstrate Git LFS setup with 'git lfs track \"*.fbx\"'.",
        "Produce an optimized release build and run through a 15-point smoke test checklist."
      ],
      tips: "Show students how a single Debug.Log() inside an Update() method allocates heap memory and degrades VR performance."
    },
    handsOnLab: {
      title: "Production Profiling and Release Build Lab",
      durationMinutes: 60,
      instructions: [
        "Audit chosen flagship project using the Unity Profiler.",
        "Confirm zero GC allocations in the rendering and gameplay update loop.",
        "Configure Git LFS in the repository for all 3D meshes, audio files, and textures.",
        "Produce a standalone release build and verify clean launch without editor dependencies."
      ],
      expectedResult: "A release-ready standalone build with zero memory leaks, smooth frame timing, and clean repository state."
    },
    miniProject: {
      title: "Prepare a Release-Ready Build of One Project",
      description: "Select your strongest project from Weeks 1–4, conduct comprehensive performance profiling, fix any discovered bottlenecks, create a production release build, and author a detailed technical README with test verification matrix.",
      deliverable: "Build or verified prototype, test checklist, README, and screenshots.",
      checklist: [
        "Production release build compiled and tested without crashes",
        "Profiler log verifies stable frame rate (60+ FPS desktop / 72+ FPS VR)",
        "Comprehensive README.md detailing setup, architecture, and controls",
        "15-point Quality Assurance test checklist completed and documented",
        "High-resolution screenshots illustrating key features"
      ],
      requiredSoftware: ["Unity 2022.3 LTS or Unity 6", "Git LFS", "Markdown Editor"],
      assessmentCriteria: [
        "Build stability, frame rate, and absence of errors (35%)",
        "Documentation completeness and technical clarity (30%)",
        "Quality assurance test matrix rigor (20%)",
        "Repository hygiene and Git LFS configuration (15%)"
      ]
    },
    resources: [
      { title: "Unity Memory Profiler Documentation", url: "https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest", type: "docs" },
      { title: "Git Large File Storage (LFS) Guide", url: "https://git-lfs.github.com/", type: "docs" }
    ],
    reflectionQuestions: [
      "Why is garbage collection pausing dangerous to the user experience in virtual reality?",
      "How does Git LFS preserve team repository cloning speed when collaborating on large 3D asset libraries?"
    ]
  },
  {
    id: "day-30",
    day: 30,
    week: 5,
    duration: 2,
    title: "Project Showcase, Peer Review, Viva, and Portfolio",
    topics: [
      "The Technical Viva: Defending Spatial Architecture, Algorithms, and Engineering Decisions",
      "Conducting Rigorous Structured Peer Review across UX, Code Quality, and Performance",
      "Building a World-Class Spatial Computing Portfolio (GitHub, Video Showreels, Case Studies)",
      "Publishing WebGL Demonstrations and Executable Release Packages",
      "Career Pathways: XR Developer, Spatial Computing Engineer, Technical Artist, Simulation Specialist"
    ],
    learningObjectives: [
      "Present and defend technical engineering choices in a formal viva defense.",
      "Perform structured peer review evaluations using standardized rubric criteria.",
      "Publish a comprehensive web portfolio showcasing all 4 major projects and daily mini-projects.",
      "Chart future career trajectories and specialization in the spatial computing industry."
    ],
    prerequisites: ["Day 29 Release Build completed", "All 30 days of coursework"],
    teachingContent: [
      {
        sectionTitle: "1. The Technical Viva Defense Protocol",
        content: `Today is the final evaluation milestone of the 30-Day Bootcamp. In the technical viva, students demonstrate not only that their software works, but why it was designed that way:\n• Architectural Defense: Explain why specific XR interaction patterns or tracking strategies were selected.\n• Code Review: Walk through C# event systems, lifecycle methods, and optimization patterns.\n• Problem Solving: Discuss major bugs encountered throughout the 30 days and how they were systematically resolved.\n• Human Factors: Justify ergonomic reach zones, locomotion comfort filters, and UI billboarding.`
      },
      {
        sectionTitle: "2. Structuring an Outstanding XR Developer Portfolio",
        content: `Recruiters and engineering leads evaluate spatial developers on 4 key artifacts:\n1. 60-Second Video Showreel: Fast-paced capture of live headset/device interactions showing hand tracking, grabbing, and physics.\n2. GitHub Repositories: Clean code, clear commits, architecture diagrams, and straightforward setup instructions.\n3. Technical Case Studies: Problem -> Constraints -> Solution -> Measured Result.\n4. Live Demos: Playable WebGL or downloadable builds for Mac/PC/Quest.`
      }
    ],
    instructorDemonstration: {
      title: "Conducting a Model Technical Viva & Portfolio Walkthrough",
      steps: [
        "Model a viva defense: walk through architecture diagrams and field deep technical questions on OpenXR and AR Foundation.",
        "Demonstrate an exemplar GitHub portfolio page with embedded GIFs, architecture schematics, and release binaries.",
        "Review final grading weighting and certification criteria with the cohort."
      ],
      tips: "Remind students that hiring managers care far more about how you solve hard technical problems and handle edge cases than flashy generic visual assets."
    },
    handsOnLab: {
      title: "Peer Review and Final Portfolio Assembly",
      durationMinutes: 60,
      instructions: [
        "Exchange release builds with an assigned peer review partner.",
        "Execute the peer review rubric evaluating UX comfort, code quality, and performance.",
        "Assemble your final web portfolio page linking project repositories, video showreels, and documentation.",
        "Submit final assessment records for grading."
      ],
      expectedResult: "A published, professional AR/VR portfolio and completed peer review evaluation."
    },
    miniProject: {
      title: "Publish a Portfolio Page with Project Showcases",
      description: "Publish a complete, polished developer portfolio page detailing your journey through the 30-Day AR/VR Development Bootcamp. Include project descriptions, screenshots, feature breakdowns, architecture diagrams, demo video links, and GitHub repositories for all major projects.",
      deliverable: "A complete course portfolio and final presentation including project screenshots, feature breakdowns, architecture diagrams, and demo video links.",
      checklist: [
        "Comprehensive portfolio page showcasing all 4 major projects",
        "Embedded high-resolution screenshots and video demo links",
        "Clear technical breakdown of features, architecture, and tools used",
        "Links to public GitHub repositories with clean READMEs",
        "Successful completion of the technical viva and peer review"
      ],
      requiredSoftware: ["Web Browser", "GitHub", "Video Screen Recorder"],
      assessmentCriteria: [
        "Portfolio presentation, aesthetics, and organization (35%)",
        "Technical depth in project descriptions and viva defense (35%)",
        "Rigor of peer review feedback provided (15%)",
        "Completeness of GitHub code repositories (15%)"
      ]
    },
    resources: [
      { title: "Unity Learn VR Development Pathway (Official)", url: "https://learn.unity.com/pathway/vr-development", type: "docs" },
      { title: "Building an XR Engineering Portfolio Guide", url: "https://github.com", type: "docs" }
    ],
    reflectionQuestions: [
      "Looking back over the 56 instructional hours, which core area (3D math, AR tracking, VR physics, or safety simulation) proved most transformative for your skillset?",
      "How will you apply the spatial computing principles mastered during this course to future engineering projects?"
    ]
  }
];
