# AR/VR Development Bootcamp — 30-Day Learning Dashboard

> **56-Hour Spatial Computing Curriculum & Student Progress Dashboard**  
> **Course Director & Lead Instructor:** **Jane Rose, Asst. Prof, CSE**

---

## 🌟 Executive Overview

The **AR/VR Development Bootcamp Dashboard** is a production-grade educational web application designed for instructors and students pursuing modern spatial computing engineering. Covering **30 instructional days** and **56 certified hours**, the platform guides learners through an immersive journey from fundamental 3D coordinate geometry to advanced integrated cross-platform XR applications.

### Mandatory Attribution
> **Instructor:** `Jane Rose, Asst. Prof, CSE`  
> **Course Duration:** `30 Days | 56 Hours`

---

## 🚀 Key Features

1. **Overview Dashboard (`/`)**
   - Welcome panel with official attribution to Jane Rose, Asst. Prof, CSE.
   - Interactive metric cards: Total duration (30 days), instructional hours (56h), major projects (4), daily mini-projects (30), completed lessons, remaining lessons, and dynamic completion percentage.
   - Visual progress and weekly comparison charts built with Recharts.
   - Smart "Continue Learning" module pointing directly to the next scheduled incomplete lesson.
   - 4 Weekly Major Project cards with milestone progress bars.
   - Sorted upcoming tasks and one-click quick actions.

2. **30-Day Course Roadmap (`/roadmap`)**
   - Chronological breakdown grouped across Weeks 1–4 and the Final Showcase.
   - Multi-criteria filtering by week (13h/13h/13h/13h/4h), completion status, and keyword search.
   - Quick completion toggles and direct navigation to any lesson.

3. **Daily Lessons Library & Viewer (`/lessons` & `/lessons/[id]`)**
   - Full substantive technical curriculum for all 30 days (zero filler or placeholder text).
   - Topic-by-topic theoretical foundations with copyable C# MonoBehaviour, AR Foundation, and OpenXR snippets.
   - Instructor demonstration notes with pro-tips.
   - Step-by-step hands-on practical lab instructions with time budgets.
   - Interactive mini-project verification checklists with local storage persistence.
   - Student submission notes and repository/video demo URL recording.
   - Seamless Previous/Next navigation and instant day jumpers.

4. **Weekly Major Projects Workspace (`/projects` & `/projects/[id]`)**
   - **Week 1: 3D Interactive World** (13h) — Metric scaling, PBR texturing, lighting, C# physics triggers, and standalone build.
   - **Week 2: AR Learning Companion** (13h) — Mobile AR Foundation, natural feature image tracking, plane detection, touch manipulation, and billboarding annotations.
   - **Week 3: VR Laboratory** (13h) — OpenXR integration, locomotion comfort, direct/ray grabbing, socket mechanics, and HRTF spatial audio.
   - **Week 4: Immersive Safety Training** (13h) — Industrial hazard simulation, spatial trigger zones, decision quiz terminals, multisensory alerts, and companion AR prototype *(Academic Prototype Scope)*.

5. **Assignments & Mini-Project Tracker (`/assignments`)**
   - Comprehensive registry of all 30 daily practical mini-projects.
   - Filters by week and status (Not Started, In Progress, Submitted, Completed).
   - Interactive submission note editor and repository URL linking.
   - One-click CSV export and browser-based printable report.

6. **Progress Tracker (`/progress`)**
   - Live hours calculation: completed vs remaining out of 56 hours.
   - 30-day interactive matrix grid with status tooltips and quick toggle.
   - JSON data backup export, JSON restore import, and local storage reset.

7. **Assessment Dashboard (`/assessments`)**
   - Exact curriculum grading structure:
     - Daily mini-projects and lab submissions: **20%**
     - Week 1 — 3D Interactive World: **15%**
     - Week 2 — AR Learning Companion: **20%**
     - Week 3 — VR Laboratory: **20%**
     - Week 4 — Immersive Safety Training: **20%**
     - Final presentation and viva: **5%**
     - **Total: 100%**
   - Institutional missing-score handling: distinguishes ungraded items from zero marks.
   - Dynamic weighted score computation, letter grade generation, and GPA calculation.
   - Visual score contribution chart and official printable report.

8. **Learning Resources (`/resources`)**
   - 9 categorized resource domains: Unity fundamentals, C# scripting, AR Foundation, Image tracking/planes, OpenXR, XR Interaction Toolkit, Blender & 3D assets, Testing & optimisation, Portfolio & Git.
   - Official documentation links:
     - [Unity Learn VR Development](https://learn.unity.com/pathway/vr-development)
     - [AR Foundation 6.0 Documentation](https://docs.unity.cn/Packages/com.unity.xr.arfoundation%406.0/)
     - [XR Interaction Toolkit Manual](https://docs.unity.cn/Packages/com.unity.xr.interaction.toolkit%402.6/manual/index.html)
   - Detailed software and hardware prerequisites matrix.

9. **Course Information & Instructor Profile (`/course-info` & `/instructor`)**
   - Certified 56-hour instructional schedule breakdown table.
   - Profile for Jane Rose, Asst. Prof, CSE detailing teaching philosophy, research focus areas, and course vision.

---

## 🛠 Technology Stack

- **Framework:** Next.js 16 (App Router with Partial Prerendering)
- **Language:** TypeScript with strict type checking
- **Styling:** Vanilla Tailwind CSS v4 with custom glassmorphism design tokens
- **Icons:** Lucide React
- **Visualizations & Charts:** Recharts
- **State Management & Persistence:** React Context + HTML5 LocalStorage (decoupled for future database migration)
- **Deployment Platform:** Vercel

---

## 📋 Programmatic Curriculum Validation

The curriculum data is programmatically validated at runtime and build time in `lib/validation.ts`:

| Rule | Expected | Status |
| :--- | :--- | :--- |
| **Total Duration** | Exactly 30 Days | ✅ Verified (30 Days) |
| **Instructional Hours** | Exactly 56 Hours | ✅ Verified (56 Hours) |
| **Week 1 Duration** | 13 Hours | ✅ Verified (13h) |
| **Week 2 Duration** | 13 Hours | ✅ Verified (13h) |
| **Week 3 Duration** | 13 Hours | ✅ Verified (13h) |
| **Week 4 Duration** | 13 Hours | ✅ Verified (13h) |
| **Final Showcase** | 4 Hours (Days 29–30) | ✅ Verified (4h) |
| **Major Projects** | Exactly 4 Capstones | ✅ Verified (4 Capstones) |
| **Mini-Projects** | 30 Daily Labs (1 per day) | ✅ Verified (30 Labs) |

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation
```bash
# Clone the repository
git clone https://github.com/username/ar-vr-30-day-course-dashboard.git
cd ar-vr-30-day-course-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Verification Commands
```bash
# Run TypeScript type check and production build
npm run build

# Run ESLint validation
npm run lint
```

---

## 🚢 Deployment to Vercel

### Option 1: Git-Connected Deployment (Recommended)
1. Push the repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/ar-vr-30-day-course-dashboard.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `ar-vr-30-day-course-dashboard` repository.
4. Leave build settings as default (`next build`), framework as `Next.js`.
5. Click **"Deploy"**. Future pushes to `main` will automatically trigger continuous production deployments.

### Option 2: Vercel CLI
```bash
npx vercel
```

---

## 📜 Academic Integrity & Footer Attribution

All pages across the application display the mandatory footer attribution:
> **Jane Rose, Asst. Prof, CSE**  
> AR/VR Development Bootcamp • 30 Days | 56 Hours
