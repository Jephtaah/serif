import { redirect } from 'next/navigation'
import Link from 'next/link'

import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to your Dashboard</CardTitle>
            <CardDescription>
              You are successfully authenticated and can access protected content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Logged in as:</p>
              <p className="font-medium">{data.user.email}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default">
                <Link href="/protected/profile">
                  Manage Profile
                </Link>
              </Button>
              
              <LogoutButton />
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">What's Available:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Profile management with automatic creation on signup</li>
                <li>• Row Level Security protecting your data</li>
                <li>• Type-safe database operations</li>
                <li>• Automatic email synchronization</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
