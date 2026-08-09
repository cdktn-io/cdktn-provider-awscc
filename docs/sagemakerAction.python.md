# `sagemakerAction` Submodule <a name="`sagemakerAction` Submodule" id="@cdktn/provider-awscc.sagemakerAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAction <a name="SagemakerAction" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action awscc_sagemaker_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_name: str,
  action_type: str,
  source: SagemakerActionSource,
  description: str = None,
  metadata_properties: SagemakerActionMetadataProperties = None,
  properties: typing.Mapping[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[SagemakerActionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.actionName">action_name</a></code> | <code>str</code> | The name of the action. Must be unique to your account in an AWS Region. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.actionType">action_type</a></code> | <code>str</code> | The action type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a></code> | The source type, ID, and URI. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A list of properties to add to the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]</code> | A list of tags to apply to the action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.actionName"></a>

- *Type:* str

The name of the action. Must be unique to your account in an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#action_name SagemakerAction#action_name}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.actionType"></a>

- *Type:* str

The action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#action_type SagemakerAction#action_type}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a>

The source type, ID, and URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source SagemakerAction#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.description"></a>

- *Type:* str

The description of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#description SagemakerAction#description}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.metadataProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#metadata_properties SagemakerAction#metadata_properties}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A list of properties to add to the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#properties SagemakerAction#properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.status"></a>

- *Type:* str

The status of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#status SagemakerAction#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]

A list of tags to apply to the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#tags SagemakerAction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties">put_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetMetadataProperties">reset_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata_properties` <a name="put_metadata_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties"></a>

```python
def put_metadata_properties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
) -> None
```

###### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties.parameter.commitId"></a>

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#commit_id SagemakerAction#commit_id}

---

###### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties.parameter.generatedBy"></a>

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#generated_by SagemakerAction#generated_by}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties.parameter.projectId"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#project_id SagemakerAction#project_id}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putMetadataProperties.parameter.repository"></a>

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#repository SagemakerAction#repository}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putSource"></a>

```python
def put_source(
  source_uri: str,
  source_id: str = None,
  source_type: str = None
) -> None
```

###### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putSource.parameter.sourceUri"></a>

- *Type:* str

The URI of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_uri SagemakerAction#source_uri}

---

###### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putSource.parameter.sourceId"></a>

- *Type:* str

The ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_id SagemakerAction#source_id}

---

###### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putSource.parameter.sourceType"></a>

- *Type:* str

The type of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_type SagemakerAction#source_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerActionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metadata_properties` <a name="reset_metadata_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetMetadataProperties"></a>

```python
def reset_metadata_properties() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference">SagemakerActionMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference">SagemakerActionSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList">SagemakerActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.metadataPropertiesInput">metadata_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `metadata_properties`<sup>Required</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.metadataProperties"></a>

```python
metadata_properties: SagemakerActionMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference">SagemakerActionMetadataPropertiesOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.source"></a>

```python
source: SagemakerActionSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference">SagemakerActionSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tags"></a>

```python
tags: SagemakerActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList">SagemakerActionTagsList</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metadata_properties_input`<sup>Optional</sup> <a name="metadata_properties_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.metadataPropertiesInput"></a>

```python
metadata_properties_input: IResolvable | SagemakerActionMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.sourceInput"></a>

```python
source_input: IResolvable | SagemakerActionSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAction.SagemakerAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerActionConfig <a name="SagemakerActionConfig" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_name: str,
  action_type: str,
  source: SagemakerActionSource,
  description: str = None,
  metadata_properties: SagemakerActionMetadataProperties = None,
  properties: typing.Mapping[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[SagemakerActionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.actionName">action_name</a></code> | <code>str</code> | The name of the action. Must be unique to your account in an AWS Region. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.actionType">action_type</a></code> | <code>str</code> | The action type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a></code> | The source type, ID, and URI. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.description">description</a></code> | <code>str</code> | The description of the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A list of properties to add to the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.status">status</a></code> | <code>str</code> | The status of the action. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]</code> | A list of tags to apply to the action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

The name of the action. Must be unique to your account in an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#action_name SagemakerAction#action_name}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

The action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#action_type SagemakerAction#action_type}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.source"></a>

```python
source: SagemakerActionSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a>

The source type, ID, and URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source SagemakerAction#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#description SagemakerAction#description}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.metadataProperties"></a>

```python
metadata_properties: SagemakerActionMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#metadata_properties SagemakerAction#metadata_properties}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of properties to add to the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#properties SagemakerAction#properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#status SagemakerAction#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]

A list of tags to apply to the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#tags SagemakerAction#tags}

---

### SagemakerActionMetadataProperties <a name="SagemakerActionMetadataProperties" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionMetadataProperties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.commitId">commit_id</a></code> | <code>str</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.generatedBy">generated_by</a></code> | <code>str</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.projectId">project_id</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.repository">repository</a></code> | <code>str</code> | The repository. |

---

##### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#commit_id SagemakerAction#commit_id}

---

##### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#generated_by SagemakerAction#generated_by}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#project_id SagemakerAction#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#repository SagemakerAction#repository}

---

### SagemakerActionSource <a name="SagemakerActionSource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionSource(
  source_uri: str,
  source_id: str = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceUri">source_uri</a></code> | <code>str</code> | The URI of the source. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceId">source_id</a></code> | <code>str</code> | The ID of the source. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceType">source_type</a></code> | <code>str</code> | The type of the source. |

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

The URI of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_uri SagemakerAction#source_uri}

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

The ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_id SagemakerAction#source_id}

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

The type of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#source_type SagemakerAction#source_type}

---

### SagemakerActionTags <a name="SagemakerActionTags" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#key SagemakerAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_action#value SagemakerAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerActionMetadataPropertiesOutputReference <a name="SagemakerActionMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionMetadataPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetCommitId">reset_commit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetGeneratedBy">reset_generated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_id` <a name="reset_commit_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetCommitId"></a>

```python
def reset_commit_id() -> None
```

##### `reset_generated_by` <a name="reset_generated_by" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```python
def reset_generated_by() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.commitIdInput">commit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.generatedByInput">generated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.generatedBy">generated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id_input`<sup>Optional</sup> <a name="commit_id_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.commitIdInput"></a>

```python
commit_id_input: str
```

- *Type:* str

---

##### `generated_by_input`<sup>Optional</sup> <a name="generated_by_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.generatedByInput"></a>

```python
generated_by_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `generated_by`<sup>Required</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerActionMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionMetadataProperties">SagemakerActionMetadataProperties</a>

---


### SagemakerActionSourceOutputReference <a name="SagemakerActionSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_id` <a name="reset_source_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.resetSourceType"></a>

```python
def reset_source_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceUriInput">source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceUri">source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `source_uri_input`<sup>Optional</sup> <a name="source_uri_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceUriInput"></a>

```python
source_uri_input: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerActionSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionSource">SagemakerActionSource</a>

---


### SagemakerActionTagsList <a name="SagemakerActionTagsList" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>]

---


### SagemakerActionTagsOutputReference <a name="SagemakerActionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_action

sagemakerAction.SagemakerActionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAction.SagemakerActionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerActionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAction.SagemakerActionTags">SagemakerActionTags</a>

---



