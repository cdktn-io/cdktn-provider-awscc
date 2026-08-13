# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktn/provider-awscc.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails,
  output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails,
  provider_name: str,
  version: str,
  configuration_properties: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties] = None,
  settings: CodepipelineCustomActionTypeSettings = None,
  tags: IResolvable | typing.List[CodepipelineCustomActionTypeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.category">category</a></code> | <code>str</code> | The category of the custom action, such as a build action or a test action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | The details of the input artifact for the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | The details of the output artifact of the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | The provider of the service used in the custom action, such as AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.version">version</a></code> | <code>str</code> | The version identifier of the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.configurationProperties">configuration_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]</code> | The configuration properties for the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | URLs that provide users information about this custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]</code> | Any tags assigned to the custom action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.category"></a>

- *Type:* str

The category of the custom action, such as a build action or a test action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.inputArtifactDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

The details of the input artifact for the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.outputArtifactDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

The details of the output artifact of the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.providerName"></a>

- *Type:* str

The provider of the service used in the custom action, such as AWS CodeDeploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.version"></a>

- *Type:* str

The version identifier of the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}

---

##### `configuration_properties`<sup>Optional</sup> <a name="configuration_properties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.configurationProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]

The configuration properties for the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#configuration_properties CodepipelineCustomActionType#configuration_properties}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

URLs that provide users information about this custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]

Any tags assigned to the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties">put_configuration_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">put_input_artifact_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">put_output_artifact_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties">reset_configuration_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration_properties` <a name="put_configuration_properties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties"></a>

```python
def put_configuration_properties(
  value: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]

---

##### `put_input_artifact_details` <a name="put_input_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```python
def put_input_artifact_details(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
) -> None
```

###### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.maximumCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

###### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.minimumCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

##### `put_output_artifact_details` <a name="put_output_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```python
def put_output_artifact_details(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
) -> None
```

###### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.maximumCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

###### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.minimumCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```python
def put_settings(
  entity_url_template: str = None,
  execution_url_template: str = None,
  revision_url_template: str = None,
  third_party_configuration_url: str = None
) -> None
```

###### `entity_url_template`<sup>Optional</sup> <a name="entity_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.entityUrlTemplate"></a>

- *Type:* str

The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.

This link is provided as part of the action display in the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}

---

###### `execution_url_template`<sup>Optional</sup> <a name="execution_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.executionUrlTemplate"></a>

- *Type:* str

The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy.

This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}

---

###### `revision_url_template`<sup>Optional</sup> <a name="revision_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.revisionUrlTemplate"></a>

- *Type:* str

The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}

---

###### `third_party_configuration_url`<sup>Optional</sup> <a name="third_party_configuration_url" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.thirdPartyConfigurationUrl"></a>

- *Type:* str

The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodepipelineCustomActionTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]

---

##### `reset_configuration_properties` <a name="reset_configuration_properties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties"></a>

```python
def reset_configuration_properties() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodepipelineCustomActionType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodepipelineCustomActionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineCustomActionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties">configuration_properties</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId">custom_action_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput">configuration_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">input_artifact_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">output_artifact_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_properties`<sup>Required</sup> <a name="configuration_properties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties"></a>

```python
configuration_properties: CodepipelineCustomActionTypeConfigurationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a>

---

##### `custom_action_type_id`<sup>Required</sup> <a name="custom_action_type_id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId"></a>

```python
custom_action_type_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```python
input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```python
output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```python
settings: CodepipelineCustomActionTypeSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```python
tags: CodepipelineCustomActionTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `configuration_properties_input`<sup>Optional</sup> <a name="configuration_properties_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput"></a>

```python
configuration_properties_input: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]

---

##### `input_artifact_details_input`<sup>Optional</sup> <a name="input_artifact_details_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```python
input_artifact_details_input: IResolvable | CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `output_artifact_details_input`<sup>Optional</sup> <a name="output_artifact_details_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```python
output_artifact_details_input: IResolvable | CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```python
settings_input: IResolvable | CodepipelineCustomActionTypeSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodepipelineCustomActionTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails,
  output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails,
  provider_name: str,
  version: str,
  configuration_properties: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties] = None,
  settings: CodepipelineCustomActionTypeSettings = None,
  tags: IResolvable | typing.List[CodepipelineCustomActionTypeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">category</a></code> | <code>str</code> | The category of the custom action, such as a build action or a test action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">input_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | The details of the input artifact for the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">output_artifact_details</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | The details of the output artifact of the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">provider_name</a></code> | <code>str</code> | The provider of the service used in the custom action, such as AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">version</a></code> | <code>str</code> | The version identifier of the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties">configuration_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]</code> | The configuration properties for the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | URLs that provide users information about this custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]</code> | Any tags assigned to the custom action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```python
category: str
```

- *Type:* str

The category of the custom action, such as a build action or a test action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}

---

##### `input_artifact_details`<sup>Required</sup> <a name="input_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```python
input_artifact_details: CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

The details of the input artifact for the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `output_artifact_details`<sup>Required</sup> <a name="output_artifact_details" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```python
output_artifact_details: CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

The details of the output artifact of the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

The provider of the service used in the custom action, such as AWS CodeDeploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version identifier of the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}

---

##### `configuration_properties`<sup>Optional</sup> <a name="configuration_properties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties"></a>

```python
configuration_properties: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]

The configuration properties for the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#configuration_properties CodepipelineCustomActionType#configuration_properties}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```python
settings: CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

URLs that provide users information about this custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodepipelineCustomActionTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]

Any tags assigned to the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}

---

### CodepipelineCustomActionTypeConfigurationProperties <a name="CodepipelineCustomActionTypeConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties(
  description: str = None,
  key: bool | IResolvable = None,
  name: str = None,
  queryable: bool | IResolvable = None,
  required: bool | IResolvable = None,
  secret: bool | IResolvable = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description">description</a></code> | <code>str</code> | The description of the action configuration property that is displayed to users. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key">key</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the configuration property is a key. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name">name</a></code> | <code>str</code> | The name of the action configuration property. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable">queryable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the property is used with PollForJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the configuration property is a required value. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret">secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type">type</a></code> | <code>str</code> | The type of the configuration property. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the action configuration property that is displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key"></a>

```python
key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the configuration property is a key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the action configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}

---

##### `queryable`<sup>Optional</sup> <a name="queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable"></a>

```python
queryable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the property is used with PollForJobs.

When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the configuration property is a required value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret"></a>

```python
secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of artifacts allowed for the action type. |

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails(
  maximum_count: typing.Union[int, float],
  minimum_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of artifacts allowed for the action type. |

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeSettings(
  entity_url_template: str = None,
  execution_url_template: str = None,
  revision_url_template: str = None,
  third_party_configuration_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">entity_url_template</a></code> | <code>str</code> | The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">execution_url_template</a></code> | <code>str</code> | The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">revision_url_template</a></code> | <code>str</code> | The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">third_party_configuration_url</a></code> | <code>str</code> | The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service. |

---

##### `entity_url_template`<sup>Optional</sup> <a name="entity_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```python
entity_url_template: str
```

- *Type:* str

The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.

This link is provided as part of the action display in the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}

---

##### `execution_url_template`<sup>Optional</sup> <a name="execution_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```python
execution_url_template: str
```

- *Type:* str

The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy.

This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}

---

##### `revision_url_template`<sup>Optional</sup> <a name="revision_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```python
revision_url_template: str
```

- *Type:* str

The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}

---

##### `third_party_configuration_url`<sup>Optional</sup> <a name="third_party_configuration_url" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```python
third_party_configuration_url: str
```

- *Type:* str

The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}

---

### CodepipelineCustomActionTypeTags <a name="CodepipelineCustomActionTypeTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertiesList <a name="CodepipelineCustomActionTypeConfigurationPropertiesList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineCustomActionTypeConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodepipelineCustomActionTypeConfigurationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>]

---


### CodepipelineCustomActionTypeConfigurationPropertiesOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable">reset_queryable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_queryable` <a name="reset_queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable"></a>

```python
def reset_queryable() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput">key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput">queryable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput">secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key">key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable">queryable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret">secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput"></a>

```python
key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queryable_input`<sup>Optional</sup> <a name="queryable_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput"></a>

```python
queryable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput"></a>

```python
secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key"></a>

```python
key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queryable`<sup>Required</sup> <a name="queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable"></a>

```python
queryable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret"></a>

```python
secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineCustomActionTypeConfigurationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">maximum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">minimum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count_input`<sup>Optional</sup> <a name="maximum_count_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```python
maximum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count_input`<sup>Optional</sup> <a name="minimum_count_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```python
minimum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">maximum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">minimum_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">maximum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">minimum_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_count_input`<sup>Optional</sup> <a name="maximum_count_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```python
maximum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count_input`<sup>Optional</sup> <a name="minimum_count_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```python
minimum_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_count`<sup>Required</sup> <a name="maximum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```python
maximum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_count`<sup>Required</sup> <a name="minimum_count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```python
minimum_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">reset_entity_url_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">reset_execution_url_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">reset_revision_url_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">reset_third_party_configuration_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_url_template` <a name="reset_entity_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```python
def reset_entity_url_template() -> None
```

##### `reset_execution_url_template` <a name="reset_execution_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```python
def reset_execution_url_template() -> None
```

##### `reset_revision_url_template` <a name="reset_revision_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```python
def reset_revision_url_template() -> None
```

##### `reset_third_party_configuration_url` <a name="reset_third_party_configuration_url" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```python
def reset_third_party_configuration_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">entity_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">execution_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">revision_url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">third_party_configuration_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">entity_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">execution_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">revision_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">third_party_configuration_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_url_template_input`<sup>Optional</sup> <a name="entity_url_template_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```python
entity_url_template_input: str
```

- *Type:* str

---

##### `execution_url_template_input`<sup>Optional</sup> <a name="execution_url_template_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```python
execution_url_template_input: str
```

- *Type:* str

---

##### `revision_url_template_input`<sup>Optional</sup> <a name="revision_url_template_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```python
revision_url_template_input: str
```

- *Type:* str

---

##### `third_party_configuration_url_input`<sup>Optional</sup> <a name="third_party_configuration_url_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```python
third_party_configuration_url_input: str
```

- *Type:* str

---

##### `entity_url_template`<sup>Required</sup> <a name="entity_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```python
entity_url_template: str
```

- *Type:* str

---

##### `execution_url_template`<sup>Required</sup> <a name="execution_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```python
execution_url_template: str
```

- *Type:* str

---

##### `revision_url_template`<sup>Required</sup> <a name="revision_url_template" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```python
revision_url_template: str
```

- *Type:* str

---

##### `third_party_configuration_url`<sup>Required</sup> <a name="third_party_configuration_url" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```python
third_party_configuration_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineCustomActionTypeSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---


### CodepipelineCustomActionTypeTagsList <a name="CodepipelineCustomActionTypeTagsList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineCustomActionTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodepipelineCustomActionTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>]

---


### CodepipelineCustomActionTypeTagsOutputReference <a name="CodepipelineCustomActionTypeTagsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codepipeline_custom_action_type

codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodepipelineCustomActionTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>

---



