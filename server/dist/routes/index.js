"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const project_controller_1 = require("../controllers/project.controller");
const subscription_controller_1 = require("../controllers/subscription.controller");
const billing_controller_1 = require("../controllers/billing.controller");
const router = (0, express_1.Router)();
router.post('/auth/register', auth_controller_1.register);
router.post('/auth/login', auth_controller_1.login);
router.post('/projects', auth_middleware_1.authenticate, project_controller_1.createProject);
router.get('/projects', auth_middleware_1.authenticate, project_controller_1.getProjectsByUser);
router.post('/subscriptions', auth_middleware_1.authenticate, subscription_controller_1.createSubscription);
router.get('/subscriptions/:userId', auth_middleware_1.authenticate, subscription_controller_1.getSubscription);
router.post('/billing', auth_middleware_1.authenticate, billing_controller_1.createBillingRecord);
router.get('/billing', auth_middleware_1.authenticate, billing_controller_1.getBillingRecords);
exports.default = router;
//# sourceMappingURL=index.js.map