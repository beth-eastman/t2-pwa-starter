/*
* clean.js
* This page cleans out the demo application provided with the boilerplate,
* so that developers can start with a fresh app when wanting to start a new
* project.
*
* Created by Bethany Eastman on 09/08/2017
*
* T2 PWA Starter
*
* Copyright © 2009-2017 United States Government as represented by
* the Chief Information Officer of the National Center for Telehealth
* and Technology. All Rights Reserved.
*
* Copyright © 2009-2017 Contributors. All Rights Reserved.
*
* THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
* REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
* COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
* AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
* THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
* INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
* REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
* DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
* HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
* RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
*
* Government Agency: The National Center for Telehealth and Technology
* Government Agency Original Software Designation: ProductName001
* Government Agency Original Software Title: ProductName
* User Registration Requested. Please send email
* with your contact information to: robert.a.kayl.civ@mail.mil
* Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
*
*/

var shell = require('shelljs');

shell.config.silent = true;

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.echo('Removing demo...');

// Remove Folders with Store Demo Files
shell.echo('✓ Removing store demo components...');
shell.rm('-rf', 'src/components/StoreDemo');

shell.echo('✓ Remove store demo containers...');
shell.rm('-rf', 'src/containers/StoreDemo');

shell.echo('✓ Remove store demo images...');
shell.rm('-rf', 'src/res/images/StoreDemo');


// Remove Specific Files to Store Demo
shell.rm('src/res/data/products.ts', 'src/actions/storeDemo.ts', 'src/reducers/storeDemo.ts');


// Copy Files that remove leftover calls to Store Demo files that have been removed
shell.cp('scripts/templates/AppRoutes.tsx', 'src/components/AppRoutes.tsx');
shell.cp('scripts/templates/index.ts', 'src/reducers/index.ts');
shell.cp('scripts/templates/LeftMenuIcon.tsx', 'src/components/LeftMenuIcon.tsx');
shell.cp('scripts/templates/HomePage.tsx', 'src/components/HomePage.tsx');

shell.config.reset();

shell.echo('✓ Finished.');
