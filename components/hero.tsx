import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/moonrise.png')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white/90 text-xs sm:text-sm font-medium">AI Enabled</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight font-semibold px-2">
          Amplify your voice with{" "}
          <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            striking blog posts
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-200 font-light px-2">
          Transform your ideas into captivating stories that resonate with your audience. Create, publish, and grow your
          readership with our intuitive blogging platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 w-full sm:w-auto text-sm sm:text-base"
          >
            Start Writing Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto text-sm sm:text-base"
          >
            Explore Features
          </Button>
        </div>

        <div className="mt-8 sm:mt-12 text-white/70 text-xs sm:text-sm">
          <p>Join thousands of writers sharing their stories</p>
        </div>
      </div>
    </section>
  )
}
