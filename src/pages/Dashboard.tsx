import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Headphones, 
  Search, 
  Grid3X3, 
  User, 
  Brain, 
  Settings, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroAlbum from "@/assets/hero-album.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  price: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(42);
  
  const discoverSongs: Song[] = [
    { id: "1", title: "Liquid Dreams", artist: "Aurora Synth", album: "Golden Waves", cover: album1, price: "0.05 SUI" },
    { id: "2", title: "Digital Flow", artist: "Neon Pulse", album: "Cyber Realm", cover: album2, price: "0.08 SUI" },
    { id: "3", title: "Ethereal Mist", artist: "Cloud Walker", album: "Sky Gardens", cover: album3, price: "0.03 SUI" },
  ];

  const sidebarItems = [
    { icon: Headphones, label: "Dashboard", path: "/dashboard", active: true },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Grid3X3, label: "Vaults", path: "/vaults" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Brain, label: "Governance", path: "/governance" },
    { icon: Settings, label: "Preferences", path: "/settings" },
  ];

  const handleSongClick = (songId: string) => {
    navigate(`/music/${songId}`);
  };

  return (
    <div className="min-h-screen watercolor-bg overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-radial from-purple-400/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-20 glass-panel m-4 rounded-2xl p-4 flex flex-col items-center space-y-6 float">
          {sidebarItems.map((item, index) => (
            <div key={item.label} className="relative group">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(item.path)}
                className={`w-12 h-12 rounded-xl transition-all duration-300 ${
                  item.active 
                    ? "text-yellow-500 bg-yellow-500/10 glow-golden" 
                    : "text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/5"
                } liquid-glow`}
              >
                <item.icon className="w-6 h-6" />
              </Button>
              
              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Header with Notification */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-xl text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10 liquid-glow relative"
            >
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full pulse-golden"></div>
            </Button>
          </div>

          {/* Now Playing Card */}
          <Card className="glass-panel rounded-3xl p-8 glow-golden float">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <img 
                  src={heroAlbum} 
                  alt="Current Song" 
                  className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Cosmic Journey</h2>
                  <p className="text-gray-600">Stellar Harmonics</p>
                </div>
                
                <div className="flex items-center justify-center space-x-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-yellow-500/10 hover:text-yellow-500 liquid-glow"
                  >
                    <SkipBack className="w-6 h-6" />
                  </Button>
                  
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white shadow-lg glow-golden"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-yellow-500/10 hover:text-yellow-500 liquid-glow"
                  >
                    <SkipForward className="w-6 h-6" />
                  </Button>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <div 
                      className="absolute w-4 h-4 bg-yellow-500 rounded-full shadow-lg pulse-golden transform -translate-y-1"
                      style={{ left: `calc(${progress}% - 8px)` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Discover Carousel */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Discover New Music</h2>
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {discoverSongs.map((song, index) => (
                <Card 
                  key={song.id}
                  className="min-w-[280px] glass-panel rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => handleSongClick(song.id)}
                >
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={song.cover} 
                        alt={song.title}
                        className="w-full aspect-square rounded-xl object-cover"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">{song.title}</h3>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-yellow-600">{song.price}</span>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden liquid-glow"
                        >
                          Buy Token
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;