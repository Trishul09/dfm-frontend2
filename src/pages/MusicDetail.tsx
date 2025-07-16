import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroAlbum from "@/assets/hero-album.jpg";

const MusicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  // Mock data - would be fetched based on id
  const songData = {
    id: id || "1",
    title: "Liquid Dreams",
    artist: "Aurora Synth", 
    album: "Golden Waves",
    cover: heroAlbum,
    verified: true,
    stats: {
      tokenPrice: "0.05 SUI",
      vaultYield: "12.5%",
      holders: "1,247",
      creatorRevenue: "8.3 SUI"
    }
  };

  const handleBuyToken = () => {
    setShowBuyModal(true);
  };

  return (
    <div className="min-h-screen watercolor-bg relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-xl p-3 liquid-glow"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Button>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-xl transition-all duration-300 ${
                isLiked 
                  ? "text-red-500 bg-red-500/10 glow-golden" 
                  : "text-gray-600 hover:text-red-500 hover:bg-red-500/10"
              } liquid-glow float`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-xl text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10 liquid-glow float"
            >
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-panel rounded-3xl p-8 mb-8 glow-golden float">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Album Art */}
              <div className="relative">
                <img 
                  src={songData.cover} 
                  alt={songData.title}
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Song Info */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold text-gray-800">{songData.title}</h1>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <p className="text-xl text-gray-600">{songData.artist}</p>
                    {songData.verified && (
                      <Badge className="bg-blue-500/20 text-blue-700 border-blue-300">
                        Verified Creator
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 border-gray-300 hover:border-yellow-500 hover:text-yellow-500 liquid-glow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on Sui</span>
                  </Button>
                </div>

                <Button
                  size="lg"
                  onClick={handleBuyToken}
                  className="w-full lg:w-auto px-12 py-4 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white shadow-xl glow-golden liquid-glow"
                >
                  ✨ Buy Token
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-panel rounded-2xl p-6 text-center float">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Token Price</h3>
              <p className="text-2xl font-bold text-yellow-600">{songData.stats.tokenPrice}</p>
            </Card>

            <Card className="glass-panel rounded-2xl p-6 text-center float" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Vault Yield</h3>
              <p className="text-2xl font-bold text-green-600">{songData.stats.vaultYield}</p>
            </Card>

            <Card className="glass-panel rounded-2xl p-6 text-center float" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Holders</h3>
              <p className="text-2xl font-bold text-blue-600">{songData.stats.holders}</p>
            </Card>

            <Card className="glass-panel rounded-2xl p-6 text-center float" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Creator Revenue</h3>
              <p className="text-2xl font-bold text-purple-600">{songData.stats.creatorRevenue}</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Buy Token Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="glass-panel rounded-3xl p-8 max-w-md w-full glow-golden slide-in-right">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Buy Music Token</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Token Price:</span>
                  <span className="font-semibold text-yellow-600">{songData.stats.tokenPrice}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">-</Button>
                    <span className="w-8 text-center">1</span>
                    <Button variant="outline" size="sm">+</Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-yellow-600">{songData.stats.tokenPrice}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowBuyModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowBuyModal(false);
                    // Handle purchase logic here
                  }}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden"
                >
                  Confirm Purchase
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MusicDetail;