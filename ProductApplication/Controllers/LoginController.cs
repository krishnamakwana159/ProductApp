using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data.SqlClient;
using ProductApplication.Models;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ProductApplication.Controllers
{
    public class LoginController : ApiController
    {
        private ProductDbEntities db = new ProductDbEntities();

        //[ResponseType(typeof(Customer))]
        //public IHttpActionResult Get(string email, string pass)
        //{
        //    Customer customer = db.Customers.SingleOrDefault(s => s.EmailId == email);
        //    if (customer.EmailId == email && customer.Password == pass)
        //    {
        //        return Ok();                
        //    }
        //    return NotFound();
        //}

        // GET: api/Login
        //public IQueryable<Customer> GetCustomers()
        //{
        //    return db.Customers;
        //}

        // GET: api/Login/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetCustomer(string name)
        {
            SqlConnection connection = new SqlConnection("data source=DESKTOP-S5TQEIB\\SQLEXPRESS;initial catalog=ProductDb;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework");
            SqlCommand execStoreProc = new SqlCommand();
            execStoreProc.CommandType = CommandType.StoredProcedure;
            execStoreProc.CommandText = "spSearchProduct";
            execStoreProc.Connection = connection;
            execStoreProc.Parameters.AddWithValue("@name", name);
            vProductBrand product = new vProductBrand();
            using (connection)
            {
                connection.Open();
                SqlDataReader reader;
                using (reader = execStoreProc.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string pname = reader["Name"].ToString();
                        string bname = reader["BrandName"].ToString();
                        int price = Convert.ToInt32(reader["Price"]);
                        int brand = Convert.ToInt32(reader["BrandId"]);
                        bool stts = Convert.ToBoolean(reader["Status"]);
                        int pcode = Convert.ToInt32(reader["ProductCode"]);
                        product.BrandId = brand;
                        product.Name = pname;
                        product.BrandName = bname;
                        product.Price = price;
                        product.Status = stts;
                        product.ProductCode = pcode;
                        //Console.WriteLine(price + " " + brand + " " + stts);
                    }
                }
            }
            return Ok(product);
        }

        [ResponseType(typeof(Product))]
        public IHttpActionResult PutCustomer(string name)
        {
            SqlConnection connection = new SqlConnection("data source=DESKTOP-S5TQEIB\\SQLEXPRESS;initial catalog=ProductDb;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework");
            SqlCommand execStoreProc = new SqlCommand();
            execStoreProc.CommandType = CommandType.StoredProcedure;
            execStoreProc.CommandText = "spSearchProduct";
            execStoreProc.Connection = connection;
            execStoreProc.Parameters.AddWithValue("@name", name);
            vProductBrand product = new vProductBrand();
            using (connection)
            {
                connection.Open();
                SqlDataReader reader;
                using (reader = execStoreProc.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string pname = reader["Name"].ToString();
                        string bname = reader["BrandName"].ToString();
                        int price = Convert.ToInt32(reader["Price"]);
                        int brand = Convert.ToInt32(reader["BrandId"]);
                        bool stts = Convert.ToBoolean(reader["Status"]);
                        int pcode = Convert.ToInt32(reader["ProductCode"]);
                        product.BrandId = brand;
                        product.Name = pname;
                        product.BrandName = bname;
                        product.Price = price;
                        product.Status = stts;
                        product.ProductCode = pcode;
                        //Console.WriteLine(price + " " + brand + " " + stts);
                    }
                }
            }
            return Ok(product);
        }

        // PUT: api/Login/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutCustomer(int id, Customer customer)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != customer.CustomerId)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(customer).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CustomerExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Login
        [ResponseType(typeof(Customer))]        
        public IHttpActionResult PostCustomers(Customer customer)
        {
            var check  = db.Customers.SingleOrDefault(s => s.EmailId == customer.EmailId && s.Password == customer.Password);
            //if (check != null)
            //{
            //    return Ok();
            //}
            return Ok(check);
        }

        // DELETE: api/Login/5
        [ResponseType(typeof(Customer))]
        public IHttpActionResult DeleteCustomer(int id)
        {
            Customer customer = db.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            db.Customers.Remove(customer);
            db.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CustomerExists(int id)
        {
            return db.Customers.Count(e => e.CustomerId == id) > 0;
        }
    }
}