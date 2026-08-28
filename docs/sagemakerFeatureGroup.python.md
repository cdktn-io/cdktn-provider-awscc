# `sagemakerFeatureGroup` Submodule <a name="`sagemakerFeatureGroup` Submodule" id="@cdktn/provider-awscc.sagemakerFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFeatureGroup <a name="SagemakerFeatureGroup" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group awscc_sagemaker_feature_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_time_feature_name: str,
  feature_definitions: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions],
  feature_group_name: str,
  record_identifier_feature_name: str,
  description: str = None,
  offline_store_config: SagemakerFeatureGroupOfflineStoreConfig = None,
  online_store_config: SagemakerFeatureGroupOnlineStoreConfig = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[SagemakerFeatureGroupTags] = None,
  throughput_config: SagemakerFeatureGroupThroughputConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.eventTimeFeatureName">event_time_feature_name</a></code> | <code>str</code> | The Event Time Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureDefinitions">feature_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]</code> | An Array of Feature Definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureGroupName">feature_group_name</a></code> | <code>str</code> | The Name of the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.recordIdentifierFeatureName">record_identifier_feature_name</a></code> | <code>str</code> | The Record Identifier Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Description about the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]</code> | An array of key-value pair to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.throughputConfig">throughput_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_time_feature_name`<sup>Required</sup> <a name="event_time_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.eventTimeFeatureName"></a>

- *Type:* str

The Event Time Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}

---

##### `feature_definitions`<sup>Required</sup> <a name="feature_definitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]

An Array of Feature Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_definitions SagemakerFeatureGroup#feature_definitions}

---

##### `feature_group_name`<sup>Required</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.featureGroupName"></a>

- *Type:* str

The Name of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}

---

##### `record_identifier_feature_name`<sup>Required</sup> <a name="record_identifier_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.recordIdentifierFeatureName"></a>

- *Type:* str

The Record Identifier Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.description"></a>

- *Type:* str

Description about the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}

---

##### `offline_store_config`<sup>Optional</sup> <a name="offline_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.offlineStoreConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}.

---

##### `online_store_config`<sup>Optional</sup> <a name="online_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.onlineStoreConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.roleArn"></a>

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]

An array of key-value pair to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}

---

##### `throughput_config`<sup>Optional</sup> <a name="throughput_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.throughputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions">put_feature_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig">put_offline_store_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig">put_online_store_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig">put_throughput_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig">reset_offline_store_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig">reset_online_store_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig">reset_throughput_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_feature_definitions` <a name="put_feature_definitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions"></a>

```python
def put_feature_definitions(
  value: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]

---

##### `put_offline_store_config` <a name="put_offline_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig"></a>

```python
def put_offline_store_config(
  data_catalog_config: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig = None,
  disable_glue_table_creation: bool | IResolvable = None,
  s3_storage_config: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig = None,
  table_format: str = None
) -> None
```

###### `data_catalog_config`<sup>Optional</sup> <a name="data_catalog_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.dataCatalogConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}.

---

###### `disable_glue_table_creation`<sup>Optional</sup> <a name="disable_glue_table_creation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.disableGlueTableCreation"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

###### `s3_storage_config`<sup>Optional</sup> <a name="s3_storage_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.s3StorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}.

---

###### `table_format`<sup>Optional</sup> <a name="table_format" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.tableFormat"></a>

- *Type:* str

Format for the offline store feature group.

Iceberg is the optimal format for feature groups shared between offline and online stores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}

---

##### `put_online_store_config` <a name="put_online_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig"></a>

```python
def put_online_store_config(
  enable_online_store: bool | IResolvable = None,
  security_config: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig = None,
  storage_type: str = None,
  ttl_duration: SagemakerFeatureGroupOnlineStoreConfigTtlDuration = None
) -> None
```

###### `enable_online_store`<sup>Optional</sup> <a name="enable_online_store" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.enableOnlineStore"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

###### `security_config`<sup>Optional</sup> <a name="security_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.securityConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}.

---

###### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}.

---

###### `ttl_duration`<sup>Optional</sup> <a name="ttl_duration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.ttlDuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

TTL configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerFeatureGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]

---

##### `put_throughput_config` <a name="put_throughput_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig"></a>

```python
def put_throughput_config(
  provisioned_read_capacity_units: typing.Union[int, float] = None,
  provisioned_write_capacity_units: typing.Union[int, float] = None,
  throughput_mode: str = None
) -> None
```

###### `provisioned_read_capacity_units`<sup>Optional</sup> <a name="provisioned_read_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.provisionedReadCapacityUnits"></a>

- *Type:* typing.Union[int, float]

For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}

---

###### `provisioned_write_capacity_units`<sup>Optional</sup> <a name="provisioned_write_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.provisionedWriteCapacityUnits"></a>

- *Type:* typing.Union[int, float]

For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}

---

###### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.throughputMode"></a>

- *Type:* str

Throughput mode configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_offline_store_config` <a name="reset_offline_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig"></a>

```python
def reset_offline_store_config() -> None
```

##### `reset_online_store_config` <a name="reset_online_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig"></a>

```python
def reset_online_store_config() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput_config` <a name="reset_throughput_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig"></a>

```python
def reset_throughput_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerFeatureGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerFeatureGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerFeatureGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitions">feature_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList">SagemakerFeatureGroupFeatureDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupStatus">feature_group_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList">SagemakerFeatureGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig">throughput_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput">event_time_feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionsInput">feature_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput">feature_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput">offline_store_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput">online_store_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput">record_identifier_feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput">throughput_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName">event_time_feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName">feature_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName">record_identifier_feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `feature_definitions`<sup>Required</sup> <a name="feature_definitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitions"></a>

```python
feature_definitions: SagemakerFeatureGroupFeatureDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList">SagemakerFeatureGroupFeatureDefinitionsList</a>

---

##### `feature_group_status`<sup>Required</sup> <a name="feature_group_status" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupStatus"></a>

```python
feature_group_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `offline_store_config`<sup>Required</sup> <a name="offline_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig"></a>

```python
offline_store_config: SagemakerFeatureGroupOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a>

---

##### `online_store_config`<sup>Required</sup> <a name="online_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig"></a>

```python
online_store_config: SagemakerFeatureGroupOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags"></a>

```python
tags: SagemakerFeatureGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList">SagemakerFeatureGroupTagsList</a>

---

##### `throughput_config`<sup>Required</sup> <a name="throughput_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig"></a>

```python
throughput_config: SagemakerFeatureGroupThroughputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_time_feature_name_input`<sup>Optional</sup> <a name="event_time_feature_name_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput"></a>

```python
event_time_feature_name_input: str
```

- *Type:* str

---

##### `feature_definitions_input`<sup>Optional</sup> <a name="feature_definitions_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionsInput"></a>

```python
feature_definitions_input: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]

---

##### `feature_group_name_input`<sup>Optional</sup> <a name="feature_group_name_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput"></a>

```python
feature_group_name_input: str
```

- *Type:* str

---

##### `offline_store_config_input`<sup>Optional</sup> <a name="offline_store_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput"></a>

```python
offline_store_config_input: IResolvable | SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `online_store_config_input`<sup>Optional</sup> <a name="online_store_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput"></a>

```python
online_store_config_input: IResolvable | SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `record_identifier_feature_name_input`<sup>Optional</sup> <a name="record_identifier_feature_name_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput"></a>

```python
record_identifier_feature_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerFeatureGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]

---

##### `throughput_config_input`<sup>Optional</sup> <a name="throughput_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput"></a>

```python
throughput_config_input: IResolvable | SagemakerFeatureGroupThroughputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_time_feature_name`<sup>Required</sup> <a name="event_time_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName"></a>

```python
event_time_feature_name: str
```

- *Type:* str

---

##### `feature_group_name`<sup>Required</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName"></a>

```python
feature_group_name: str
```

- *Type:* str

---

##### `record_identifier_feature_name`<sup>Required</sup> <a name="record_identifier_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName"></a>

```python
record_identifier_feature_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFeatureGroupConfig <a name="SagemakerFeatureGroupConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_time_feature_name: str,
  feature_definitions: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions],
  feature_group_name: str,
  record_identifier_feature_name: str,
  description: str = None,
  offline_store_config: SagemakerFeatureGroupOfflineStoreConfig = None,
  online_store_config: SagemakerFeatureGroupOnlineStoreConfig = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[SagemakerFeatureGroupTags] = None,
  throughput_config: SagemakerFeatureGroupThroughputConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName">event_time_feature_name</a></code> | <code>str</code> | The Event Time Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinitions">feature_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]</code> | An Array of Feature Definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName">feature_group_name</a></code> | <code>str</code> | The Name of the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName">record_identifier_feature_name</a></code> | <code>str</code> | The Record Identifier Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description">description</a></code> | <code>str</code> | Description about the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]</code> | An array of key-value pair to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig">throughput_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_time_feature_name`<sup>Required</sup> <a name="event_time_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName"></a>

```python
event_time_feature_name: str
```

- *Type:* str

The Event Time Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}

---

##### `feature_definitions`<sup>Required</sup> <a name="feature_definitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinitions"></a>

```python
feature_definitions: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]

An Array of Feature Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_definitions SagemakerFeatureGroup#feature_definitions}

---

##### `feature_group_name`<sup>Required</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName"></a>

```python
feature_group_name: str
```

- *Type:* str

The Name of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}

---

##### `record_identifier_feature_name`<sup>Required</sup> <a name="record_identifier_feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName"></a>

```python
record_identifier_feature_name: str
```

- *Type:* str

The Record Identifier Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description about the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}

---

##### `offline_store_config`<sup>Optional</sup> <a name="offline_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig"></a>

```python
offline_store_config: SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}.

---

##### `online_store_config`<sup>Optional</sup> <a name="online_store_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig"></a>

```python
online_store_config: SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerFeatureGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]

An array of key-value pair to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}

---

##### `throughput_config`<sup>Optional</sup> <a name="throughput_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig"></a>

```python
throughput_config: SagemakerFeatureGroupThroughputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}.

---

### SagemakerFeatureGroupFeatureDefinitions <a name="SagemakerFeatureGroupFeatureDefinitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions(
  feature_name: str,
  feature_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureType">feature_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}. |

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}.

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}.

---

### SagemakerFeatureGroupOfflineStoreConfig <a name="SagemakerFeatureGroupOfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig(
  data_catalog_config: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig = None,
  disable_glue_table_creation: bool | IResolvable = None,
  s3_storage_config: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig = None,
  table_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig">data_catalog_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation">disable_glue_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig">s3_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat">table_format</a></code> | <code>str</code> | Format for the offline store feature group. |

---

##### `data_catalog_config`<sup>Optional</sup> <a name="data_catalog_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig"></a>

```python
data_catalog_config: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}.

---

##### `disable_glue_table_creation`<sup>Optional</sup> <a name="disable_glue_table_creation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation"></a>

```python
disable_glue_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

##### `s3_storage_config`<sup>Optional</sup> <a name="s3_storage_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig"></a>

```python
s3_storage_config: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}.

---

##### `table_format`<sup>Optional</sup> <a name="table_format" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

Format for the offline store feature group.

Iceberg is the optimal format for feature groups shared between offline and online stores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}

---

### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig(
  catalog: str = None,
  database: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig(
  kms_key_id: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri">s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

### SagemakerFeatureGroupOnlineStoreConfig <a name="SagemakerFeatureGroupOnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig(
  enable_online_store: bool | IResolvable = None,
  security_config: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig = None,
  storage_type: str = None,
  ttl_duration: SagemakerFeatureGroupOnlineStoreConfigTtlDuration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore">enable_online_store</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig">security_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration">ttl_duration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | TTL configuration of the feature group. |

---

##### `enable_online_store`<sup>Optional</sup> <a name="enable_online_store" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore"></a>

```python
enable_online_store: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

##### `security_config`<sup>Optional</sup> <a name="security_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig"></a>

```python
security_config: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}.

---

##### `ttl_duration`<sup>Optional</sup> <a name="ttl_duration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration"></a>

```python
ttl_duration: SagemakerFeatureGroupOnlineStoreConfigTtlDuration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

TTL configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}

---

### SagemakerFeatureGroupOnlineStoreConfigSecurityConfig <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

### SagemakerFeatureGroupOnlineStoreConfigTtlDuration <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit">unit</a></code> | <code>str</code> | Unit of ttl configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Value of ttl configuration. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit"></a>

```python
unit: str
```

- *Type:* str

Unit of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Value of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}

---

### SagemakerFeatureGroupTags <a name="SagemakerFeatureGroupTags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#key SagemakerFeatureGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#key SagemakerFeatureGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}.

---

### SagemakerFeatureGroupThroughputConfig <a name="SagemakerFeatureGroupThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig(
  provisioned_read_capacity_units: typing.Union[int, float] = None,
  provisioned_write_capacity_units: typing.Union[int, float] = None,
  throughput_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits">provisioned_read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits">provisioned_write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode">throughput_mode</a></code> | <code>str</code> | Throughput mode configuration of the feature group. |

---

##### `provisioned_read_capacity_units`<sup>Optional</sup> <a name="provisioned_read_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits"></a>

```python
provisioned_read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}

---

##### `provisioned_write_capacity_units`<sup>Optional</sup> <a name="provisioned_write_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits"></a>

```python
provisioned_write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}

---

##### `throughput_mode`<sup>Optional</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

Throughput mode configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFeatureGroupFeatureDefinitionsList <a name="SagemakerFeatureGroupFeatureDefinitionsList" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerFeatureGroupFeatureDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerFeatureGroupFeatureDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>]

---


### SagemakerFeatureGroupFeatureDefinitionsOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureTypeInput">feature_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureType">feature_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `feature_type_input`<sup>Optional</sup> <a name="feature_type_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureTypeInput"></a>

```python
feature_type_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupFeatureDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions">SagemakerFeatureGroupFeatureDefinitions</a>

---


### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig">put_data_catalog_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig">put_s3_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig">reset_data_catalog_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation">reset_disable_glue_table_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetS3StorageConfig">reset_s3_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat">reset_table_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_catalog_config` <a name="put_data_catalog_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig"></a>

```python
def put_data_catalog_config(
  catalog: str = None,
  database: str = None,
  table_name: str = None
) -> None
```

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

##### `put_s3_storage_config` <a name="put_s3_storage_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig"></a>

```python
def put_s3_storage_config(
  kms_key_id: str = None,
  s3_uri: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.s3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

##### `reset_data_catalog_config` <a name="reset_data_catalog_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig"></a>

```python
def reset_data_catalog_config() -> None
```

##### `reset_disable_glue_table_creation` <a name="reset_disable_glue_table_creation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation"></a>

```python
def reset_disable_glue_table_creation() -> None
```

##### `reset_s3_storage_config` <a name="reset_s3_storage_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetS3StorageConfig"></a>

```python
def reset_s3_storage_config() -> None
```

##### `reset_table_format` <a name="reset_table_format" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat"></a>

```python
def reset_table_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig">data_catalog_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig">s3_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput">data_catalog_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput">disable_glue_table_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput">s3_storage_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput">table_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation">disable_glue_table_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_catalog_config`<sup>Required</sup> <a name="data_catalog_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig"></a>

```python
data_catalog_config: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a>

---

##### `s3_storage_config`<sup>Required</sup> <a name="s3_storage_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig"></a>

```python
s3_storage_config: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a>

---

##### `data_catalog_config_input`<sup>Optional</sup> <a name="data_catalog_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput"></a>

```python
data_catalog_config_input: IResolvable | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `disable_glue_table_creation_input`<sup>Optional</sup> <a name="disable_glue_table_creation_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput"></a>

```python
disable_glue_table_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_storage_config_input`<sup>Optional</sup> <a name="s3_storage_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput"></a>

```python
s3_storage_config_input: IResolvable | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `table_format_input`<sup>Optional</sup> <a name="table_format_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput"></a>

```python
table_format_input: str
```

- *Type:* str

---

##### `disable_glue_table_creation`<sup>Required</sup> <a name="disable_glue_table_creation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation"></a>

```python
disable_glue_table_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig">put_security_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration">put_ttl_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore">reset_enable_online_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig">reset_security_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration">reset_ttl_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security_config` <a name="put_security_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig"></a>

```python
def put_security_config(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

##### `put_ttl_duration` <a name="put_ttl_duration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration"></a>

```python
def put_ttl_duration(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration.parameter.unit"></a>

- *Type:* str

Unit of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

Value of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}

---

##### `reset_enable_online_store` <a name="reset_enable_online_store" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore"></a>

```python
def reset_enable_online_store() -> None
```

##### `reset_security_config` <a name="reset_security_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig"></a>

```python
def reset_security_config() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_ttl_duration` <a name="reset_ttl_duration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration"></a>

```python
def reset_ttl_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig">security_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration">ttl_duration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput">enable_online_store_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput">security_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput">ttl_duration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore">enable_online_store</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_config`<sup>Required</sup> <a name="security_config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig"></a>

```python
security_config: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a>

---

##### `ttl_duration`<sup>Required</sup> <a name="ttl_duration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration"></a>

```python
ttl_duration: SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a>

---

##### `enable_online_store_input`<sup>Optional</sup> <a name="enable_online_store_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput"></a>

```python
enable_online_store_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_config_input`<sup>Optional</sup> <a name="security_config_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput"></a>

```python
security_config_input: IResolvable | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `ttl_duration_input`<sup>Optional</sup> <a name="ttl_duration_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput"></a>

```python
ttl_duration_input: IResolvable | SagemakerFeatureGroupOnlineStoreConfigTtlDuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `enable_online_store`<sup>Required</sup> <a name="enable_online_store" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore"></a>

```python
enable_online_store: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupOnlineStoreConfigTtlDuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---


### SagemakerFeatureGroupTagsList <a name="SagemakerFeatureGroupTagsList" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerFeatureGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerFeatureGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>]

---


### SagemakerFeatureGroupTagsOutputReference <a name="SagemakerFeatureGroupTagsOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags">SagemakerFeatureGroupTags</a>

---


### SagemakerFeatureGroupThroughputConfigOutputReference <a name="SagemakerFeatureGroupThroughputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_feature_group

sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits">reset_provisioned_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits">reset_provisioned_write_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode">reset_throughput_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provisioned_read_capacity_units` <a name="reset_provisioned_read_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits"></a>

```python
def reset_provisioned_read_capacity_units() -> None
```

##### `reset_provisioned_write_capacity_units` <a name="reset_provisioned_write_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits"></a>

```python
def reset_provisioned_write_capacity_units() -> None
```

##### `reset_throughput_mode` <a name="reset_throughput_mode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode"></a>

```python
def reset_throughput_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput">provisioned_read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput">provisioned_write_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput">throughput_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits">provisioned_read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits">provisioned_write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode">throughput_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_read_capacity_units_input`<sup>Optional</sup> <a name="provisioned_read_capacity_units_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput"></a>

```python
provisioned_read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_write_capacity_units_input`<sup>Optional</sup> <a name="provisioned_write_capacity_units_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput"></a>

```python
provisioned_write_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode_input`<sup>Optional</sup> <a name="throughput_mode_input" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput"></a>

```python
throughput_mode_input: str
```

- *Type:* str

---

##### `provisioned_read_capacity_units`<sup>Required</sup> <a name="provisioned_read_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits"></a>

```python
provisioned_read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_write_capacity_units`<sup>Required</sup> <a name="provisioned_write_capacity_units" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits"></a>

```python
provisioned_write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode`<sup>Required</sup> <a name="throughput_mode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerFeatureGroupThroughputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---



