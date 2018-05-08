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
        public IEnumerable<SongDto> Get()
        {
            return new SongDto[] { null };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]SongDto songDto)
        {
            var dto = _songService.CreateSong(songDto);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}