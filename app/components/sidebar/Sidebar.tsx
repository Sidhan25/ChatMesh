import getCurrentUser from '@/app/actions/getCurrentUser';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';

async function Sidebar({ children }: {
  children: React.ReactNode,
}) {
  let currentUser;

  try {
    currentUser = await getCurrentUser();
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }

  return (
    // @ts-expect-error Server Component
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;
