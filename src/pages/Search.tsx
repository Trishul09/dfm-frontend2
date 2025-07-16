import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, Filter, Play, User, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import userAvatar from "@/assets/user-avatar.jpg";

interface SearchResult {
  type: "song" | "creator";
  id: string;
  title?: string;
  artist?: string;
  cover?: string;
  price?: string;
  name?: string;
  avatar?: string;
  verified?: boolean;
  followers?: string;
}

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [focusedInput, setFocusedInput] = useState(false);

  const searchResults: SearchResult[] = [
    { type: "song", id: "1", title: "Liquid Dreams", artist: "Aurora Synth", cover: album1, price: "0.05 SUI" },
    { type: "creator", id: "aurora", name: "Aurora Synth", avatar: userAvatar, verified: true, followers: "12.5K" },
    { type: "song", id: "2", title: "Digital Flow", artist: "Neon Pulse", cover: album2, price: "0.08 SUI" },
    { type: "song", id: "3", title: "Ethereal Mist", artist: "Cloud Walker", cover: album3, price: "0.03 SUI" },
    { type: "creator", id: "neon", name: "Neon Pulse", avatar: userAvatar, verified: false, followers: "8.2K" },
  ];

  const handleSongClick = (songId: string) => {
    navigate(`/music/${songId}`);
  };

  const handleCreatorClick = (creatorId: string) => {
    navigate(`/creator/${creatorId}`);
  };

  return (
    <div className="min-h-screen watercolor-bg relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-15">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-yellow-400/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Discover Music</h1>
            <p className="text-xl text-gray-600">Explore through natural input and filters</p>
          </div>

          {/* Search Section */}
          <Card className="glass-panel rounded-3xl p-6 glow-golden float">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  placeholder="Search by mood, lyrics, or creator..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setFocusedInput(true)}
                  onBlur={() => setFocusedInput(false)}
                  className={`pl-12 pr-4 py-3 text-lg border-2 rounded-xl transition-all duration-300 ${
                    focusedInput 
                      ? "border-yellow-500 glow-golden" 
                      : "border-gray-200 hover:border-yellow-300"
                  }`}
                />
              </div>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full sm:w-48 py-3 border-2 border-gray-200 hover:border-yellow-300 rounded-xl transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">All Results</SelectItem>
                  <SelectItem value="mood">By Mood</SelectItem>
                  <SelectItem value="title">By Title</SelectItem>
                  <SelectItem value="creator">By Creator</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        </div>

        {/* Results Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, index) => (
              <Card 
                key={`${result.type}-${result.id}`}
                className="glass-panel rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group float"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => result.type === "song" ? handleSongClick(result.id) : handleCreatorClick(result.id)}
              >
                {result.type === "song" ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={result.cover} 
                        alt={result.title}
                        className="w-full aspect-square rounded-xl object-cover"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 p-0"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden"
                        >
                          Buy Token
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">{result.title}</h3>
                      <p className="text-sm text-gray-600">{result.artist}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-yellow-600">{result.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={result.avatar} 
                          alt={result.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                        />
                        {result.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <Verified className="w-4 h-4 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
                          <span>{result.name}</span>
                          {result.verified && (
                            <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 text-xs">
                              Verified
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600">{result.followers} followers</p>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white liquid-glow"
                    >
                      Follow
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;