// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} DM Drop. All rights reserved.</p>
    </footer>
  );
}
