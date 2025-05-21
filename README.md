# DM Drop

DM Drop is a modern file-sharing web app that allows users to upload files and share them securely via unique links. Authenticated users can manage their uploads, track drop analytics, and customize branding (Pro users only). 

## ✨ Features

- 🔐 User authentication (via Supabase)
- 📤 File uploading and sharing
- 📈 Drop analytics dashboard
- 🧑‍🎨 Pro user branding customization
- 🌙 Light/Dark mode support
- 📱 Mobile responsive design
- 🔐 End-to-end encrypted file transfers

## 🧱 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** TailwindCSS + ShadCN UI
- **Auth & DB:** [Supabase](https://supabase.com/)
- **State Management:** React hooks
- **Deployment:** TBD

## 📁 Project Structure
<pre lang="markdown"> ```bash app/ ├── (auth-pages)/ # Sign-up and sign-in logic & layout │ ├── sign-up/ │ ├── sign-in/ │ └── layout.js ├── dashboard/ # Authenticated user dashboard ├── page.js # Landing page components/ ├── Header.jsx # Responsive, dynamic nav bar ├── Footer.jsx └── ui/ # ShadCN UI components utils/ └── supabase/ # Supabase client logic ``` </pre>


## 🧪 TODO

- [ ] Add file upload logic
- [ ] Add password reset
- [ ] Create public drop view page
- [ ] Add file expiration logic
- [ ] Stripe integration for Pro plans
- [ ] Analytics dashboard charts

