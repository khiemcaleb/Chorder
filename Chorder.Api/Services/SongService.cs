using System.Collections;
using System.Collections.Generic;
using AutoMapper;
using Chorder.Api.Core;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Repositories;
using Chorder.Api.Core.Services;

namespace Chorder.Api.Services
{
    public class SongService : ISongService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;

        public SongService(IUnitOfWork uow, IMapper mapper)
        {
            _mapper = mapper;
            _uow = uow;
        }
        public int CreateSong(SongDto songDto)
        {
            var song = _mapper.Map<Song>(songDto);
            _uow.Songs.Create(song);
            _uow.Complete();
            return song.Id;
        }
    }
}