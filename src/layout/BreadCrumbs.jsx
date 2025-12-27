const BreadCrumbs = () =>{
    return  <div className="px-4 md:px-8 pt-6 pb-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
              <span className="hover:underline cursor-pointer">Projects</span>
              <span>/</span>
              <span className="hover:underline cursor-pointer truncate">
                Task Forge Development
              </span>
            </div>
          </div>
}

export default BreadCrumbs;