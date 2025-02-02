import { TRoutes, TUserPath } from "../types";

export const generateUserRoutes = (items: TUserPath[]) => {
    const routes = items.reduce((acc: TRoutes[], item) => {

        if(item.index && item.element){
            acc.push({
                index: item.index,
                element: item.element
            })
        }

        if (item.path && item.element) {
          acc.push({
            path: item.path,
            element: item.element,
          });
        }
      
        if (item.children) {
          item.children.forEach((ele) => {
            acc.push({
              path: ele.path,
              element: ele.element,
            });
          });
        }
      
        return acc;
      }, []);

      return routes;
}