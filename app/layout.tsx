import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <h1 className="text-blue-500">I'm blue!</h1>
        </div>
        {children}
        </body>
    </html>
  );
}
