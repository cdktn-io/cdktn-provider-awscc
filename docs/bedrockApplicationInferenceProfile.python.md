# `bedrockApplicationInferenceProfile` Submodule <a name="`bedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockApplicationInferenceProfile <a name="BedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inference_profile_name: str,
  description: str = None,
  model_source: BedrockApplicationInferenceProfileModelSource = None,
  tags: IResolvable | typing.List[BedrockApplicationInferenceProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.inferenceProfileName">inference_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the inference profile. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.modelSource">model_source</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | Various ways to encode a list of models in a CreateInferenceProfile request. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]</code> | List of Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inference_profile_name`<sup>Required</sup> <a name="inference_profile_name" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.inferenceProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.description"></a>

- *Type:* str

Description of the inference profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#description BedrockApplicationInferenceProfile#description}

---

##### `model_source`<sup>Optional</sup> <a name="model_source" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.modelSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

Various ways to encode a list of models in a CreateInferenceProfile request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#model_source BedrockApplicationInferenceProfile#model_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#tags BedrockApplicationInferenceProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource">put_model_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource">reset_model_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_model_source` <a name="put_model_source" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource"></a>

```python
def put_model_source(
  copy_from: str = None
) -> None
```

###### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource.parameter.copyFrom"></a>

- *Type:* str

Source arns for a custom inference profile to copy its regional load balancing config from.

This
can either be a foundation model or predefined inference profile ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#copy_from BedrockApplicationInferenceProfile#copy_from}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockApplicationInferenceProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_model_source` <a name="reset_model_source" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource"></a>

```python
def reset_model_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockApplicationInferenceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn">inference_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId">inference_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">inference_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource">model_source</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput">inference_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput">model_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName">inference_profile_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_profile_arn`<sup>Required</sup> <a name="inference_profile_arn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```python
inference_profile_arn: str
```

- *Type:* str

---

##### `inference_profile_id`<sup>Required</sup> <a name="inference_profile_id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```python
inference_profile_id: str
```

- *Type:* str

---

##### `inference_profile_identifier`<sup>Required</sup> <a name="inference_profile_identifier" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```python
inference_profile_identifier: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models"></a>

```python
models: BedrockApplicationInferenceProfileModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a>

---

##### `model_source`<sup>Required</sup> <a name="model_source" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource"></a>

```python
model_source: BedrockApplicationInferenceProfileModelSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags"></a>

```python
tags: BedrockApplicationInferenceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inference_profile_name_input`<sup>Optional</sup> <a name="inference_profile_name_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput"></a>

```python
inference_profile_name_input: str
```

- *Type:* str

---

##### `model_source_input`<sup>Optional</sup> <a name="model_source_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput"></a>

```python
model_source_input: IResolvable | BedrockApplicationInferenceProfileModelSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockApplicationInferenceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inference_profile_name`<sup>Required</sup> <a name="inference_profile_name" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```python
inference_profile_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockApplicationInferenceProfileConfig <a name="BedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inference_profile_name: str,
  description: str = None,
  model_source: BedrockApplicationInferenceProfileModelSource = None,
  tags: IResolvable | typing.List[BedrockApplicationInferenceProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName">inference_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description">description</a></code> | <code>str</code> | Description of the inference profile. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource">model_source</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | Various ways to encode a list of models in a CreateInferenceProfile request. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]</code> | List of Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inference_profile_name`<sup>Required</sup> <a name="inference_profile_name" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName"></a>

```python
inference_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the inference profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#description BedrockApplicationInferenceProfile#description}

---

##### `model_source`<sup>Optional</sup> <a name="model_source" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource"></a>

```python
model_source: BedrockApplicationInferenceProfileModelSource
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

Various ways to encode a list of models in a CreateInferenceProfile request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#model_source BedrockApplicationInferenceProfile#model_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockApplicationInferenceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#tags BedrockApplicationInferenceProfile#tags}

---

### BedrockApplicationInferenceProfileModels <a name="BedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels()
```


### BedrockApplicationInferenceProfileModelSource <a name="BedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource(
  copy_from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom">copy_from</a></code> | <code>str</code> | Source arns for a custom inference profile to copy its regional load balancing config from. |

---

##### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

Source arns for a custom inference profile to copy its regional load balancing config from.

This
can either be a foundation model or predefined inference profile ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#copy_from BedrockApplicationInferenceProfile#copy_from}

---

### BedrockApplicationInferenceProfileTags <a name="BedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key">key</a></code> | <code>str</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value">value</a></code> | <code>str</code> | Tag Value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#key BedrockApplicationInferenceProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_application_inference_profile#value BedrockApplicationInferenceProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockApplicationInferenceProfileModelsList <a name="BedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockApplicationInferenceProfileModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockApplicationInferenceProfileModelSourceOutputReference <a name="BedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom">reset_copy_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_copy_from` <a name="reset_copy_from" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom"></a>

```python
def reset_copy_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput">copy_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">copy_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_from_input`<sup>Optional</sup> <a name="copy_from_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput"></a>

```python
copy_from_input: str
```

- *Type:* str

---

##### `copy_from`<sup>Required</sup> <a name="copy_from" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockApplicationInferenceProfileModelSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---


### BedrockApplicationInferenceProfileModelsOutputReference <a name="BedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockApplicationInferenceProfileModels
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a>

---


### BedrockApplicationInferenceProfileTagsList <a name="BedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockApplicationInferenceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockApplicationInferenceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>]

---


### BedrockApplicationInferenceProfileTagsOutputReference <a name="BedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_application_inference_profile

bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockApplicationInferenceProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>

---



