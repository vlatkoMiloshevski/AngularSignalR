using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.API.Models.DTO;

namespace Web.API.Controllers
{
    public class ContactController : ApiController
    {
        public ContactController()
        {

        }
        // GET: api/Contact
        public IEnumerable<EmployeeDTO> GetAllEmployees(int number)
        {
            var employeeList = Builder<EmployeeDTO>.CreateListOfSize(number).Build().ToList();
            return employeeList.ToList();
        }

        // GET: api/Contact/5
        public string GetEmployeeById(int id)
        {
            return "value";
        }

        // POST: api/Contact
        [HttpPost]
        public int CreateEmployee([FromBody]int number)
        {
            //EmployeeDTO employee = Builder<EmployeeDTO>.CreateNew().Build();
            return number++;
        }

        // PUT: api/Contact/5
        public void UpdateEmployee(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Contact/5
        public void DeleteEmployee(int id)
        {
        }
    }
}
