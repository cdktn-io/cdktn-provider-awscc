# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktn/provider-awscc.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version awscc_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: LambdaLayerVersionContent,
  compatible_architectures: typing.List[str] = None,
  compatible_runtimes: typing.List[str] = None,
  description: str = None,
  layer_name: str = None,
  license_info: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | The function layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | A list of compatible instruction set architectures. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName">layer_name</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo">license_info</a></code> | <code>str</code> | The layer's software license. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

The function layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#content LambdaLayerVersion#content}

---

##### `compatible_architectures`<sup>Optional</sup> <a name="compatible_architectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures"></a>

- *Type:* typing.List[str]

A list of compatible instruction set architectures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}

---

##### `compatible_runtimes`<sup>Optional</sup> <a name="compatible_runtimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes"></a>

- *Type:* typing.List[str]

A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description"></a>

- *Type:* str

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}

---

##### `layer_name`<sup>Optional</sup> <a name="layer_name" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* str

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo"></a>

- *Type:* str

The layer's software license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">reset_compatible_architectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">reset_compatible_runtimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName">reset_layer_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">reset_license_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent"></a>

```python
def put_content(
  s3_bucket: str,
  s3_key: str,
  s3_object_storage_mode: str = None,
  s3_object_version: str = None
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.s3Bucket"></a>

- *Type:* str

The Amazon S3 bucket of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}

---

###### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.s3Key"></a>

- *Type:* str

The Amazon S3 key of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}

---

###### `s3_object_storage_mode`<sup>Optional</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.s3ObjectStorageMode"></a>

- *Type:* str

Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_storage_mode LambdaLayerVersion#s3_object_storage_mode}

---

###### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.s3ObjectVersion"></a>

- *Type:* str

For versioned objects, the version of the layer archive object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}

---

##### `reset_compatible_architectures` <a name="reset_compatible_architectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```python
def reset_compatible_architectures() -> None
```

##### `reset_compatible_runtimes` <a name="reset_compatible_runtimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```python
def reset_compatible_runtimes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_layer_name` <a name="reset_layer_name" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName"></a>

```python
def reset_layer_name() -> None
```

##### `reset_license_info` <a name="reset_license_info" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```python
def reset_license_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaLayerVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaLayerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn">layer_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatible_architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatible_runtimes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">license_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">license_info</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content"></a>

```python
content: LambdaLayerVersionContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `layer_version_arn`<sup>Required</sup> <a name="layer_version_arn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn"></a>

```python
layer_version_arn: str
```

- *Type:* str

---

##### `compatible_architectures_input`<sup>Optional</sup> <a name="compatible_architectures_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```python
compatible_architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_runtimes_input`<sup>Optional</sup> <a name="compatible_runtimes_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```python
compatible_runtimes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput"></a>

```python
content_input: IResolvable | LambdaLayerVersionContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `layer_name_input`<sup>Optional</sup> <a name="layer_name_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```python
layer_name_input: str
```

- *Type:* str

---

##### `license_info_input`<sup>Optional</sup> <a name="license_info_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```python
license_info_input: str
```

- *Type:* str

---

##### `compatible_architectures`<sup>Required</sup> <a name="compatible_architectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```python
compatible_architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_runtimes`<sup>Required</sup> <a name="compatible_runtimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```python
compatible_runtimes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

---

##### `license_info`<sup>Required</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: LambdaLayerVersionContent,
  compatible_architectures: typing.List[str] = None,
  compatible_runtimes: typing.List[str] = None,
  description: str = None,
  layer_name: str = None,
  license_info: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | The function layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | A list of compatible instruction set architectures. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>str</code> | The description of the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layer_name</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">license_info</a></code> | <code>str</code> | The layer's software license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content"></a>

```python
content: LambdaLayerVersionContent
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

The function layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#content LambdaLayerVersion#content}

---

##### `compatible_architectures`<sup>Optional</sup> <a name="compatible_architectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```python
compatible_architectures: typing.List[str]
```

- *Type:* typing.List[str]

A list of compatible instruction set architectures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}

---

##### `compatible_runtimes`<sup>Optional</sup> <a name="compatible_runtimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```python
compatible_runtimes: typing.List[str]
```

- *Type:* typing.List[str]

A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}

---

##### `layer_name`<sup>Optional</sup> <a name="layer_name" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

The layer's software license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}

---

### LambdaLayerVersionContent <a name="LambdaLayerVersionContent" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersionContent(
  s3_bucket: str,
  s3_key: str,
  s3_object_storage_mode: str = None,
  s3_object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The Amazon S3 bucket of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key">s3_key</a></code> | <code>str</code> | The Amazon S3 key of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode">s3_object_storage_mode</a></code> | <code>str</code> | Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE). |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | For versioned objects, the version of the layer archive object to use. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The Amazon S3 bucket of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

The Amazon S3 key of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}

---

##### `s3_object_storage_mode`<sup>Optional</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode"></a>

```python
s3_object_storage_mode: str
```

- *Type:* str

Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_storage_mode LambdaLayerVersion#s3_object_storage_mode}

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

For versioned objects, the version of the layer archive object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaLayerVersionContentOutputReference <a name="LambdaLayerVersionContentOutputReference" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersionContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode">reset_s3_object_storage_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_object_storage_mode` <a name="reset_s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode"></a>

```python
def reset_s3_object_storage_mode() -> None
```

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput">s3_object_storage_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode">s3_object_storage_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_storage_mode_input`<sup>Optional</sup> <a name="s3_object_storage_mode_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput"></a>

```python
s3_object_storage_mode_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_storage_mode`<sup>Required</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode"></a>

```python
s3_object_storage_mode: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaLayerVersionContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---



