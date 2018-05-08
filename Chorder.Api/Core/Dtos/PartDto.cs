using System.ComponentModel.DataAnnotations;

namespace Chorder.Api.Core.Dtos
{
    public class PartDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(1000)]
        public string Lyrics { get; set; }

        [StringLength(4000)]
        public string Lines { get; set; }
    }
}