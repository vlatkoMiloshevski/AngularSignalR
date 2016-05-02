using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularSignalR
{
    [HubName("testHub")]
    public class TestHub : Hub
    {
        public void ActServer()
        {
            Clients.All.sendFromServer();
        }
    }
}