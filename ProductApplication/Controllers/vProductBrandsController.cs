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
using ProductApplication.Models;

namespace ProductApplication.Controllers
{
    public class vProductBrandsController : ApiController
    {
        private ProductDbEntities db = new ProductDbEntities();

        // GET: api/vProductBrands
        public IQueryable<vProductBrand> GetvProductBrands()
        {
            return db.vProductBrands;
        }

        // GET: api/vProductBrands/5
        [ResponseType(typeof(vProductBrand))]
        public IHttpActionResult GetvProductBrand(string id)
        {
            vProductBrand vProductBrand = db.vProductBrands.Find(id);
            if (vProductBrand == null)
            {
                return NotFound();
            }

            return Ok(vProductBrand);
        }

        // PUT: api/vProductBrands/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutvProductBrand(string id, vProductBrand vProductBrand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vProductBrand.BrandName)
            {
                return BadRequest();
            }

            db.Entry(vProductBrand).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!vProductBrandExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/vProductBrands
        [ResponseType(typeof(vProductBrand))]
        public IHttpActionResult PostvProductBrand(vProductBrand vProductBrand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.vProductBrands.Add(vProductBrand);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (vProductBrandExists(vProductBrand.BrandName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = vProductBrand.BrandName }, vProductBrand);
        }

        // DELETE: api/vProductBrands/5
        [ResponseType(typeof(vProductBrand))]
        public IHttpActionResult DeletevProductBrand(string id)
        {
            vProductBrand vProductBrand = db.vProductBrands.Find(id);
            if (vProductBrand == null)
            {
                return NotFound();
            }

            db.vProductBrands.Remove(vProductBrand);
            db.SaveChanges();

            return Ok(vProductBrand);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool vProductBrandExists(string id)
        {
            return db.vProductBrands.Count(e => e.BrandName == id) > 0;
        }
    }
}