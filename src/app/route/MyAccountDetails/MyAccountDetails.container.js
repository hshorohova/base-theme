/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';
import { MyAccountDispatcher } from 'Store/MyAccount';
import { BreadcrumbsDispatcher } from 'Store/Breadcrumbs';
import { showNotification } from 'Store/Notification';
import MyAccountDetails from './MyAccountDetails.component';

const mapStateToProps = state => ({
    isSignedIn: state.MyAccountReducer.isSignedIn,
    customer: state.MyAccountReducer.customer
});

const mapDispatchToProps = dispatch => ({
    requestCustomerData(options) {
        MyAccountDispatcher.requestCustomerData(options, dispatch);
    },
    updateCustomerData(options) {
        MyAccountDispatcher.updateCustomerData(options, dispatch);
    },
    updateBreadcrumbs: (breadcrumbs) => {
        BreadcrumbsDispatcher.update(breadcrumbs, dispatch);
    },

    showNotification(type, message) {
        dispatch(showNotification(type, message));
    }
});

const MyAccountDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(MyAccountDetails);

export default MyAccountDetailsContainer;
