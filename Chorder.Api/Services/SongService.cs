using AutoMapper;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Services;

namespace Chorder.Api.Services
{
    public class SongService : ISongService
    {
        private readonly IMapper _mapper;

        public SongService(IMapper mapper)
        {
            _mapper = mapper;
        }
        public SongDto CreateSong(SongDto songDto)
        {
            var songToCreate = _mapper.Map<Song>(songDto);
            return _mapper.Map<SongDto>(songToCreate);
        }
    }    
}