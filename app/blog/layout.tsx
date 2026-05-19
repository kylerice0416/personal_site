import { SiteShell } from '@/components/site-shell'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>
}
