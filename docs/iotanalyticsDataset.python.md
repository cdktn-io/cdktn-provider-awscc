# `iotanalyticsDataset` Submodule <a name="`iotanalyticsDataset` Submodule" id="@cdktn/provider-awscc.iotanalyticsDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsDataset <a name="IotanalyticsDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset awscc_iotanalytics_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDataset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[IotanalyticsDatasetActions],
  content_delivery_rules: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules] = None,
  dataset_name: str = None,
  late_data_rules: IResolvable | typing.List[IotanalyticsDatasetLateDataRules] = None,
  retention_period: IotanalyticsDatasetRetentionPeriod = None,
  tags: IResolvable | typing.List[IotanalyticsDatasetTags] = None,
  triggers: IResolvable | typing.List[IotanalyticsDatasetTriggers] = None,
  versioning_configuration: IotanalyticsDatasetVersioningConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.contentDeliveryRules">content_delivery_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.datasetName">dataset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lateDataRules">late_data_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.triggers">triggers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}.

---

##### `content_delivery_rules`<sup>Optional</sup> <a name="content_delivery_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.contentDeliveryRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}.

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.datasetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `late_data_rules`<sup>Optional</sup> <a name="late_data_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.lateDataRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.retentionPeriod"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.triggers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}.

---

##### `versioning_configuration`<sup>Optional</sup> <a name="versioning_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.versioningConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules">put_content_delivery_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules">put_late_data_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod">put_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers">put_triggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration">put_versioning_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules">reset_content_delivery_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName">reset_dataset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules">reset_late_data_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers">reset_triggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration">reset_versioning_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[IotanalyticsDatasetActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]

---

##### `put_content_delivery_rules` <a name="put_content_delivery_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules"></a>

```python
def put_content_delivery_rules(
  value: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]

---

##### `put_late_data_rules` <a name="put_late_data_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules"></a>

```python
def put_late_data_rules(
  value: IResolvable | typing.List[IotanalyticsDatasetLateDataRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]

---

##### `put_retention_period` <a name="put_retention_period" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod"></a>

```python
def put_retention_period(
  number_of_days: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
) -> None
```

###### `number_of_days`<sup>Optional</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod.parameter.numberOfDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}.

---

###### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod.parameter.unlimited"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotanalyticsDatasetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]

---

##### `put_triggers` <a name="put_triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers"></a>

```python
def put_triggers(
  value: IResolvable | typing.List[IotanalyticsDatasetTriggers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]

---

##### `put_versioning_configuration` <a name="put_versioning_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration"></a>

```python
def put_versioning_configuration(
  max_versions: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
) -> None
```

###### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration.parameter.maxVersions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}.

---

###### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration.parameter.unlimited"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

##### `reset_content_delivery_rules` <a name="reset_content_delivery_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules"></a>

```python
def reset_content_delivery_rules() -> None
```

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```

##### `reset_late_data_rules` <a name="reset_late_data_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules"></a>

```python
def reset_late_data_rules() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers"></a>

```python
def reset_triggers() -> None
```

##### `reset_versioning_configuration` <a name="reset_versioning_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration"></a>

```python
def reset_versioning_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotanalyticsDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotanalyticsDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules">content_delivery_rules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules">late_data_rules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput">content_delivery_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput">late_data_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput">retention_period_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput">triggers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput">versioning_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions"></a>

```python
actions: IotanalyticsDatasetActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a>

---

##### `content_delivery_rules`<sup>Required</sup> <a name="content_delivery_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules"></a>

```python
content_delivery_rules: IotanalyticsDatasetContentDeliveryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a>

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `late_data_rules`<sup>Required</sup> <a name="late_data_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules"></a>

```python
late_data_rules: IotanalyticsDatasetLateDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a>

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod"></a>

```python
retention_period: IotanalyticsDatasetRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags"></a>

```python
tags: IotanalyticsDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers"></a>

```python
triggers: IotanalyticsDatasetTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a>

---

##### `versioning_configuration`<sup>Required</sup> <a name="versioning_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration"></a>

```python
versioning_configuration: IotanalyticsDatasetVersioningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[IotanalyticsDatasetActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]

---

##### `content_delivery_rules_input`<sup>Optional</sup> <a name="content_delivery_rules_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput"></a>

```python
content_delivery_rules_input: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `late_data_rules_input`<sup>Optional</sup> <a name="late_data_rules_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput"></a>

```python
late_data_rules_input: IResolvable | typing.List[IotanalyticsDatasetLateDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput"></a>

```python
retention_period_input: IResolvable | IotanalyticsDatasetRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotanalyticsDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput"></a>

```python
triggers_input: IResolvable | typing.List[IotanalyticsDatasetTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]

---

##### `versioning_configuration_input`<sup>Optional</sup> <a name="versioning_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput"></a>

```python
versioning_configuration_input: IResolvable | IotanalyticsDatasetVersioningConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsDatasetActions <a name="IotanalyticsDatasetActions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActions(
  action_name: str,
  container_action: IotanalyticsDatasetActionsContainerAction = None,
  query_action: IotanalyticsDatasetActionsQueryAction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName">action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction">container_action</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction">query_action</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}. |

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}.

---

##### `container_action`<sup>Optional</sup> <a name="container_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction"></a>

```python
container_action: IotanalyticsDatasetActionsContainerAction
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}.

---

##### `query_action`<sup>Optional</sup> <a name="query_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction"></a>

```python
query_action: IotanalyticsDatasetActionsQueryAction
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}.

---

### IotanalyticsDatasetActionsContainerAction <a name="IotanalyticsDatasetActionsContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction(
  execution_role_arn: str = None,
  image: str = None,
  resource_configuration: IotanalyticsDatasetActionsContainerActionResourceConfiguration = None,
  variables: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables">variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}. |

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}.

---

##### `resource_configuration`<sup>Optional</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration"></a>

```python
resource_configuration: IotanalyticsDatasetActionsContainerActionResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables"></a>

```python
variables: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}.

---

### IotanalyticsDatasetActionsContainerActionResourceConfiguration <a name="IotanalyticsDatasetActionsContainerActionResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration(
  compute_type: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType">compute_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}. |

---

##### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}.

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}.

---

### IotanalyticsDatasetActionsContainerActionVariables <a name="IotanalyticsDatasetActionsContainerActionVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables(
  dataset_content_version_value: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue = None,
  double_value: typing.Union[int, float] = None,
  output_file_uri_value: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue = None,
  string_value: str = None,
  variable_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue">dataset_content_version_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue">output_file_uri_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName">variable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}. |

---

##### `dataset_content_version_value`<sup>Optional</sup> <a name="dataset_content_version_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue"></a>

```python
dataset_content_version_value: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}.

---

##### `output_file_uri_value`<sup>Optional</sup> <a name="output_file_uri_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue"></a>

```python
output_file_uri_value: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}.

---

##### `variable_name`<sup>Optional</sup> <a name="variable_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue(
  dataset_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName">dataset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue(
  file_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}. |

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}.

---

### IotanalyticsDatasetActionsQueryAction <a name="IotanalyticsDatasetActionsQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction(
  filters: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters] = None,
  sql_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery">sql_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters"></a>

```python
filters: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}.

---

##### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}.

---

### IotanalyticsDatasetActionsQueryActionFilters <a name="IotanalyticsDatasetActionsQueryActionFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters(
  delta_time: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime">delta_time</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}. |

---

##### `delta_time`<sup>Optional</sup> <a name="delta_time" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime"></a>

```python
delta_time: IotanalyticsDatasetActionsQueryActionFiltersDeltaTime
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}.

---

### IotanalyticsDatasetActionsQueryActionFiltersDeltaTime <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime(
  offset_seconds: typing.Union[int, float] = None,
  time_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression">time_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}. |

---

##### `offset_seconds`<sup>Optional</sup> <a name="offset_seconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}.

---

##### `time_expression`<sup>Optional</sup> <a name="time_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression"></a>

```python
time_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}.

---

### IotanalyticsDatasetConfig <a name="IotanalyticsDatasetConfig" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[IotanalyticsDatasetActions],
  content_delivery_rules: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules] = None,
  dataset_name: str = None,
  late_data_rules: IResolvable | typing.List[IotanalyticsDatasetLateDataRules] = None,
  retention_period: IotanalyticsDatasetRetentionPeriod = None,
  tags: IResolvable | typing.List[IotanalyticsDatasetTags] = None,
  triggers: IResolvable | typing.List[IotanalyticsDatasetTriggers] = None,
  versioning_configuration: IotanalyticsDatasetVersioningConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules">content_delivery_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName">dataset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules">late_data_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers">triggers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions"></a>

```python
actions: IResolvable | typing.List[IotanalyticsDatasetActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}.

---

##### `content_delivery_rules`<sup>Optional</sup> <a name="content_delivery_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules"></a>

```python
content_delivery_rules: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}.

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `late_data_rules`<sup>Optional</sup> <a name="late_data_rules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules"></a>

```python
late_data_rules: IResolvable | typing.List[IotanalyticsDatasetLateDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod"></a>

```python
retention_period: IotanalyticsDatasetRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotanalyticsDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers"></a>

```python
triggers: IResolvable | typing.List[IotanalyticsDatasetTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}.

---

##### `versioning_configuration`<sup>Optional</sup> <a name="versioning_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration"></a>

```python
versioning_configuration: IotanalyticsDatasetVersioningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}.

---

### IotanalyticsDatasetContentDeliveryRules <a name="IotanalyticsDatasetContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules(
  destination: IotanalyticsDatasetContentDeliveryRulesDestination = None,
  entry_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName">entry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination"></a>

```python
destination: IotanalyticsDatasetContentDeliveryRulesDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}.

---

##### `entry_name`<sup>Optional</sup> <a name="entry_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName"></a>

```python
entry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}.

---

### IotanalyticsDatasetContentDeliveryRulesDestination <a name="IotanalyticsDatasetContentDeliveryRulesDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination(
  iot_events_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration = None,
  s3_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration">iot_events_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}. |

---

##### `iot_events_destination_configuration`<sup>Optional</sup> <a name="iot_events_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration"></a>

```python
iot_events_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}.

---

##### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration(
  input_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName">input_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `input_name`<sup>Optional</sup> <a name="input_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration(
  bucket: str = None,
  glue_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration = None,
  key: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration">glue_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}.

---

##### `glue_configuration`<sup>Optional</sup> <a name="glue_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration"></a>

```python
glue_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration(
  database_name: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}.

---

### IotanalyticsDatasetLateDataRules <a name="IotanalyticsDatasetLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRules(
  rule_configuration: IotanalyticsDatasetLateDataRulesRuleConfiguration = None,
  rule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration">rule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}. |

---

##### `rule_configuration`<sup>Optional</sup> <a name="rule_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration"></a>

```python
rule_configuration: IotanalyticsDatasetLateDataRulesRuleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}.

---

### IotanalyticsDatasetLateDataRulesRuleConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration(
  delta_time_session_window_configuration: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration">delta_time_session_window_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}. |

---

##### `delta_time_session_window_configuration`<sup>Optional</sup> <a name="delta_time_session_window_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration"></a>

```python
delta_time_session_window_configuration: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}.

---

### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration(
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}. |

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}.

---

### IotanalyticsDatasetRetentionPeriod <a name="IotanalyticsDatasetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod(
  number_of_days: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays">number_of_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `number_of_days`<sup>Optional</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays"></a>

```python
number_of_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

### IotanalyticsDatasetTags <a name="IotanalyticsDatasetTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}.

---

### IotanalyticsDatasetTriggers <a name="IotanalyticsDatasetTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggers(
  schedule: IotanalyticsDatasetTriggersSchedule = None,
  triggering_dataset: IotanalyticsDatasetTriggersTriggeringDataset = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset">triggering_dataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule"></a>

```python
schedule: IotanalyticsDatasetTriggersSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}.

---

##### `triggering_dataset`<sup>Optional</sup> <a name="triggering_dataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset"></a>

```python
triggering_dataset: IotanalyticsDatasetTriggersTriggeringDataset
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}.

---

### IotanalyticsDatasetTriggersSchedule <a name="IotanalyticsDatasetTriggersSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule(
  schedule_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}. |

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}.

---

### IotanalyticsDatasetTriggersTriggeringDataset <a name="IotanalyticsDatasetTriggersTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset(
  dataset_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName">dataset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetVersioningConfiguration <a name="IotanalyticsDatasetVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration(
  max_versions: typing.Union[int, float] = None,
  unlimited: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsDatasetActionsContainerActionOutputReference <a name="IotanalyticsDatasetActionsContainerActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration">put_resource_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables">put_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration">reset_resource_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_configuration` <a name="put_resource_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration"></a>

```python
def put_resource_configuration(
  compute_type: str = None,
  volume_size_in_gb: typing.Union[int, float] = None
) -> None
```

###### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration.parameter.computeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}.

---

###### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}.

---

##### `put_variables` <a name="put_variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables"></a>

```python
def put_variables(
  value: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]

---

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_resource_configuration` <a name="reset_resource_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration"></a>

```python
def reset_resource_configuration() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput">resource_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput">variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration`<sup>Required</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration"></a>

```python
resource_configuration: IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables"></a>

```python
variables: IotanalyticsDatasetActionsContainerActionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a>

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `resource_configuration_input`<sup>Optional</sup> <a name="resource_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput"></a>

```python
resource_configuration_input: IResolvable | IotanalyticsDatasetActionsContainerActionResourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput"></a>

```python
variables_input: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsContainerAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---


### IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference <a name="IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType">reset_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_type` <a name="reset_compute_type" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType"></a>

```python
def reset_compute_type() -> None
```

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput">compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_type_input`<sup>Optional</sup> <a name="compute_type_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput"></a>

```python
compute_type_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsContainerActionResourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName">reset_dataset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesList <a name="IotanalyticsDatasetActionsContainerActionVariablesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetActionsContainerActionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_name` <a name="reset_file_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue">put_dataset_content_version_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue">put_output_file_uri_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue">reset_dataset_content_version_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue">reset_output_file_uri_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName">reset_variable_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_content_version_value` <a name="put_dataset_content_version_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue"></a>

```python
def put_dataset_content_version_value(
  dataset_name: str = None
) -> None
```

###### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue.parameter.datasetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `put_output_file_uri_value` <a name="put_output_file_uri_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue"></a>

```python
def put_output_file_uri_value(
  file_name: str = None
) -> None
```

###### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue.parameter.fileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}.

---

##### `reset_dataset_content_version_value` <a name="reset_dataset_content_version_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue"></a>

```python
def reset_dataset_content_version_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_output_file_uri_value` <a name="reset_output_file_uri_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue"></a>

```python
def reset_output_file_uri_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```

##### `reset_variable_name` <a name="reset_variable_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName"></a>

```python
def reset_variable_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue">dataset_content_version_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue">output_file_uri_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput">dataset_content_version_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput">output_file_uri_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_content_version_value`<sup>Required</sup> <a name="dataset_content_version_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue"></a>

```python
dataset_content_version_value: IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a>

---

##### `output_file_uri_value`<sup>Required</sup> <a name="output_file_uri_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue"></a>

```python
output_file_uri_value: IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a>

---

##### `dataset_content_version_value_input`<sup>Optional</sup> <a name="dataset_content_version_value_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput"></a>

```python
dataset_content_version_value_input: IResolvable | IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_file_uri_value_input`<sup>Optional</sup> <a name="output_file_uri_value_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput"></a>

```python
output_file_uri_value_input: IResolvable | IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsContainerActionVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>

---


### IotanalyticsDatasetActionsList <a name="IotanalyticsDatasetActionsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>]

---


### IotanalyticsDatasetActionsOutputReference <a name="IotanalyticsDatasetActionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction">put_container_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction">put_query_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction">reset_container_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction">reset_query_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_action` <a name="put_container_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction"></a>

```python
def put_container_action(
  execution_role_arn: str = None,
  image: str = None,
  resource_configuration: IotanalyticsDatasetActionsContainerActionResourceConfiguration = None,
  variables: IResolvable | typing.List[IotanalyticsDatasetActionsContainerActionVariables] = None
) -> None
```

###### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}.

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}.

---

###### `resource_configuration`<sup>Optional</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.resourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}.

---

###### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.variables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables">IotanalyticsDatasetActionsContainerActionVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}.

---

##### `put_query_action` <a name="put_query_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction"></a>

```python
def put_query_action(
  filters: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters] = None,
  sql_query: str = None
) -> None
```

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}.

---

###### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction.parameter.sqlQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}.

---

##### `reset_container_action` <a name="reset_container_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction"></a>

```python
def reset_container_action() -> None
```

##### `reset_query_action` <a name="reset_query_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction"></a>

```python
def reset_query_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction">container_action</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction">query_action</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput">container_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput">query_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_action`<sup>Required</sup> <a name="container_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction"></a>

```python
container_action: IotanalyticsDatasetActionsContainerActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a>

---

##### `query_action`<sup>Required</sup> <a name="query_action" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction"></a>

```python
query_action: IotanalyticsDatasetActionsQueryActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `container_action_input`<sup>Optional</sup> <a name="container_action_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput"></a>

```python
container_action_input: IResolvable | IotanalyticsDatasetActionsContainerAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---

##### `query_action_input`<sup>Optional</sup> <a name="query_action_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput"></a>

```python
query_action_input: IResolvable | IotanalyticsDatasetActionsQueryAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions">IotanalyticsDatasetActions</a>

---


### IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds">reset_offset_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression">reset_time_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_offset_seconds` <a name="reset_offset_seconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds"></a>

```python
def reset_offset_seconds() -> None
```

##### `reset_time_expression` <a name="reset_time_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression"></a>

```python
def reset_time_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput">offset_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput">time_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression">time_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offset_seconds_input`<sup>Optional</sup> <a name="offset_seconds_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput"></a>

```python
offset_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_expression_input`<sup>Optional</sup> <a name="time_expression_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput"></a>

```python
time_expression_input: str
```

- *Type:* str

---

##### `offset_seconds`<sup>Required</sup> <a name="offset_seconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_expression`<sup>Required</sup> <a name="time_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression"></a>

```python
time_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsQueryActionFiltersDeltaTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---


### IotanalyticsDatasetActionsQueryActionFiltersList <a name="IotanalyticsDatasetActionsQueryActionFiltersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetActionsQueryActionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]

---


### IotanalyticsDatasetActionsQueryActionFiltersOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime">put_delta_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime">reset_delta_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_time` <a name="put_delta_time" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime"></a>

```python
def put_delta_time(
  offset_seconds: typing.Union[int, float] = None,
  time_expression: str = None
) -> None
```

###### `offset_seconds`<sup>Optional</sup> <a name="offset_seconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime.parameter.offsetSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}.

---

###### `time_expression`<sup>Optional</sup> <a name="time_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime.parameter.timeExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}.

---

##### `reset_delta_time` <a name="reset_delta_time" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime"></a>

```python
def reset_delta_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime">delta_time</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput">delta_time_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_time`<sup>Required</sup> <a name="delta_time" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime"></a>

```python
delta_time: IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a>

---

##### `delta_time_input`<sup>Optional</sup> <a name="delta_time_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput"></a>

```python
delta_time_input: IResolvable | IotanalyticsDatasetActionsQueryActionFiltersDeltaTime
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsQueryActionFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>

---


### IotanalyticsDatasetActionsQueryActionOutputReference <a name="IotanalyticsDatasetActionsQueryActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery">reset_sql_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]

---

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_sql_query` <a name="reset_sql_query" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery"></a>

```python
def reset_sql_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput">sql_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery">sql_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters"></a>

```python
filters: IotanalyticsDatasetActionsQueryActionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[IotanalyticsDatasetActionsQueryActionFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters">IotanalyticsDatasetActionsQueryActionFilters</a>]

---

##### `sql_query_input`<sup>Optional</sup> <a name="sql_query_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput"></a>

```python
sql_query_input: str
```

- *Type:* str

---

##### `sql_query`<sup>Required</sup> <a name="sql_query" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetActionsQueryAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName">reset_input_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_name` <a name="reset_input_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName"></a>

```python
def reset_input_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput">input_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName">input_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_name_input`<sup>Optional</sup> <a name="input_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput"></a>

```python
input_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `input_name`<sup>Required</sup> <a name="input_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration">put_iot_events_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration">put_s3_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration">reset_iot_events_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration">reset_s3_destination_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iot_events_destination_configuration` <a name="put_iot_events_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration"></a>

```python
def put_iot_events_destination_configuration(
  input_name: str = None,
  role_arn: str = None
) -> None
```

###### `input_name`<sup>Optional</sup> <a name="input_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration.parameter.inputName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

##### `put_s3_destination_configuration` <a name="put_s3_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration"></a>

```python
def put_s3_destination_configuration(
  bucket: str = None,
  glue_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration = None,
  key: str = None,
  role_arn: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}.

---

###### `glue_configuration`<sup>Optional</sup> <a name="glue_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.glueConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

##### `reset_iot_events_destination_configuration` <a name="reset_iot_events_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration"></a>

```python
def reset_iot_events_destination_configuration() -> None
```

##### `reset_s3_destination_configuration` <a name="reset_s3_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration"></a>

```python
def reset_s3_destination_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration">iot_events_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput">iot_events_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput">s3_destination_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iot_events_destination_configuration`<sup>Required</sup> <a name="iot_events_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration"></a>

```python
iot_events_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a>

---

##### `s3_destination_configuration`<sup>Required</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a>

---

##### `iot_events_destination_configuration_input`<sup>Optional</sup> <a name="iot_events_destination_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput"></a>

```python
iot_events_destination_configuration_input: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---

##### `s3_destination_configuration_input`<sup>Optional</sup> <a name="s3_destination_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput"></a>

```python
s3_destination_configuration_input: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration">put_glue_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration">reset_glue_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_configuration` <a name="put_glue_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration"></a>

```python
def put_glue_configuration(
  database_name: str = None,
  table_name: str = None
) -> None
```

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}.

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}.

---

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_glue_configuration` <a name="reset_glue_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration"></a>

```python
def reset_glue_configuration() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration">glue_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput">glue_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_configuration`<sup>Required</sup> <a name="glue_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration"></a>

```python
glue_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `glue_configuration_input`<sup>Optional</sup> <a name="glue_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput"></a>

```python
glue_configuration_input: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---


### IotanalyticsDatasetContentDeliveryRulesList <a name="IotanalyticsDatasetContentDeliveryRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetContentDeliveryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetContentDeliveryRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>]

---


### IotanalyticsDatasetContentDeliveryRulesOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName">reset_entry_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination"></a>

```python
def put_destination(
  iot_events_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration = None,
  s3_destination_configuration: IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration = None
) -> None
```

###### `iot_events_destination_configuration`<sup>Optional</sup> <a name="iot_events_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination.parameter.iotEventsDestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}.

---

###### `s3_destination_configuration`<sup>Optional</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination.parameter.s3DestinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}.

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_entry_name` <a name="reset_entry_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName"></a>

```python
def reset_entry_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput">entry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName">entry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination"></a>

```python
destination: IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | IotanalyticsDatasetContentDeliveryRulesDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---

##### `entry_name_input`<sup>Optional</sup> <a name="entry_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput"></a>

```python
entry_name_input: str
```

- *Type:* str

---

##### `entry_name`<sup>Required</sup> <a name="entry_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName"></a>

```python
entry_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetContentDeliveryRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules">IotanalyticsDatasetContentDeliveryRules</a>

---


### IotanalyticsDatasetLateDataRulesList <a name="IotanalyticsDatasetLateDataRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetLateDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetLateDataRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>]

---


### IotanalyticsDatasetLateDataRulesOutputReference <a name="IotanalyticsDatasetLateDataRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration">put_rule_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration">reset_rule_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_configuration` <a name="put_rule_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration"></a>

```python
def put_rule_configuration(
  delta_time_session_window_configuration: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration = None
) -> None
```

###### `delta_time_session_window_configuration`<sup>Optional</sup> <a name="delta_time_session_window_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration.parameter.deltaTimeSessionWindowConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}.

---

##### `reset_rule_configuration` <a name="reset_rule_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration"></a>

```python
def reset_rule_configuration() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration">rule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput">rule_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_configuration`<sup>Required</sup> <a name="rule_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration"></a>

```python
rule_configuration: IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a>

---

##### `rule_configuration_input`<sup>Optional</sup> <a name="rule_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput"></a>

```python
rule_configuration_input: IResolvable | IotanalyticsDatasetLateDataRulesRuleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetLateDataRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules">IotanalyticsDatasetLateDataRules</a>

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration">put_delta_time_session_window_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration">reset_delta_time_session_window_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_time_session_window_configuration` <a name="put_delta_time_session_window_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration"></a>

```python
def put_delta_time_session_window_configuration(
  timeout_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration.parameter.timeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}.

---

##### `reset_delta_time_session_window_configuration` <a name="reset_delta_time_session_window_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration"></a>

```python
def reset_delta_time_session_window_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration">delta_time_session_window_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput">delta_time_session_window_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_time_session_window_configuration`<sup>Required</sup> <a name="delta_time_session_window_configuration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration"></a>

```python
delta_time_session_window_configuration: IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a>

---

##### `delta_time_session_window_configuration_input`<sup>Optional</sup> <a name="delta_time_session_window_configuration_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput"></a>

```python
delta_time_session_window_configuration_input: IResolvable | IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetLateDataRulesRuleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---


### IotanalyticsDatasetRetentionPeriodOutputReference <a name="IotanalyticsDatasetRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays">reset_number_of_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited">reset_unlimited</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_days` <a name="reset_number_of_days" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays"></a>

```python
def reset_number_of_days() -> None
```

##### `reset_unlimited` <a name="reset_unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited"></a>

```python
def reset_unlimited() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput">number_of_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput">unlimited_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays">number_of_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_days_input`<sup>Optional</sup> <a name="number_of_days_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```python
number_of_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited_input`<sup>Optional</sup> <a name="unlimited_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput"></a>

```python
unlimited_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_of_days`<sup>Required</sup> <a name="number_of_days" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays"></a>

```python
number_of_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetRetentionPeriod
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---


### IotanalyticsDatasetTagsList <a name="IotanalyticsDatasetTagsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>]

---


### IotanalyticsDatasetTagsOutputReference <a name="IotanalyticsDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags">IotanalyticsDatasetTags</a>

---


### IotanalyticsDatasetTriggersList <a name="IotanalyticsDatasetTriggersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsDatasetTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsDatasetTriggers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>]

---


### IotanalyticsDatasetTriggersOutputReference <a name="IotanalyticsDatasetTriggersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset">put_triggering_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset">reset_triggering_dataset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule"></a>

```python
def put_schedule(
  schedule_expression: str = None
) -> None
```

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}.

---

##### `put_triggering_dataset` <a name="put_triggering_dataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset"></a>

```python
def put_triggering_dataset(
  dataset_name: str = None
) -> None
```

###### `dataset_name`<sup>Optional</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset.parameter.datasetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_triggering_dataset` <a name="reset_triggering_dataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset"></a>

```python
def reset_triggering_dataset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset">triggering_dataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput">triggering_dataset_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule"></a>

```python
schedule: IotanalyticsDatasetTriggersScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a>

---

##### `triggering_dataset`<sup>Required</sup> <a name="triggering_dataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset"></a>

```python
triggering_dataset: IotanalyticsDatasetTriggersTriggeringDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | IotanalyticsDatasetTriggersSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---

##### `triggering_dataset_input`<sup>Optional</sup> <a name="triggering_dataset_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput"></a>

```python
triggering_dataset_input: IResolvable | IotanalyticsDatasetTriggersTriggeringDataset
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetTriggers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers">IotanalyticsDatasetTriggers</a>

---


### IotanalyticsDatasetTriggersScheduleOutputReference <a name="IotanalyticsDatasetTriggersScheduleOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetTriggersSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---


### IotanalyticsDatasetTriggersTriggeringDatasetOutputReference <a name="IotanalyticsDatasetTriggersTriggeringDatasetOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName">reset_dataset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_name` <a name="reset_dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName"></a>

```python
def reset_dataset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput">dataset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_name_input`<sup>Optional</sup> <a name="dataset_name_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput"></a>

```python
dataset_name_input: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetTriggersTriggeringDataset
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---


### IotanalyticsDatasetVersioningConfigurationOutputReference <a name="IotanalyticsDatasetVersioningConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_dataset

iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions">reset_max_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited">reset_unlimited</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_versions` <a name="reset_max_versions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions"></a>

```python
def reset_max_versions() -> None
```

##### `reset_unlimited` <a name="reset_unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited"></a>

```python
def reset_unlimited() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput">max_versions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput">unlimited_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_versions_input`<sup>Optional</sup> <a name="max_versions_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput"></a>

```python
max_versions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited_input`<sup>Optional</sup> <a name="unlimited_input" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput"></a>

```python
unlimited_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_versions`<sup>Required</sup> <a name="max_versions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsDatasetVersioningConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---



