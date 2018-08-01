using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Chorder.Api.Core.Dtos
{
    public class SongDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        [Required]
        [StringLength(10)]
        public string Key { get; set; }

        [StringLength(200)]
        public string Artist { get; set; }

        [StringLength(200)]
        public string Author { get; set; }

        public int Year { get; set; }

        public string FirstPartLyrics { get; set; }

        public List<PartDto> Parts { get; set; }

    }
}