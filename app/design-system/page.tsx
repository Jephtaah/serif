import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Design System</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive overview of Serif's design language, including colors, typography, spacing, and components.
        </p>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Color Palette</h2>
          <p className="text-muted-foreground">All colors automatically adapt to light and dark themes.</p>
        </div>

        <div className="space-y-8">
          {/* Primary Colors */}
          <div>
            <h3 className="text-xl font-medium mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <ColorSwatch color="bg-background" name="Background" />
              <ColorSwatch color="bg-foreground" name="Foreground" />
              <ColorSwatch color="bg-primary" name="Primary" />
              <ColorSwatch color="bg-primary-foreground" name="Primary Foreground" />
              <ColorSwatch color="bg-secondary" name="Secondary" />
              <ColorSwatch color="bg-secondary-foreground" name="Secondary Foreground" />
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h3 className="text-xl font-medium mb-4">Accent & Utility Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <ColorSwatch color="bg-muted" name="Muted" />
              <ColorSwatch color="bg-muted-foreground" name="Muted Foreground" />
              <ColorSwatch color="bg-accent" name="Accent" />
              <ColorSwatch color="bg-accent-foreground" name="Accent Foreground" />
              <ColorSwatch color="bg-destructive" name="Destructive" />
              <ColorSwatch color="bg-destructive-foreground" name="Destructive Foreground" />
            </div>
          </div>

          {/* Surface Colors */}
          <div>
            <h3 className="text-xl font-medium mb-4">Surface & Border Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <ColorSwatch color="bg-card" name="Card" />
              <ColorSwatch color="bg-card-foreground" name="Card Foreground" />
              <ColorSwatch color="bg-popover" name="Popover" />
              <ColorSwatch color="bg-popover-foreground" name="Popover Foreground" />
              <ColorSwatch color="bg-border" name="Border" />
              <ColorSwatch color="bg-input" name="Input" />
            </div>
          </div>

          {/* Chart Colors */}
          <div>
            <h3 className="text-xl font-medium mb-4">Chart Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ColorSwatch color="bg-chart-1" name="Chart 1" />
              <ColorSwatch color="bg-chart-2" name="Chart 2" />
              <ColorSwatch color="bg-chart-3" name="Chart 3" />
              <ColorSwatch color="bg-chart-4" name="Chart 4" />
              <ColorSwatch color="bg-chart-5" name="Chart 5" />
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Typography</h2>
          <p className="text-muted-foreground">Using Inter font family with various weights and sizes.</p>
        </div>

        <div className="space-y-8">
          {/* Headings */}
          <div>
            <h3 className="text-xl font-medium mb-4">Headings</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h1 className="text-4xl font-bold">Heading 1 (4xl)</h1>
                <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h2 className="text-3xl font-semibold">Heading 2 (3xl)</h2>
                <code className="text-sm text-muted-foreground">text-3xl font-semibold</code>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-2xl font-semibold">Heading 3 (2xl)</h3>
                <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-medium">Heading 4 (xl)</h4>
                <code className="text-sm text-muted-foreground">text-xl font-medium</code>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="text-lg font-medium">Heading 5 (lg)</h5>
                <code className="text-sm text-muted-foreground">text-lg font-medium</code>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h6 className="text-base font-medium">Heading 6 (base)</h6>
                <code className="text-sm text-muted-foreground">text-base font-medium</code>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-xl font-medium mb-4">Body Text</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-lg">Large body text (lg)</p>
                <code className="text-sm text-muted-foreground">text-lg</code>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-base">Regular body text (base)</p>
                <code className="text-sm text-muted-foreground">text-base</code>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm">Small body text (sm)</p>
                <code className="text-sm text-muted-foreground">text-sm</code>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-xs">Extra small text (xs)</p>
                <code className="text-sm text-muted-foreground">text-xs</code>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-xl font-medium mb-4">Text Colors</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <p className="text-foreground">Foreground text (default)</p>
                <code className="text-sm text-muted-foreground">text-foreground</code>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-muted-foreground">Muted foreground text</p>
                <code className="text-sm text-muted-foreground">text-muted-foreground</code>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-primary">Primary color text</p>
                <code className="text-sm text-muted-foreground">text-primary</code>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-secondary-foreground">Secondary color text</p>
                <code className="text-sm text-muted-foreground">text-secondary-foreground</code>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-destructive">Destructive color text</p>
                <code className="text-sm text-muted-foreground">text-destructive</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Spacing</h2>
          <p className="text-muted-foreground">Consistent spacing using Tailwind's spacing scale.</p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map((space) => (
            <div key={space} className="flex items-center gap-4">
              <div className={`bg-primary h-4 w-${space}`}></div>
              <span className="text-sm font-mono">w-{space} ({space * 0.25}rem)</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Border Radius</h2>
          <p className="text-muted-foreground">Consistent border radius using CSS custom properties.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="bg-primary h-16 w-16 mx-auto rounded-sm"></div>
            <p className="text-sm">Small (sm)</p>
            <code className="text-xs text-muted-foreground">rounded-sm</code>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary h-16 w-16 mx-auto rounded-md"></div>
            <p className="text-sm">Medium (md)</p>
            <code className="text-xs text-muted-foreground">rounded-md</code>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary h-16 w-16 mx-auto rounded-lg"></div>
            <p className="text-sm">Large (lg)</p>
            <code className="text-xs text-muted-foreground">rounded-lg</code>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-primary h-16 w-16 mx-auto rounded-full"></div>
            <p className="text-sm">Full</p>
            <code className="text-xs text-muted-foreground">rounded-full</code>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Components</h2>
          <p className="text-muted-foreground">Interactive components with their various states and variants.</p>
        </div>

        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-xl font-medium mb-4">Buttons</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">↗</Button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-xl font-medium mb-4">Cards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the card content area where you can put any content.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cards automatically adapt to their content and provide consistent spacing.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="text-xl font-medium mb-4">Form Elements</h3>
            <div className="max-w-md space-y-4">
              <div>
                <Label htmlFor="input-example">Input Label</Label>
                <Input id="input-example" placeholder="Enter some text..." />
              </div>
              <div>
                <Label htmlFor="input-disabled">Disabled Input</Label>
                <Input id="input-disabled" placeholder="Disabled input" disabled />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadow Styles */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Shadows</h2>
          <p className="text-muted-foreground">Elevation styles using box shadows.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="bg-card h-16 w-16 mx-auto shadow-sm border rounded-lg"></div>
            <p className="text-sm">Small</p>
            <code className="text-xs text-muted-foreground">shadow-sm</code>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-card h-16 w-16 mx-auto shadow border rounded-lg"></div>
            <p className="text-sm">Default</p>
            <code className="text-xs text-muted-foreground">shadow</code>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-card h-16 w-16 mx-auto shadow-md border rounded-lg"></div>
            <p className="text-sm">Medium</p>
            <code className="text-xs text-muted-foreground">shadow-md</code>
          </div>
          <div className="text-center space-y-3">
            <div className="bg-card h-16 w-16 mx-auto shadow-lg border rounded-lg"></div>
            <p className="text-sm">Large</p>
            <code className="text-xs text-muted-foreground">shadow-lg</code>
          </div>
        </div>
      </section>
    </div>
  )
}

// Color Swatch Component
function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="space-y-2">
      <div className={`${color} h-16 w-full rounded-lg border shadow-sm`}></div>
      <div className="text-center">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-xs text-muted-foreground">{color}</code>
      </div>
    </div>
  )
} 