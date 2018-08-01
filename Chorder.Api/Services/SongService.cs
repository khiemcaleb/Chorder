using System.Collections;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Chorder.Api.Core;
using Chorder.Api.Core.Dtos;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Repositories;
using Chorder.Api.Core.Services;
using System;

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

        public bool DeleteSongById(int id)
        {
            var song = _uow.Songs.GetById(id);
            if (song != null)
            {
                _uow.Songs.Delete(song);
                _uow.Complete();
                return true;
            }

            return false;
        }

        public SongDto GetSongById(int id)
        {
            var song = _uow.Songs.GetById(id);
            return _mapper.Map<SongDto>(song);
        }

        public IEnumerable<SongDto> GetSongs()
        {
            var songs = _uow.Songs.Get(100);
            return _mapper.Map<IEnumerable<SongDto>>(songs);
        }

        public bool Update(SongDto songDto)
        {
            var song = _uow.Songs.GetById(songDto.Id);
            if (song == null)
                return false;

            song.Modify(songDto);
            var partComparer = new SongPartComparer();

            var addedParts = songDto.Parts.Where(p => p.Id <= 0);
            var updatedParts = song.Parts.Where(p => songDto.Parts.Any(d => d.Id == p.Id)).ToList();
            var deleteParts = song.Parts.Except(updatedParts, partComparer).ToList();

            // Add new parts if any
            foreach (var part in addedParts)
            {
                song.Parts.Add(_mapper.Map<Part>(part));
            }           

            // Update existing parts
            foreach (var part in updatedParts)
            {
                var partDto = songDto.Parts.First(d => d.Id == part.Id);
                part.Modify(partDto);
            }

            _uow.Songs.Update(song);
            _uow.Parts.Update(updatedParts);
            _uow.Parts.Delete(deleteParts);
            _uow.Complete();
            
            return true;
        }
    }

    class SongPartComparer : IEqualityComparer<Part>
    {
        public bool Equals(Part x, Part y)
        {
            return x.Id == y.Id;
        }

        public int GetHashCode(Part obj)
        {
            return obj.Id;
        }
    }
}