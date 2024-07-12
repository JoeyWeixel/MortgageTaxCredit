import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const Header : React.FC = () => {

  return(
    <header className="sticky w-screen top-0 z-100 border-b-[1px]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="w-screen h-14 flex justify-around">
          <NavigationMenuItem> {/* Logo Portion */}
              <NavigationMenuLink asChild>
                <NavLink to="/">Mortgage Tax Credit</NavLink>
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem> {/* First Time Buyer Portion */}
            <NavigationMenuLink asChild>
              <Button variant="link">
                <NavLink to="/first-time-buyers">First Time Buyers</NavLink>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem> {/* Real Estate Agent Portion */}
            <NavigationMenuLink asChild>
              <Button variant="link">
                <NavLink to="/agents">Real Estate Agents</NavLink>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem> {/* Get Approved Portion */}
              <NavigationMenuLink asChild>
                <Button>
                  <NavLink to="/get-approved">Get Approved</NavLink>
                </Button>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;