﻿using RemoteStudy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RemoteStudy.Services.Interfaces
{
    public interface IUserCourseService
    {
        IEnumerable<UserCourse> GetUserCourses();
        UserCourse GetUserCourseById(Guid id);
        UserCourse CreateUserCourse(UserCourse userCourse);
        void Delete(Guid id);
    }
}
