/**
 * OrangeHRM is a comprehensive Human Resource Management (HRM) System that captures
 * all the essential functionalities required for any enterprise.
 * Copyright (C) 2006 OrangeHRM Inc., http://www.orangehrm.com
 *
 * OrangeHRM is free software; you can redistribute it and/or modify it under the terms of
 * the GNU General Public License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * OrangeHRM is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program;
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA  02110-1301, USA
 */

import SaveEmployee from './pages/employee/SaveEmployee.vue';
import Employee from './pages/employee/Employee.vue';
import EmployeePersonalDetails from './pages/employee/EmployeePersonalDetails.vue';
import EmployeeContactDetails from './pages/employee/EmployeeContactDetails.vue';
import EmployeeEmergencyContacts from './pages/employee/EmployeeEmergencyContacts.vue';
import EmployeeDependents from './pages/employee/EmployeeDependents.vue';
import EmployeeProfilePicture from './pages/employee/EmployeeProfilePicture.vue';
import EmployeeSalary from './pages/employee/EmployeeSalary.vue';

export default {
  'employee-save': SaveEmployee,
  'employee-list': Employee,
  'employee-personal-details': EmployeePersonalDetails,
  'employee-contact-details': EmployeeContactDetails,
  'employee-emergency-contacts': EmployeeEmergencyContacts,
  'employee-dependents': EmployeeDependents,
  'employee-profile-picture': EmployeeProfilePicture,
  'employee-salary': EmployeeSalary,
};