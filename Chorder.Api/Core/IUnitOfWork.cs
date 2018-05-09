using System;
using Chorder.Api.Core.Repositories;

namespace Chorder.Api.Core
{
    public interface IUnitOfWork : IDisposable
    {
        ISongRepository Songs { get; }

        void Complete();
    }
}