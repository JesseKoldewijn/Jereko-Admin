import { type Metadata } from "next";
import { AdminLayout } from "~/layouts/admin/layout";

export const metadata: Metadata = {
  title: {
    absolute: "Jereko Admin",
    template: "%s | Jereko Admin",
  },
  description: "Admin area using the Jereko Admin setup",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const AdminRootLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminRootLayout;
