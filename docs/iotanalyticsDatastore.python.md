# `iotanalyticsDatastore` Submodule <a name="`iotanalyticsDatastore` Submodule" id="@cdktn/provider-awscc.iotanalyticsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsDatastore <a name="IotanalyticsDatastore" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore awscc_iotanalytics_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_name: str = None,
  datastore_partitions: IotanalyticsDatastoreDatastorePartitions = None,
  datastore_storage: IotanalyticsDatastoreDatastoreStorage = None,
  file_format_configuration: IotanalyticsDatastoreFileFormatConfiguration = None,
  retention_period: IotanalyticsDatastoreRetentionPeriod = None,
  tags: IResolvable | typing.List[IotanalyticsDatastoreTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastoreName">datastore_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastorePartitions">datastore_partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastoreStorage">datastore_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.fileFormatConfiguration">file_format_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}.

---

##### `datastore_partitions`<sup>Optional</sup> <a name="datastore_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastorePartitions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}.

---

##### `datastore_storage`<sup>Optional</sup> <a name="datastore_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.datastoreStorage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}.

---

##### `file_format_configuration`<sup>Optional</sup> <a name="file_format_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.fileFormatConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.retentionPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions">put_datastore_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage">put_datastore_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration">put_file_format_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod">put_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreName">reset_datastore_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastorePartitions">reset_datastore_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreStorage">reset_datastore_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetFileFormatConfiguration">reset_file_format_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_datastore_partitions` <a name="put_datastore_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions"></a>

```python
def put_datastore_partitions(
  partitions: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions] = None
) -> None
```

###### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions.parameter.partitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}.

---

##### `put_datastore_storage` <a name="put_datastore_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage"></a>

```python
def put_datastore_storage(
  customer_managed_s3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 = None,
  iot_site_wise_multi_layer_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage = None,
  service_managed_s3: str = None
) -> None
```

###### `customer_managed_s3`<sup>Optional</sup> <a name="customer_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage.parameter.customerManagedS3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}.

---

###### `iot_site_wise_multi_layer_storage`<sup>Optional</sup> <a name="iot_site_wise_multi_layer_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage.parameter.iotSiteWiseMultiLayerStorage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}.

---

###### `service_managed_s3`<sup>Optional</sup> <a name="service_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage.parameter.serviceManagedS3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}.

---

##### `put_file_format_configuration` <a name="put_file_format_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration"></a>

```python
def put_file_format_configuration(
  json_configuration: str = None,
  parquet_configuration: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration = None
) -> None
```

###### `json_configuration`<sup>Optional</sup> <a name="json_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration.parameter.jsonConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}.

---

###### `parquet_configuration`<sup>Optional</sup> <a name="parquet_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration.parameter.parquetConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}.

---

##### `put_retention_period` <a name="put_retention_period" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod"></a>

```python
def put_retention_period(
  number_of_days: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
) -> None
```

###### `number_of_days`<sup>Optional</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod.parameter.numberOfDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}.

---

###### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod.parameter.unlimited"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotanalyticsDatastoreTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]

---

##### `reset_datastore_name` <a name="reset_datastore_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreName"></a>

```python
def reset_datastore_name() -> None
```

##### `reset_datastore_partitions` <a name="reset_datastore_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastorePartitions"></a>

```python
def reset_datastore_partitions() -> None
```

##### `reset_datastore_storage` <a name="reset_datastore_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreStorage"></a>

```python
def reset_datastore_storage() -> None
```

##### `reset_file_format_configuration` <a name="reset_file_format_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetFileFormatConfiguration"></a>

```python
def reset_file_format_configuration() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotanalyticsDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotanalyticsDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotanalyticsDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotanalyticsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreId">datastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitions">datastore_partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference">IotanalyticsDatastoreDatastorePartitionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorage">datastore_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference">IotanalyticsDatastoreDatastoreStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfiguration">file_format_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference">IotanalyticsDatastoreRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList">IotanalyticsDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreNameInput">datastore_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitionsInput">datastore_partitions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorageInput">datastore_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfigurationInput">file_format_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriodInput">retention_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_id`<sup>Required</sup> <a name="datastore_id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreId"></a>

```python
datastore_id: str
```

- *Type:* str

---

##### `datastore_partitions`<sup>Required</sup> <a name="datastore_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitions"></a>

```python
datastore_partitions: IotanalyticsDatastoreDatastorePartitionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference">IotanalyticsDatastoreDatastorePartitionsOutputReference</a>

---

##### `datastore_storage`<sup>Required</sup> <a name="datastore_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorage"></a>

```python
datastore_storage: IotanalyticsDatastoreDatastoreStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference">IotanalyticsDatastoreDatastoreStorageOutputReference</a>

---

##### `file_format_configuration`<sup>Required</sup> <a name="file_format_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfiguration"></a>

```python
file_format_configuration: IotanalyticsDatastoreFileFormatConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriod"></a>

```python
retention_period: IotanalyticsDatastoreRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference">IotanalyticsDatastoreRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tags"></a>

```python
tags: IotanalyticsDatastoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList">IotanalyticsDatastoreTagsList</a>

---

##### `datastore_name_input`<sup>Optional</sup> <a name="datastore_name_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreNameInput"></a>

```python
datastore_name_input: str
```

- *Type:* str

---

##### `datastore_partitions_input`<sup>Optional</sup> <a name="datastore_partitions_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitionsInput"></a>

```python
datastore_partitions_input: IResolvable | IotanalyticsDatastoreDatastorePartitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

---

##### `datastore_storage_input`<sup>Optional</sup> <a name="datastore_storage_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorageInput"></a>

```python
datastore_storage_input: IResolvable | IotanalyticsDatastoreDatastoreStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

---

##### `file_format_configuration_input`<sup>Optional</sup> <a name="file_format_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfigurationInput"></a>

```python
file_format_configuration_input: IResolvable | IotanalyticsDatastoreFileFormatConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriodInput"></a>

```python
retention_period_input: IResolvable | IotanalyticsDatastoreRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotanalyticsDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsDatastoreConfig <a name="IotanalyticsDatastoreConfig" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  datastore_name: str = None,
  datastore_partitions: IotanalyticsDatastoreDatastorePartitions = None,
  datastore_storage: IotanalyticsDatastoreDatastoreStorage = None,
  file_format_configuration: IotanalyticsDatastoreFileFormatConfiguration = None,
  retention_period: IotanalyticsDatastoreRetentionPeriod = None,
  tags: IResolvable | typing.List[IotanalyticsDatastoreTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreName">datastore_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastorePartitions">datastore_partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreStorage">datastore_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.fileFormatConfiguration">file_format_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}.

---

##### `datastore_partitions`<sup>Optional</sup> <a name="datastore_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastorePartitions"></a>

```python
datastore_partitions: IotanalyticsDatastoreDatastorePartitions
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}.

---

##### `datastore_storage`<sup>Optional</sup> <a name="datastore_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreStorage"></a>

```python
datastore_storage: IotanalyticsDatastoreDatastoreStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}.

---

##### `file_format_configuration`<sup>Optional</sup> <a name="file_format_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.fileFormatConfiguration"></a>

```python
file_format_configuration: IotanalyticsDatastoreFileFormatConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.retentionPeriod"></a>

```python
retention_period: IotanalyticsDatastoreRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotanalyticsDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}.

---

### IotanalyticsDatastoreDatastorePartitions <a name="IotanalyticsDatastoreDatastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions(
  partitions: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.property.partitions">partitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}. |

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.property.partitions"></a>

```python
partitions: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitions <a name="IotanalyticsDatastoreDatastorePartitionsPartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions(
  partition: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition = None,
  timestamp_partition: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.partition">partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#partition IotanalyticsDatastore#partition}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.timestampPartition">timestamp_partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#timestamp_partition IotanalyticsDatastore#timestamp_partition}. |

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.partition"></a>

```python
partition: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#partition IotanalyticsDatastore#partition}.

---

##### `timestamp_partition`<sup>Optional</sup> <a name="timestamp_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.timestampPartition"></a>

```python
timestamp_partition: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#timestamp_partition IotanalyticsDatastore#timestamp_partition}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitionsPartition <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition(
  attribute_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition(
  attribute_name: str = None,
  timestamp_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}.

---

### IotanalyticsDatastoreDatastoreStorage <a name="IotanalyticsDatastoreDatastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage(
  customer_managed_s3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 = None,
  iot_site_wise_multi_layer_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage = None,
  service_managed_s3: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.customerManagedS3">customer_managed_s3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.iotSiteWiseMultiLayerStorage">iot_site_wise_multi_layer_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.serviceManagedS3">service_managed_s3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}. |

---

##### `customer_managed_s3`<sup>Optional</sup> <a name="customer_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.customerManagedS3"></a>

```python
customer_managed_s3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}.

---

##### `iot_site_wise_multi_layer_storage`<sup>Optional</sup> <a name="iot_site_wise_multi_layer_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.iotSiteWiseMultiLayerStorage"></a>

```python
iot_site_wise_multi_layer_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}.

---

##### `service_managed_s3`<sup>Optional</sup> <a name="service_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.serviceManagedS3"></a>

```python
service_managed_s3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}.

---

### IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 <a name="IotanalyticsDatastoreDatastoreStorageCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3(
  bucket: str = None,
  key_prefix: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.keyPrefix">key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}.

---

### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage(
  customer_managed_s3_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.property.customerManagedS3Storage">customer_managed_s3_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}. |

---

##### `customer_managed_s3_storage`<sup>Optional</sup> <a name="customer_managed_s3_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.property.customerManagedS3Storage"></a>

```python
customer_managed_s3_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}.

---

### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage(
  bucket: str = None,
  key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.keyPrefix">key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

### IotanalyticsDatastoreFileFormatConfiguration <a name="IotanalyticsDatastoreFileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration(
  json_configuration: str = None,
  parquet_configuration: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.jsonConfiguration">json_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.parquetConfiguration">parquet_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}. |

---

##### `json_configuration`<sup>Optional</sup> <a name="json_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.jsonConfiguration"></a>

```python
json_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}.

---

##### `parquet_configuration`<sup>Optional</sup> <a name="parquet_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.parquetConfiguration"></a>

```python
parquet_configuration: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration(
  schema_definition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.property.schemaDefinition">schema_definition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}. |

---

##### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.property.schemaDefinition"></a>

```python
schema_definition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition(
  columns: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.property.columns"></a>

```python
columns: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#name IotanalyticsDatastore#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#type IotanalyticsDatastore#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#name IotanalyticsDatastore#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#type IotanalyticsDatastore#type}.

---

### IotanalyticsDatastoreRetentionPeriod <a name="IotanalyticsDatastoreRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod(
  number_of_days: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.numberOfDays">number_of_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}. |

---

##### `number_of_days`<sup>Optional</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.numberOfDays"></a>

```python
number_of_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}.

---

### IotanalyticsDatastoreTags <a name="IotanalyticsDatastoreTags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key IotanalyticsDatastore#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#value IotanalyticsDatastore#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key IotanalyticsDatastore#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#value IotanalyticsDatastore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsDatastoreDatastorePartitionsOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions">put_partitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resetPartitions">reset_partitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partitions` <a name="put_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions"></a>

```python
def put_partitions(
  value: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]

---

##### `reset_partitions` <a name="reset_partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resetPartitions"></a>

```python
def reset_partitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList">IotanalyticsDatastoreDatastorePartitionsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitionsInput">partitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions"></a>

```python
partitions: IotanalyticsDatastoreDatastorePartitionsPartitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList">IotanalyticsDatastoreDatastorePartitionsPartitionsList</a>

---

##### `partitions_input`<sup>Optional</sup> <a name="partitions_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitionsInput"></a>

```python
partitions_input: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastorePartitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsList <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatastoreDatastorePartitionsPartitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>]

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition">put_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition">put_timestamp_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetTimestampPartition">reset_timestamp_partition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partition` <a name="put_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition"></a>

```python
def put_partition(
  attribute_name: str = None
) -> None
```

###### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition.parameter.attributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

##### `put_timestamp_partition` <a name="put_timestamp_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition"></a>

```python
def put_timestamp_partition(
  attribute_name: str = None,
  timestamp_format: str = None
) -> None
```

###### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition.parameter.attributeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

###### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition.parameter.timestampFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}.

---

##### `reset_partition` <a name="reset_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_timestamp_partition` <a name="reset_timestamp_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetTimestampPartition"></a>

```python
def reset_timestamp_partition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition">timestamp_partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partitionInput">partition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartitionInput">timestamp_partition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition"></a>

```python
partition: IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a>

---

##### `timestamp_partition`<sup>Required</sup> <a name="timestamp_partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition"></a>

```python
timestamp_partition: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a>

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partitionInput"></a>

```python
partition_input: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---

##### `timestamp_partition_input`<sup>Optional</sup> <a name="timestamp_partition_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartitionInput"></a>

```python
timestamp_partition_input: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---


### IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference <a name="IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastoreStorageCustomerManagedS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---


### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---


### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage">put_customer_managed_s3_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resetCustomerManagedS3Storage">reset_customer_managed_s3_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_s3_storage` <a name="put_customer_managed_s3_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage"></a>

```python
def put_customer_managed_s3_storage(
  bucket: str = None,
  key_prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage.parameter.keyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

##### `reset_customer_managed_s3_storage` <a name="reset_customer_managed_s3_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resetCustomerManagedS3Storage"></a>

```python
def reset_customer_managed_s3_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage">customer_managed_s3_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3StorageInput">customer_managed_s3_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_s3_storage`<sup>Required</sup> <a name="customer_managed_s3_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage"></a>

```python
customer_managed_s3_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a>

---

##### `customer_managed_s3_storage_input`<sup>Optional</sup> <a name="customer_managed_s3_storage_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3StorageInput"></a>

```python
customer_managed_s3_storage_input: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---


### IotanalyticsDatastoreDatastoreStorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3">put_customer_managed_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage">put_iot_site_wise_multi_layer_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetCustomerManagedS3">reset_customer_managed_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetIotSiteWiseMultiLayerStorage">reset_iot_site_wise_multi_layer_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetServiceManagedS3">reset_service_managed_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_s3` <a name="put_customer_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3"></a>

```python
def put_customer_managed_s3(
  bucket: str = None,
  key_prefix: str = None,
  role_arn: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3.parameter.keyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}.

---

##### `put_iot_site_wise_multi_layer_storage` <a name="put_iot_site_wise_multi_layer_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage"></a>

```python
def put_iot_site_wise_multi_layer_storage(
  customer_managed_s3_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage = None
) -> None
```

###### `customer_managed_s3_storage`<sup>Optional</sup> <a name="customer_managed_s3_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage.parameter.customerManagedS3Storage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}.

---

##### `reset_customer_managed_s3` <a name="reset_customer_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetCustomerManagedS3"></a>

```python
def reset_customer_managed_s3() -> None
```

##### `reset_iot_site_wise_multi_layer_storage` <a name="reset_iot_site_wise_multi_layer_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetIotSiteWiseMultiLayerStorage"></a>

```python
def reset_iot_site_wise_multi_layer_storage() -> None
```

##### `reset_service_managed_s3` <a name="reset_service_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetServiceManagedS3"></a>

```python
def reset_service_managed_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3">customer_managed_s3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage">iot_site_wise_multi_layer_storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3Input">customer_managed_s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorageInput">iot_site_wise_multi_layer_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3Input">service_managed_s3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3">service_managed_s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_s3`<sup>Required</sup> <a name="customer_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3"></a>

```python
customer_managed_s3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a>

---

##### `iot_site_wise_multi_layer_storage`<sup>Required</sup> <a name="iot_site_wise_multi_layer_storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage"></a>

```python
iot_site_wise_multi_layer_storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a>

---

##### `customer_managed_s3_input`<sup>Optional</sup> <a name="customer_managed_s3_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3Input"></a>

```python
customer_managed_s3_input: IResolvable | IotanalyticsDatastoreDatastoreStorageCustomerManagedS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---

##### `iot_site_wise_multi_layer_storage_input`<sup>Optional</sup> <a name="iot_site_wise_multi_layer_storage_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorageInput"></a>

```python
iot_site_wise_multi_layer_storage_input: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---

##### `service_managed_s3_input`<sup>Optional</sup> <a name="service_managed_s3_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3Input"></a>

```python
service_managed_s3_input: str
```

- *Type:* str

---

##### `service_managed_s3`<sup>Required</sup> <a name="service_managed_s3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3"></a>

```python
service_managed_s3: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreDatastoreStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

---


### IotanalyticsDatastoreFileFormatConfigurationOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration">put_parquet_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetJsonConfiguration">reset_json_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetParquetConfiguration">reset_parquet_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parquet_configuration` <a name="put_parquet_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration"></a>

```python
def put_parquet_configuration(
  schema_definition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition = None
) -> None
```

###### `schema_definition`<sup>Optional</sup> <a name="schema_definition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration.parameter.schemaDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}.

---

##### `reset_json_configuration` <a name="reset_json_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetJsonConfiguration"></a>

```python
def reset_json_configuration() -> None
```

##### `reset_parquet_configuration` <a name="reset_parquet_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetParquetConfiguration"></a>

```python
def reset_parquet_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration">parquet_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfigurationInput">json_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfigurationInput">parquet_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration">json_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parquet_configuration`<sup>Required</sup> <a name="parquet_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration"></a>

```python
parquet_configuration: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a>

---

##### `json_configuration_input`<sup>Optional</sup> <a name="json_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfigurationInput"></a>

```python
json_configuration_input: str
```

- *Type:* str

---

##### `parquet_configuration_input`<sup>Optional</sup> <a name="parquet_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfigurationInput"></a>

```python
parquet_configuration_input: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---

##### `json_configuration`<sup>Required</sup> <a name="json_configuration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration"></a>

```python
json_configuration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreFileFormatConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition">put_schema_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resetSchemaDefinition">reset_schema_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_definition` <a name="put_schema_definition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition"></a>

```python
def put_schema_definition(
  columns: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns] = None
) -> None
```

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}.

---

##### `reset_schema_definition` <a name="reset_schema_definition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resetSchemaDefinition"></a>

```python
def reset_schema_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition">schema_definition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinitionInput">schema_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_definition`<sup>Required</sup> <a name="schema_definition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition"></a>

```python
schema_definition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a>

---

##### `schema_definition_input`<sup>Optional</sup> <a name="schema_definition_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinitionInput"></a>

```python
schema_definition_input: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resetColumns">reset_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]

---

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns"></a>

```python
columns: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a>

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---


### IotanalyticsDatastoreRetentionPeriodOutputReference <a name="IotanalyticsDatastoreRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetNumberOfDays">reset_number_of_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetUnlimited">reset_unlimited</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_days` <a name="reset_number_of_days" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetNumberOfDays"></a>

```python
def reset_number_of_days() -> None
```

##### `reset_unlimited` <a name="reset_unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetUnlimited"></a>

```python
def reset_unlimited() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDaysInput">number_of_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimitedInput">unlimited_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays">number_of_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_days_input`<sup>Optional</sup> <a name="number_of_days_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```python
number_of_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited_input`<sup>Optional</sup> <a name="unlimited_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimitedInput"></a>

```python
unlimited_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_days`<sup>Required</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays"></a>

```python
number_of_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

---


### IotanalyticsDatastoreTagsList <a name="IotanalyticsDatastoreTagsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatastoreTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>]

---


### IotanalyticsDatastoreTagsOutputReference <a name="IotanalyticsDatastoreTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_datastore

iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatastoreTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>

---



