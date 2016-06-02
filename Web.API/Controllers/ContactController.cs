using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Web.API.Models.DTO;

namespace Web.API.Controllers
{
    //[Authorize]
    public class ContactController : ApiController
    {
        public ContactController()
        {

        }

        [HttpGet]
        public IEnumerable<EmployeeDTO> GetAllEmployees(int number)
        {
            try
            {
                //throw new Exception();
                var employeeList = Builder<EmployeeDTO>.CreateListOfSize(number).Build().ToList();
                return employeeList.ToList();
            }
            catch (Exception ex)
            {
                throw new HttpException("exception occured while playing with employees");
            }
        }

    }
}
