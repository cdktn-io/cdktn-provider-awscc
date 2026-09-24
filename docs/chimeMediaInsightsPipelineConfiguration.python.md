# `chimeMediaInsightsPipelineConfiguration` Submodule <a name="`chimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaInsightsPipelineConfiguration <a name="ChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  elements: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements],
  media_insights_pipeline_configuration_name: str,
  resource_access_role_arn: str,
  real_time_alert_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration = None,
  tags: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.elements">elements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]</code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.mediaInsightsPipelineConfigurationName">media_insights_pipeline_configuration_name</a></code> | <code>str</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.resourceAccessRoleArn">resource_access_role_arn</a></code> | <code>str</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.realTimeAlertConfiguration">real_time_alert_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]</code> | The tags associated with the configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.elements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `media_insights_pipeline_configuration_name`<sup>Required</sup> <a name="media_insights_pipeline_configuration_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.mediaInsightsPipelineConfigurationName"></a>

- *Type:* str

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `resource_access_role_arn`<sup>Required</sup> <a name="resource_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.resourceAccessRoleArn"></a>

- *Type:* str

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `real_time_alert_configuration`<sup>Optional</sup> <a name="real_time_alert_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.realTimeAlertConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements">put_elements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration">put_real_time_alert_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration">reset_real_time_alert_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_elements` <a name="put_elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements"></a>

```python
def put_elements(
  value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]

---

##### `put_real_time_alert_configuration` <a name="put_real_time_alert_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration"></a>

```python
def put_real_time_alert_configuration(
  disabled: bool | IResolvable = None,
  rules: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules] = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Turns off real-time alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#disabled ChimeMediaInsightsPipelineConfiguration#disabled}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]

The rules in the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rules ChimeMediaInsightsPipelineConfiguration#rules}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]

---

##### `reset_real_time_alert_configuration` <a name="reset_real_time_alert_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration"></a>

```python
def reset_real_time_alert_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeMediaInsightsPipelineConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">media_insights_pipeline_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">media_insights_pipeline_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">real_time_alert_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput">elements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput">media_insights_pipeline_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput">real_time_alert_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput">resource_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">media_insights_pipeline_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">resource_access_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```python
elements: ChimeMediaInsightsPipelineConfigurationElementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_insights_pipeline_configuration_arn`<sup>Required</sup> <a name="media_insights_pipeline_configuration_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```python
media_insights_pipeline_configuration_arn: str
```

- *Type:* str

---

##### `media_insights_pipeline_configuration_id`<sup>Required</sup> <a name="media_insights_pipeline_configuration_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```python
media_insights_pipeline_configuration_id: str
```

- *Type:* str

---

##### `real_time_alert_configuration`<sup>Required</sup> <a name="real_time_alert_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```python
real_time_alert_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```python
tags: ChimeMediaInsightsPipelineConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `elements_input`<sup>Optional</sup> <a name="elements_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput"></a>

```python
elements_input: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]

---

##### `media_insights_pipeline_configuration_name_input`<sup>Optional</sup> <a name="media_insights_pipeline_configuration_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput"></a>

```python
media_insights_pipeline_configuration_name_input: str
```

- *Type:* str

---

##### `real_time_alert_configuration_input`<sup>Optional</sup> <a name="real_time_alert_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput"></a>

```python
real_time_alert_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `resource_access_role_arn_input`<sup>Optional</sup> <a name="resource_access_role_arn_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput"></a>

```python
resource_access_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]

---

##### `media_insights_pipeline_configuration_name`<sup>Required</sup> <a name="media_insights_pipeline_configuration_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```python
media_insights_pipeline_configuration_name: str
```

- *Type:* str

---

##### `resource_access_role_arn`<sup>Required</sup> <a name="resource_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```python
resource_access_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaInsightsPipelineConfigurationConfig <a name="ChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  elements: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements],
  media_insights_pipeline_configuration_name: str,
  resource_access_role_arn: str,
  real_time_alert_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration = None,
  tags: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements">elements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]</code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName">media_insights_pipeline_configuration_name</a></code> | <code>str</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn">resource_access_role_arn</a></code> | <code>str</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration">real_time_alert_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]</code> | The tags associated with the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements"></a>

```python
elements: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `media_insights_pipeline_configuration_name`<sup>Required</sup> <a name="media_insights_pipeline_configuration_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName"></a>

```python
media_insights_pipeline_configuration_name: str
```

- *Type:* str

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `resource_access_role_arn`<sup>Required</sup> <a name="resource_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn"></a>

```python
resource_access_role_arn: str
```

- *Type:* str

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `real_time_alert_configuration`<sup>Optional</sup> <a name="real_time_alert_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration"></a>

```python
real_time_alert_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

### ChimeMediaInsightsPipelineConfigurationElements <a name="ChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements(
  type: str,
  amazon_transcribe_call_analytics_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration = None,
  amazon_transcribe_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration = None,
  kinesis_data_stream_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration = None,
  s3_recording_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type">type</a></code> | <code>str</code> | The element type. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazon_transcribe_call_analytics_processor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration">amazon_transcribe_processor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration">kinesis_data_stream_sink_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration">s3_recording_sink_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type"></a>

```python
type: str
```

- *Type:* str

The element type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

##### `amazon_transcribe_call_analytics_processor_configuration`<sup>Optional</sup> <a name="amazon_transcribe_call_analytics_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```python
amazon_transcribe_call_analytics_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}.

---

##### `amazon_transcribe_processor_configuration`<sup>Optional</sup> <a name="amazon_transcribe_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration"></a>

```python
amazon_transcribe_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}.

---

##### `kinesis_data_stream_sink_configuration`<sup>Optional</sup> <a name="kinesis_data_stream_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration"></a>

```python
kinesis_data_stream_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}.

---

##### `s3_recording_sink_configuration`<sup>Optional</sup> <a name="s3_recording_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration"></a>

```python
s3_recording_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}.

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration(
  call_analytics_stream_categories: typing.List[str] = None,
  content_identification_type: str = None,
  content_redaction_type: str = None,
  enable_partial_results_stabilization: bool | IResolvable = None,
  filter_partial_results: bool | IResolvable = None,
  language_code: str = None,
  language_model_name: str = None,
  partial_results_stability: str = None,
  pii_entity_types: str = None,
  post_call_analytics_settings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings = None,
  vocabulary_filter_method: str = None,
  vocabulary_filter_name: str = None,
  vocabulary_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories">call_analytics_stream_categories</a></code> | <code>typing.List[str]</code> | The categories to send to the insights target. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType">content_identification_type</a></code> | <code>str</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType">content_redaction_type</a></code> | <code>str</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization">enable_partial_results_stabilization</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults">filter_partial_results</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode">language_code</a></code> | <code>str</code> | The language code in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName">language_model_name</a></code> | <code>str</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability">partial_results_stability</a></code> | <code>str</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes">pii_entity_types</a></code> | <code>str</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings">post_call_analytics_settings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod">vocabulary_filter_method</a></code> | <code>str</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName">vocabulary_filter_name</a></code> | <code>str</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | The name of the custom vocabulary. |

---

##### `call_analytics_stream_categories`<sup>Optional</sup> <a name="call_analytics_stream_categories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories"></a>

```python
call_analytics_stream_categories: typing.List[str]
```

- *Type:* typing.List[str]

The categories to send to the insights target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories ChimeMediaInsightsPipelineConfiguration#call_analytics_stream_categories}

---

##### `content_identification_type`<sup>Optional</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType"></a>

```python
content_identification_type: str
```

- *Type:* str

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `content_redaction_type`<sup>Optional</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType"></a>

```python
content_redaction_type: str
```

- *Type:* str

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enable_partial_results_stabilization`<sup>Optional</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```python
enable_partial_results_stabilization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filter_partial_results`<sup>Optional</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults"></a>

```python
filter_partial_results: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `language_model_name`<sup>Optional</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName"></a>

```python
language_model_name: str
```

- *Type:* str

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `partial_results_stability`<sup>Optional</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability"></a>

```python
partial_results_stability: str
```

- *Type:* str

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `pii_entity_types`<sup>Optional</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes"></a>

```python
pii_entity_types: str
```

- *Type:* str

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `post_call_analytics_settings`<sup>Optional</sup> <a name="post_call_analytics_settings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings"></a>

```python
post_call_analytics_settings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}.

---

##### `vocabulary_filter_method`<sup>Optional</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod"></a>

```python
vocabulary_filter_method: str
```

- *Type:* str

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabulary_filter_name`<sup>Optional</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName"></a>

```python
vocabulary_filter_name: str
```

- *Type:* str

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabulary_name`<sup>Optional</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings(
  content_redaction_output: str = None,
  data_access_role_arn: str = None,
  output_encryption_kms_key_id: str = None,
  output_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput">content_redaction_output</a></code> | <code>str</code> | The content redaction output settings. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | The ARN of the role used by Transcribe to upload post-call analysis. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId">output_encryption_kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation">output_location</a></code> | <code>str</code> | The URL of the Amazon S3 bucket for post-call data. |

---

##### `content_redaction_output`<sup>Optional</sup> <a name="content_redaction_output" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput"></a>

```python
content_redaction_output: str
```

- *Type:* str

The content redaction output settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output ChimeMediaInsightsPipelineConfiguration#content_redaction_output}

---

##### `data_access_role_arn`<sup>Optional</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

The ARN of the role used by Transcribe to upload post-call analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn ChimeMediaInsightsPipelineConfiguration#data_access_role_arn}

---

##### `output_encryption_kms_key_id`<sup>Optional</sup> <a name="output_encryption_kms_key_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId"></a>

```python
output_encryption_kms_key_id: str
```

- *Type:* str

The ID of the KMS key used to encrypt the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimeMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

The URL of the Amazon S3 bucket for post-call data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_location ChimeMediaInsightsPipelineConfiguration#output_location}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration(
  content_identification_type: str = None,
  content_redaction_type: str = None,
  enable_partial_results_stabilization: bool | IResolvable = None,
  filter_partial_results: bool | IResolvable = None,
  identify_language: bool | IResolvable = None,
  identify_multiple_languages: bool | IResolvable = None,
  language_code: str = None,
  language_model_name: str = None,
  language_options: str = None,
  partial_results_stability: str = None,
  pii_entity_types: str = None,
  preferred_language: str = None,
  show_speaker_label: bool | IResolvable = None,
  vocabulary_filter_method: str = None,
  vocabulary_filter_name: str = None,
  vocabulary_filter_names: str = None,
  vocabulary_name: str = None,
  vocabulary_names: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType">content_identification_type</a></code> | <code>str</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType">content_redaction_type</a></code> | <code>str</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization">enable_partial_results_stabilization</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults">filter_partial_results</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage">identify_language</a></code> | <code>bool \| cdktn.IResolvable</code> | Turns language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages">identify_multiple_languages</a></code> | <code>bool \| cdktn.IResolvable</code> | Turns multiple language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode">language_code</a></code> | <code>str</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName">language_model_name</a></code> | <code>str</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions">language_options</a></code> | <code>str</code> | The language options for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability">partial_results_stability</a></code> | <code>str</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes">pii_entity_types</a></code> | <code>str</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | The preferred language for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel">show_speaker_label</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables speaker partitioning. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod">vocabulary_filter_method</a></code> | <code>str</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName">vocabulary_filter_name</a></code> | <code>str</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames">vocabulary_filter_names</a></code> | <code>str</code> | The names of the custom vocabulary filters. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | The name of the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames">vocabulary_names</a></code> | <code>str</code> | The names of the custom vocabularies. |

---

##### `content_identification_type`<sup>Optional</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType"></a>

```python
content_identification_type: str
```

- *Type:* str

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `content_redaction_type`<sup>Optional</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType"></a>

```python
content_redaction_type: str
```

- *Type:* str

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enable_partial_results_stabilization`<sup>Optional</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```python
enable_partial_results_stabilization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filter_partial_results`<sup>Optional</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults"></a>

```python
filter_partial_results: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `identify_language`<sup>Optional</sup> <a name="identify_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage"></a>

```python
identify_language: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Turns language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language ChimeMediaInsightsPipelineConfiguration#identify_language}

---

##### `identify_multiple_languages`<sup>Optional</sup> <a name="identify_multiple_languages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages"></a>

```python
identify_multiple_languages: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Turns multiple language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages ChimeMediaInsightsPipelineConfiguration#identify_multiple_languages}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `language_model_name`<sup>Optional</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName"></a>

```python
language_model_name: str
```

- *Type:* str

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `language_options`<sup>Optional</sup> <a name="language_options" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions"></a>

```python
language_options: str
```

- *Type:* str

The language options for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_options ChimeMediaInsightsPipelineConfiguration#language_options}

---

##### `partial_results_stability`<sup>Optional</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability"></a>

```python
partial_results_stability: str
```

- *Type:* str

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `pii_entity_types`<sup>Optional</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes"></a>

```python
pii_entity_types: str
```

- *Type:* str

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

The preferred language for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language ChimeMediaInsightsPipelineConfiguration#preferred_language}

---

##### `show_speaker_label`<sup>Optional</sup> <a name="show_speaker_label" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel"></a>

```python
show_speaker_label: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables speaker partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label ChimeMediaInsightsPipelineConfiguration#show_speaker_label}

---

##### `vocabulary_filter_method`<sup>Optional</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod"></a>

```python
vocabulary_filter_method: str
```

- *Type:* str

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabulary_filter_name`<sup>Optional</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName"></a>

```python
vocabulary_filter_name: str
```

- *Type:* str

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabulary_filter_names`<sup>Optional</sup> <a name="vocabulary_filter_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames"></a>

```python
vocabulary_filter_names: str
```

- *Type:* str

The names of the custom vocabulary filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_names}

---

##### `vocabulary_name`<sup>Optional</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

##### `vocabulary_names`<sup>Optional</sup> <a name="vocabulary_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames"></a>

```python
vocabulary_names: str
```

- *Type:* str

The names of the custom vocabularies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names ChimeMediaInsightsPipelineConfiguration#vocabulary_names}

---

### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration(
  insights_target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget">insights_target</a></code> | <code>str</code> | The ARN of the Kinesis Data Stream sink. |

---

##### `insights_target`<sup>Optional</sup> <a name="insights_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget"></a>

```python
insights_target: str
```

- *Type:* str

The ARN of the Kinesis Data Stream sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target ChimeMediaInsightsPipelineConfiguration#insights_target}

---

### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration(
  destination: str = None,
  recording_file_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination">destination</a></code> | <code>str</code> | The default URI of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat">recording_file_format</a></code> | <code>str</code> | The recording file format. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination"></a>

```python
destination: str
```

- *Type:* str

The default URI of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#destination ChimeMediaInsightsPipelineConfiguration#destination}

---

##### `recording_file_format`<sup>Optional</sup> <a name="recording_file_format" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat"></a>

```python
recording_file_format: str
```

- *Type:* str

The recording file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format ChimeMediaInsightsPipelineConfiguration#recording_file_format}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration(
  disabled: bool | IResolvable = None,
  rules: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Turns off real-time alerts. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]</code> | The rules in the alert. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Turns off real-time alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#disabled ChimeMediaInsightsPipelineConfiguration#disabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules"></a>

```python
rules: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]

The rules in the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rules ChimeMediaInsightsPipelineConfiguration#rules}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules(
  issue_detection_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration = None,
  keyword_match_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration = None,
  sentiment_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration">issue_detection_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration">keyword_match_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration">sentiment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type">type</a></code> | <code>str</code> | The type of alert rule. |

---

##### `issue_detection_configuration`<sup>Optional</sup> <a name="issue_detection_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration"></a>

```python
issue_detection_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}.

---

##### `keyword_match_configuration`<sup>Optional</sup> <a name="keyword_match_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration"></a>

```python
keyword_match_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}.

---

##### `sentiment_configuration`<sup>Optional</sup> <a name="sentiment_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration"></a>

```python
sentiment_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type"></a>

```python
type: str
```

- *Type:* str

The type of alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration(
  rule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the issue detection rule. |

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the issue detection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration(
  keywords: typing.List[str] = None,
  negate: bool | IResolvable = None,
  rule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords">keywords</a></code> | <code>typing.List[str]</code> | The keywords or phrases to match. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | Matches keywords on their presence or absence. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the keyword match rule. |

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords"></a>

```python
keywords: typing.List[str]
```

- *Type:* typing.List[str]

The keywords or phrases to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keywords ChimeMediaInsightsPipelineConfiguration#keywords}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Matches keywords on their presence or absence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#negate ChimeMediaInsightsPipelineConfiguration#negate}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the keyword match rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration(
  rule_name: str = None,
  sentiment_type: str = None,
  time_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the sentiment rule. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType">sentiment_type</a></code> | <code>str</code> | The type of sentiment. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod">time_period</a></code> | <code>typing.Union[int, float]</code> | The analysis interval in seconds. |

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the sentiment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `sentiment_type`<sup>Optional</sup> <a name="sentiment_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType"></a>

```python
sentiment_type: str
```

- *Type:* str

The type of sentiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type ChimeMediaInsightsPipelineConfiguration#sentiment_type}

---

##### `time_period`<sup>Optional</sup> <a name="time_period" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod"></a>

```python
time_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The analysis interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#time_period ChimeMediaInsightsPipelineConfiguration#time_period}

---

### ChimeMediaInsightsPipelineConfigurationTags <a name="ChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings">put_post_call_analytics_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories">reset_call_analytics_stream_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType">reset_content_identification_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType">reset_content_redaction_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">reset_enable_partial_results_stabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults">reset_filter_partial_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName">reset_language_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability">reset_partial_results_stability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes">reset_pii_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings">reset_post_call_analytics_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod">reset_vocabulary_filter_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName">reset_vocabulary_filter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName">reset_vocabulary_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_post_call_analytics_settings` <a name="put_post_call_analytics_settings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings"></a>

```python
def put_post_call_analytics_settings(
  content_redaction_output: str = None,
  data_access_role_arn: str = None,
  output_encryption_kms_key_id: str = None,
  output_location: str = None
) -> None
```

###### `content_redaction_output`<sup>Optional</sup> <a name="content_redaction_output" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.contentRedactionOutput"></a>

- *Type:* str

The content redaction output settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output ChimeMediaInsightsPipelineConfiguration#content_redaction_output}

---

###### `data_access_role_arn`<sup>Optional</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.dataAccessRoleArn"></a>

- *Type:* str

The ARN of the role used by Transcribe to upload post-call analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn ChimeMediaInsightsPipelineConfiguration#data_access_role_arn}

---

###### `output_encryption_kms_key_id`<sup>Optional</sup> <a name="output_encryption_kms_key_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.outputEncryptionKmsKeyId"></a>

- *Type:* str

The ID of the KMS key used to encrypt the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimeMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.outputLocation"></a>

- *Type:* str

The URL of the Amazon S3 bucket for post-call data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#output_location ChimeMediaInsightsPipelineConfiguration#output_location}

---

##### `reset_call_analytics_stream_categories` <a name="reset_call_analytics_stream_categories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories"></a>

```python
def reset_call_analytics_stream_categories() -> None
```

##### `reset_content_identification_type` <a name="reset_content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```python
def reset_content_identification_type() -> None
```

##### `reset_content_redaction_type` <a name="reset_content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```python
def reset_content_redaction_type() -> None
```

##### `reset_enable_partial_results_stabilization` <a name="reset_enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```python
def reset_enable_partial_results_stabilization() -> None
```

##### `reset_filter_partial_results` <a name="reset_filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```python
def reset_filter_partial_results() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_language_model_name` <a name="reset_language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```python
def reset_language_model_name() -> None
```

##### `reset_partial_results_stability` <a name="reset_partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```python
def reset_partial_results_stability() -> None
```

##### `reset_pii_entity_types` <a name="reset_pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```python
def reset_pii_entity_types() -> None
```

##### `reset_post_call_analytics_settings` <a name="reset_post_call_analytics_settings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings"></a>

```python
def reset_post_call_analytics_settings() -> None
```

##### `reset_vocabulary_filter_method` <a name="reset_vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```python
def reset_vocabulary_filter_method() -> None
```

##### `reset_vocabulary_filter_name` <a name="reset_vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```python
def reset_vocabulary_filter_name() -> None
```

##### `reset_vocabulary_name` <a name="reset_vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName"></a>

```python
def reset_vocabulary_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">post_call_analytics_settings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput">call_analytics_stream_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">content_identification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput">content_redaction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enable_partial_results_stabilization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput">filter_partial_results_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput">language_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partial_results_stability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput">pii_entity_types_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput">post_call_analytics_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabulary_filter_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabulary_filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabulary_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">call_analytics_stream_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">content_identification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">content_redaction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enable_partial_results_stabilization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">filter_partial_results</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">language_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">partial_results_stability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">pii_entity_types</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabulary_filter_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabulary_filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_call_analytics_settings`<sup>Required</sup> <a name="post_call_analytics_settings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```python
post_call_analytics_settings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `call_analytics_stream_categories_input`<sup>Optional</sup> <a name="call_analytics_stream_categories_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput"></a>

```python
call_analytics_stream_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_identification_type_input`<sup>Optional</sup> <a name="content_identification_type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```python
content_identification_type_input: str
```

- *Type:* str

---

##### `content_redaction_type_input`<sup>Optional</sup> <a name="content_redaction_type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```python
content_redaction_type_input: str
```

- *Type:* str

---

##### `enable_partial_results_stabilization_input`<sup>Optional</sup> <a name="enable_partial_results_stabilization_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```python
enable_partial_results_stabilization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter_partial_results_input`<sup>Optional</sup> <a name="filter_partial_results_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```python
filter_partial_results_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `language_model_name_input`<sup>Optional</sup> <a name="language_model_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```python
language_model_name_input: str
```

- *Type:* str

---

##### `partial_results_stability_input`<sup>Optional</sup> <a name="partial_results_stability_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```python
partial_results_stability_input: str
```

- *Type:* str

---

##### `pii_entity_types_input`<sup>Optional</sup> <a name="pii_entity_types_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```python
pii_entity_types_input: str
```

- *Type:* str

---

##### `post_call_analytics_settings_input`<sup>Optional</sup> <a name="post_call_analytics_settings_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput"></a>

```python
post_call_analytics_settings_input: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `vocabulary_filter_method_input`<sup>Optional</sup> <a name="vocabulary_filter_method_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```python
vocabulary_filter_method_input: str
```

- *Type:* str

---

##### `vocabulary_filter_name_input`<sup>Optional</sup> <a name="vocabulary_filter_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```python
vocabulary_filter_name_input: str
```

- *Type:* str

---

##### `vocabulary_name_input`<sup>Optional</sup> <a name="vocabulary_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```python
vocabulary_name_input: str
```

- *Type:* str

---

##### `call_analytics_stream_categories`<sup>Required</sup> <a name="call_analytics_stream_categories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```python
call_analytics_stream_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_identification_type`<sup>Required</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```python
content_identification_type: str
```

- *Type:* str

---

##### `content_redaction_type`<sup>Required</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```python
content_redaction_type: str
```

- *Type:* str

---

##### `enable_partial_results_stabilization`<sup>Required</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```python
enable_partial_results_stabilization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter_partial_results`<sup>Required</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```python
filter_partial_results: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `language_model_name`<sup>Required</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```python
language_model_name: str
```

- *Type:* str

---

##### `partial_results_stability`<sup>Required</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```python
partial_results_stability: str
```

- *Type:* str

---

##### `pii_entity_types`<sup>Required</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```python
pii_entity_types: str
```

- *Type:* str

---

##### `vocabulary_filter_method`<sup>Required</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```python
vocabulary_filter_method: str
```

- *Type:* str

---

##### `vocabulary_filter_name`<sup>Required</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```python
vocabulary_filter_name: str
```

- *Type:* str

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput">reset_content_redaction_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn">reset_data_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId">reset_output_encryption_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_redaction_output` <a name="reset_content_redaction_output" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput"></a>

```python
def reset_content_redaction_output() -> None
```

##### `reset_data_access_role_arn` <a name="reset_data_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn"></a>

```python
def reset_data_access_role_arn() -> None
```

##### `reset_output_encryption_kms_key_id` <a name="reset_output_encryption_kms_key_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId"></a>

```python
def reset_output_encryption_kms_key_id() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput">content_redaction_output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput">output_encryption_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">content_redaction_output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">output_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">output_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_redaction_output_input`<sup>Optional</sup> <a name="content_redaction_output_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput"></a>

```python
content_redaction_output_input: str
```

- *Type:* str

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `output_encryption_kms_key_id_input`<sup>Optional</sup> <a name="output_encryption_kms_key_id_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput"></a>

```python
output_encryption_kms_key_id_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput"></a>

```python
output_location_input: str
```

- *Type:* str

---

##### `content_redaction_output`<sup>Required</sup> <a name="content_redaction_output" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```python
content_redaction_output: str
```

- *Type:* str

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `output_encryption_kms_key_id`<sup>Required</sup> <a name="output_encryption_kms_key_id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```python
output_encryption_kms_key_id: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType">reset_content_identification_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType">reset_content_redaction_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">reset_enable_partial_results_stabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults">reset_filter_partial_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage">reset_identify_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages">reset_identify_multiple_languages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName">reset_language_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions">reset_language_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability">reset_partial_results_stability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes">reset_pii_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel">reset_show_speaker_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod">reset_vocabulary_filter_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName">reset_vocabulary_filter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames">reset_vocabulary_filter_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName">reset_vocabulary_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames">reset_vocabulary_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_identification_type` <a name="reset_content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```python
def reset_content_identification_type() -> None
```

##### `reset_content_redaction_type` <a name="reset_content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```python
def reset_content_redaction_type() -> None
```

##### `reset_enable_partial_results_stabilization` <a name="reset_enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```python
def reset_enable_partial_results_stabilization() -> None
```

##### `reset_filter_partial_results` <a name="reset_filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```python
def reset_filter_partial_results() -> None
```

##### `reset_identify_language` <a name="reset_identify_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage"></a>

```python
def reset_identify_language() -> None
```

##### `reset_identify_multiple_languages` <a name="reset_identify_multiple_languages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages"></a>

```python
def reset_identify_multiple_languages() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_language_model_name` <a name="reset_language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```python
def reset_language_model_name() -> None
```

##### `reset_language_options` <a name="reset_language_options" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions"></a>

```python
def reset_language_options() -> None
```

##### `reset_partial_results_stability` <a name="reset_partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```python
def reset_partial_results_stability() -> None
```

##### `reset_pii_entity_types` <a name="reset_pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```python
def reset_pii_entity_types() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_show_speaker_label` <a name="reset_show_speaker_label" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel"></a>

```python
def reset_show_speaker_label() -> None
```

##### `reset_vocabulary_filter_method` <a name="reset_vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```python
def reset_vocabulary_filter_method() -> None
```

##### `reset_vocabulary_filter_name` <a name="reset_vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```python
def reset_vocabulary_filter_name() -> None
```

##### `reset_vocabulary_filter_names` <a name="reset_vocabulary_filter_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames"></a>

```python
def reset_vocabulary_filter_names() -> None
```

##### `reset_vocabulary_name` <a name="reset_vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName"></a>

```python
def reset_vocabulary_name() -> None
```

##### `reset_vocabulary_names` <a name="reset_vocabulary_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames"></a>

```python
def reset_vocabulary_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">content_identification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput">content_redaction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enable_partial_results_stabilization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput">filter_partial_results_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput">identify_language_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput">identify_multiple_languages_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput">language_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput">language_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partial_results_stability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput">pii_entity_types_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput">show_speaker_label_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabulary_filter_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabulary_filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput">vocabulary_filter_names_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabulary_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput">vocabulary_names_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">content_identification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">content_redaction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enable_partial_results_stabilization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">filter_partial_results</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">identify_language</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">identify_multiple_languages</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">language_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">language_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">partial_results_stability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">pii_entity_types</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">show_speaker_label</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabulary_filter_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabulary_filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">vocabulary_filter_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">vocabulary_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">vocabulary_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_identification_type_input`<sup>Optional</sup> <a name="content_identification_type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```python
content_identification_type_input: str
```

- *Type:* str

---

##### `content_redaction_type_input`<sup>Optional</sup> <a name="content_redaction_type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```python
content_redaction_type_input: str
```

- *Type:* str

---

##### `enable_partial_results_stabilization_input`<sup>Optional</sup> <a name="enable_partial_results_stabilization_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```python
enable_partial_results_stabilization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter_partial_results_input`<sup>Optional</sup> <a name="filter_partial_results_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```python
filter_partial_results_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identify_language_input`<sup>Optional</sup> <a name="identify_language_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput"></a>

```python
identify_language_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identify_multiple_languages_input`<sup>Optional</sup> <a name="identify_multiple_languages_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput"></a>

```python
identify_multiple_languages_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `language_model_name_input`<sup>Optional</sup> <a name="language_model_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```python
language_model_name_input: str
```

- *Type:* str

---

##### `language_options_input`<sup>Optional</sup> <a name="language_options_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput"></a>

```python
language_options_input: str
```

- *Type:* str

---

##### `partial_results_stability_input`<sup>Optional</sup> <a name="partial_results_stability_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```python
partial_results_stability_input: str
```

- *Type:* str

---

##### `pii_entity_types_input`<sup>Optional</sup> <a name="pii_entity_types_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```python
pii_entity_types_input: str
```

- *Type:* str

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `show_speaker_label_input`<sup>Optional</sup> <a name="show_speaker_label_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput"></a>

```python
show_speaker_label_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vocabulary_filter_method_input`<sup>Optional</sup> <a name="vocabulary_filter_method_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```python
vocabulary_filter_method_input: str
```

- *Type:* str

---

##### `vocabulary_filter_name_input`<sup>Optional</sup> <a name="vocabulary_filter_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```python
vocabulary_filter_name_input: str
```

- *Type:* str

---

##### `vocabulary_filter_names_input`<sup>Optional</sup> <a name="vocabulary_filter_names_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput"></a>

```python
vocabulary_filter_names_input: str
```

- *Type:* str

---

##### `vocabulary_name_input`<sup>Optional</sup> <a name="vocabulary_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```python
vocabulary_name_input: str
```

- *Type:* str

---

##### `vocabulary_names_input`<sup>Optional</sup> <a name="vocabulary_names_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput"></a>

```python
vocabulary_names_input: str
```

- *Type:* str

---

##### `content_identification_type`<sup>Required</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```python
content_identification_type: str
```

- *Type:* str

---

##### `content_redaction_type`<sup>Required</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```python
content_redaction_type: str
```

- *Type:* str

---

##### `enable_partial_results_stabilization`<sup>Required</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```python
enable_partial_results_stabilization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter_partial_results`<sup>Required</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```python
filter_partial_results: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identify_language`<sup>Required</sup> <a name="identify_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```python
identify_language: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `identify_multiple_languages`<sup>Required</sup> <a name="identify_multiple_languages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```python
identify_multiple_languages: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `language_model_name`<sup>Required</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```python
language_model_name: str
```

- *Type:* str

---

##### `language_options`<sup>Required</sup> <a name="language_options" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```python
language_options: str
```

- *Type:* str

---

##### `partial_results_stability`<sup>Required</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```python
partial_results_stability: str
```

- *Type:* str

---

##### `pii_entity_types`<sup>Required</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```python
pii_entity_types: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `show_speaker_label`<sup>Required</sup> <a name="show_speaker_label" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```python
show_speaker_label: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vocabulary_filter_method`<sup>Required</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```python
vocabulary_filter_method: str
```

- *Type:* str

---

##### `vocabulary_filter_name`<sup>Required</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```python
vocabulary_filter_name: str
```

- *Type:* str

---

##### `vocabulary_filter_names`<sup>Required</sup> <a name="vocabulary_filter_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```python
vocabulary_filter_names: str
```

- *Type:* str

---

##### `vocabulary_name`<sup>Required</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```python
vocabulary_name: str
```

- *Type:* str

---

##### `vocabulary_names`<sup>Required</sup> <a name="vocabulary_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```python
vocabulary_names: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget">reset_insights_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_insights_target` <a name="reset_insights_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget"></a>

```python
def reset_insights_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput">insights_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">insights_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insights_target_input`<sup>Optional</sup> <a name="insights_target_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput"></a>

```python
insights_target_input: str
```

- *Type:* str

---

##### `insights_target`<sup>Required</sup> <a name="insights_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```python
insights_target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsList <a name="ChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>]

---


### ChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration">put_amazon_transcribe_call_analytics_processor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration">put_amazon_transcribe_processor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration">put_kinesis_data_stream_sink_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration">put_s3_recording_sink_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration">reset_amazon_transcribe_call_analytics_processor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration">reset_amazon_transcribe_processor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration">reset_kinesis_data_stream_sink_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration">reset_s3_recording_sink_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_transcribe_call_analytics_processor_configuration` <a name="put_amazon_transcribe_call_analytics_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```python
def put_amazon_transcribe_call_analytics_processor_configuration(
  call_analytics_stream_categories: typing.List[str] = None,
  content_identification_type: str = None,
  content_redaction_type: str = None,
  enable_partial_results_stabilization: bool | IResolvable = None,
  filter_partial_results: bool | IResolvable = None,
  language_code: str = None,
  language_model_name: str = None,
  partial_results_stability: str = None,
  pii_entity_types: str = None,
  post_call_analytics_settings: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings = None,
  vocabulary_filter_method: str = None,
  vocabulary_filter_name: str = None,
  vocabulary_name: str = None
) -> None
```

###### `call_analytics_stream_categories`<sup>Optional</sup> <a name="call_analytics_stream_categories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.callAnalyticsStreamCategories"></a>

- *Type:* typing.List[str]

The categories to send to the insights target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories ChimeMediaInsightsPipelineConfiguration#call_analytics_stream_categories}

---

###### `content_identification_type`<sup>Optional</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.contentIdentificationType"></a>

- *Type:* str

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

###### `content_redaction_type`<sup>Optional</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.contentRedactionType"></a>

- *Type:* str

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

###### `enable_partial_results_stabilization`<sup>Optional</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.enablePartialResultsStabilization"></a>

- *Type:* bool | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

###### `filter_partial_results`<sup>Optional</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.filterPartialResults"></a>

- *Type:* bool | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.languageCode"></a>

- *Type:* str

The language code in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

###### `language_model_name`<sup>Optional</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.languageModelName"></a>

- *Type:* str

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

###### `partial_results_stability`<sup>Optional</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.partialResultsStability"></a>

- *Type:* str

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

###### `pii_entity_types`<sup>Optional</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.piiEntityTypes"></a>

- *Type:* str

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

###### `post_call_analytics_settings`<sup>Optional</sup> <a name="post_call_analytics_settings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.postCallAnalyticsSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}.

---

###### `vocabulary_filter_method`<sup>Optional</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.vocabularyFilterMethod"></a>

- *Type:* str

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

###### `vocabulary_filter_name`<sup>Optional</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.vocabularyFilterName"></a>

- *Type:* str

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

###### `vocabulary_name`<sup>Optional</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.vocabularyName"></a>

- *Type:* str

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

##### `put_amazon_transcribe_processor_configuration` <a name="put_amazon_transcribe_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration"></a>

```python
def put_amazon_transcribe_processor_configuration(
  content_identification_type: str = None,
  content_redaction_type: str = None,
  enable_partial_results_stabilization: bool | IResolvable = None,
  filter_partial_results: bool | IResolvable = None,
  identify_language: bool | IResolvable = None,
  identify_multiple_languages: bool | IResolvable = None,
  language_code: str = None,
  language_model_name: str = None,
  language_options: str = None,
  partial_results_stability: str = None,
  pii_entity_types: str = None,
  preferred_language: str = None,
  show_speaker_label: bool | IResolvable = None,
  vocabulary_filter_method: str = None,
  vocabulary_filter_name: str = None,
  vocabulary_filter_names: str = None,
  vocabulary_name: str = None,
  vocabulary_names: str = None
) -> None
```

###### `content_identification_type`<sup>Optional</sup> <a name="content_identification_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.contentIdentificationType"></a>

- *Type:* str

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

###### `content_redaction_type`<sup>Optional</sup> <a name="content_redaction_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.contentRedactionType"></a>

- *Type:* str

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

###### `enable_partial_results_stabilization`<sup>Optional</sup> <a name="enable_partial_results_stabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.enablePartialResultsStabilization"></a>

- *Type:* bool | cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

###### `filter_partial_results`<sup>Optional</sup> <a name="filter_partial_results" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.filterPartialResults"></a>

- *Type:* bool | cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

###### `identify_language`<sup>Optional</sup> <a name="identify_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.identifyLanguage"></a>

- *Type:* bool | cdktn.IResolvable

Turns language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language ChimeMediaInsightsPipelineConfiguration#identify_language}

---

###### `identify_multiple_languages`<sup>Optional</sup> <a name="identify_multiple_languages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.identifyMultipleLanguages"></a>

- *Type:* bool | cdktn.IResolvable

Turns multiple language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages ChimeMediaInsightsPipelineConfiguration#identify_multiple_languages}

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.languageCode"></a>

- *Type:* str

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

###### `language_model_name`<sup>Optional</sup> <a name="language_model_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.languageModelName"></a>

- *Type:* str

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

###### `language_options`<sup>Optional</sup> <a name="language_options" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.languageOptions"></a>

- *Type:* str

The language options for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#language_options ChimeMediaInsightsPipelineConfiguration#language_options}

---

###### `partial_results_stability`<sup>Optional</sup> <a name="partial_results_stability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.partialResultsStability"></a>

- *Type:* str

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

###### `pii_entity_types`<sup>Optional</sup> <a name="pii_entity_types" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.piiEntityTypes"></a>

- *Type:* str

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

###### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.preferredLanguage"></a>

- *Type:* str

The preferred language for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language ChimeMediaInsightsPipelineConfiguration#preferred_language}

---

###### `show_speaker_label`<sup>Optional</sup> <a name="show_speaker_label" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.showSpeakerLabel"></a>

- *Type:* bool | cdktn.IResolvable

Enables speaker partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label ChimeMediaInsightsPipelineConfiguration#show_speaker_label}

---

###### `vocabulary_filter_method`<sup>Optional</sup> <a name="vocabulary_filter_method" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.vocabularyFilterMethod"></a>

- *Type:* str

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

###### `vocabulary_filter_name`<sup>Optional</sup> <a name="vocabulary_filter_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.vocabularyFilterName"></a>

- *Type:* str

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

###### `vocabulary_filter_names`<sup>Optional</sup> <a name="vocabulary_filter_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.vocabularyFilterNames"></a>

- *Type:* str

The names of the custom vocabulary filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_names}

---

###### `vocabulary_name`<sup>Optional</sup> <a name="vocabulary_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.vocabularyName"></a>

- *Type:* str

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

###### `vocabulary_names`<sup>Optional</sup> <a name="vocabulary_names" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.vocabularyNames"></a>

- *Type:* str

The names of the custom vocabularies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names ChimeMediaInsightsPipelineConfiguration#vocabulary_names}

---

##### `put_kinesis_data_stream_sink_configuration` <a name="put_kinesis_data_stream_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration"></a>

```python
def put_kinesis_data_stream_sink_configuration(
  insights_target: str = None
) -> None
```

###### `insights_target`<sup>Optional</sup> <a name="insights_target" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration.parameter.insightsTarget"></a>

- *Type:* str

The ARN of the Kinesis Data Stream sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target ChimeMediaInsightsPipelineConfiguration#insights_target}

---

##### `put_s3_recording_sink_configuration` <a name="put_s3_recording_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration"></a>

```python
def put_s3_recording_sink_configuration(
  destination: str = None,
  recording_file_format: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration.parameter.destination"></a>

- *Type:* str

The default URI of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#destination ChimeMediaInsightsPipelineConfiguration#destination}

---

###### `recording_file_format`<sup>Optional</sup> <a name="recording_file_format" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration.parameter.recordingFileFormat"></a>

- *Type:* str

The recording file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format ChimeMediaInsightsPipelineConfiguration#recording_file_format}

---

##### `reset_amazon_transcribe_call_analytics_processor_configuration` <a name="reset_amazon_transcribe_call_analytics_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```python
def reset_amazon_transcribe_call_analytics_processor_configuration() -> None
```

##### `reset_amazon_transcribe_processor_configuration` <a name="reset_amazon_transcribe_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration"></a>

```python
def reset_amazon_transcribe_processor_configuration() -> None
```

##### `reset_kinesis_data_stream_sink_configuration` <a name="reset_kinesis_data_stream_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration"></a>

```python
def reset_kinesis_data_stream_sink_configuration() -> None
```

##### `reset_s3_recording_sink_configuration` <a name="reset_s3_recording_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration"></a>

```python
def reset_s3_recording_sink_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazon_transcribe_call_analytics_processor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">amazon_transcribe_processor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">kinesis_data_stream_sink_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">s3_recording_sink_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput">amazon_transcribe_call_analytics_processor_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput">amazon_transcribe_processor_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput">kinesis_data_stream_sink_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput">s3_recording_sink_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_transcribe_call_analytics_processor_configuration`<sup>Required</sup> <a name="amazon_transcribe_call_analytics_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```python
amazon_transcribe_call_analytics_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `amazon_transcribe_processor_configuration`<sup>Required</sup> <a name="amazon_transcribe_processor_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```python
amazon_transcribe_processor_configuration: ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `kinesis_data_stream_sink_configuration`<sup>Required</sup> <a name="kinesis_data_stream_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```python
kinesis_data_stream_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `s3_recording_sink_configuration`<sup>Required</sup> <a name="s3_recording_sink_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```python
s3_recording_sink_configuration: ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `amazon_transcribe_call_analytics_processor_configuration_input`<sup>Optional</sup> <a name="amazon_transcribe_call_analytics_processor_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput"></a>

```python
amazon_transcribe_call_analytics_processor_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `amazon_transcribe_processor_configuration_input`<sup>Optional</sup> <a name="amazon_transcribe_processor_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput"></a>

```python
amazon_transcribe_processor_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `kinesis_data_stream_sink_configuration_input`<sup>Optional</sup> <a name="kinesis_data_stream_sink_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput"></a>

```python
kinesis_data_stream_sink_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `s3_recording_sink_configuration_input`<sup>Optional</sup> <a name="s3_recording_sink_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput"></a>

```python
s3_recording_sink_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat">reset_recording_file_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_recording_file_format` <a name="reset_recording_file_format" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat"></a>

```python
def reset_recording_file_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput">recording_file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">recording_file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `recording_file_format_input`<sup>Optional</sup> <a name="recording_file_format_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput"></a>

```python
recording_file_format_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `recording_file_format`<sup>Required</sup> <a name="recording_file_format" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```python
recording_file_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```python
rules: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords">reset_keywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_keywords` <a name="reset_keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords"></a>

```python
def reset_keywords() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput">keywords_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">keywords</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">negate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keywords_input`<sup>Optional</sup> <a name="keywords_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput"></a>

```python
keywords_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```python
keywords: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>]

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration">put_issue_detection_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration">put_keyword_match_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration">put_sentiment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration">reset_issue_detection_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration">reset_keyword_match_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration">reset_sentiment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_issue_detection_configuration` <a name="put_issue_detection_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration"></a>

```python
def put_issue_detection_configuration(
  rule_name: str = None
) -> None
```

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration.parameter.ruleName"></a>

- *Type:* str

The name of the issue detection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `put_keyword_match_configuration` <a name="put_keyword_match_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration"></a>

```python
def put_keyword_match_configuration(
  keywords: typing.List[str] = None,
  negate: bool | IResolvable = None,
  rule_name: str = None
) -> None
```

###### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.keywords"></a>

- *Type:* typing.List[str]

The keywords or phrases to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#keywords ChimeMediaInsightsPipelineConfiguration#keywords}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.negate"></a>

- *Type:* bool | cdktn.IResolvable

Matches keywords on their presence or absence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#negate ChimeMediaInsightsPipelineConfiguration#negate}

---

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.ruleName"></a>

- *Type:* str

The name of the keyword match rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `put_sentiment_configuration` <a name="put_sentiment_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration"></a>

```python
def put_sentiment_configuration(
  rule_name: str = None,
  sentiment_type: str = None,
  time_period: typing.Union[int, float] = None
) -> None
```

###### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.ruleName"></a>

- *Type:* str

The name of the sentiment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

###### `sentiment_type`<sup>Optional</sup> <a name="sentiment_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.sentimentType"></a>

- *Type:* str

The type of sentiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type ChimeMediaInsightsPipelineConfiguration#sentiment_type}

---

###### `time_period`<sup>Optional</sup> <a name="time_period" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.timePeriod"></a>

- *Type:* typing.Union[int, float]

The analysis interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_media_insights_pipeline_configuration#time_period ChimeMediaInsightsPipelineConfiguration#time_period}

---

##### `reset_issue_detection_configuration` <a name="reset_issue_detection_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration"></a>

```python
def reset_issue_detection_configuration() -> None
```

##### `reset_keyword_match_configuration` <a name="reset_keyword_match_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration"></a>

```python
def reset_keyword_match_configuration() -> None
```

##### `reset_sentiment_configuration` <a name="reset_sentiment_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration"></a>

```python
def reset_sentiment_configuration() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">issue_detection_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">keyword_match_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">sentiment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput">issue_detection_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput">keyword_match_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput">sentiment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issue_detection_configuration`<sup>Required</sup> <a name="issue_detection_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```python
issue_detection_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `keyword_match_configuration`<sup>Required</sup> <a name="keyword_match_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```python
keyword_match_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `sentiment_configuration`<sup>Required</sup> <a name="sentiment_configuration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```python
sentiment_configuration: ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `issue_detection_configuration_input`<sup>Optional</sup> <a name="issue_detection_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput"></a>

```python
issue_detection_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `keyword_match_configuration_input`<sup>Optional</sup> <a name="keyword_match_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput"></a>

```python
keyword_match_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `sentiment_configuration_input`<sup>Optional</sup> <a name="sentiment_configuration_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput"></a>

```python
sentiment_configuration_input: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType">reset_sentiment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod">reset_time_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_sentiment_type` <a name="reset_sentiment_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType"></a>

```python
def reset_sentiment_type() -> None
```

##### `reset_time_period` <a name="reset_time_period" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod"></a>

```python
def reset_time_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput">sentiment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput">time_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">sentiment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">time_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `sentiment_type_input`<sup>Optional</sup> <a name="sentiment_type_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput"></a>

```python
sentiment_type_input: str
```

- *Type:* str

---

##### `time_period_input`<sup>Optional</sup> <a name="time_period_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput"></a>

```python
time_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `sentiment_type`<sup>Required</sup> <a name="sentiment_type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```python
sentiment_type: str
```

- *Type:* str

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```python
time_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationTagsList <a name="ChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeMediaInsightsPipelineConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>]

---


### ChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_media_insights_pipeline_configuration

chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeMediaInsightsPipelineConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>

---



