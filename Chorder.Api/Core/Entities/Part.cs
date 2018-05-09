using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Chorder.Api.Core.Dtos;

namespace Chorder.Api.Core.Entities
{
    public class Part
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(1000)]
        public string Lyrics { get; set; }

        [Column(TypeName = "NVARCHAR(MAX)")]
        public string Lines { get; set; }

        [Required]
        public int SongId { get; set; } 
        public virtual Song Song { get; set; }

        internal void Modify(PartDto dto)
        {
            Name = dto.Name;
            Lines = dto.Lines;
            Lyrics = dto.Lyrics;
        }
    }
}