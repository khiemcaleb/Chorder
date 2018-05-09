using System.Collections.Generic;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace Chorder.Api.Controllers
{
    [Route("api/[controller]")]
    public class SongsController
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
            return new OkObjectResult(dtos);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var dto = _songService.GetSongById(id);
            if (dto == null)
                return new NotFoundResult();

            return new OkObjectResult(dto);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SongDto songDto)
        {
            var id = _songService.CreateSong(songDto);
            return new OkObjectResult(new { id });
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_songService.DeleteSongById(id))
                return new OkResult();

            return new BadRequestResult();
        }
    }
}