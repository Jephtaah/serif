"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-[960px] flex h-16 items-center justify-between bg-white border rounded-2xl shadow-sm px-3 sm:px-5 border-slate-200">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image src="/favicon.ico" alt="Serif" width={32} height={32} className="rounded-lg" />
          <span className="text-xl font-semibold text-gray-900">Serif</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Docs
          </Link>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Sign In Button */}
          <Button asChild className="hover:bg-gray-200 rounded-lg bg-gray-100 text-black h-10 px-4 py-2">
            <Link href="/auth/login" className="flex items-center space-x-2">
              <span>Sign in</span>
            </Link>
          </Button>

          {/* Sign Up Button */}
          <Button asChild className="hover:bg-foreground/90 rounded-lg bg-black text-white h-10 px-4 py-2">
            <Link href="/auth/sign-up" className="flex items-center space-x-2">
              <span>Sign up</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 px-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-[960px]">
          <div className="bg-white border rounded-2xl shadow-sm border-slate-200 py-4">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-1 px-4 mb-4">
              <Link 
                href="/features" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 px-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 px-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/docs" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 px-2 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 px-4">
              <Button asChild className="hover:bg-gray-200 rounded-lg bg-gray-100 text-black h-10 w-full">
                <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button asChild className="hover:bg-foreground/90 rounded-lg bg-black text-white h-10 w-full">
                <Link href="/auth/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
