let state = {
            doctors: [],
            patients: [],
            appointments: [],
            departments: []
        };

        let chartsInstance = {
            appointmentStatus: null,
            departmentDoctors: null
        };

        const defaultDepartments = [
            { id: 'dept-1', name: 'Cardiology', description: 'Heart and cardiovascular care center.' },
            { id: 'dept-2', name: 'Neurology', description: 'Brain, nervous system, and stroke treatments.' },
            { id: 'dept-3', name: 'Pediatrics', description: 'Specialized healthcare for infants and children.' },
            { id: 'dept-4', name: 'Orthopedics', description: 'Bone, joint, ligament, and muscle care.' },
            { id: 'dept-5', name: 'Dermatology', description: 'Skin, hair, and cosmetic treatments.' }
        ];

        const defaultDoctors = [
            { id: 'doc-1', name: 'Dr. William Vance', dept: 'Cardiology', qualification: 'MBBS, MD - Cardiology', phone: '+1 (555) 123-4567', email: 'vance@CarePlus.org', status: 'Active' },
            { id: 'doc-2', name: 'Dr. Emily Watson', dept: 'Neurology', qualification: 'DM - Neurology', phone: '+1 (555) 234-5678', email: 'watson@CarePlus.org', status: 'Active' },
            { id: 'doc-3', name: 'Dr. Marcus Thorne', dept: 'Orthopedics', qualification: 'MS - Orthopedics', phone: '+1 (555) 345-6789', email: 'thorne@CarePlus.org', status: 'Active' }
        ];

        const defaultPatients = [
            { id: 'pat-1', name: 'Alice Smith', age: 29, gender: 'Female', blood: 'A+', phone: '+1 (555) 987-6543', address: '452 Elm Street' },
            { id: 'pat-2', name: 'Michael Johnson', age: 45, gender: 'Male', blood: 'O+', phone: '+1 (555) 876-5432', address: '789 Oak Avenue' },
            { id: 'pat-3', name: 'Sophia Martinez', age: 34, gender: 'Female', blood: 'B-', phone: '+1 (555) 765-4321', address: '321 Pine Road' }
        ];

        const defaultAppointments = [
            { id: 'app-1', patientId: 'pat-1', doctorId: 'doc-1', dateTime: '2026-06-15T10:30', status: 'Confirmed' },
            { id: 'app-2', patientId: 'pat-2', doctorId: 'doc-2', dateTime: '2026-06-16T14:00', status: 'Pending' },
            { id: 'app-3', patientId: 'pat-3', doctorId: 'doc-3', dateTime: '2026-06-17T09:15', status: 'Completed' }
        ];

        function loadData() {
            const savedState = localStorage.getItem('CarePlus_dashboard_state');
            if (savedState) {
                try {
                    state = JSON.parse(savedState);
                } catch(e) {
                    initDefaultData();
                }
            } else {
                initDefaultData();
            }
        }

        function initDefaultData() {
            state.departments = defaultDepartments;
            state.doctors = defaultDoctors;
            state.patients = defaultPatients;
            state.appointments = defaultAppointments;
            saveData();
        }

        function saveData() {
            localStorage.setItem('CarePlus_dashboard_state', JSON.stringify(state));
            updateDashboardStats();
        }

        function resetDemoData() {
            if (confirmAction("Reset all data to default demo state?")) {
                initDefaultData();
                refreshAllViews();
                showToast("System data reset successfully!", "success");
            }
        }

        function confirmAction(msg) {
            return window.confirm(msg);
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');

            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-teal-600', 'text-white', 'shadow-md', 'shadow-teal-600/20');
                el.classList.add('text-slate-300', 'hover:bg-slate-800', 'hover:text-white');
            });

            const activeNav = document.getElementById(`nav-${tabId}`);
            if (activeNav) {
                activeNav.classList.remove('text-slate-300', 'hover:bg-slate-800', 'hover:text-white');
                activeNav.classList.add('bg-teal-600', 'text-white', 'shadow-md', 'shadow-teal-600/20');
            }

            const titles = {
                dashboard: 'Dashboard Overview',
                doctors: 'Doctor Management',
                patients: 'Patient Management',
                appointments: 'Appointment Management',
                departments: 'Department Management',
                reports: 'Reports & Analytics'
            };
            document.getElementById('pageTitle').innerText = titles[tabId] || 'Dashboard';

            // Close mobile sidebar if open
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebarOverlay').classList.add('hidden');

            if (tabId === 'reports') {
                setTimeout(renderCharts, 100);
            }
        }

        // Mobile Sidebar Toggles
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('-translate-x-full');
            document.getElementById('sidebarOverlay').classList.remove('hidden');
        });
        document.getElementById('closeSidebar').addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebarOverlay').classList.add('hidden');
        });
        document.getElementById('sidebarOverlay').addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebarOverlay').classList.add('hidden');
        });

        function toggleNotifications() {
            const dropdown = document.getElementById('notifDropdown');
            dropdown.classList.toggle('hidden');
        }

        function updateDashboardStats() {
            document.getElementById('statTotalDoctors').innerText = state.doctors.length;
            document.getElementById('statTotalPatients').innerText = state.patients.length;
            document.getElementById('statTotalAppointments').innerText = state.appointments.length;
            document.getElementById('statTotalDepartments').innerText = state.departments.length;

            const pendingCount = state.appointments.filter(a => a.status === 'Pending').length;
            document.getElementById('statPendingCount').innerText = `${pendingCount} Pending`;

            // Populate Recent Appointments
            const recentBody = document.getElementById('recentAppointmentsTable');
            recentBody.innerHTML = '';
            
            const sortedApps = [...state.appointments].reverse().slice(0, 5);
            if (sortedApps.length === 0) {
                recentBody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-slate-400">No recent appointments found.</td></tr>`;
            } else {
                sortedApps.forEach(app => {
                    const pat = state.patients.find(p => p.id === app.patientId) || { name: 'Unknown Patient' };
                    const doc = state.doctors.find(d => d.id === app.doctorId) || { name: 'Unknown Doctor' };
                    
                    let badgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
                    if (app.status === 'Confirmed') badgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
                    if (app.status === 'Completed') badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                    if (app.status === 'Cancelled') badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';

                    recentBody.innerHTML += `
                        <tr class="hover:bg-slate-50/80 transition-colors">
                            <td class="p-3 font-medium text-slate-800">${pat.name}</td>
                            <td class="p-3 text-slate-600">${doc.name}</td>
                            <td class="p-3 text-slate-600 text-xs">${formatDateTime(app.dateTime)}</td>
                            <td class="p-3"><span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeColor}">${app.status}</span></td>
                        </tr>
                    `;
                });
            }

            // Department Load Distribution
            const deptStatsDiv = document.getElementById('dashboardDeptStats');
            deptStatsDiv.innerHTML = '';
            state.departments.forEach(dept => {
                const docCount = state.doctors.filter(d => d.dept === dept.name).length;
                deptStatsDiv.innerHTML += `
                    <div>
                        <div class="flex justify-between text-xs font-semibold mb-1">
                            <span class="text-slate-700">${dept.name}</span>
                            <span class="text-slate-500">${docCount} Doctors</span>
                        </div>
                        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div class="bg-teal-500 h-full rounded-full" style="width: ${Math.min(100, docCount * 25)}%"></div>
                        </div>
                    </div>
                `;
            });

            // Populate Notification List
            const notifList = document.getElementById('notifList');
            notifList.innerHTML = `
                <div class="px-4 py-2 hover:bg-slate-50 cursor-pointer">
                    <p class="text-xs font-bold text-slate-800">New Patient Registered</p>
                    <p class="text-xs text-slate-500">Alice Smith added to records.</p>
                </div>
                <div class="px-4 py-2 hover:bg-slate-50 cursor-pointer">
                    <p class="text-xs font-bold text-slate-800">Appointment Confirmed</p>
                    <p class="text-xs text-slate-500">Dr. William Vance accepted session.</p>
                </div>
                <div class="px-4 py-2 hover:bg-slate-50 cursor-pointer">
                    <p class="text-xs font-bold text-slate-800">System Backup Active</p>
                    <p class="text-xs text-slate-500">Local storage synchronization ok.</p>
                </div>
            `;
        }

        function renderDoctorsTable() {
            const search = document.getElementById('doctorSearch').value.toLowerCase();
            const filterDept = document.getElementById('doctorFilterDept').value;
            const tbody = document.getElementById('doctorsTableBody');
            tbody.innerHTML = '';

            const filtered = state.doctors.filter(doc => {
                const matchSearch = doc.name.toLowerCase().includes(search) || doc.qualification.toLowerCase().includes(search) || doc.email.toLowerCase().includes(search);
                const matchDept = filterDept === '' || doc.dept === filterDept;
                return matchSearch && matchDept;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">No doctors found matching criteria.</td></tr>`;
                return;
            }

            filtered.forEach(doc => {
                let statusBadge = doc.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200';
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="p-4 flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0">
                                ${doc.name.charAt(3) || 'D'}
                            </div>
                            <div>
                                <p class="font-semibold text-slate-900">${doc.name}</p>
                                <p class="text-xs text-slate-500">${doc.email}</p>
                            </div>
                        </td>
                        <td class="p-4"><span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">${doc.dept}</span></td>
                        <td class="p-4 text-slate-600 text-xs">${doc.qualification}</td>
                        <td class="p-4 text-slate-600">${doc.phone}</td>
                        <td class="p-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${statusBadge}">${doc.status}</span></td>
                        <td class="p-4 text-right space-x-2">
                            <button onclick="editDoctor('${doc.id}')" class="text-slate-400 hover:text-teal-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-pen"></i></button>
                            <button onclick="deleteDoctor('${doc.id}')" class="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        }

        function openDoctorModal(docId = null) {
            populateDepartmentDropdowns();
            document.getElementById('doctorForm').reset();
            document.getElementById('doctorId').value = '';
            if (docId) {
                document.getElementById('doctorModalTitle').innerText = 'Edit Doctor Details';
                const doc = state.doctors.find(d => d.id === docId);
                if (doc) {
                    document.getElementById('doctorId').value = doc.id;
                    document.getElementById('doctorName').value = doc.name;
                    document.getElementById('doctorDept').value = doc.dept;
                    document.getElementById('doctorQualification').value = doc.qualification;
                    document.getElementById('doctorPhone').value = doc.phone;
                    document.getElementById('doctorEmail').value = doc.email;
                    document.getElementById('doctorStatus').value = doc.status;
                }
            } else {
                document.getElementById('doctorModalTitle').innerText = 'Add New Doctor';
            }
            document.getElementById('doctorModal').classList.remove('hidden');
        }

        function closeDoctorModal() {
            document.getElementById('doctorModal').classList.add('hidden');
        }

        function saveDoctor(e) {
            e.preventDefault();
            const id = document.getElementById('doctorId').value;
            const doctorData = {
                id: id ? id : 'doc-' + Date.now(),
                name: document.getElementById('doctorName').value,
                dept: document.getElementById('doctorDept').value,
                qualification: document.getElementById('doctorQualification').value,
                phone: document.getElementById('doctorPhone').value,
                email: document.getElementById('doctorEmail').value,
                status: document.getElementById('doctorStatus').value
            };

            if (id) {
                const index = state.doctors.findIndex(d => d.id === id);
                if (index !== -1) state.doctors[index] = doctorData;
                showToast('Doctor details updated successfully!', 'success');
            } else {
                state.doctors.push(doctorData);
                showToast('New doctor added successfully!', 'success');
            }

            saveData();
            closeDoctorModal();
            refreshAllViews();
        }

        function editDoctor(id) {
            openDoctorModal(id);
        }

        function deleteDoctor(id) {
            if (confirmAction('Are you sure you want to delete this doctor record?')) {
                state.doctors = state.doctors.filter(d => d.id !== id);
                saveData();
                refreshAllViews();
                showToast('Doctor removed successfully.', 'info');
            }
        }

        function renderPatientsTable() {
            const search = document.getElementById('patientSearch').value.toLowerCase();
            const filterGender = document.getElementById('patientFilterGender').value;
            const tbody = document.getElementById('patientsTableBody');
            tbody.innerHTML = '';

            const filtered = state.patients.filter(pat => {
                const matchSearch = pat.name.toLowerCase().includes(search) || pat.phone.toLowerCase().includes(search);
                const matchGender = filterGender === '' || pat.gender === filterGender;
                return matchSearch && matchGender;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">No patients found.</td></tr>`;
                return;
            }

            filtered.forEach(pat => {
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="p-4 flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">
                                ${pat.name.charAt(0)}
                            </div>
                            <div>
                                <p class="font-semibold text-slate-900">${pat.name}</p>
                                <p class="text-xs text-slate-500">${pat.gender}, ${pat.age} yrs</p>
                            </div>
                        </td>
                        <td class="p-4 text-slate-600">${pat.age} yrs / ${pat.gender}</td>
                        <td class="p-4 text-slate-600">${pat.phone}</td>
                        <td class="p-4"><span class="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-lg text-xs font-semibold">${pat.blood || 'O+'}</span></td>
                        <td class="p-4 text-slate-600 text-xs truncate max-w-xs">${pat.address}</td>
                        <td class="p-4 text-right space-x-2">
                            <button onclick="editPatient('${pat.id}')" class="text-slate-400 hover:text-teal-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-pen"></i></button>
                            <button onclick="deletePatient('${pat.id}')" class="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        }

        function openPatientModal(patId = null) {
            document.getElementById('patientForm').reset();
            document.getElementById('patientId').value = '';
            if (patId) {
                document.getElementById('patientModalTitle').innerText = 'Edit Patient Details';
                const pat = state.patients.find(p => p.id === patId);
                if (pat) {
                    document.getElementById('patientId').value = pat.id;
                    document.getElementById('patientName').value = pat.name;
                    document.getElementById('patientAge').value = pat.age;
                    document.getElementById('patientGender').value = pat.gender;
                    document.getElementById('patientBlood').value = pat.blood || 'O+';
                    document.getElementById('patientPhone').value = pat.phone;
                    document.getElementById('patientAddress').value = pat.address;
                }
            } else {
                document.getElementById('patientModalTitle').innerText = 'Register New Patient';
            }
            document.getElementById('patientModal').classList.remove('hidden');
        }

        function closePatientModal() {
            document.getElementById('patientModal').classList.add('hidden');
        }

        function savePatient(e) {
            e.preventDefault();
            const id = document.getElementById('patientId').value;
            const patientData = {
                id: id ? id : 'pat-' + Date.now(),
                name: document.getElementById('patientName').value,
                age: parseInt(document.getElementById('patientAge').value),
                gender: document.getElementById('patientGender').value,
                blood: document.getElementById('patientBlood').value,
                phone: document.getElementById('patientPhone').value,
                address: document.getElementById('patientAddress').value
            };

            if (id) {
                const index = state.patients.findIndex(p => p.id === id);
                if (index !== -1) state.patients[index] = patientData;
                showToast('Patient record updated successfully!', 'success');
            } else {
                state.patients.push(patientData);
                showToast('Patient registered successfully!', 'success');
            }

            saveData();
            closePatientModal();
            refreshAllViews();
        }

        function editPatient(id) {
            openPatientModal(id);
        }

        function deletePatient(id) {
            if (confirmAction('Delete this patient record?')) {
                state.patients = state.patients.filter(p => p.id !== id);
                saveData();
                refreshAllViews();
                showToast('Patient removed successfully.', 'info');
            }
        }

        function renderAppointmentsTable() {
            const search = document.getElementById('appointmentSearch').value.toLowerCase();
            const filterStatus = document.getElementById('appointmentFilterStatus').value;
            const tbody = document.getElementById('appointmentsTableBody');
            tbody.innerHTML = '';

            const filtered = state.appointments.filter(app => {
                const pat = state.patients.find(p => p.id === app.patientId) || { name: '' };
                const doc = state.doctors.find(d => d.id === app.doctorId) || { name: '', dept: '' };
                const matchSearch = pat.name.toLowerCase().includes(search) || doc.name.toLowerCase().includes(search);
                const matchStatus = filterStatus === '' || app.status === filterStatus;
                return matchSearch && matchStatus;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">No appointments found.</td></tr>`;
                return;
            }

            filtered.forEach(app => {
                const pat = state.patients.find(p => p.id === app.patientId) || { name: 'Unknown Patient' };
                const doc = state.doctors.find(d => d.id === app.doctorId) || { name: 'Unknown Doctor', dept: 'General' };

                let badgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
                if (app.status === 'Confirmed') badgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
                if (app.status === 'Completed') badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                if (app.status === 'Cancelled') badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50/80 transition-colors">
                        <td class="p-4 font-semibold text-slate-900">${pat.name}</td>
                        <td class="p-4 text-slate-700">${doc.name}</td>
                        <td class="p-4"><span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">${doc.dept}</span></td>
                        <td class="p-4 text-slate-600 text-xs">${formatDateTime(app.dateTime)}</td>
                        <td class="p-4">
                            <select onchange="updateAppointmentStatus('${app.id}', this.value)" class="text-xs font-semibold px-3 py-1.5 rounded-xl border ${badgeColor} focus:outline-none cursor-pointer">
                                <option value="Pending" ${app.status === 'Pending' ? 'selected' : ''}>Pending</option>
                                <option value="Confirmed" ${app.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                                <option value="Completed" ${app.status === 'Completed' ? 'selected' : ''}>Completed</option>
                                <option value="Cancelled" ${app.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                            </select>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <button onclick="editAppointment('${app.id}')" class="text-slate-400 hover:text-teal-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-pen"></i></button>
                            <button onclick="deleteAppointment('${app.id}')" class="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        }

        function openAppointmentModal(appId = null) {
            populateAppointmentDropdowns();
            document.getElementById('appointmentForm').reset();
            document.getElementById('appointmentId').value = '';
            if (appId) {
                document.getElementById('appointmentModalTitle').innerText = 'Edit Appointment';
                const app = state.appointments.find(a => a.id === appId);
                if (app) {
                    document.getElementById('appointmentId').value = app.id;
                    document.getElementById('appointmentPatient').value = app.patientId;
                    document.getElementById('appointmentDoctor').value = app.doctorId;
                    document.getElementById('appointmentDateTime').value = app.dateTime;
                    document.getElementById('appointmentStatus').value = app.status;
                }
            } else {
                document.getElementById('appointmentModalTitle').innerText = 'Book New Appointment';
            }
            document.getElementById('appointmentModal').classList.remove('hidden');
        }

        function closeAppointmentModal() {
            document.getElementById('appointmentModal').classList.add('hidden');
        }

        function saveAppointment(e) {
            e.preventDefault();
            const id = document.getElementById('appointmentId').value;
            const appData = {
                id: id ? id : 'app-' + Date.now(),
                patientId: document.getElementById('appointmentPatient').value,
                doctorId: document.getElementById('appointmentDoctor').value,
                dateTime: document.getElementById('appointmentDateTime').value,
                status: document.getElementById('appointmentStatus').value
            };

            if (id) {
                const index = state.appointments.findIndex(a => a.id === id);
                if (index !== -1) state.appointments[index] = appData;
                showToast('Appointment updated successfully!', 'success');
            } else {
                state.appointments.push(appData);
                showToast('Appointment booked successfully!', 'success');
            }

            saveData();
            closeAppointmentModal();
            refreshAllViews();
        }

        function updateAppointmentStatus(id, newStatus) {
            const app = state.appointments.find(a => a.id === id);
            if (app) {
                app.status = newStatus;
                saveData();
                refreshAllViews();
                showToast(`Appointment status updated to ${newStatus}`, 'success');
            }
        }

        function editAppointment(id) {
            openAppointmentModal(id);
        }

        function deleteAppointment(id) {
            if (confirmAction('Cancel and delete this appointment?')) {
                state.appointments = state.appointments.filter(a => a.id !== id);
                saveData();
                refreshAllViews();
                showToast('Appointment cancelled.', 'info');
            }
        }

        function renderDepartmentsGrid() {
            const grid = document.getElementById('departmentsGrid');
            grid.innerHTML = '';

            state.departments.forEach(dept => {
                const docCount = state.doctors.filter(d => d.dept === dept.name).length;
                grid.innerHTML += `
                    <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl font-bold">
                                    ${dept.name.charAt(0)}
                                </div>
                                <div class="space-x-1">
                                    <button onclick="editDepartment('${dept.id}')" class="text-slate-400 hover:text-teal-600 p-1.5 rounded-lg hover:bg-slate-100"><i class="fa-solid fa-pen text-sm"></i></button>
                                    <button onclick="deleteDepartment('${dept.id}')" class="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100"><i class="fa-solid fa-trash text-sm"></i></button>
                                </div>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg mb-1">${dept.name}</h3>
                            <p class="text-xs text-slate-500 leading-relaxed mb-4">${dept.description}</p>
                        </div>
                        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">${docCount} Active Doctors</span>
                            <button onclick="filterDoctorsByDept('${dept.name}')" class="text-xs font-semibold text-slate-600 hover:text-teal-600">View Staff →</button>
                        </div>
                    </div>
                `;
            });
        }

        function openDepartmentModal(deptId = null) {
            document.getElementById('departmentForm').reset();
            document.getElementById('departmentId').value = '';
            if (deptId) {
                document.getElementById('departmentModalTitle').innerText = 'Edit Department';
                const dept = state.departments.find(d => d.id === deptId);
                if (dept) {
                    document.getElementById('departmentId').value = dept.id;
                    document.getElementById('departmentName').value = dept.name;
                    document.getElementById('departmentDesc').value = dept.description;
                }
            } else {
                document.getElementById('departmentModalTitle').innerText = 'Add New Department';
            }
            document.getElementById('departmentModal').classList.remove('hidden');
        }

        function closeDepartmentModal() {
            document.getElementById('departmentModal').classList.add('hidden');
        }

        function saveDepartment(e) {
            e.preventDefault();
            const id = document.getElementById('departmentId').value;
            const deptData = {
                id: id ? id : 'dept-' + Date.now(),
                name: document.getElementById('departmentName').value,
                description: document.getElementById('departmentDesc').value
            };

            if (id) {
                const index = state.departments.findIndex(d => d.id === id);
                if (index !== -1) state.departments[index] = deptData;
                showToast('Department updated successfully!', 'success');
            } else {
                state.departments.push(deptData);
                showToast('Department added successfully!', 'success');
            }

            saveData();
            closeDepartmentModal();
            refreshAllViews();
        }

        function editDepartment(id) {
            openDepartmentModal(id);
        }

        function deleteDepartment(id) {
            if (confirmAction('Delete this department?')) {
                state.departments = state.departments.filter(d => d.id !== id);
                saveData();
                refreshAllViews();
                showToast('Department deleted.', 'info');
            }
        }

        function filterDoctorsByDept(deptName) {
            switchTab('doctors');
            document.getElementById('doctorFilterDept').value = deptName;
            renderDoctorsTable();
        }

        function renderCharts() {
            // Chart 1: Appointments Status
            const ctx1 = document.getElementById('appointmentStatusChart').getContext('2d');
            if (chartsInstance.appointmentStatus) {
                chartsInstance.appointmentStatus.destroy();
            }

            const pending = state.appointments.filter(a => a.status === 'Pending').length;
            const confirmed = state.appointments.filter(a => a.status === 'Confirmed').length;
            const completed = state.appointments.filter(a => a.status === 'Completed').length;
            const cancelled = state.appointments.filter(a => a.status === 'Cancelled').length;

            chartsInstance.appointmentStatus = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
                    datasets: [{
                        data: [pending, confirmed, completed, cancelled],
                        backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#f43f5e'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 } } }
                    }
                }
            });

            // Chart 2: Doctors per Department
            const ctx2 = document.getElementById('departmentDoctorsChart').getContext('2d');
            if (chartsInstance.departmentDoctors) {
                chartsInstance.departmentDoctors.destroy();
            }

            const deptLabels = state.departments.map(d => d.name);
            const deptDataCounts = state.departments.map(d => state.doctors.filter(doc => doc.dept === d.name).length);

            chartsInstance.departmentDoctors = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: deptLabels,
                    datasets: [{
                        label: 'Number of Doctors',
                        data: deptDataCounts,
                        backgroundColor: '#0d9488',
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true, ticks: { precision: 0 } }
                    }
                }
            });
        }

        function exportCSVReport() {
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Category,Total Count\r\n";
            csvContent += `Doctors,${state.doctors.length}\r\n`;
            csvContent += `Patients,${state.patients.length}\r\n`;
            csvContent += `Appointments,${state.appointments.length}\r\n`;
            csvContent += `Departments,${state.departments.length}\r\n`;

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "healthcare_summary_report.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Report exported successfully!", "success");
        }

        function populateDepartmentDropdowns() {
            const select = document.getElementById('doctorDept');
            select.innerHTML = '';
            state.departments.forEach(dept => {
                select.innerHTML += `<option value="${dept.name}">${dept.name}</option>`;
            });

            const filterSelect = document.getElementById('doctorFilterDept');
            filterSelect.innerHTML = '<option value="">All Departments</option>';
            state.departments.forEach(dept => {
                filterSelect.innerHTML += `<option value="${dept.name}">${dept.name}</option>`;
            });
        }

        function populateAppointmentDropdowns() {
            const patSelect = document.getElementById('appointmentPatient');
            patSelect.innerHTML = '';
            state.patients.forEach(pat => {
                patSelect.innerHTML += `<option value="${pat.id}">${pat.name} (${pat.phone})</option>`;
            });

            const docSelect = document.getElementById('appointmentDoctor');
            docSelect.innerHTML = '';
            state.doctors.forEach(doc => {
                docSelect.innerHTML += `<option value="${doc.id}">${doc.name} - ${doc.dept}</option>`;
            });
        }

        function formatDateTime(dtStr) {
            if (!dtStr) return 'N/A';
            const dt = new Date(dtStr);
            return dt.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        }

        function showToast(message, type = 'success') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            let bgClass = 'bg-slate-900 text-white';
            let icon = 'fa-circle-check text-teal-400';
            if (type === 'success') { bgClass = 'bg-slate-900 text-white'; icon = 'fa-circle-check text-teal-400'; }
            if (type === 'info') { bgClass = 'bg-slate-900 text-white'; icon = 'fa-circle-info text-blue-400'; }

            toast.className = `pointer-events-auto flex items-center space-x-3 px-5 py-3.5 rounded-2xl shadow-xl ${bgClass} border border-slate-800 animate-fade-in text-sm font-medium`;
            toast.innerHTML = `<i class="fa-solid ${icon} text-lg"></i><span>${message}</span>`;
            
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function handleGlobalSearch(query) {
            if (!query.trim()) return;
            // Quick redirect to dashboard or highlight if needed
        }

        function showProfileModal() {
            document.getElementById('profileModal').classList.remove('hidden');
        }
        function closeProfileModal() {
            document.getElementById('profileModal').classList.add('hidden');
        }

        function refreshAllViews() {
            updateDashboardStats();
            renderDoctorsTable();
            renderPatientsTable();
            renderAppointmentsTable();
            renderDepartmentsGrid();
            populateDepartmentDropdowns();
        }

        // Initialize App on Window Load
        window.onload = function() {
            loadData();
            refreshAllViews();
        };
