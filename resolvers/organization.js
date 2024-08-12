const Organization = require('../models/organization');

module.exports = {
  organizations: async () => {
    return Organization.find();
  },
  createOrganization: async ({ organizationInput }) => {
    const organization = new Organization({
      name: organizationInput.name,
    });
    return organization.save();
  },
};
