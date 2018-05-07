using System.ComponentModel.DataAnnotations;

namespace Chorder.Api.Core.Entities
{
    public class Part
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lyrics { get; set; }

        [StringLength(4000)]
        public string Lines { get; set; }

        public int SongId { get; set; } 
        public virtual Song Song { get; set; }
        

    }
}