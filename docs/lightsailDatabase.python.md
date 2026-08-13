# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktn/provider-awscc.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database awscc_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  master_database_name: str,
  master_username: str,
  relational_database_blueprint_id: str,
  relational_database_bundle_id: str,
  relational_database_name: str,
  availability_zone: str = None,
  backup_retention: bool | IResolvable = None,
  ca_certificate_identifier: str = None,
  master_user_password: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  relational_database_parameters: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters] = None,
  rotate_master_user_password: bool | IResolvable = None,
  tags: IResolvable | typing.List[LightsailDatabaseTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName">master_database_name</a></code> | <code>str</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBlueprintId">relational_database_blueprint_id</a></code> | <code>str</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBundleId">relational_database_bundle_id</a></code> | <code>str</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetention">backup_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseParameters">relational_database_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]</code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.rotateMasterUserPassword">rotate_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName"></a>

- *Type:* str

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername"></a>

- *Type:* str

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `relational_database_blueprint_id`<sup>Required</sup> <a name="relational_database_blueprint_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBlueprintId"></a>

- *Type:* str

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `relational_database_bundle_id`<sup>Required</sup> <a name="relational_database_bundle_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseBundleId"></a>

- *Type:* str

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName"></a>

- *Type:* str

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `backup_retention`<sup>Optional</sup> <a name="backup_retention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetention"></a>

- *Type:* bool | cdktn.IResolvable

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* str

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUserPassword"></a>

- *Type:* str

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `relational_database_parameters`<sup>Optional</sup> <a name="relational_database_parameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `rotate_master_user_password`<sup>Optional</sup> <a name="rotate_master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.rotateMasterUserPassword"></a>

- *Type:* bool | cdktn.IResolvable

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters">put_relational_database_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention">reset_backup_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier">reset_ca_certificate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters">reset_relational_database_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword">reset_rotate_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_relational_database_parameters` <a name="put_relational_database_parameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters"></a>

```python
def put_relational_database_parameters(
  value: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailDatabaseTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_retention` <a name="reset_backup_retention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention"></a>

```python
def reset_backup_retention() -> None
```

##### `reset_ca_certificate_identifier` <a name="reset_ca_certificate_identifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier"></a>

```python
def reset_ca_certificate_identifier() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_relational_database_parameters` <a name="reset_relational_database_parameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters"></a>

```python
def reset_relational_database_parameters() -> None
```

##### `reset_rotate_master_user_password` <a name="reset_rotate_master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword"></a>

```python
def reset_rotate_master_user_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabase.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn">database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters">relational_database_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput">backup_retention_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput">ca_certificate_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">master_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput">relational_database_blueprint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput">relational_database_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">relational_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput">relational_database_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput">rotate_master_user_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention">backup_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">master_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId">relational_database_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId">relational_database_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword">rotate_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_arn`<sup>Required</sup> <a name="database_arn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `relational_database_parameters`<sup>Required</sup> <a name="relational_database_parameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters"></a>

```python
relational_database_parameters: LightsailDatabaseRelationalDatabaseParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags"></a>

```python
tags: LightsailDatabaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_retention_input`<sup>Optional</sup> <a name="backup_retention_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput"></a>

```python
backup_retention_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ca_certificate_identifier_input`<sup>Optional</sup> <a name="ca_certificate_identifier_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput"></a>

```python
ca_certificate_identifier_input: str
```

- *Type:* str

---

##### `master_database_name_input`<sup>Optional</sup> <a name="master_database_name_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```python
master_database_name_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `relational_database_blueprint_id_input`<sup>Optional</sup> <a name="relational_database_blueprint_id_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput"></a>

```python
relational_database_blueprint_id_input: str
```

- *Type:* str

---

##### `relational_database_bundle_id_input`<sup>Optional</sup> <a name="relational_database_bundle_id_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput"></a>

```python
relational_database_bundle_id_input: str
```

- *Type:* str

---

##### `relational_database_name_input`<sup>Optional</sup> <a name="relational_database_name_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```python
relational_database_name_input: str
```

- *Type:* str

---

##### `relational_database_parameters_input`<sup>Optional</sup> <a name="relational_database_parameters_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput"></a>

```python
relational_database_parameters_input: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]

---

##### `rotate_master_user_password_input`<sup>Optional</sup> <a name="rotate_master_user_password_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput"></a>

```python
rotate_master_user_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailDatabaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_retention`<sup>Required</sup> <a name="backup_retention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention"></a>

```python
backup_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ca_certificate_identifier`<sup>Required</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```python
master_database_name: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `relational_database_blueprint_id`<sup>Required</sup> <a name="relational_database_blueprint_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId"></a>

```python
relational_database_blueprint_id: str
```

- *Type:* str

---

##### `relational_database_bundle_id`<sup>Required</sup> <a name="relational_database_bundle_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId"></a>

```python
relational_database_bundle_id: str
```

- *Type:* str

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

---

##### `rotate_master_user_password`<sup>Required</sup> <a name="rotate_master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword"></a>

```python
rotate_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  master_database_name: str,
  master_username: str,
  relational_database_blueprint_id: str,
  relational_database_bundle_id: str,
  relational_database_name: str,
  availability_zone: str = None,
  backup_retention: bool | IResolvable = None,
  ca_certificate_identifier: str = None,
  master_user_password: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  relational_database_parameters: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters] = None,
  rotate_master_user_password: bool | IResolvable = None,
  tags: IResolvable | typing.List[LightsailDatabaseTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">master_database_name</a></code> | <code>str</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">master_username</a></code> | <code>str</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId">relational_database_blueprint_id</a></code> | <code>str</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId">relational_database_bundle_id</a></code> | <code>str</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention">backup_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters">relational_database_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]</code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword">rotate_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```python
master_database_name: str
```

- *Type:* str

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `relational_database_blueprint_id`<sup>Required</sup> <a name="relational_database_blueprint_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId"></a>

```python
relational_database_blueprint_id: str
```

- *Type:* str

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `relational_database_bundle_id`<sup>Required</sup> <a name="relational_database_bundle_id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId"></a>

```python
relational_database_bundle_id: str
```

- *Type:* str

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `backup_retention`<sup>Optional</sup> <a name="backup_retention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention"></a>

```python
backup_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `relational_database_parameters`<sup>Optional</sup> <a name="relational_database_parameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters"></a>

```python
relational_database_parameters: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `rotate_master_user_password`<sup>Optional</sup> <a name="rotate_master_user_password" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword"></a>

```python
rotate_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailDatabaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

### LightsailDatabaseRelationalDatabaseParameters <a name="LightsailDatabaseRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters(
  allowed_values: str = None,
  apply_method: str = None,
  apply_type: str = None,
  data_type: str = None,
  description: str = None,
  is_modifiable: bool | IResolvable = None,
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues">allowed_values</a></code> | <code>str</code> | Specifies the valid range of values for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod">apply_method</a></code> | <code>str</code> | Indicates when parameter updates are applied. Can be immediate or pending-reboot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType">apply_type</a></code> | <code>str</code> | Specifies the engine-specific parameter type. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType">data_type</a></code> | <code>str</code> | Specifies the valid data type for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description">description</a></code> | <code>str</code> | Provides a description of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable">is_modifiable</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value indicating whether the parameter can be modified. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Specifies the name of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | Specifies the value of the parameter. |

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues"></a>

```python
allowed_values: str
```

- *Type:* str

Specifies the valid range of values for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#allowed_values LightsailDatabase#allowed_values}

---

##### `apply_method`<sup>Optional</sup> <a name="apply_method" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

Indicates when parameter updates are applied. Can be immediate or pending-reboot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#apply_method LightsailDatabase#apply_method}

---

##### `apply_type`<sup>Optional</sup> <a name="apply_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType"></a>

```python
apply_type: str
```

- *Type:* str

Specifies the engine-specific parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#apply_type LightsailDatabase#apply_type}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Specifies the valid data type for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#data_type LightsailDatabase#data_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Provides a description of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#description LightsailDatabase#description}

---

##### `is_modifiable`<sup>Optional</sup> <a name="is_modifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable"></a>

```python
is_modifiable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value indicating whether the parameter can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#is_modifiable LightsailDatabase#is_modifiable}

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Specifies the name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#parameter_name LightsailDatabase#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Specifies the value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#parameter_value LightsailDatabase#parameter_value}

---

### LightsailDatabaseTags <a name="LightsailDatabaseTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#key LightsailDatabase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_database#value LightsailDatabase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDatabaseRelationalDatabaseParametersList <a name="LightsailDatabaseRelationalDatabaseParametersList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDatabaseRelationalDatabaseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDatabaseRelationalDatabaseParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>]

---


### LightsailDatabaseRelationalDatabaseParametersOutputReference <a name="LightsailDatabaseRelationalDatabaseParametersOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod">reset_apply_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType">reset_apply_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable">reset_is_modifiable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_apply_method` <a name="reset_apply_method" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod"></a>

```python
def reset_apply_method() -> None
```

##### `reset_apply_type` <a name="reset_apply_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType"></a>

```python
def reset_apply_type() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_modifiable` <a name="reset_is_modifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable"></a>

```python
def reset_is_modifiable() -> None
```

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput">apply_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput">apply_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput">is_modifiable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues">allowed_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod">apply_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType">apply_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable">is_modifiable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: str
```

- *Type:* str

---

##### `apply_method_input`<sup>Optional</sup> <a name="apply_method_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput"></a>

```python
apply_method_input: str
```

- *Type:* str

---

##### `apply_type_input`<sup>Optional</sup> <a name="apply_type_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput"></a>

```python
apply_type_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_modifiable_input`<sup>Optional</sup> <a name="is_modifiable_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput"></a>

```python
is_modifiable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues"></a>

```python
allowed_values: str
```

- *Type:* str

---

##### `apply_method`<sup>Required</sup> <a name="apply_method" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

---

##### `apply_type`<sup>Required</sup> <a name="apply_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType"></a>

```python
apply_type: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_modifiable`<sup>Required</sup> <a name="is_modifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable"></a>

```python
is_modifiable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDatabaseRelationalDatabaseParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>

---


### LightsailDatabaseTagsList <a name="LightsailDatabaseTagsList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDatabaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDatabaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>]

---


### LightsailDatabaseTagsOutputReference <a name="LightsailDatabaseTagsOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_database

lightsailDatabase.LightsailDatabaseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDatabaseTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>

---



