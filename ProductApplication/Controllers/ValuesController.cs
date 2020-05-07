using ProductApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductApplication.Controllers
{
    public class ValuesController : ApiController
    {
        private ProductDbEntities db = new ProductDbEntities();

        // GET api/values
        public IHttpActionResult Get(string email, string pass)
        {
            Customer customer = db.Customers.SingleOrDefault(s => s.EmailId == email);
            if(customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
