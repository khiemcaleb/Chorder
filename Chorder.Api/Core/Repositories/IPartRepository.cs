using System.Collections.Generic;
using Chorder.Api.Core.Entities;

namespace Chorder.Api.Core.Repositories
{
    public interface IPartRepository
    {
        void Update(IEnumerable<Part> parts);
        void Delete(IEnumerable<Part> parts);
    }
}