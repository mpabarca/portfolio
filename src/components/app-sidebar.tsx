"use client";

import * as React from "react";
import {
  BriefcaseBusiness,
  GalleryVerticalEnd,
  AppWindow,
  Home,
  Mail,
} from "lucide-react";

import { NavMain } from "@/src/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "About me",
      url: "/about",
      icon: Home,
      isActive: false,
      isCollapsible: false,
    },
    {
      title: "Work Experience",
      url: "/work",
      icon: BriefcaseBusiness,
      isCollapsible: false,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: AppWindow,
      isCollapsible: false,
    },
    {
      title: "Contact me",
      url: "/contact",
      icon: Mail,
      isCollapsible: false,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className="pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <a href=''>
                <GalleryVerticalEnd className='!size-5' />
                <span className='text-base font-semibold'>Maria Paz Abarca</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
