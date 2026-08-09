# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktn/provider-awscc.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database awscc_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabase;

LightsailDatabase.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .masterDatabaseName(java.lang.String)
    .masterUsername(java.lang.String)
    .relationalDatabaseBlueprintId(java.lang.String)
    .relationalDatabaseBundleId(java.lang.String)
    .relationalDatabaseName(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .backupRetention(java.lang.Boolean|IResolvable)
//  .caCertificateIdentifier(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .relationalDatabaseParameters(IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters>)
//  .rotateMasterUserPassword(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<LightsailDatabaseTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName">masterDatabaseName</a></code> | <code>java.lang.String</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBlueprintId">relationalDatabaseBlueprintId</a></code> | <code>java.lang.String</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBundleId">relationalDatabaseBundleId</a></code> | <code>java.lang.String</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName">relationalDatabaseName</a></code> | <code>java.lang.String</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetention">backupRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseParameters">relationalDatabaseParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>></code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.rotateMasterUserPassword">rotateMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `masterDatabaseName`<sup>Required</sup> <a name="masterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName"></a>

- *Type:* java.lang.String

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="relationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBlueprintId"></a>

- *Type:* java.lang.String

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="relationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBundleId"></a>

- *Type:* java.lang.String

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName"></a>

- *Type:* java.lang.String

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetention"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* java.lang.String

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUserPassword"></a>

- *Type:* java.lang.String

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `relationalDatabaseParameters`<sup>Optional</sup> <a name="relationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>>

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `rotateMasterUserPassword`<sup>Optional</sup> <a name="rotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.rotateMasterUserPassword"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters">putRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention">resetBackupRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier">resetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters">resetRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword">resetRotateMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRelationalDatabaseParameters` <a name="putRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters"></a>

```java
public void putRelationalDatabaseParameters(IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LightsailDatabaseTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBackupRetention` <a name="resetBackupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention"></a>

```java
public void resetBackupRetention()
```

##### `resetCaCertificateIdentifier` <a name="resetCaCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier"></a>

```java
public void resetCaCertificateIdentifier()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRelationalDatabaseParameters` <a name="resetRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters"></a>

```java
public void resetRelationalDatabaseParameters()
```

##### `resetRotateMasterUserPassword` <a name="resetRotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword"></a>

```java
public void resetRotateMasterUserPassword()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabase;

LightsailDatabase.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabase;

LightsailDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabase;

LightsailDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabase;

LightsailDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LightsailDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters">relationalDatabaseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput">backupRetentionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput">caCertificateIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">masterDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput">relationalDatabaseBlueprintIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput">relationalDatabaseBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">relationalDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput">relationalDatabaseParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput">rotateMasterUserPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention">backupRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">masterDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId">relationalDatabaseBlueprintId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId">relationalDatabaseBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">relationalDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword">rotateMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseParameters`<sup>Required</sup> <a name="relationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters"></a>

```java
public LightsailDatabaseRelationalDatabaseParametersList getRelationalDatabaseParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags"></a>

```java
public LightsailDatabaseTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionInput`<sup>Optional</sup> <a name="backupRetentionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput"></a>

```java
public java.lang.Boolean|IResolvable getBackupRetentionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `caCertificateIdentifierInput`<sup>Optional</sup> <a name="caCertificateIdentifierInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput"></a>

```java
public java.lang.String getCaCertificateIdentifierInput();
```

- *Type:* java.lang.String

---

##### `masterDatabaseNameInput`<sup>Optional</sup> <a name="masterDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```java
public java.lang.String getMasterDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `relationalDatabaseBlueprintIdInput`<sup>Optional</sup> <a name="relationalDatabaseBlueprintIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput"></a>

```java
public java.lang.String getRelationalDatabaseBlueprintIdInput();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseBundleIdInput`<sup>Optional</sup> <a name="relationalDatabaseBundleIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput"></a>

```java
public java.lang.String getRelationalDatabaseBundleIdInput();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseNameInput`<sup>Optional</sup> <a name="relationalDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```java
public java.lang.String getRelationalDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseParametersInput`<sup>Optional</sup> <a name="relationalDatabaseParametersInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters> getRelationalDatabaseParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>>

---

##### `rotateMasterUserPasswordInput`<sup>Optional</sup> <a name="rotateMasterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getRotateMasterUserPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupRetention`<sup>Required</sup> <a name="backupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention"></a>

```java
public java.lang.Boolean|IResolvable getBackupRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

---

##### `masterDatabaseName`<sup>Required</sup> <a name="masterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```java
public java.lang.String getMasterDatabaseName();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="relationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId"></a>

```java
public java.lang.String getRelationalDatabaseBlueprintId();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="relationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId"></a>

```java
public java.lang.String getRelationalDatabaseBundleId();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```java
public java.lang.String getRelationalDatabaseName();
```

- *Type:* java.lang.String

---

##### `rotateMasterUserPassword`<sup>Required</sup> <a name="rotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getRotateMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseConfig;

LightsailDatabaseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .masterDatabaseName(java.lang.String)
    .masterUsername(java.lang.String)
    .relationalDatabaseBlueprintId(java.lang.String)
    .relationalDatabaseBundleId(java.lang.String)
    .relationalDatabaseName(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .backupRetention(java.lang.Boolean|IResolvable)
//  .caCertificateIdentifier(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .relationalDatabaseParameters(IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters>)
//  .rotateMasterUserPassword(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<LightsailDatabaseTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">masterDatabaseName</a></code> | <code>java.lang.String</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId">relationalDatabaseBlueprintId</a></code> | <code>java.lang.String</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId">relationalDatabaseBundleId</a></code> | <code>java.lang.String</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">relationalDatabaseName</a></code> | <code>java.lang.String</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention">backupRetention</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters">relationalDatabaseParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>></code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword">rotateMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `masterDatabaseName`<sup>Required</sup> <a name="masterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```java
public java.lang.String getMasterDatabaseName();
```

- *Type:* java.lang.String

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="relationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId"></a>

```java
public java.lang.String getRelationalDatabaseBlueprintId();
```

- *Type:* java.lang.String

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="relationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId"></a>

```java
public java.lang.String getRelationalDatabaseBundleId();
```

- *Type:* java.lang.String

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```java
public java.lang.String getRelationalDatabaseName();
```

- *Type:* java.lang.String

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention"></a>

```java
public java.lang.Boolean|IResolvable getBackupRetention();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `relationalDatabaseParameters`<sup>Optional</sup> <a name="relationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters> getRelationalDatabaseParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>>

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `rotateMasterUserPassword`<sup>Optional</sup> <a name="rotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getRotateMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

### LightsailDatabaseRelationalDatabaseParameters <a name="LightsailDatabaseRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseRelationalDatabaseParameters;

LightsailDatabaseRelationalDatabaseParameters.builder()
//  .allowedValues(java.lang.String)
//  .applyMethod(java.lang.String)
//  .applyType(java.lang.String)
//  .dataType(java.lang.String)
//  .description(java.lang.String)
//  .isModifiable(java.lang.Boolean|IResolvable)
//  .parameterName(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues">allowedValues</a></code> | <code>java.lang.String</code> | Specifies the valid range of values for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod">applyMethod</a></code> | <code>java.lang.String</code> | Indicates when parameter updates are applied. Can be immediate or pending-reboot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType">applyType</a></code> | <code>java.lang.String</code> | Specifies the engine-specific parameter type. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Specifies the valid data type for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description">description</a></code> | <code>java.lang.String</code> | Provides a description of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable">isModifiable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value indicating whether the parameter can be modified. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Specifies the name of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | Specifies the value of the parameter. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues"></a>

```java
public java.lang.String getAllowedValues();
```

- *Type:* java.lang.String

Specifies the valid range of values for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#allowed_values LightsailDatabase#allowed_values}

---

##### `applyMethod`<sup>Optional</sup> <a name="applyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod"></a>

```java
public java.lang.String getApplyMethod();
```

- *Type:* java.lang.String

Indicates when parameter updates are applied. Can be immediate or pending-reboot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#apply_method LightsailDatabase#apply_method}

---

##### `applyType`<sup>Optional</sup> <a name="applyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType"></a>

```java
public java.lang.String getApplyType();
```

- *Type:* java.lang.String

Specifies the engine-specific parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#apply_type LightsailDatabase#apply_type}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Specifies the valid data type for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#data_type LightsailDatabase#data_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Provides a description of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#description LightsailDatabase#description}

---

##### `isModifiable`<sup>Optional</sup> <a name="isModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable"></a>

```java
public java.lang.Boolean|IResolvable getIsModifiable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value indicating whether the parameter can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#is_modifiable LightsailDatabase#is_modifiable}

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Specifies the name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#parameter_name LightsailDatabase#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

Specifies the value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#parameter_value LightsailDatabase#parameter_value}

---

### LightsailDatabaseTags <a name="LightsailDatabaseTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseTags;

LightsailDatabaseTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#key LightsailDatabase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_database#value LightsailDatabase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDatabaseRelationalDatabaseParametersList <a name="LightsailDatabaseRelationalDatabaseParametersList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseRelationalDatabaseParametersList;

new LightsailDatabaseRelationalDatabaseParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get"></a>

```java
public LightsailDatabaseRelationalDatabaseParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseRelationalDatabaseParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>>

---


### LightsailDatabaseRelationalDatabaseParametersOutputReference <a name="LightsailDatabaseRelationalDatabaseParametersOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseRelationalDatabaseParametersOutputReference;

new LightsailDatabaseRelationalDatabaseParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod">resetApplyMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType">resetApplyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable">resetIsModifiable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetApplyMethod` <a name="resetApplyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod"></a>

```java
public void resetApplyMethod()
```

##### `resetApplyType` <a name="resetApplyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType"></a>

```java
public void resetApplyType()
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsModifiable` <a name="resetIsModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable"></a>

```java
public void resetIsModifiable()
```

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName"></a>

```java
public void resetParameterName()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput">applyMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput">applyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput">isModifiableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues">allowedValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod">applyMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType">applyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable">isModifiable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput"></a>

```java
public java.lang.String getAllowedValuesInput();
```

- *Type:* java.lang.String

---

##### `applyMethodInput`<sup>Optional</sup> <a name="applyMethodInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput"></a>

```java
public java.lang.String getApplyMethodInput();
```

- *Type:* java.lang.String

---

##### `applyTypeInput`<sup>Optional</sup> <a name="applyTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput"></a>

```java
public java.lang.String getApplyTypeInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `isModifiableInput`<sup>Optional</sup> <a name="isModifiableInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput"></a>

```java
public java.lang.Boolean|IResolvable getIsModifiableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues"></a>

```java
public java.lang.String getAllowedValues();
```

- *Type:* java.lang.String

---

##### `applyMethod`<sup>Required</sup> <a name="applyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod"></a>

```java
public java.lang.String getApplyMethod();
```

- *Type:* java.lang.String

---

##### `applyType`<sup>Required</sup> <a name="applyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType"></a>

```java
public java.lang.String getApplyType();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isModifiable`<sup>Required</sup> <a name="isModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable"></a>

```java
public java.lang.Boolean|IResolvable getIsModifiable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailDatabaseRelationalDatabaseParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>

---


### LightsailDatabaseTagsList <a name="LightsailDatabaseTagsList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseTagsList;

new LightsailDatabaseTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get"></a>

```java
public LightsailDatabaseTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailDatabaseTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>>

---


### LightsailDatabaseTagsOutputReference <a name="LightsailDatabaseTagsOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_database.LightsailDatabaseTagsOutputReference;

new LightsailDatabaseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailDatabaseTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>

---



