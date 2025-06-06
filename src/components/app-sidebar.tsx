import {
  Home,
  Users,
  ChevronRight,
  ChevronDown,
  User2,
  Calendar,
  Inbox,
  Search,
  Settings,
  University,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
      <SidebarMenuItem>
          <SidebarMenuButton asChild>
                  <a href="#">
                    <University />
                    <span>Vidyalaya Sanchalak</span>
                  </a>
                </SidebarMenuButton>
      </SidebarMenuItem>
      </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Not Collapsible: Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Home />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Collapsible: Students */}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Users />
                      <span>Students</span>
                      <ChevronDown className="ml-auto group-data-[state=closed]/collapsible:inline group-data-[state=open]/collapsible:hidden" />
                      <ChevronRight className="ml-auto group-data-[state=open]/collapsible:inline group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>

                <CollapsibleContent className="pl-4">
                  <SidebarMenuSub>
  <SidebarMenuSubItem>
    <SidebarMenuButton asChild>
      <a href="#">All Students</a>
    </SidebarMenuButton>
  </SidebarMenuSubItem>
  <SidebarMenuSubItem>
    <SidebarMenuButton asChild>
      <a href="#">Add Student</a>
    </SidebarMenuButton>
  </SidebarMenuSubItem>
  <SidebarMenuSubItem>
    <SidebarMenuButton asChild>
      <a href="#">Edit Student</a>
    </SidebarMenuButton>
  </SidebarMenuSubItem>
  <SidebarMenuSubItem>
    <SidebarMenuButton asChild>
      <a href="#">Student Attendance</a>
    </SidebarMenuButton>
  </SidebarMenuSubItem>
</SidebarMenuSub>

                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Admin
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
