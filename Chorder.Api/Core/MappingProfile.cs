using AutoMapper;
using Chorder.Api.Common.Helpers;
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
                .ForMember(dto => dto.Lines, p => p.MapFrom(d => MappingHelper.ParseLines(d.Lines)));
            CreateMap<PartDto, Part>()
                .ForMember(p => p.Lines, d => d.MapFrom(dto => MappingHelper.StringifyLines(dto.Lines as JArray)));
            CreateMap<Song, SongDto>()
                .ForMember(dto => dto.FirstPartLyrics, s => s.MapFrom(so => MappingHelper.GetFirstPartLyrics(so)));
            CreateMap<SongDto, Song>();
        }
    }
}