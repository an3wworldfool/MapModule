using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.DTOs;
using AutoMapper;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly _57lbsContext contextLocation;
        private readonly IMapper _mapper;
        public LocationController(_57lbsContext contextLocation,IMapper mapper)
        {
            this.contextLocation = contextLocation;
             _mapper=mapper;
        }


        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<List<LocationDTO>>> GetLocation()
        {
            var result = await this.contextLocation
            .Location
            .Include(l => l.Area)// DTO (Automapper dotnet)
            .ToListAsync();
            var model = _mapper.Map<List<LocationDTO>>(result);
            return model;
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public ActionResult GetLocation(string id)
        {
            // var todoItem = await _context.TodoItems.FindAsync(id);

            // if (todoItem == null)
            // {
            //     return NotFound();
            // }

            // return todoItem;
            var result =  contextLocation.Location.Include(l=>l.Area).FirstOrDefault(l => l.Address==id);  
            var model = _mapper.Map<LocationDTO>(result);
           // var address= result.Address;
           // var area = await contextLocation.Area.FindAsync(address);
            //result.Area=area;
           // var coordenadas = result.Coordinates;
            return Ok(model);
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocation(string id, Location location)
        {
            if (id != location.Address)
            {
                return BadRequest();
            }

            this.contextLocation.Entry(location).State = EntityState.Modified;

            try
            {
                await this.contextLocation.SaveChangesAsync();
                var result = _mapper.Map<LocationDTO>(location);
                return Ok(result);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
           // return NoContent();
        }

        // POST: api/TodoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<object> PostLocation(Location location)
        {
            this.contextLocation.Location.Add(location);
            await this.contextLocation.SaveChangesAsync();
            var result = _mapper.Map<LocationDTO>(location);
            // _context.TodoItems.Add(todoItem);
            // await _context.SaveChangesAsync();
            return Ok(result);
            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            // return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Location>> DeleteLocation(string id)
        {
            var location = await this.contextLocation.Location.FindAsync(id);
            if (location == null)
            {
                return NotFound();
            }

            this.contextLocation.Location.Remove(location);
            await this.contextLocation.SaveChangesAsync();
            var result = _mapper.Map<LocationDTO>(location);
            return Ok(result);
        }

        private bool LocationExists(string id)
        {
            return this.contextLocation.Location.Any(e => e.Address == id);
        }
    }
}
