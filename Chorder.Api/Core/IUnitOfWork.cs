using System;
using Chorder.Api.Core.Repositories;

namespace Chorder.Api.Core
{
    public interface IUnitOfWork : IDisposable
    {
        ISongRepository Songs { get; }
        IPartRepository Parts { get; }

        void Complete();
    }
}