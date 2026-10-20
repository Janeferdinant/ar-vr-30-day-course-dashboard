export interface InstructorProfile {
  name: string;
  title: string;
  attribution: string;
  department: string;
  bio: string;
  teachingPhilosophy: string;
  researchFocus: string[];
  courseVision: string;
  officeHoursInfo: string;
}

export const instructorData: InstructorProfile = {
  name: "Jane Rose",
  title: "Asst. Prof, CSE",
  attribution: "Jane Rose, Asst. Prof, CSE",
  department: "Computer Science and Engineering",
  bio: "Jane Rose is an Assistant Professor in Computer Science and Engineering specializing in Spatial Computing, Computer Graphics, Extended Reality (XR), and Interactive Simulation Systems. With extensive academic and practical experience in real-time 3D pipelines, OpenXR standards, and human-computer spatial interaction, Prof. Rose directs hands-on laboratory courses designed to prepare engineering students for careers at the forefront of immersive technology.",
  teachingPhilosophy: "I believe spatial computing cannot be learned merely through passive lectures or abstract slide decks. Students master AR and VR by constructing real systems—tackling metric scale, optical tracking anomalies, physics simulation edge cases, and human perceptual factors. We emphasize clean software architecture, rigorous performance optimization, and thoughtful human-centered design in every laboratory activity.",
  researchFocus: [
    "Augmented & Mixed Reality Tracking Pipelines",
    "Spatial Computing & Human Perception in VR",
    "Real-Time 3D Rendering & Universal Render Pipeline (URP)",
    "Haptic Feedback & Ergonomic Spatial Interfaces",
    "Interactive Simulation for High-Hazard Industrial Training"
  ],
  courseVision: "This 30-day, 56-instructional-hour curriculum takes students on a structured progression from fundamental 3D coordinate geometry to advanced integrated XR applications. By grounding each week in a substantial project—from an interactive 3D world to an AR educational companion, a virtual laboratory, and an immersive safety simulation—students build a verifiable portfolio demonstrating mastery of modern spatial engineering.",
  officeHoursInfo: "Office hours and project consultations are scheduled during designated lab tutorial sessions and following technical viva presentations."
};
