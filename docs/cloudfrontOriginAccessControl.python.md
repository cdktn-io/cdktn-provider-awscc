# `cloudfrontOriginAccessControl` Submodule <a name="`cloudfrontOriginAccessControl` Submodule" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessControl <a name="CloudfrontOriginAccessControl" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  origin_access_control_config: CloudfrontOriginAccessControlOriginAccessControlConfig
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.originAccessControlConfig">origin_access_control_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | The origin access control. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `origin_access_control_config`<sup>Required</sup> <a name="origin_access_control_config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.originAccessControlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

The origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_config CloudfrontOriginAccessControl#origin_access_control_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig">put_origin_access_control_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_origin_access_control_config` <a name="put_origin_access_control_config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig"></a>

```python
def put_origin_access_control_config(
  name: str,
  origin_access_control_origin_type: str,
  signing_behavior: str,
  signing_protocol: str,
  description: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.name"></a>

- *Type:* str

A name to identify the origin access control. You can specify up to 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}

---

###### `origin_access_control_origin_type`<sup>Required</sup> <a name="origin_access_control_origin_type" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.originAccessControlOriginType"></a>

- *Type:* str

The type of origin that this origin access control is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}

---

###### `signing_behavior`<sup>Required</sup> <a name="signing_behavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.signingBehavior"></a>

- *Type:* str

Specifies which requests CloudFront signs (adds authentication information to).

Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
This field can have one of the following values:

* `always` ? CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if one exists.
* `never` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
* `no-override` ? If the viewer request doesn't contain the `Authorization` header, then CloudFront signs the origin request. If the viewer request contains the `Authorization` header, then CloudFront doesn't sign the origin request and instead passes along the `Authorization` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}

---

###### `signing_protocol`<sup>Required</sup> <a name="signing_protocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.signingProtocol"></a>

- *Type:* str

The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests.

The only valid value is `sigv4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.description"></a>

- *Type:* str

A description of the origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontOriginAccessControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontOriginAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontOriginAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig">origin_access_control_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId">origin_access_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput">origin_access_control_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `origin_access_control_config`<sup>Required</sup> <a name="origin_access_control_config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig"></a>

```python
origin_access_control_config: CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a>

---

##### `origin_access_control_id`<sup>Required</sup> <a name="origin_access_control_id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId"></a>

```python
origin_access_control_id: str
```

- *Type:* str

---

##### `origin_access_control_config_input`<sup>Optional</sup> <a name="origin_access_control_config_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput"></a>

```python
origin_access_control_config_input: IResolvable | CloudfrontOriginAccessControlOriginAccessControlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessControlConfig <a name="CloudfrontOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  origin_access_control_config: CloudfrontOriginAccessControlOriginAccessControlConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig">origin_access_control_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | The origin access control. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `origin_access_control_config`<sup>Required</sup> <a name="origin_access_control_config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig"></a>

```python
origin_access_control_config: CloudfrontOriginAccessControlOriginAccessControlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

The origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_config CloudfrontOriginAccessControl#origin_access_control_config}

---

### CloudfrontOriginAccessControlOriginAccessControlConfig <a name="CloudfrontOriginAccessControlOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig(
  name: str,
  origin_access_control_origin_type: str,
  signing_behavior: str,
  signing_protocol: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name">name</a></code> | <code>str</code> | A name to identify the origin access control. You can specify up to 64 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType">origin_access_control_origin_type</a></code> | <code>str</code> | The type of origin that this origin access control is for. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior">signing_behavior</a></code> | <code>str</code> | Specifies which requests CloudFront signs (adds authentication information to). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol">signing_protocol</a></code> | <code>str</code> | The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description">description</a></code> | <code>str</code> | A description of the origin access control. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name to identify the origin access control. You can specify up to 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}

---

##### `origin_access_control_origin_type`<sup>Required</sup> <a name="origin_access_control_origin_type" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType"></a>

```python
origin_access_control_origin_type: str
```

- *Type:* str

The type of origin that this origin access control is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}

---

##### `signing_behavior`<sup>Required</sup> <a name="signing_behavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior"></a>

```python
signing_behavior: str
```

- *Type:* str

Specifies which requests CloudFront signs (adds authentication information to).

Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
This field can have one of the following values:

* `always` ? CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if one exists.
* `never` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
* `no-override` ? If the viewer request doesn't contain the `Authorization` header, then CloudFront signs the origin request. If the viewer request contains the `Authorization` header, then CloudFront doesn't sign the origin request and instead passes along the `Authorization` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}

---

##### `signing_protocol`<sup>Required</sup> <a name="signing_protocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol"></a>

```python
signing_protocol: str
```

- *Type:* str

The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests.

The only valid value is `sigv4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference <a name="CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_origin_access_control

cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput">origin_access_control_origin_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput">signing_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput">signing_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType">origin_access_control_origin_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior">signing_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol">signing_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `origin_access_control_origin_type_input`<sup>Optional</sup> <a name="origin_access_control_origin_type_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput"></a>

```python
origin_access_control_origin_type_input: str
```

- *Type:* str

---

##### `signing_behavior_input`<sup>Optional</sup> <a name="signing_behavior_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput"></a>

```python
signing_behavior_input: str
```

- *Type:* str

---

##### `signing_protocol_input`<sup>Optional</sup> <a name="signing_protocol_input" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput"></a>

```python
signing_protocol_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin_access_control_origin_type`<sup>Required</sup> <a name="origin_access_control_origin_type" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType"></a>

```python
origin_access_control_origin_type: str
```

- *Type:* str

---

##### `signing_behavior`<sup>Required</sup> <a name="signing_behavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior"></a>

```python
signing_behavior: str
```

- *Type:* str

---

##### `signing_protocol`<sup>Required</sup> <a name="signing_protocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol"></a>

```python
signing_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontOriginAccessControlOriginAccessControlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---



