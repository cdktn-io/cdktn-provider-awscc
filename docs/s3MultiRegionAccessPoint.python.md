# `s3MultiRegionAccessPoint` Submodule <a name="`s3MultiRegionAccessPoint` Submodule" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3MultiRegionAccessPoint <a name="S3MultiRegionAccessPoint" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point awscc_s3_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  regions: IResolvable | typing.List[S3MultiRegionAccessPointRegions],
  name: str = None,
  public_access_block_configuration: S3MultiRegionAccessPointPublicAccessBlockConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.regions">regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]</code> | The list of buckets that you want to associate this Multi Region Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name you want to assign to this Multi Region Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.regions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]

The list of buckets that you want to associate this Multi Region Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#regions S3MultiRegionAccessPoint#regions}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.name"></a>

- *Type:* str

The name you want to assign to this Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#name S3MultiRegionAccessPoint#name}

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.Initializer.parameter.publicAccessBlockConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point.

You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#public_access_block_configuration S3MultiRegionAccessPoint#public_access_block_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration">put_public_access_block_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions">put_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetPublicAccessBlockConfiguration">reset_public_access_block_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_public_access_block_configuration` <a name="put_public_access_block_configuration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration"></a>

```python
def put_public_access_block_configuration(
  block_public_acls: bool | IResolvable = None,
  block_public_policy: bool | IResolvable = None,
  ignore_public_acls: bool | IResolvable = None,
  restrict_public_buckets: bool | IResolvable = None
) -> None
```

###### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicAcls"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#block_public_acls S3MultiRegionAccessPoint#block_public_acls}

---

###### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicPolicy"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#block_public_policy S3MultiRegionAccessPoint#block_public_policy}

---

###### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration.parameter.ignorePublicAcls"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#ignore_public_acls S3MultiRegionAccessPoint#ignore_public_acls}

---

###### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putPublicAccessBlockConfiguration.parameter.restrictPublicBuckets"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#restrict_public_buckets S3MultiRegionAccessPoint#restrict_public_buckets}

---

##### `put_regions` <a name="put_regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions"></a>

```python
def put_regions(
  value: IResolvable | typing.List[S3MultiRegionAccessPointRegions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.putRegions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_public_access_block_configuration` <a name="reset_public_access_block_configuration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.resetPublicAccessBlockConfiguration"></a>

```python
def reset_public_access_block_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3MultiRegionAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3MultiRegionAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3MultiRegionAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList">S3MultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfigurationInput">public_access_block_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regionsInput">regions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_access_block_configuration`<sup>Required</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regions"></a>

```python
regions: S3MultiRegionAccessPointRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList">S3MultiRegionAccessPointRegionsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_access_block_configuration_input`<sup>Optional</sup> <a name="public_access_block_configuration_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.publicAccessBlockConfigurationInput"></a>

```python
public_access_block_configuration_input: IResolvable | S3MultiRegionAccessPointPublicAccessBlockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.regionsInput"></a>

```python
regions_input: IResolvable | typing.List[S3MultiRegionAccessPointRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3MultiRegionAccessPointConfig <a name="S3MultiRegionAccessPointConfig" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  regions: IResolvable | typing.List[S3MultiRegionAccessPointRegions],
  name: str = None,
  public_access_block_configuration: S3MultiRegionAccessPointPublicAccessBlockConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.regions">regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]</code> | The list of buckets that you want to associate this Multi Region Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.name">name</a></code> | <code>str</code> | The name you want to assign to this Multi Region Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.regions"></a>

```python
regions: IResolvable | typing.List[S3MultiRegionAccessPointRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]

The list of buckets that you want to associate this Multi Region Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#regions S3MultiRegionAccessPoint#regions}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name you want to assign to this Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#name S3MultiRegionAccessPoint#name}

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointConfig.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3MultiRegionAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point.

You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#public_access_block_configuration S3MultiRegionAccessPoint#public_access_block_configuration}

---

### S3MultiRegionAccessPointPublicAccessBlockConfiguration <a name="S3MultiRegionAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration(
  block_public_acls: bool | IResolvable = None,
  block_public_policy: bool | IResolvable = None,
  ignore_public_acls: bool | IResolvable = None,
  restrict_public_buckets: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">block_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">block_public_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public bucket policies for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should restrict public bucket policies for this bucket. |

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```python
block_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#block_public_acls S3MultiRegionAccessPoint#block_public_acls}

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```python
block_public_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#block_public_policy S3MultiRegionAccessPoint#block_public_policy}

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```python
ignore_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#ignore_public_acls S3MultiRegionAccessPoint#ignore_public_acls}

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#restrict_public_buckets S3MultiRegionAccessPoint#restrict_public_buckets}

---

### S3MultiRegionAccessPointRegions <a name="S3MultiRegionAccessPointRegions" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions(
  bucket: str,
  bucket_account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#bucket S3MultiRegionAccessPoint#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#bucket_account_id S3MultiRegionAccessPoint#bucket_account_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#bucket S3MultiRegionAccessPoint#bucket}.

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_multi_region_access_point#bucket_account_id S3MultiRegionAccessPoint#bucket_account_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">reset_block_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">reset_block_public_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">reset_ignore_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">reset_restrict_public_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_public_acls` <a name="reset_block_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```python
def reset_block_public_acls() -> None
```

##### `reset_block_public_policy` <a name="reset_block_public_policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```python
def reset_block_public_policy() -> None
```

##### `reset_ignore_public_acls` <a name="reset_ignore_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```python
def reset_ignore_public_acls() -> None
```

##### `reset_restrict_public_buckets` <a name="reset_restrict_public_buckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```python
def reset_restrict_public_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">block_public_acls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">block_public_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">ignore_public_acls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">restrict_public_buckets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls_input`<sup>Optional</sup> <a name="block_public_acls_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```python
block_public_acls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_policy_input`<sup>Optional</sup> <a name="block_public_policy_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```python
block_public_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_public_acls_input`<sup>Optional</sup> <a name="ignore_public_acls_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```python
ignore_public_acls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `restrict_public_buckets_input`<sup>Optional</sup> <a name="restrict_public_buckets_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```python
restrict_public_buckets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3MultiRegionAccessPointPublicAccessBlockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointPublicAccessBlockConfiguration">S3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---


### S3MultiRegionAccessPointRegionsList <a name="S3MultiRegionAccessPointRegionsList" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3MultiRegionAccessPointRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3MultiRegionAccessPointRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>]

---


### S3MultiRegionAccessPointRegionsOutputReference <a name="S3MultiRegionAccessPointRegionsOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_multi_region_access_point

s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resetBucketAccountId">reset_bucket_account_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_account_id` <a name="reset_bucket_account_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.resetBucketAccountId"></a>

```python
def reset_bucket_account_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountIdInput">bucket_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_account_id_input`<sup>Optional</sup> <a name="bucket_account_id_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountIdInput"></a>

```python
bucket_account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3MultiRegionAccessPointRegions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPoint.S3MultiRegionAccessPointRegions">S3MultiRegionAccessPointRegions</a>

---



