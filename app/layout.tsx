import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Nishant Shukla | Deep Tech Blog',
description: 'Distributed Systems, Deep Learning, Databases & ML Theory'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
)
}