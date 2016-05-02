using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using AngularSignalR.Models;

namespace AngularSignalR.Controllers
{
    public class AngularController : Controller
    {

        // GET: /Angular/
        public ActionResult Index(string viewName)
        {
            return PartialView(string.Format("~/App/{0}/{0}.cshtml", viewName));
        }

        public ActionResult ModalTemplate(string module, string template)
        {
            return PartialView(string.Format("~/App/{0}/Modals/{1}.cshtml", module, template));
        }

        public ActionResult Template(string module, string template)
        {
            return PartialView(string.Format("~/App/{0}/Templates/{1}.cshtml", module, template));
        }

    }
}