using System.Collections.Generic;

namespace Chorder.Api.Core.Entities
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Key { get; set; }
        public ICollection<Part> Parts { get; set; }

        public string Artist { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
    }
}