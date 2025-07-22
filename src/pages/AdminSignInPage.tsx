import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Separator } from "../components/ui/separator"
import { Badge } from "../components/ui/badge"
import { 
  Users, 
  Mail, 
  Lock, 
  ArrowLeft,
  Eye,
  EyeOff,
  Building2,
  Shield,
  Chrome,
  Github,
  Crown
} from "lucide-react"

function AdminSignInPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    companySize: '',
    role: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle admin authentication logic here
    console.log('Admin form submitted:', formData)
    
    // Show success message and redirect
    alert(`${isSignUp ? 'Admin account created' : 'Admin login'} successful! Welcome to your EngageHub dashboard.`)
    
    // In a real app, this would redirect to the admin dashboard
    // For now, we'll redirect to the homepage
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      {/* Back to Home */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EngageHub
            </span>
          </Link>
          <Badge className="mt-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 rounded-full px-4 py-1">
            <Crown className="w-4 h-4 mr-2" />
            Admin Portal
          </Badge>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Create Admin Account' : 'Admin Sign In'}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {isSignUp 
                ? 'Set up your company on EngageHub' 
                : 'Access your company dashboard'
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-2 hover:bg-gray-50 py-6"
                onClick={() => {
                  alert('Google admin authentication successful! Welcome to your EngageHub dashboard.')
                  window.location.href = '/'
                }}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-2 hover:bg-gray-50 py-6"
                onClick={() => {
                  alert('GitHub admin authentication successful! Welcome to your EngageHub dashboard.')
                  window.location.href = '/'
                }}
              >
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">or</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6"
                      required
                    />
                  </div>
                </div>
              )}

              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Corporation"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="HR Director, CEO, etc."
                      value={formData.role}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Input
                      id="companySize"
                      name="companySize"
                      type="text"
                      placeholder="10-50 employees"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6"
                      required
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Work Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 py-6 pl-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 py-6 pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="rounded-xl border-2 py-6 pl-12"
                      required
                    />
                  </div>
                </div>
              )}

              {isSignUp && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-indigo-800">
                      <p className="font-medium mb-1">Enterprise-grade security</p>
                      <p>Your company data is protected with bank-level encryption and isolated tenant architecture.</p>
                    </div>
                  </div>
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSignUp ? 'Create Admin Account' : 'Sign In to Dashboard'}
              </Button>
            </form>

            {/* Toggle Sign Up/Sign In */}
            <div className="text-center">
              <p className="text-gray-600">
                {isSignUp ? 'Already have an admin account?' : "Don't have an admin account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary hover:text-primary/80 font-semibold"
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </button>
              </p>
            </div>

            {/* Employee Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Are you an employee?</p>
              <Link to="/auth">
                <Button variant="outline" className="rounded-xl">
                  Employee Sign Up
                </Button>
              </Link>
            </div>

            {/* Pricing Link */}
            <div className="text-center">
              <Link to="/pricing" className="text-sm text-primary hover:text-primary/80">
                View Pricing Plans →
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  )
}

export default AdminSignInPage