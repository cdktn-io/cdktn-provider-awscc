# `cloudfrontConnectionGroup` Submodule <a name="`cloudfrontConnectionGroup` Submodule" id="@cdktn/provider-awscc.cloudfrontConnectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontConnectionGroup <a name="CloudfrontConnectionGroup" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group awscc_cloudfront_connection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  anycast_ip_list_id: str = None,
  enabled: bool | IResolvable = None,
  ipv6_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[CloudfrontConnectionGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the connection group. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.anycastIpListId">anycast_ip_list_id</a></code> | <code>str</code> | The ID of the Anycast static IP list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the connection group is enabled. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.ipv6Enabled">ipv6_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | IPv6 is enabled for the connection group. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#name CloudfrontConnectionGroup#name}

---

##### `anycast_ip_list_id`<sup>Optional</sup> <a name="anycast_ip_list_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.anycastIpListId"></a>

- *Type:* str

The ID of the Anycast static IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#anycast_ip_list_id CloudfrontConnectionGroup#anycast_ip_list_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the connection group is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#enabled CloudfrontConnectionGroup#enabled}

---

##### `ipv6_enabled`<sup>Optional</sup> <a name="ipv6_enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.ipv6Enabled"></a>

- *Type:* bool | cdktn.IResolvable

IPv6 is enabled for the connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#ipv_6_enabled CloudfrontConnectionGroup#ipv_6_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#tags CloudfrontConnectionGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetAnycastIpListId">reset_anycast_ip_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetIpv6Enabled">reset_ipv6_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudfrontConnectionGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]

---

##### `reset_anycast_ip_list_id` <a name="reset_anycast_ip_list_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetAnycastIpListId"></a>

```python
def reset_anycast_ip_list_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_ipv6_enabled` <a name="reset_ipv6_enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetIpv6Enabled"></a>

```python
def reset_ipv6_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontConnectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontConnectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontConnectionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontConnectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontConnectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.connectionGroupId">connection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.routingEndpoint">routing_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList">CloudfrontConnectionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.anycastIpListIdInput">anycast_ip_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.ipv6EnabledInput">ipv6_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.anycastIpListId">anycast_ip_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.ipv6Enabled">ipv6_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `connection_group_id`<sup>Required</sup> <a name="connection_group_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.connectionGroupId"></a>

```python
connection_group_id: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `routing_endpoint`<sup>Required</sup> <a name="routing_endpoint" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.routingEndpoint"></a>

```python
routing_endpoint: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tags"></a>

```python
tags: CloudfrontConnectionGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList">CloudfrontConnectionGroupTagsList</a>

---

##### `anycast_ip_list_id_input`<sup>Optional</sup> <a name="anycast_ip_list_id_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.anycastIpListIdInput"></a>

```python
anycast_ip_list_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_enabled_input`<sup>Optional</sup> <a name="ipv6_enabled_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.ipv6EnabledInput"></a>

```python
ipv6_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudfrontConnectionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]

---

##### `anycast_ip_list_id`<sup>Required</sup> <a name="anycast_ip_list_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.anycastIpListId"></a>

```python
anycast_ip_list_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_enabled`<sup>Required</sup> <a name="ipv6_enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.ipv6Enabled"></a>

```python
ipv6_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontConnectionGroupConfig <a name="CloudfrontConnectionGroupConfig" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  anycast_ip_list_id: str = None,
  enabled: bool | IResolvable = None,
  ipv6_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[CloudfrontConnectionGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the connection group. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.anycastIpListId">anycast_ip_list_id</a></code> | <code>str</code> | The ID of the Anycast static IP list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the connection group is enabled. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.ipv6Enabled">ipv6_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | IPv6 is enabled for the connection group. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#name CloudfrontConnectionGroup#name}

---

##### `anycast_ip_list_id`<sup>Optional</sup> <a name="anycast_ip_list_id" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.anycastIpListId"></a>

```python
anycast_ip_list_id: str
```

- *Type:* str

The ID of the Anycast static IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#anycast_ip_list_id CloudfrontConnectionGroup#anycast_ip_list_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the connection group is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#enabled CloudfrontConnectionGroup#enabled}

---

##### `ipv6_enabled`<sup>Optional</sup> <a name="ipv6_enabled" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.ipv6Enabled"></a>

```python
ipv6_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

IPv6 is enabled for the connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#ipv_6_enabled CloudfrontConnectionGroup#ipv_6_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudfrontConnectionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_connection_group#tags CloudfrontConnectionGroup#tags}

---

### CloudfrontConnectionGroupTags <a name="CloudfrontConnectionGroupTags" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags.property.key">key</a></code> | <code>str</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags.property.value">value</a></code> | <code>str</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontConnectionGroupTagsList <a name="CloudfrontConnectionGroupTagsList" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontConnectionGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontConnectionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>]

---


### CloudfrontConnectionGroupTagsOutputReference <a name="CloudfrontConnectionGroupTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_connection_group

cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontConnectionGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontConnectionGroup.CloudfrontConnectionGroupTags">CloudfrontConnectionGroupTags</a>

---



