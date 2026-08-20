tailwind.config = {
    theme: {
        extend: {
            colors: {
                medical: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b'
                },
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8'
                }
            }
        }
    }
};

// Doctor Dataset (Mock Database)
        const doctorsData = [
            {
                id: 1,
                name: "Dr. Sarah Jenkins",
                department: "Cardiology",
                qualification: "MBBS, MD - Cardiology (AIIMS)",
                experience: "12 Years Experience",
                rating: 4.9,
                reviewsCount: 142,
                fee: 800,
                image: "https://placehold.co/400x400/065f46/ffffff?text=Dr.+Sarah",
                about: "Dr. Sarah Jenkins is an expert cardiologist with over 12 years of clinical experience in interventional cardiology and preventive heart care.",
                timeSlots: ["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"],
                hospital: "CarePlus Central Heart Institute"
            },
            {
                id: 2,
                name: "Dr. Robert Chen",
                department: "Neurology",
                qualification: "MBBS, DM - Neurology (Johns Hopkins)",
                experience: "15 Years Experience",
                rating: 4.8,
                reviewsCount: 98,
                fee: 1000,
                image: "https://placehold.co/400x400/1e40af/ffffff?text=Dr.+Robert",
                about: "Dr. Robert Chen specializes in stroke management, chronic migraines, and neurological disorders with advanced diagnostic techniques.",
                timeSlots: ["10:00 AM", "11:30 AM", "03:00 PM", "05:00 PM"],
                hospital: "Apex Neurosciences Center"
            },
            {
                id: 3,
                name: "Dr. Emily Watson",
                department: "Pediatrics",
                qualification: "MBBS, DCH, MD - Pediatrics",
                experience: "8 Years Experience",
                rating: 4.9,
                reviewsCount: 215,
                fee: 600,
                image: "https://placehold.co/400x400/b45309/ffffff?text=Dr.+Emily",
                about: "Dr. Emily Watson is passionate about child healthcare, developmental milestones, adolescent medicine, and pediatric vaccinations.",
                timeSlots: ["09:30 AM", "11:00 AM", "01:30 PM", "04:00 PM"],
                hospital: "Children's Care Health Hub"
            },
            {
                id: 4,
                name: "Dr. Michael Chang",
                department: "Dermatology",
                qualification: "MBBS, MD - Dermatology & Venereology",
                experience: "10 Years Experience",
                rating: 4.7,
                reviewsCount: 84,
                fee: 700,
                image: "https://placehold.co/400x400/4c1d95/ffffff?text=Dr.+Michael",
                about: "Dr. Michael Chang focuses on medical and cosmetic dermatology, acne treatment, laser therapies, and anti-aging skin care regimens.",
                timeSlots: ["10:30 AM", "01:00 PM", "03:30 PM", "06:00 PM"],
                hospital: "Radiant Skin & Aesthetics Clinic"
            },
            {
                id: 5,
                name: "Dr. Jessica Patel",
                department: "Orthopedics",
                qualification: "MBBS, MS - Orthopedics (Joint Replacement)",
                experience: "14 Years Experience",
                rating: 4.8,
                reviewsCount: 110,
                fee: 900,
                image: "https://placehold.co/400x400/831843/ffffff?text=Dr.+Jessica",
                about: "Dr. Jessica Patel specializes in arthroscopic surgery, sports injuries, knee and hip replacement surgeries, and spinal care.",
                timeSlots: ["09:00 AM", "12:00 PM", "02:30 PM", "05:15 PM"],
                hospital: "Advanced Ortho & Spine Institute"
            },
            {
                id: 6,
                name: "Dr. David Miller",
                department: "General Medicine",
                qualification: "MBBS, MRCP (UK)",
                experience: "20 Years Experience",
                rating: 4.9,
                reviewsCount: 310,
                fee: 500,
                image: "https://placehold.co/400x400/134e4a/ffffff?text=Dr.+David",
                about: "Dr. David Miller is a seasoned general physician providing comprehensive primary healthcare, lifestyle disease management, and elderly care.",
                timeSlots: ["08:30 AM", "10:00 AM", "01:00 PM", "04:00 PM"],
                hospital: "City General Family Clinic"
            },
            {
                id: 7,
                name: "Dr. Amanda Brooks",
                department: "Gynecology",
                qualification: "MBBS, MS - Obstetrics & Gynecology",
                experience: "11 Years Experience",
                rating: 4.9,
                reviewsCount: 178,
                fee: 850,
                image: "https://placehold.co/400x400/701a75/ffffff?text=Dr.+Amanda",
                about: "Dr. Amanda Brooks offers expert prenatal care, high-risk pregnancy management, laparoscopic gynecological surgeries, and wellness checks.",
                timeSlots: ["11:00 AM", "02:00 PM", "04:30 PM", "06:30 PM"],
                hospital: "Women's Wellness & Maternity Center"
            },
            {
                id: 8,
                name: "Dr. Kevin Ramirez",
                department: "Ophthalmology",
                qualification: "MBBS, MS - Ophthalmology",
                experience: "9 Years Experience",
                rating: 4.6,
                reviewsCount: 65,
                fee: 650,
                image: "https://placehold.co/400x400/0f172a/ffffff?text=Dr.+Kevin",
                about: "Dr. Kevin Ramirez specializes in laser cataract surgeries, glaucoma treatments, pediatric eye care, and comprehensive vision correction.",
                timeSlots: ["09:30 AM", "11:30 AM", "03:00 PM", "05:00 PM"],
                hospital: "ClearVision Eye Institute"
            }
        ];

        // Departments list with icons & colors
        const departmentsList = [
            { name: "Cardiology", icon: "fa-heart-pulse", bg: "bg-rose-50 text-rose-600 border-rose-100" },
            { name: "Neurology", icon: "fa-brain", bg: "bg-indigo-50 text-indigo-600 border-indigo-100" },
            { name: "Pediatrics", icon: "fa-child", bg: "bg-amber-50 text-amber-600 border-amber-100" },
            { name: "Dermatology", icon: "fa-hand-dots", bg: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Orthopedics", icon: "fa-bone", bg: "bg-pink-50 text-pink-600 border-pink-100" },
            { name: "General Medicine", icon: "fa-user-doctor", bg: "bg-teal-50 text-teal-600 border-teal-100" },
            { name: "Gynecology", icon: "fa-venus", bg: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100" },
            { name: "Ophthalmology", icon: "fa-eye", bg: "bg-sky-50 text-sky-600 border-sky-100" }
        ];

        // State Management
        let currentView = 'home';
        let selectedDoctorId = null;
        let selectedTimeSlot = null;
        let userAppointments = [];

        // Initialize application on window load
        window.onload = function() {
            // Load saved appointments from localStorage if present
            const saved = localStorage.getItem('CarePlus_appointments');
            if (saved) {
                try {
                    userAppointments = JSON.parse(saved);
                } catch(e) {
                    userAppointments = [];
                }
            }
            
            renderDepartmentsHome();
            renderFeaturedDoctors();
            populateDepartmentDropdowns();
            renderDoctorsListing(doctorsData);
            updateAppointmentBadge();
            renderAppointmentsHistory();
        };

        // Router navigation
        function router(viewId, paramId = null) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // Show target view
            const target = document.getElementById(`view-${viewId}`);
            if (target) {
                target.classList.remove('hidden');
                currentView = viewId;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Update nav active styles
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-medical-700', 'border-medical-600');
                link.classList.add('text-gray-600', 'border-transparent');
            });
            if (viewId === 'home') {
                const n = document.getElementById('nav-home');
                if(n) { n.classList.add('text-medical-700', 'border-medical-600'); n.classList.remove('text-gray-600', 'border-transparent'); }
            } else if (viewId === 'doctors') {
                const n = document.getElementById('nav-doctors');
                if(n) { n.classList.add('text-medical-700', 'border-medical-600'); n.classList.remove('text-gray-600', 'border-transparent'); }
            } else if (viewId === 'appointments') {
                const n = document.getElementById('nav-appointments');
                if(n) { n.classList.add('text-medical-700', 'border-medical-600'); n.classList.remove('text-gray-600', 'border-transparent'); }
                renderAppointmentsHistory();
            }

            // Handle specific view parameters
            if (viewId === 'profile' && paramId !== null) {
                selectedDoctorId = paramId;
                renderDoctorProfile(paramId);
            }
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Render Departments on Home Page
        function renderDepartmentsHome() {
            const grid = document.getElementById('department-grid');
            if (!grid) return;
            grid.innerHTML = departmentsList.map(dept => `
                <div onclick="selectDeptAndNavigate('${dept.name}')" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md hover:border-medical-500 transition cursor-pointer text-center group">
                    <div class="w-12 h-12 rounded-xl ${dept.bg} flex items-center justify-center mx-auto text-xl mb-3 group-hover:scale-110 transition">
                        <i class="fa-solid ${dept.icon}"></i>
                    </div>
                    <h3 class="font-bold text-gray-800 text-sm group-hover:text-medical-600 transition">${dept.name}</h3>
                </div>
            `).join('');
        }

        // Render Featured Doctors on Home Page
        function renderFeaturedDoctors() {
            const grid = document.getElementById('featured-doctors-grid');
            if (!grid) return;
            const featured = doctorsData.slice(0, 3);
            grid.innerHTML = featured.map(doc => createDoctorCardHTML(doc)).join('');
        }

        // Create HTML for a single doctor card
        function createDoctorCardHTML(doc) {
            return `
                <div class="bg-white rounded-3xl shadow-sm border border-gray-200/80 hover:shadow-lg transition flex flex-col justify-between overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start space-x-4">
                            <img src="${doc.image}" alt="${doc.name}" onerror="this.src='https://placehold.co/400x400/065f46/ffffff?text=Doctor'" class="w-20 h-20 rounded-2xl object-cover shadow-md">
                            <div class="flex-grow">
                                <span class="bg-medical-50 text-medical-700 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">${doc.department}</span>
                                <h3 class="font-bold text-gray-900 text-lg mt-1">${doc.name}</h3>
                                <p class="text-xs text-gray-500 mt-0.5 line-clamp-1">${doc.qualification}</p>
                                <div class="flex items-center space-x-1 mt-2">
                                    <i class="fa-solid fa-star text-amber-400 text-xs"></i>
                                    <span class="text-xs font-bold text-gray-800">${doc.rating}</span>
                                    <span class="text-xs text-gray-400">(${doc.reviewsCount} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 flex items-center space-x-1.5"><i class="fa-solid fa-briefcase text-gray-400"></i><span>Experience:</span></span>
                                <span class="font-semibold text-gray-800">${doc.experience}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 flex items-center space-x-1.5"><i class="fa-solid fa-hospital text-gray-400"></i><span>Hospital:</span></span>
                                <span class="font-semibold text-gray-800 truncate max-w-[180px]">${doc.hospital}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-500 flex items-center space-x-1.5"><i class="fa-solid fa-indian-rupee-sign text-gray-400"></i><span>Consultation Fee:</span></span>
                                <span class="font-extrabold text-medical-700 text-sm">₹${doc.fee}</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 pb-6 pt-2 bg-gray-50/50 flex gap-2">
                        <button onclick="router('profile', ${doc.id})" class="flex-grow bg-medical-600 hover:bg-medical-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-1.5">
                            <i class="fa-regular fa-calendar-check"></i>
                            <span>Book Appointment</span>
                        </button>
                    </div>
                </div>
            `;
        }

        // Populate Department select dropdowns
        function populateDepartmentDropdowns() {
            const select = document.getElementById('department-filter');
            if (!select) return;
            departmentsList.forEach(dept => {
                const opt = document.createElement('option');
                opt.value = dept.name;
                opt.textContent = dept.name;
                select.appendChild(opt);
            });
        }

        // Render full doctors listing on Doctors page
        function renderDoctorsListing(list) {
            const grid = document.getElementById('doctors-listing-grid');
            const noFound = document.getElementById('no-doctors-found');
            if (!grid) return;

            if (list.length === 0) {
                grid.innerHTML = '';
                noFound.classList.remove('hidden');
            } else {
                noFound.classList.add('hidden');
                grid.innerHTML = list.map(doc => createDoctorCardHTML(doc)).join('');
            }
        }

        // Filter and Search doctors
        function filterDoctors() {
            const query = document.getElementById('doctor-search-input').value.toLowerCase();
            const dept = document.getElementById('department-filter').value;
            const sort = document.getElementById('sort-filter').value;

            let result = doctorsData.filter(doc => {
                const matchesQuery = doc.name.toLowerCase().includes(query) || doc.department.toLowerCase().includes(query) || doc.qualification.toLowerCase().includes(query);
                const matchesDept = dept === "" || doc.department === dept;
                return matchesQuery && matchesDept;
            });

            // Sorting
            if (sort === 'rating') {
                result.sort((a,b) => b.rating - a.rating);
            } else if (sort === 'fee-low') {
                result.sort((a,b) => a.fee - b.fee);
            } else if (sort === 'fee-high') {
                result.sort((a,b) => b.fee - a.fee);
            } else if (sort === 'experience') {
                result.sort((a,b) => parseInt(b.experience) - parseInt(a.experience));
            }

            renderDoctorsListing(result);
        }

        // Hero Search handler
        function handleHeroSearch() {
            const query = document.getElementById('hero-search-input').value;
            router('doctors');
            const searchInput = document.getElementById('doctor-search-input');
            if (searchInput) {
                searchInput.value = query;
                filterDoctors();
            }
        }

        // Quick department filter click
        function selectDeptAndNavigate(deptName) {
            router('doctors');
            const select = document.getElementById('department-filter');
            if (select) {
                select.value = deptName;
                filterDoctors();
            }
        }

        // Render Doctor Profile & Interactive Booking Form
        function renderDoctorProfile(id) {
            const doc = doctorsData.find(d => d.id === id);
            const container = document.getElementById('doctor-profile-container');
            if (!doc || !container) return;

            // Default tomorrow's date for date picker minimum
            const today = new Date().toISOString().split('T')[0];

            container.innerHTML = `
                <div class="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-6 sm:p-8">
                    <div class="flex flex-col md:flex-row gap-8 items-start">
                        <img src="${doc.image}" alt="${doc.name}" class="w-36 h-36 rounded-2xl object-cover shadow-lg mx-auto md:mx-0">
                        <div class="space-y-3 flex-grow text-center md:text-left">
                            <div class="inline-block bg-medical-50 text-medical-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${doc.department}</div>
                            <h1 class="text-3xl font-extrabold text-gray-900">${doc.name}</h1>
                            <p class="text-sm text-gray-600 font-medium">${doc.qualification}</p>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-hospital mr-1 text-medical-600"></i>${doc.hospital}</p>
                            <div class="flex items-center justify-center md:justify-start space-x-4 pt-2">
                                <div class="flex items-center space-x-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-xl text-xs font-bold">
                                    <i class="fa-solid fa-star"></i>
                                    <span>${doc.rating} (${doc.reviewsCount} reviews)</span>
                                </div>
                                <div class="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-xl">
                                    <i class="fa-solid fa-briefcase mr-1 text-gray-500"></i>${doc.experience}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2 space-y-6">
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2">About Doctor</h3>
                                <p class="text-sm text-gray-600 leading-relaxed">${doc.about}</p>
                            </div>

                            <div class="bg-medical-50/60 p-5 rounded-2xl border border-medical-100 flex items-center justify-between">
                                <div>
                                    <div class="text-xs text-gray-500 font-medium">Consultation Fee</div>
                                    <div class="text-2xl font-extrabold text-medical-800">₹${doc.fee} <span class="text-xs font-normal text-gray-500">(Inclusive of all taxes)</span></div>
                                </div>
                                <div class="text-right">
                                    <span class="bg-medical-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">Verified Doctor</span>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Info Box -->
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 space-y-4">
                            <h4 class="font-bold text-gray-900 text-sm uppercase tracking-wider">Availability Overview</h4>
                            <ul class="space-y-3 text-xs text-gray-600">
                                <li class="flex items-center space-x-2"><i class="fa-solid fa-circle-check text-medical-600"></i><span>Monday - Saturday Available</span></li>
                                <li class="flex items-center space-x-2"><i class="fa-solid fa-circle-check text-medical-600"></i><span>Instant Digital Prescription</span></li>
                                <li class="flex items-center space-x-2"><i class="fa-solid fa-circle-check text-medical-600"></i><span>In-Person & Video Consult</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Booking Form Section -->
                <div class="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-6 sm:p-8">
                    <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                        <i class="fa-regular fa-calendar-days text-medical-600"></i>
                        <span>Schedule Appointment with ${doc.name}</span>
                    </h3>

                    <form id="appointment-form" onsubmit="handleBookingSubmit(event, ${doc.id})" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Patient Full Name *</label>
                                <input type="text" id="patient-name" required placeholder="Enter patient full name" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address *</label>
                                <input type="email" id="patient-email" required placeholder="name@example.com" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Phone Number *</label>
                                <input type="tel" id="patient-phone" required placeholder="10-digit mobile number" class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Appointment Date *</label>
                                <input type="date" id="appointment-date" min="${today}" required class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Select Available Time Slot *</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="time-slots-container">
                                ${doc.timeSlots.map(slot => `
                                    <button type="button" onclick="selectTimeSlot('${slot}')" id="slot-${slot.replace(/[: ]/g,'')}" class="time-slot-btn py-3 px-4 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 bg-gray-50 hover:bg-medical-50 hover:border-medical-500 transition text-center">
                                        ${slot}
                                    </button>
                                `).join('')}
                            </div>
                            <input type="hidden" id="selected-slot-input" required>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-gray-700 uppercase mb-2">Symptoms or Medical Condition (Optional)</label>
                            <textarea id="patient-symptoms" rows="3" placeholder="Briefly describe your symptoms or reason for visit..." class="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-medical-500"></textarea>
                        </div>

                        <div class="pt-4 border-t border-gray-100 flex justify-end">
                            <button type="submit" class="bg-medical-600 hover:bg-medical-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg text-sm flex items-center space-x-2">
                                <i class="fa-solid fa-check"></i>
                                <span>Confirm Booking (₹${doc.fee})</span>
                            </button>
                        </div>
                    </form>
                </div>
            `;
        }

        // Select time slot helper
        function selectTimeSlot(slot) {
            selectedTimeSlot = slot;
            document.getElementById('selected-slot-input').value = slot;
            
            // Highlight active button
            document.querySelectorAll('.time-slot-btn').forEach(btn => {
                btn.classList.remove('bg-medical-600', 'text-white', 'border-medical-600');
                btn.classList.add('bg-gray-50', 'text-gray-700', 'border-gray-200');
            });
            const activeBtn = document.getElementById(`slot-${slot.replace(/[: ]/g,'')}`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-gray-50', 'text-gray-700', 'border-gray-200');
                activeBtn.classList.add('bg-medical-600', 'text-white', 'border-medical-600');
            }
        }

        // Handle Booking Form Submission
        function handleBookingSubmit(event, doctorId) {
            event.preventDefault();
            const doc = doctorsData.find(d => d.id === doctorId);
            const name = document.getElementById('patient-name').value;
            const email = document.getElementById('patient-email').value;
            const phone = document.getElementById('patient-phone').value;
            const date = document.getElementById('appointment-date').value;
            const slot = document.getElementById('selected-slot-input').value;
            const symptoms = document.getElementById('patient-symptoms').value || "None specified";

            if (!slot) {
                showModal('Selection Required', 'Please select a time slot for your appointment.', 'warning');
                return;
            }

            // Create Appointment Record
            const appointment = {
                id: 'APT-' + Math.floor(100000 + Math.random() * 900000),
                doctorId: doc.id,
                doctorName: doc.name,
                doctorDepartment: doc.department,
                doctorHospital: doc.hospital,
                doctorImage: doc.image,
                fee: doc.fee,
                patientName: name,
                patientEmail: email,
                patientPhone: phone,
                appointmentDate: date,
                timeSlot: slot,
                symptoms: symptoms,
                bookedAt: new Date().toLocaleString(),
                status: 'Confirmed'
            };

            // Save to state and storage
            userAppointments.unshift(appointment);
            localStorage.setItem('CarePlus_appointments', JSON.stringify(userAppointments));
            updateAppointmentBadge();

            // Render confirmation screen
            renderConfirmationSummary(appointment);
            router('confirmation');
        }

        // Render Confirmation Summary
        function renderConfirmationSummary(apt) {
            const box = document.getElementById('confirmation-details-box');
            if (!box) return;

            box.innerHTML = `
                <div class="flex justify-between items-center border-b border-gray-200/60 pb-3">
                    <span class="text-xs text-gray-500 font-medium">Appointment ID</span>
                    <span class="text-sm font-bold text-medical-700">${apt.id}</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200/60 pb-3">
                    <span class="text-xs text-gray-500 font-medium">Doctor Specialist</span>
                    <span class="text-sm font-bold text-gray-800">${apt.doctorName} (${apt.doctorDepartment})</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200/60 pb-3">
                    <span class="text-xs text-gray-500 font-medium">Hospital / Clinic</span>
                    <span class="text-sm font-semibold text-gray-800">${apt.doctorHospital}</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200/60 pb-3">
                    <span class="text-xs text-gray-500 font-medium">Patient Name</span>
                    <span class="text-sm font-semibold text-gray-800">${apt.patientName}</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200/60 pb-3">
                    <span class="text-xs text-gray-500 font-medium">Date & Time</span>
                    <span class="text-sm font-bold text-gray-800">${apt.appointmentDate} at ${apt.timeSlot}</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xs text-gray-500 font-medium">Paid Consultation Fee</span>
                    <span class="text-sm font-extrabold text-medical-700">₹${apt.fee}</span>
                </div>
            `;
        }

        // Update appointment badge count
        function updateAppointmentBadge() {
            const badge = document.getElementById('appointment-badge');
            if (!badge) return;
            if (userAppointments.length > 0) {
                badge.textContent = userAppointments.length;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        // Render My Appointments History
        function renderAppointmentsHistory() {
            const container = document.getElementById('appointments-list-container');
            const emptyState = document.getElementById('no-appointments-state');
            if (!container || !emptyState) return;

            if (userAppointments.length === 0) {
                container.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            container.innerHTML = userAppointments.map(apt => `
                <div class="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div class="flex items-start space-x-4">
                        <img src="${apt.doctorImage}" alt="${apt.doctorName}" class="w-16 h-16 rounded-2xl object-cover shadow-sm">
                        <div class="space-y-1">
                            <div class="flex items-center space-x-2">
                                <span class="bg-medical-50 text-medical-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">${apt.doctorDepartment}</span>
                                <span class="text-xs font-semibold text-gray-400">ID: ${apt.id}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 text-base">${apt.doctorName}</h3>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-hospital mr-1"></i>${apt.doctorHospital}</p>
                            <div class="flex items-center space-x-4 pt-1 text-xs font-medium text-gray-700">
                                <span><i class="fa-regular fa-calendar mr-1 text-medical-600"></i>${apt.appointmentDate}</span>
                                <span><i class="fa-regular fa-clock mr-1 text-medical-600"></i>${apt.timeSlot}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-end md:items-center gap-3 w-full md:w-auto justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                        <div class="text-left md:text-right">
                            <div class="text-[10px] text-gray-400 uppercase font-bold">Patient</div>
                            <div class="text-xs font-bold text-gray-800">${apt.patientName}</div>
                            <span class="inline-block mt-1 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Confirmed</span>
                        </div>
                        <button onclick="cancelAppointment('${apt.id}')" class="text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 font-bold px-4 py-2 rounded-xl text-xs transition">
                            Cancel
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Cancel Appointment
        function cancelAppointment(aptId) {
            userAppointments = userAppointments.filter(a => a.id !== aptId);
            localStorage.setItem('CarePlus_appointments', JSON.stringify(userAppointments));
            updateAppointmentBadge();
            renderAppointmentsHistory();
            showModal('Appointment Cancelled', 'Your appointment has been successfully cancelled.', 'success');
        }

        // Custom Modal helper (replacing alert())
        function showModal(title, message, type = 'success') {
            const modal = document.getElementById('custom-modal');
            const titleEl = document.getElementById('modal-title');
            const msgEl = document.getElementById('modal-message');
            const iconEl = document.getElementById('modal-icon');

            titleEl.textContent = title;
            msgEl.textContent = message;

            if (type === 'success') {
                iconEl.className = 'w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl bg-medical-100 text-medical-600';
                iconEl.innerHTML = '<i class="fa-solid fa-check"></i>';
            } else if (type === 'warning') {
                iconEl.className = 'w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl bg-amber-100 text-amber-600';
                iconEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
            }

            modal.classList.remove('hidden');
        }

        function closeModal() {
            const modal = document.getElementById('custom-modal');
            modal.classList.add('hidden');
        }