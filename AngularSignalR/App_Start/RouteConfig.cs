﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngularSignalR
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "ModuleMainViews",
                url: "Module/{viewName}",
                defaults: new { controller = "Angular", action = "Index" }
            );

            routes.MapRoute(
               name: "AngularModalTemplates",
               url: "App/{Module}/Modals/{Template}",
               defaults: new { controller = "Angular", action = "ModalTemplate" }
           );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
