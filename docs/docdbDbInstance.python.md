# `docdbDbInstance` Submodule <a name="`docdbDbInstance` Submodule" id="@cdktn/provider-awscc.docdbDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbDbInstance <a name="DocdbDbInstance" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance awscc_docdb_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_cluster_identifier: str,
  db_instance_class: str,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  ca_certificate_identifier: str = None,
  certificate_rotation_restart: bool | IResolvable = None,
  db_instance_identifier: str = None,
  enable_performance_insights: bool | IResolvable = None,
  preferred_maintenance_window: str = None,
  tags: IResolvable | typing.List[DocdbDbInstanceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}.

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}.

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}.

---

##### `certificate_rotation_restart`<sup>Optional</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.certificateRotationRestart"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}.

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}.

---

##### `enable_performance_insights`<sup>Optional</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.enablePerformanceInsights"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCaCertificateIdentifier">reset_ca_certificate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCertificateRotationRestart">reset_certificate_rotation_restart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetDbInstanceIdentifier">reset_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetEnablePerformanceInsights">reset_enable_performance_insights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DocdbDbInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]

---

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_ca_certificate_identifier` <a name="reset_ca_certificate_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCaCertificateIdentifier"></a>

```python
def reset_ca_certificate_identifier() -> None
```

##### `reset_certificate_rotation_restart` <a name="reset_certificate_rotation_restart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCertificateRotationRestart"></a>

```python
def reset_certificate_rotation_restart() -> None
```

##### `reset_db_instance_identifier` <a name="reset_db_instance_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetDbInstanceIdentifier"></a>

```python
def reset_db_instance_identifier() -> None
```

##### `reset_enable_performance_insights` <a name="reset_enable_performance_insights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetEnablePerformanceInsights"></a>

```python
def reset_enable_performance_insights() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DocdbDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DocdbDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DocdbDbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DocdbDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DocdbDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList">DocdbDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifierInput">ca_certificate_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestartInput">certificate_rotation_restart_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClassInput">db_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsightsInput">enable_performance_insights_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tags"></a>

```python
tags: DocdbDbInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList">DocdbDbInstanceTagsList</a>

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `ca_certificate_identifier_input`<sup>Optional</sup> <a name="ca_certificate_identifier_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifierInput"></a>

```python
ca_certificate_identifier_input: str
```

- *Type:* str

---

##### `certificate_rotation_restart_input`<sup>Optional</sup> <a name="certificate_rotation_restart_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestartInput"></a>

```python
certificate_rotation_restart_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `db_instance_class_input`<sup>Optional</sup> <a name="db_instance_class_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClassInput"></a>

```python
db_instance_class_input: str
```

- *Type:* str

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `enable_performance_insights_input`<sup>Optional</sup> <a name="enable_performance_insights_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsightsInput"></a>

```python
enable_performance_insights_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DocdbDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `ca_certificate_identifier`<sup>Required</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

---

##### `certificate_rotation_restart`<sup>Required</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestart"></a>

```python
certificate_rotation_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `enable_performance_insights`<sup>Required</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsights"></a>

```python
enable_performance_insights: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbDbInstanceConfig <a name="DocdbDbInstanceConfig" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_cluster_identifier: str,
  db_instance_class: str,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  ca_certificate_identifier: str = None,
  certificate_rotation_restart: bool | IResolvable = None,
  db_instance_identifier: str = None,
  enable_performance_insights: bool | IResolvable = None,
  preferred_maintenance_window: str = None,
  tags: IResolvable | typing.List[DocdbDbInstanceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}.

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}.

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}.

---

##### `certificate_rotation_restart`<sup>Optional</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.certificateRotationRestart"></a>

```python
certificate_rotation_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}.

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}.

---

##### `enable_performance_insights`<sup>Optional</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.enablePerformanceInsights"></a>

```python
enable_performance_insights: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DocdbDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}.

---

### DocdbDbInstanceTags <a name="DocdbDbInstanceTags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#key DocdbDbInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#value DocdbDbInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#key DocdbDbInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#value DocdbDbInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbDbInstanceTagsList <a name="DocdbDbInstanceTagsList" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DocdbDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DocdbDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>]

---


### DocdbDbInstanceTagsOutputReference <a name="DocdbDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import docdb_db_instance

docdbDbInstance.DocdbDbInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DocdbDbInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>

---



