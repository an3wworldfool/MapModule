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
    public class AreaController : ControllerBase
    {
        private readonly _57lbsContext contextArea;
        private readonly IMapper _mapper;

        public AreaController(_57lbsContext contextArea,IMapper mapper)
        {
            this.contextArea = contextArea;
             _mapper=mapper;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<List<AreaDTO>>> GetArea()
        {
            var result = await this.contextArea
            .Area
            .ToListAsync();
            var model = _mapper.Map<List<AreaDTO>>(result);
           // return await this.contextArea.Area.ToListAsync();
           return model;
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public ActionResult GetArea(int id)
        {
            // var todoItem = await _context.TodoItems.FindAsync(id);

            // if (todoItem == null)
            // {
            //     return NotFound();
            // }

            // return todoItem;
            //var result = contextArea.Area.FindAsync(id);
            var result = contextArea.Area.FirstOrDefault(l=>l.IdArea==id);
            if(result==null){
                return NotFound();
            }
            var model = _mapper.Map<AreaDTO>(result);
           // var coordenadas = result.Coordinates;
            return Ok(model);
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArea(int id, Area area)
        {
            if (id != area.IdArea)
            {
                return BadRequest();
            }

            this.contextArea.Entry(area).State = EntityState.Modified;

            try
            {
                await this.contextArea.SaveChangesAsync();
                var result = _mapper.Map<AreaDTO>(area);
                return Ok(result);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AreaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            //return NoContent();
        }

        // POST: api/TodoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<object> PostArea(Area area)
        {
            this.contextArea.Area.Add(area);
            await this.contextArea.SaveChangesAsync();
            var result = _mapper.Map<AreaDTO>(area);
            // _context.TodoItems.Add(todoItem);
            // await _context.SaveChangesAsync();
            return Ok(result);
            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            // return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Area>> DeleteArea(int id)
        {
            var area = await this.contextArea.Area.FindAsync(id);
            if (area == null)
            {
                return NotFound();
            }

            this.contextArea.Area.Remove(area);
            await this.contextArea.SaveChangesAsync();
            var result = _mapper.Map<AreaDTO>(area);
            return Ok(result);
        }

        private bool AreaExists(int id)
        {
            return this.contextArea.Area.Any(e => e.IdArea == id);
        }
    }
}
