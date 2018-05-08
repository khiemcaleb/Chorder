using System.Collections.Generic;
using Chorder.Api.Core.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Chorder.Api.Controllers
{
    [Route("api/[controller]")]
    public class SongsController
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]SongDto value)
        {
               
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