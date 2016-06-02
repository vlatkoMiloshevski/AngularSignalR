using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularSignalR.Startup))]
namespace AngularSignalR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            //ConfigureAuth(app);
        }
    }
}
