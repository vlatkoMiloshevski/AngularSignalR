using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularSignalR.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (Request.Url != null && Request.ApplicationPath != null)
            {
                ViewBag.BaseUrl = Request.Url.Scheme + "://" + Request.Url.Authority + Request.ApplicationPath.TrimEnd('/') + "/";
                ViewBag.ApiUrl = ConfigurationManager.AppSettings["ApiUrl"];
            }

            return View();
        }

        public ActionResult Sign()
        {
            if (Request.Url != null && Request.ApplicationPath != null)
            {
                ViewBag.BaseUrl = Request.Url.Scheme + "://" + Request.Url.Authority + Request.ApplicationPath.TrimEnd('/') + "/";
                ViewBag.ApiUrl = ConfigurationManager.AppSettings["ApiUrl"];
            }

            return View();
        }
    }
}