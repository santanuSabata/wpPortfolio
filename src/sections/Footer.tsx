import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading font-bold text-lg gradient-text">Santanu Kumar Sabata</p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} — Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
