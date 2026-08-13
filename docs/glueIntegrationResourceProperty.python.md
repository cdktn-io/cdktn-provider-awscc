# `glueIntegrationResourceProperty` Submodule <a name="`glueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.glueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegrationResourceProperty <a name="GlueIntegrationResourceProperty" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourceProperty(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  source_processing_properties: GlueIntegrationResourcePropertySourceProcessingProperties = None,
  tags: IResolvable | typing.List[GlueIntegrationResourcePropertyTags] = None,
  target_processing_properties: GlueIntegrationResourcePropertyTargetProcessingProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.sourceProcessingProperties">source_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.targetProcessingProperties">target_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.resourceArn"></a>

- *Type:* str

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `source_processing_properties`<sup>Optional</sup> <a name="source_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.sourceProcessingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `target_processing_properties`<sup>Optional</sup> <a name="target_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.targetProcessingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties">put_source_processing_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties">put_target_processing_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties">reset_source_processing_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties">reset_target_processing_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source_processing_properties` <a name="put_source_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties"></a>

```python
def put_source_processing_properties(
  role_arn: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties.parameter.roleArn"></a>

- *Type:* str

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GlueIntegrationResourcePropertyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]

---

##### `put_target_processing_properties` <a name="put_target_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties"></a>

```python
def put_target_processing_properties(
  connection_name: str = None,
  event_bus_arn: str = None,
  kms_arn: str = None,
  role_arn: str = None
) -> None
```

###### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.connectionName"></a>

- *Type:* str

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

###### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.eventBusArn"></a>

- *Type:* str

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

###### `kms_arn`<sup>Optional</sup> <a name="kms_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.kmsArn"></a>

- *Type:* str

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.roleArn"></a>

- *Type:* str

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

##### `reset_source_processing_properties` <a name="reset_source_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties"></a>

```python
def reset_source_processing_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_processing_properties` <a name="reset_target_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties"></a>

```python
def reset_target_processing_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueIntegrationResourceProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn">resource_property_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties">source_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties">target_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput">source_processing_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput">target_processing_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_property_arn`<sup>Required</sup> <a name="resource_property_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```python
resource_property_arn: str
```

- *Type:* str

---

##### `source_processing_properties`<sup>Required</sup> <a name="source_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```python
source_processing_properties: GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags"></a>

```python
tags: GlueIntegrationResourcePropertyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a>

---

##### `target_processing_properties`<sup>Required</sup> <a name="target_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```python
target_processing_properties: GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `source_processing_properties_input`<sup>Optional</sup> <a name="source_processing_properties_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput"></a>

```python
source_processing_properties_input: IResolvable | GlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GlueIntegrationResourcePropertyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]

---

##### `target_processing_properties_input`<sup>Optional</sup> <a name="target_processing_properties_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput"></a>

```python
target_processing_properties_input: IResolvable | GlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationResourcePropertyConfig <a name="GlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  source_processing_properties: GlueIntegrationResourcePropertySourceProcessingProperties = None,
  tags: IResolvable | typing.List[GlueIntegrationResourcePropertyTags] = None,
  target_processing_properties: GlueIntegrationResourcePropertyTargetProcessingProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties">source_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties">target_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `source_processing_properties`<sup>Optional</sup> <a name="source_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties"></a>

```python
source_processing_properties: GlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GlueIntegrationResourcePropertyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `target_processing_properties`<sup>Optional</sup> <a name="target_processing_properties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties"></a>

```python
target_processing_properties: GlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

### GlueIntegrationResourcePropertySourceProcessingProperties <a name="GlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties(
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM role to access the Glue connection. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

### GlueIntegrationResourcePropertyTags <a name="GlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#key GlueIntegrationResourceProperty#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#value GlueIntegrationResourceProperty#value}

---

### GlueIntegrationResourcePropertyTargetProcessingProperties <a name="GlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties(
  connection_name: str = None,
  event_bus_arn: str = None,
  kms_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName">connection_name</a></code> | <code>str</code> | The Glue network connection to configure the Glue job running in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | The ARN of an Eventbridge event bus to receive the integration status notification. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn">kms_arn</a></code> | <code>str</code> | The ARN of the KMS key used for encryption. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM role to access the Glue database. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

##### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

##### `kms_arn`<sup>Optional</sup> <a name="kms_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### GlueIntegrationResourcePropertyTagsList <a name="GlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueIntegrationResourcePropertyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>]

---


### GlueIntegrationResourcePropertyTagsOutputReference <a name="GlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueIntegrationResourcePropertyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>

---


### GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_integration_resource_property

glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn">reset_event_bus_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn">reset_kms_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_event_bus_arn` <a name="reset_event_bus_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn"></a>

```python
def reset_event_bus_arn() -> None
```

##### `reset_kms_arn` <a name="reset_kms_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn"></a>

```python
def reset_kms_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput">kms_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `kms_arn_input`<sup>Optional</sup> <a name="kms_arn_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput"></a>

```python
kms_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



