using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chorder.Api.Core.Entities
{
    public class Song
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        [Required]
        [StringLength(10)]
        public string Key { get; set; }

        public virtual ICollection<Part> Parts { get; set; }

        [StringLength(200)]
        public string Artist { get; set; }
        
        [StringLength(200)]
        public string Author { get; set; }
        
        public int Year { get; set; }
    }
}