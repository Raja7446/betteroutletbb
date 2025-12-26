import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import fintechBackground from "@/assets/fintech-background.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${fintechBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-card rounded-2xl floating-container p-8 animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">BB Lite</h1>
              <p className="text-sm text-text-secondary">Outlet Analytics</p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-text-primary">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 bg-input-bg border-input-border focus:border-primary text-text-primary placeholder:text-text-tertiary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-text-primary">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-input-bg border-input-border focus:border-primary pr-12 text-text-primary placeholder:text-text-tertiary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 gap-2"
            >
              <LogIn className="w-5 h-5" />
              Login
            </Button>
          </form>

          {/* Helper Text */}
          <p className="text-center text-text-tertiary text-sm mt-6">
            Login credentials are shared by the restaurant owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;