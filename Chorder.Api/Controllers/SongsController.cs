using System.Collections.Generic;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Services;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Chorder.Api.Controllers
{
    [Route("api/[controller]")]
    public class SongsController : Controller
    {
        private readonly ISongService _songService;

        public SongsController(ISongService songService)
        {
            _songService = songService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var dtos = _songService.GetSongs();
            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var dto = _songService.GetSongById(id);
            if (dto == null)
                return NotFound();

            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SongDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var id = _songService.CreateSong(dto);
            return Ok(new { id });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]SongDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_songService.Update(dto))
                return NotFound();

            return Ok();
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, [FromBody]JsonPatchDocument<SongDto> patch)
        {
            if (patch == null)
                return BadRequest();
            
            var dto = _songService.GetSongById(id);
            if (dto == null)
                return NotFound();

            patch.ApplyTo(dto);
            if (!_songService.Update(dto))
                return NotFound();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!_songService.DeleteSongById(id))
                return NotFound();

            return Ok();
        }
    }
}