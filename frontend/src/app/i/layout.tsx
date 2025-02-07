import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/ui/dashboard-layout/DasboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <DashboardLayout>{children}</DashboardLayout>
}
