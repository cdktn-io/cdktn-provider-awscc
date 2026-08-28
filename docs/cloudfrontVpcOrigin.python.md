# `cloudfrontVpcOrigin` Submodule <a name="`cloudfrontVpcOrigin` Submodule" id="@cdktn/provider-awscc.cloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontVpcOrigin <a name="CloudfrontVpcOrigin" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOrigin(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_origin_endpoint_config: CloudfrontVpcOriginVpcOriginEndpointConfig,
  tags: IResolvable | typing.List[CloudfrontVpcOriginTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.vpcOriginEndpointConfig">vpc_origin_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | The VPC origin endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_origin_endpoint_config`<sup>Required</sup> <a name="vpc_origin_endpoint_config" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.vpcOriginEndpointConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>

The VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig">put_vpc_origin_endpoint_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudfrontVpcOriginTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]

---

##### `put_vpc_origin_endpoint_config` <a name="put_vpc_origin_endpoint_config" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig"></a>

```python
def put_vpc_origin_endpoint_config(
  arn: str,
  name: str,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  ip_address_type: str = None,
  origin_protocol_policy: str = None,
  origin_ssl_protocols: typing.List[str] = None
) -> None
```

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.arn"></a>

- *Type:* str

The ARN of the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.name"></a>

- *Type:* str

The name of the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}

---

###### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.httpPort"></a>

- *Type:* typing.Union[int, float]

The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is ``80``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}

---

###### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.httpsPort"></a>

- *Type:* typing.Union[int, float]

The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is ``443``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#ip_address_type CloudfrontVpcOrigin#ip_address_type}.

---

###### `origin_protocol_policy`<sup>Optional</sup> <a name="origin_protocol_policy" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.originProtocolPolicy"></a>

- *Type:* str

The origin protocol policy for the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}

---

###### `origin_ssl_protocols`<sup>Optional</sup> <a name="origin_ssl_protocols" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.originSslProtocols"></a>

- *Type:* typing.List[str]

Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS.

Valid values include `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOrigin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOrigin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOrigin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOrigin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontVpcOrigin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList">CloudfrontVpcOriginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig">vpc_origin_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginId">vpc_origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput">vpc_origin_endpoint_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags"></a>

```python
tags: CloudfrontVpcOriginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList">CloudfrontVpcOriginTagsList</a>

---

##### `vpc_origin_endpoint_config`<sup>Required</sup> <a name="vpc_origin_endpoint_config" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```python
vpc_origin_endpoint_config: CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a>

---

##### `vpc_origin_id`<sup>Required</sup> <a name="vpc_origin_id" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginId"></a>

```python
vpc_origin_id: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudfrontVpcOriginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]

---

##### `vpc_origin_endpoint_config_input`<sup>Optional</sup> <a name="vpc_origin_endpoint_config_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput"></a>

```python
vpc_origin_endpoint_config_input: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontVpcOriginConfig <a name="CloudfrontVpcOriginConfig" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_origin_endpoint_config: CloudfrontVpcOriginVpcOriginEndpointConfig,
  tags: IResolvable | typing.List[CloudfrontVpcOriginTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig">vpc_origin_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | The VPC origin endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_origin_endpoint_config`<sup>Required</sup> <a name="vpc_origin_endpoint_config" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig"></a>

```python
vpc_origin_endpoint_config: CloudfrontVpcOriginVpcOriginEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>

The VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudfrontVpcOriginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}

---

### CloudfrontVpcOriginTags <a name="CloudfrontVpcOriginTags" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags.property.key">key</a></code> | <code>str</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags.property.value">value</a></code> | <code>str</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

### CloudfrontVpcOriginVpcOriginEndpointConfig <a name="CloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig(
  arn: str,
  name: str,
  http_port: typing.Union[int, float] = None,
  https_port: typing.Union[int, float] = None,
  ip_address_type: str = None,
  origin_protocol_policy: str = None,
  origin_ssl_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn">arn</a></code> | <code>str</code> | The ARN of the CloudFront VPC origin endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name">name</a></code> | <code>str</code> | The name of the CloudFront VPC origin endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is ``80``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is ``443``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#ip_address_type CloudfrontVpcOrigin#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy">origin_protocol_policy</a></code> | <code>str</code> | The origin protocol policy for the CloudFront VPC origin endpoint configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols">origin_ssl_protocols</a></code> | <code>typing.List[str]</code> | Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}

---

##### `http_port`<sup>Optional</sup> <a name="http_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is ``80``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}

---

##### `https_port`<sup>Optional</sup> <a name="https_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is ``443``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#ip_address_type CloudfrontVpcOrigin#ip_address_type}.

---

##### `origin_protocol_policy`<sup>Optional</sup> <a name="origin_protocol_policy" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy"></a>

```python
origin_protocol_policy: str
```

- *Type:* str

The origin protocol policy for the CloudFront VPC origin endpoint configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}

---

##### `origin_ssl_protocols`<sup>Optional</sup> <a name="origin_ssl_protocols" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols"></a>

```python
origin_ssl_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS.

Valid values include `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontVpcOriginTagsList <a name="CloudfrontVpcOriginTagsList" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontVpcOriginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontVpcOriginTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>]

---


### CloudfrontVpcOriginTagsOutputReference <a name="CloudfrontVpcOriginTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontVpcOriginTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginTags">CloudfrontVpcOriginTags</a>

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_vpc_origin

cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetHttpPort">reset_http_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetHttpsPort">reset_https_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginProtocolPolicy">reset_origin_protocol_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols">reset_origin_ssl_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_port` <a name="reset_http_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetHttpPort"></a>

```python
def reset_http_port() -> None
```

##### `reset_https_port` <a name="reset_https_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetHttpsPort"></a>

```python
def reset_https_port() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_origin_protocol_policy` <a name="reset_origin_protocol_policy" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginProtocolPolicy"></a>

```python
def reset_origin_protocol_policy() -> None
```

##### `reset_origin_ssl_protocols` <a name="reset_origin_ssl_protocols" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols"></a>

```python
def reset_origin_ssl_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput">http_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput">https_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput">origin_protocol_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput">origin_ssl_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">origin_protocol_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">origin_ssl_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `http_port_input`<sup>Optional</sup> <a name="http_port_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput"></a>

```python
http_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port_input`<sup>Optional</sup> <a name="https_port_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput"></a>

```python
https_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `origin_protocol_policy_input`<sup>Optional</sup> <a name="origin_protocol_policy_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput"></a>

```python
origin_protocol_policy_input: str
```

- *Type:* str

---

##### `origin_ssl_protocols_input`<sup>Optional</sup> <a name="origin_ssl_protocols_input" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput"></a>

```python
origin_ssl_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin_protocol_policy`<sup>Required</sup> <a name="origin_protocol_policy" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```python
origin_protocol_policy: str
```

- *Type:* str

---

##### `origin_ssl_protocols`<sup>Required</sup> <a name="origin_ssl_protocols" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```python
origin_ssl_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>

---



