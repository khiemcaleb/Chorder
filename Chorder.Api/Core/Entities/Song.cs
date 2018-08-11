using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Chorder.Api.Core.Dtos;

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

        public virtual IList<Part> Parts { get; set; }

        [StringLength(200)]
        public string Artist { get; set; }
        
        [StringLength(200)]
        public string Author { get; set; }
        
        public int Year { get; set; }

        public int Tempo { get; set; }

        public void Modify(SongDto dto)
        {
            Title = dto.Title;
            Key = dto.Key;
            Artist = dto.Artist;
            Author = dto.Author;
            Year = dto.Year;
            Tempo = dto.Tempo;
        }
    }
}