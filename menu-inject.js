document.addEventListener('DOMContentLoaded', function() {
    // Create the menu element
    const menuDiv = document.createElement('div');
    menuDiv.className = 'moneo-menu';
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    
    // Add the menu HTML with active class applied inline for better reliability
    menuDiv.innerHTML = `
        <div class="moneo-header">
            <h1>DMT Data Dictionary</h1>
            <p>Data Warehouse</p>
        </div>
        <div class="moneo-navigation">
            <a href="index.html" class="home ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">Home</a>
            <a href="dwh_twpro.html" class="finance ${currentPage === 'dwh_twpro.html' ? 'active' : ''}">Tw-Pro</a>
            <a href="# class="actuarial ${currentPage === 'dwh_request.html' ? 'active' : ''}">Request</a>
            <a href="#" class="distribution ${currentPage === 'dwh_drivers.html' ? 'active' : ''}">Drivers</a>
            <a href="#" class="legal ${currentPage === 'dwh_data.html' ? 'active' : ''}">Data</a>
            <a href="#" class="risk ${currentPage === 'dwh_clients.html' ? 'active' : ''}">Clients</a>
            <a href="#" class="talent ${currentPage === 'dwh_infra_costs.html' ? 'active' : ''}">Infra-Costs</a>
            <a href="#" class="operations ${currentPage === 'dwh_infra_performance.html' ? 'active' : ''}">Infra-Performance</a>
            <a href="#" class="ceo ${currentPage === 'dwh_infra_capacity.html' ? 'active' : ''}">Infra-Capacity</a>
        </div>
    `;
    
    // Add styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `

        .moneo-menu {
            background-color: #2d3e4f;
            color: white;
            padding: 5px 20px 0 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            width: 100%;
        }
        
       
        .moneo-menu .moneo-header h1 {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
            padding: 0;
        }
        
        .moneo-menu .moneo-header p {
          
            margin: 5px 0 8px 0;
          
        }
        

     
        .moneo-menu .moneo-navigation {
            padding-bottom: 5px;
        }
        
        
        .moneo-menu .moneo-navigation a {
            color: white;
            text-decoration: none;
          
            margin-right: 25px;
            padding: 5px 0;
            display: inline-block;
            position: relative;
            
        }
        
        .moneo-menu .moneo-navigation a:hover {
            text-decoration: underline;
        }
        
        .moneo-menu .moneo-navigation a.active {
         
            text-decoration: underline;
            text-underline-offset: 5px;
        }
        
        /* Module color indicators for active menu items */
        .moneo-menu .moneo-navigation a.home.active {
            text-decoration-color: #3498db;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.finance.active {
            text-decoration-color: #27ae60;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.investment.active {
            text-decoration-color: #f39c12;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.actuarial.active {
            text-decoration-color: #9b59b6;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.distribution.active {
            text-decoration-color: #16a085;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.legal.active {
            text-decoration-color: #c0392b;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.risk.active {
            text-decoration-color: #2980b9;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.talent.active {
            text-decoration-color: #d35400;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.operations.active {
            text-decoration-color: #8e44ad;
            text-decoration-thickness: 3px;
        }
        
        .moneo-menu .moneo-navigation a.ceo.active {
            text-decoration-color: #7f8c8d;
            text-decoration-thickness: 3px;
        }
    `;
    
    // Add the style element to head
    document.head.appendChild(styleElement);
    
    // Insert the menu at the beginning of the body
    document.body.insertBefore(menuDiv, document.body.firstChild);
    
    // Log the current page for debugging
    console.log('Current page detected as:', currentPage);
});