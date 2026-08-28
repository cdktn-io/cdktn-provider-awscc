# `imagebuilderDistributionConfiguration` Submodule <a name="`imagebuilderDistributionConfiguration` Submodule" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderDistributionConfiguration <a name="ImagebuilderDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  distributions: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions],
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.distributions">distributions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]</code> | The distributions of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `distributions`<sup>Required</sup> <a name="distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.distributions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]

The distributions of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#distributions ImagebuilderDistributionConfiguration#distributions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.name"></a>

- *Type:* str

The name of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.description"></a>

- *Type:* str

The description of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions">put_distributions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_distributions` <a name="put_distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions"></a>

```python
def put_distributions(
  value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistributions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderDistributionConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderDistributionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderDistributionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributions">distributions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList">ImagebuilderDistributionConfigurationDistributionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionsInput">distributions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `distributions`<sup>Required</sup> <a name="distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributions"></a>

```python
distributions: ImagebuilderDistributionConfigurationDistributionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList">ImagebuilderDistributionConfigurationDistributionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distributions_input`<sup>Optional</sup> <a name="distributions_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionsInput"></a>

```python
distributions_input: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderDistributionConfigurationConfig <a name="ImagebuilderDistributionConfigurationConfig" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  distributions: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions],
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distributions">distributions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]</code> | The distributions of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name">name</a></code> | <code>str</code> | The name of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description">description</a></code> | <code>str</code> | The description of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `distributions`<sup>Required</sup> <a name="distributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distributions"></a>

```python
distributions: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]

The distributions of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#distributions ImagebuilderDistributionConfiguration#distributions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}

---

### ImagebuilderDistributionConfigurationDistributions <a name="ImagebuilderDistributionConfigurationDistributions" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions(
  region: str,
  ami_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration = None,
  container_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration = None,
  fast_launch_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations] = None,
  launch_template_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations] = None,
  license_configuration_arns: typing.List[str] = None,
  ssm_parameter_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.region">region</a></code> | <code>str</code> | region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.amiDistributionConfiguration">ami_distribution_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | The specific AMI settings (for example, launch permissions, AMI tags). |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.containerDistributionConfiguration">container_distribution_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | Container distribution settings for encryption, licensing, and sharing in a specific Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.fastLaunchConfigurations">fast_launch_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]</code> | The Windows faster-launching configurations to use for AMI distribution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.launchTemplateConfigurations">launch_template_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]</code> | A group of launchTemplateConfiguration settings that apply to image distribution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.licenseConfigurationArns">license_configuration_arns</a></code> | <code>typing.List[str]</code> | The License Manager Configuration to associate with the AMI in the specified Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.ssmParameterConfigurations">ssm_parameter_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]</code> | The SSM parameter configurations to use for AMI distribution. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.region"></a>

```python
region: str
```

- *Type:* str

region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}

---

##### `ami_distribution_configuration`<sup>Optional</sup> <a name="ami_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.amiDistributionConfiguration"></a>

```python
ami_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

The specific AMI settings (for example, launch permissions, AMI tags).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}

---

##### `container_distribution_configuration`<sup>Optional</sup> <a name="container_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.containerDistributionConfiguration"></a>

```python
container_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

Container distribution settings for encryption, licensing, and sharing in a specific Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}

---

##### `fast_launch_configurations`<sup>Optional</sup> <a name="fast_launch_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.fastLaunchConfigurations"></a>

```python
fast_launch_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]

The Windows faster-launching configurations to use for AMI distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#fast_launch_configurations ImagebuilderDistributionConfiguration#fast_launch_configurations}

---

##### `launch_template_configurations`<sup>Optional</sup> <a name="launch_template_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.launchTemplateConfigurations"></a>

```python
launch_template_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]

A group of launchTemplateConfiguration settings that apply to image distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_configurations ImagebuilderDistributionConfiguration#launch_template_configurations}

---

##### `license_configuration_arns`<sup>Optional</sup> <a name="license_configuration_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.licenseConfigurationArns"></a>

```python
license_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

The License Manager Configuration to associate with the AMI in the specified Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}

---

##### `ssm_parameter_configurations`<sup>Optional</sup> <a name="ssm_parameter_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions.property.ssmParameterConfigurations"></a>

```python
ssm_parameter_configurations: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]

The SSM parameter configurations to use for AMI distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#ssm_parameter_configurations ImagebuilderDistributionConfiguration#ssm_parameter_configurations}

---

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration(
  ami_tags: typing.Mapping[str] = None,
  description: str = None,
  kms_key_id: str = None,
  launch_permission_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration = None,
  name: str = None,
  target_account_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.amiTags">ami_tags</a></code> | <code>typing.Mapping[str]</code> | The tags to apply to AMIs distributed to this Region. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.description">description</a></code> | <code>str</code> | The description of the AMI distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key identifier used to encrypt the distributed image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.launchPermissionConfiguration">launch_permission_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.name">name</a></code> | <code>str</code> | The name of the AMI distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.targetAccountIds">target_account_ids</a></code> | <code>typing.List[str]</code> | The ID of accounts to which you want to distribute an image. |

---

##### `ami_tags`<sup>Optional</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.amiTags"></a>

```python
ami_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags to apply to AMIs distributed to this Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS key identifier used to encrypt the distributed image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}

---

##### `launch_permission_configuration`<sup>Optional</sup> <a name="launch_permission_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.launchPermissionConfiguration"></a>

```python
launch_permission_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_permission_configuration ImagebuilderDistributionConfiguration#launch_permission_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

##### `target_account_ids`<sup>Optional</sup> <a name="target_account_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.property.targetAccountIds"></a>

```python
target_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of accounts to which you want to distribute an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}

---

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration(
  organizational_unit_arns: typing.List[str] = None,
  organization_arns: typing.List[str] = None,
  user_groups: typing.List[str] = None,
  user_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationalUnitArns">organizational_unit_arns</a></code> | <code>typing.List[str]</code> | The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationArns">organization_arns</a></code> | <code>typing.List[str]</code> | The ARN for an Amazon Web Services Organization that you want to share your AMI with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userGroups">user_groups</a></code> | <code>typing.List[str]</code> | The name of the group. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | The AWS account ID. |

---

##### `organizational_unit_arns`<sup>Optional</sup> <a name="organizational_unit_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationalUnitArns"></a>

```python
organizational_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}

---

##### `organization_arns`<sup>Optional</sup> <a name="organization_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.organizationArns"></a>

```python
organization_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARN for an Amazon Web Services Organization that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}

---

##### `user_groups`<sup>Optional</sup> <a name="user_groups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userGroups"></a>

```python
user_groups: typing.List[str]
```

- *Type:* typing.List[str]

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}

---

### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration(
  container_tags: typing.List[str] = None,
  description: str = None,
  target_repository: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | Tags that are attached to the container distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.description">description</a></code> | <code>str</code> | The description of the container distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | The destination repository for the container distribution configuration. |

---

##### `container_tags`<sup>Optional</sup> <a name="container_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags that are attached to the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

##### `target_repository`<sup>Optional</sup> <a name="target_repository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.property.targetRepository"></a>

```python
target_repository: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

The destination repository for the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}

---

### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository(
  repository_name: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.repositoryName">repository_name</a></code> | <code>str</code> | The repository name of target container repository. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.service">service</a></code> | <code>str</code> | The service of target container repository. |

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

The repository name of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.property.service"></a>

```python
service: str
```

- *Type:* str

The service of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations(
  account_id: str = None,
  enabled: bool | IResolvable = None,
  launch_template: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate = None,
  max_parallel_launches: typing.Union[int, float] = None,
  snapshot_configuration: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.accountId">account_id</a></code> | <code>str</code> | The owner account ID for the fast-launch enabled Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean that represents the current state of faster launching for the Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.maxParallelLaunches">max_parallel_launches</a></code> | <code>typing.Union[int, float]</code> | The maximum number of parallel instances that are launched for creating resources. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.snapshotConfiguration">snapshot_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The owner account ID for the fast-launch enabled Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean that represents the current state of faster launching for the Windows AMI.

Set to true to start using Windows faster launching, or false to stop using it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.launchTemplate"></a>

```python
launch_template: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template ImagebuilderDistributionConfiguration#launch_template}

---

##### `max_parallel_launches`<sup>Optional</sup> <a name="max_parallel_launches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.maxParallelLaunches"></a>

```python
max_parallel_launches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of parallel instances that are launched for creating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}

---

##### `snapshot_configuration`<sup>Optional</sup> <a name="snapshot_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.property.snapshotConfiguration"></a>

```python
snapshot_configuration: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#snapshot_configuration ImagebuilderDistributionConfiguration#snapshot_configuration}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate(
  launch_template_id: str = None,
  launch_template_name: str = None,
  launch_template_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | The ID of the launch template to use for faster launching for a Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | The name of the launch template to use for faster launching for a Windows AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateVersion">launch_template_version</a></code> | <code>str</code> | The version of the launch template to use for faster launching for a Windows AMI. |

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

The ID of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}

---

##### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

The name of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}

---

##### `launch_template_version`<sup>Optional</sup> <a name="launch_template_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.property.launchTemplateVersion"></a>

```python
launch_template_version: str
```

- *Type:* str

The version of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}

---

### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration(
  target_resource_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.property.targetResourceCount">target_resource_count</a></code> | <code>typing.Union[int, float]</code> | The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI. |

---

##### `target_resource_count`<sup>Optional</sup> <a name="target_resource_count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.property.targetResourceCount"></a>

```python
target_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}

---

### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations(
  account_id: str = None,
  launch_template_id: str = None,
  set_default_version: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.accountId">account_id</a></code> | <code>str</code> | The account ID that this configuration applies to. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | Identifies the EC2 launch template to use. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.setDefaultVersion">set_default_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Set the specified EC2 launch template as the default launch template for the specified account. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account ID that this configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

Identifies the EC2 launch template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}

---

##### `set_default_version`<sup>Optional</sup> <a name="set_default_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.property.setDefaultVersion"></a>

```python
set_default_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set the specified EC2 launch template as the default launch template for the specified account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#set_default_version ImagebuilderDistributionConfiguration#set_default_version}

---

### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations(
  ami_account_id: str = None,
  data_type: str = None,
  parameter_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.amiAccountId">ami_account_id</a></code> | <code>str</code> | The account ID for the AMI to update the parameter with. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.dataType">data_type</a></code> | <code>str</code> | The data type of the SSM parameter. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the SSM parameter. |

---

##### `ami_account_id`<sup>Optional</sup> <a name="ami_account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.amiAccountId"></a>

```python
ami_account_id: str
```

- *Type:* str

The account ID for the AMI to update the parameter with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#ami_account_id ImagebuilderDistributionConfiguration#ami_account_id}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The data type of the SSM parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#data_type ImagebuilderDistributionConfiguration#data_type}

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the SSM parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#parameter_name ImagebuilderDistributionConfiguration#parameter_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationalUnitArns">reset_organizational_unit_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationArns">reset_organization_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserGroups">reset_user_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserIds">reset_user_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_organizational_unit_arns` <a name="reset_organizational_unit_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationalUnitArns"></a>

```python
def reset_organizational_unit_arns() -> None
```

##### `reset_organization_arns` <a name="reset_organization_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetOrganizationArns"></a>

```python
def reset_organization_arns() -> None
```

##### `reset_user_groups` <a name="reset_user_groups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserGroups"></a>

```python
def reset_user_groups() -> None
```

##### `reset_user_ids` <a name="reset_user_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resetUserIds"></a>

```python
def reset_user_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArnsInput">organizational_unit_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArnsInput">organization_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroupsInput">user_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIdsInput">user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns">organizational_unit_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns">organization_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups">user_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizational_unit_arns_input`<sup>Optional</sup> <a name="organizational_unit_arns_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArnsInput"></a>

```python
organizational_unit_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_arns_input`<sup>Optional</sup> <a name="organization_arns_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArnsInput"></a>

```python
organization_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_groups_input`<sup>Optional</sup> <a name="user_groups_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroupsInput"></a>

```python
user_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_ids_input`<sup>Optional</sup> <a name="user_ids_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIdsInput"></a>

```python
user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_unit_arns`<sup>Required</sup> <a name="organizational_unit_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns"></a>

```python
organizational_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_arns`<sup>Required</sup> <a name="organization_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns"></a>

```python
organization_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_groups`<sup>Required</sup> <a name="user_groups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups"></a>

```python
user_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration">put_launch_permission_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetAmiTags">reset_ami_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetLaunchPermissionConfiguration">reset_launch_permission_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetTargetAccountIds">reset_target_account_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_launch_permission_configuration` <a name="put_launch_permission_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration"></a>

```python
def put_launch_permission_configuration(
  organizational_unit_arns: typing.List[str] = None,
  organization_arns: typing.List[str] = None,
  user_groups: typing.List[str] = None,
  user_ids: typing.List[str] = None
) -> None
```

###### `organizational_unit_arns`<sup>Optional</sup> <a name="organizational_unit_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration.parameter.organizationalUnitArns"></a>

- *Type:* typing.List[str]

The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}

---

###### `organization_arns`<sup>Optional</sup> <a name="organization_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration.parameter.organizationArns"></a>

- *Type:* typing.List[str]

The ARN for an Amazon Web Services Organization that you want to share your AMI with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}

---

###### `user_groups`<sup>Optional</sup> <a name="user_groups" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration.parameter.userGroups"></a>

- *Type:* typing.List[str]

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}

---

###### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.putLaunchPermissionConfiguration.parameter.userIds"></a>

- *Type:* typing.List[str]

The AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}

---

##### `reset_ami_tags` <a name="reset_ami_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetAmiTags"></a>

```python
def reset_ami_tags() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_launch_permission_configuration` <a name="reset_launch_permission_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetLaunchPermissionConfiguration"></a>

```python
def reset_launch_permission_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_target_account_ids` <a name="reset_target_account_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resetTargetAccountIds"></a>

```python
def reset_target_account_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration">launch_permission_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTagsInput">ami_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfigurationInput">launch_permission_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput">target_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags">ami_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds">target_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_permission_configuration`<sup>Required</sup> <a name="launch_permission_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration"></a>

```python
launch_permission_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a>

---

##### `ami_tags_input`<sup>Optional</sup> <a name="ami_tags_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTagsInput"></a>

```python
ami_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `launch_permission_configuration_input`<sup>Optional</sup> <a name="launch_permission_configuration_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfigurationInput"></a>

```python
launch_permission_configuration_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_account_ids_input`<sup>Optional</sup> <a name="target_account_ids_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput"></a>

```python
target_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ami_tags`<sup>Required</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```python
ami_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_account_ids`<sup>Required</sup> <a name="target_account_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```python
target_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository">put_target_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetContainerTags">reset_container_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetTargetRepository">reset_target_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_repository` <a name="put_target_repository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository"></a>

```python
def put_target_repository(
  repository_name: str = None,
  service: str = None
) -> None
```

###### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository.parameter.repositoryName"></a>

- *Type:* str

The repository name of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.putTargetRepository.parameter.service"></a>

- *Type:* str

The service of target container repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}

---

##### `reset_container_tags` <a name="reset_container_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetContainerTags"></a>

```python
def reset_container_tags() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_target_repository` <a name="reset_target_repository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resetTargetRepository"></a>

```python
def reset_target_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTagsInput">container_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepositoryInput">target_repository_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```python
target_repository: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `container_tags_input`<sup>Optional</sup> <a name="container_tags_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTagsInput"></a>

```python
container_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `target_repository_input`<sup>Optional</sup> <a name="target_repository_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepositoryInput"></a>

```python
target_repository_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---

##### `container_tags`<sup>Required</sup> <a name="container_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetRepositoryName">reset_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateName">reset_launch_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateVersion">reset_launch_template_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_launch_template_name` <a name="reset_launch_template_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```python
def reset_launch_template_name() -> None
```

##### `reset_launch_template_version` <a name="reset_launch_template_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resetLaunchTemplateVersion"></a>

```python
def reset_launch_template_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateNameInput">launch_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersionInput">launch_template_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion">launch_template_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `launch_template_name_input`<sup>Optional</sup> <a name="launch_template_name_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```python
launch_template_name_input: str
```

- *Type:* str

---

##### `launch_template_version_input`<sup>Optional</sup> <a name="launch_template_version_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersionInput"></a>

```python
launch_template_version_input: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `launch_template_version`<sup>Required</sup> <a name="launch_template_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```python
launch_template_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration">put_snapshot_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetMaxParallelLaunches">reset_max_parallel_launches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetSnapshotConfiguration">reset_snapshot_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_launch_template` <a name="put_launch_template" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate"></a>

```python
def put_launch_template(
  launch_template_id: str = None,
  launch_template_name: str = None,
  launch_template_version: str = None
) -> None
```

###### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate.parameter.launchTemplateId"></a>

- *Type:* str

The ID of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}

---

###### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate.parameter.launchTemplateName"></a>

- *Type:* str

The name of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}

---

###### `launch_template_version`<sup>Optional</sup> <a name="launch_template_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putLaunchTemplate.parameter.launchTemplateVersion"></a>

- *Type:* str

The version of the launch template to use for faster launching for a Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}

---

##### `put_snapshot_configuration` <a name="put_snapshot_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration"></a>

```python
def put_snapshot_configuration(
  target_resource_count: typing.Union[int, float] = None
) -> None
```

###### `target_resource_count`<sup>Optional</sup> <a name="target_resource_count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.putSnapshotConfiguration.parameter.targetResourceCount"></a>

- *Type:* typing.Union[int, float]

The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_max_parallel_launches` <a name="reset_max_parallel_launches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetMaxParallelLaunches"></a>

```python
def reset_max_parallel_launches() -> None
```

##### `reset_snapshot_configuration` <a name="reset_snapshot_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resetSnapshotConfiguration"></a>

```python
def reset_snapshot_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration">snapshot_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplateInput">launch_template_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunchesInput">max_parallel_launches_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfigurationInput">snapshot_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches">max_parallel_launches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate"></a>

```python
launch_template: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a>

---

##### `snapshot_configuration`<sup>Required</sup> <a name="snapshot_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration"></a>

```python
snapshot_configuration: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplateInput"></a>

```python
launch_template_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---

##### `max_parallel_launches_input`<sup>Optional</sup> <a name="max_parallel_launches_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunchesInput"></a>

```python
max_parallel_launches_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_configuration_input`<sup>Optional</sup> <a name="snapshot_configuration_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfigurationInput"></a>

```python
snapshot_configuration_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_parallel_launches`<sup>Required</sup> <a name="max_parallel_launches" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches"></a>

```python
max_parallel_launches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>

---


### ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resetTargetResourceCount">reset_target_resource_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_resource_count` <a name="reset_target_resource_count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resetTargetResourceCount"></a>

```python
def reset_target_resource_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCountInput">target_resource_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount">target_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_resource_count_input`<sup>Optional</sup> <a name="target_resource_count_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCountInput"></a>

```python
target_resource_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resource_count`<sup>Required</sup> <a name="target_resource_count" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```python
target_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]

---


### ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetSetDefaultVersion">reset_set_default_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_set_default_version` <a name="reset_set_default_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resetSetDefaultVersion"></a>

```python
def reset_set_default_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersionInput">set_default_version_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion">set_default_version</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `set_default_version_input`<sup>Optional</sup> <a name="set_default_version_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersionInput"></a>

```python
set_default_version_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `set_default_version`<sup>Required</sup> <a name="set_default_version" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion"></a>

```python
set_default_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>

---


### ImagebuilderDistributionConfigurationDistributionsList <a name="ImagebuilderDistributionConfigurationDistributionsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderDistributionConfigurationDistributionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>]

---


### ImagebuilderDistributionConfigurationDistributionsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration">put_ami_distribution_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration">put_container_distribution_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations">put_fast_launch_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations">put_launch_template_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations">put_ssm_parameter_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetAmiDistributionConfiguration">reset_ami_distribution_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetContainerDistributionConfiguration">reset_container_distribution_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetFastLaunchConfigurations">reset_fast_launch_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLaunchTemplateConfigurations">reset_launch_template_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLicenseConfigurationArns">reset_license_configuration_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetSsmParameterConfigurations">reset_ssm_parameter_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ami_distribution_configuration` <a name="put_ami_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration"></a>

```python
def put_ami_distribution_configuration(
  ami_tags: typing.Mapping[str] = None,
  description: str = None,
  kms_key_id: str = None,
  launch_permission_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration = None,
  name: str = None,
  target_account_ids: typing.List[str] = None
) -> None
```

###### `ami_tags`<sup>Optional</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.amiTags"></a>

- *Type:* typing.Mapping[str]

The tags to apply to AMIs distributed to this Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.description"></a>

- *Type:* str

The description of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

The KMS key identifier used to encrypt the distributed image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}

---

###### `launch_permission_configuration`<sup>Optional</sup> <a name="launch_permission_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.launchPermissionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#launch_permission_configuration ImagebuilderDistributionConfiguration#launch_permission_configuration}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.name"></a>

- *Type:* str

The name of the AMI distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}

---

###### `target_account_ids`<sup>Optional</sup> <a name="target_account_ids" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putAmiDistributionConfiguration.parameter.targetAccountIds"></a>

- *Type:* typing.List[str]

The ID of accounts to which you want to distribute an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}

---

##### `put_container_distribution_configuration` <a name="put_container_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration"></a>

```python
def put_container_distribution_configuration(
  container_tags: typing.List[str] = None,
  description: str = None,
  target_repository: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository = None
) -> None
```

###### `container_tags`<sup>Optional</sup> <a name="container_tags" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration.parameter.containerTags"></a>

- *Type:* typing.List[str]

Tags that are attached to the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration.parameter.description"></a>

- *Type:* str

The description of the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}

---

###### `target_repository`<sup>Optional</sup> <a name="target_repository" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putContainerDistributionConfiguration.parameter.targetRepository"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

The destination repository for the container distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}

---

##### `put_fast_launch_configurations` <a name="put_fast_launch_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations"></a>

```python
def put_fast_launch_configurations(
  value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putFastLaunchConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]

---

##### `put_launch_template_configurations` <a name="put_launch_template_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations"></a>

```python
def put_launch_template_configurations(
  value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putLaunchTemplateConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]

---

##### `put_ssm_parameter_configurations` <a name="put_ssm_parameter_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations"></a>

```python
def put_ssm_parameter_configurations(
  value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.putSsmParameterConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]

---

##### `reset_ami_distribution_configuration` <a name="reset_ami_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetAmiDistributionConfiguration"></a>

```python
def reset_ami_distribution_configuration() -> None
```

##### `reset_container_distribution_configuration` <a name="reset_container_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetContainerDistributionConfiguration"></a>

```python
def reset_container_distribution_configuration() -> None
```

##### `reset_fast_launch_configurations` <a name="reset_fast_launch_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetFastLaunchConfigurations"></a>

```python
def reset_fast_launch_configurations() -> None
```

##### `reset_launch_template_configurations` <a name="reset_launch_template_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLaunchTemplateConfigurations"></a>

```python
def reset_launch_template_configurations() -> None
```

##### `reset_license_configuration_arns` <a name="reset_license_configuration_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetLicenseConfigurationArns"></a>

```python
def reset_license_configuration_arns() -> None
```

##### `reset_ssm_parameter_configurations` <a name="reset_ssm_parameter_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.resetSsmParameterConfigurations"></a>

```python
def reset_ssm_parameter_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration">ami_distribution_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration">container_distribution_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations">fast_launch_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations">launch_template_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations">ssm_parameter_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfigurationInput">ami_distribution_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfigurationInput">container_distribution_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurationsInput">fast_launch_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurationsInput">launch_template_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArnsInput">license_configuration_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurationsInput">ssm_parameter_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns">license_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ami_distribution_configuration`<sup>Required</sup> <a name="ami_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration"></a>

```python
ami_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a>

---

##### `container_distribution_configuration`<sup>Required</sup> <a name="container_distribution_configuration" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration"></a>

```python
container_distribution_configuration: ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a>

---

##### `fast_launch_configurations`<sup>Required</sup> <a name="fast_launch_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations"></a>

```python
fast_launch_configurations: ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a>

---

##### `launch_template_configurations`<sup>Required</sup> <a name="launch_template_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations"></a>

```python
launch_template_configurations: ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a>

---

##### `ssm_parameter_configurations`<sup>Required</sup> <a name="ssm_parameter_configurations" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations"></a>

```python
ssm_parameter_configurations: ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a>

---

##### `ami_distribution_configuration_input`<sup>Optional</sup> <a name="ami_distribution_configuration_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfigurationInput"></a>

```python
ami_distribution_configuration_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---

##### `container_distribution_configuration_input`<sup>Optional</sup> <a name="container_distribution_configuration_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfigurationInput"></a>

```python
container_distribution_configuration_input: IResolvable | ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---

##### `fast_launch_configurations_input`<sup>Optional</sup> <a name="fast_launch_configurations_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurationsInput"></a>

```python
fast_launch_configurations_input: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">ImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>]

---

##### `launch_template_configurations_input`<sup>Optional</sup> <a name="launch_template_configurations_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurationsInput"></a>

```python
launch_template_configurations_input: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">ImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>]

---

##### `license_configuration_arns_input`<sup>Optional</sup> <a name="license_configuration_arns_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArnsInput"></a>

```python
license_configuration_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssm_parameter_configurations_input`<sup>Optional</sup> <a name="ssm_parameter_configurations_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurationsInput"></a>

```python
ssm_parameter_configurations_input: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]

---

##### `license_configuration_arns`<sup>Required</sup> <a name="license_configuration_arns" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns"></a>

```python
license_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributions">ImagebuilderDistributionConfigurationDistributions</a>

---


### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>]

---


### ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference <a name="ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_distribution_configuration

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetAmiAccountId">reset_ami_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ami_account_id` <a name="reset_ami_account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetAmiAccountId"></a>

```python
def reset_ami_account_id() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountIdInput">ami_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId">ami_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ami_account_id_input`<sup>Optional</sup> <a name="ami_account_id_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountIdInput"></a>

```python
ami_account_id_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `ami_account_id`<sup>Required</sup> <a name="ami_account_id" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId"></a>

```python
ami_account_id: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">ImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>

---



