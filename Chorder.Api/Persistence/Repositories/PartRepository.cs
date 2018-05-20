using System.Collections.Generic;
using Chorder.Api.Core;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Repositories;

namespace Chorder.Api.Persistence.Repositories
{
    public class PartRepository : IPartRepository
    {
        private readonly IApplicationDbContext _dbContext;

        public PartRepository(IApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Delete(IEnumerable<Part> parts)
        {
            _dbContext.Parts.RemoveRange(parts);
        }

        public void Update(IEnumerable<Part> parts)
        {
            _dbContext.Parts.UpdateRange(parts);
        }
    }
}