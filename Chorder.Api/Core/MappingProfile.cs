using AutoMapper;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Entities;
using Newtonsoft.Json.Linq;

namespace Chorder.Api.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Part, PartDto>()
                .ForMember(dto => dto.Lines, p => p.MapFrom(d =>JArray.Parse(d.Lines)));
            CreateMap<PartDto, Part>()
                .ForMember(p => p.Lines, d => d.MapFrom(dto => (dto.Lines as JArray).ToString()));
            CreateMap<Song, SongDto>();
            CreateMap<SongDto, Song>();
        }
    }
}