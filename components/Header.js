import { 
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

import Image from "next/image"
import HeaderItems from "./HeaderItem"

function Header() {
    return (
       <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
           <div className="flex flex-grow justify-evenly max-w-2xl">
               <HeaderItems title="home"  Icon={HomeIcon} />
               <HeaderItems title="trending"  Icon={LightningBoltIcon} />
               <HeaderItems title="verified"  Icon={BadgeCheckIcon} />
               <HeaderItems title="collections"  Icon={CollectionIcon} />
               <HeaderItems title="search"  Icon={SearchIcon} />
               <HeaderItems title="account"  Icon={UserIcon} />
           </div>
           <Image src="http://links.papareact.com/ua6" 
           height={100} width={200} className="object-contain cursor-pointer" alt="logo" />
       </header>
    )
}

export default Header
