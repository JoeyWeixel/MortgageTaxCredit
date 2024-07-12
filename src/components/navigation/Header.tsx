import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";

const Header : React.FC = () => {

  return(
    <header className="sticky w-full top-0 z-100">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/">
              Mortgage Tax Credit
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;