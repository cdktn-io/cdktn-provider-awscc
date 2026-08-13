# `mediapackagePackagingGroup` Submodule <a name="`mediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingGroup <a name="MediapackagePackagingGroup" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  packaging_group_id: str,
  authorization: MediapackagePackagingGroupAuthorization = None,
  egress_access_logs: MediapackagePackagingGroupEgressAccessLogs = None,
  tags: IResolvable | typing.List[MediapackagePackagingGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.egressAccessLogs">egress_access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.packagingGroupId"></a>

- *Type:* str

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `egress_access_logs`<sup>Optional</sup> <a name="egress_access_logs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.egressAccessLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs">put_egress_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs">reset_egress_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization"></a>

```python
def put_authorization(
  cdn_identifier_secret: str = None,
  secrets_role_arn: str = None
) -> None
```

###### `cdn_identifier_secret`<sup>Optional</sup> <a name="cdn_identifier_secret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.cdnIdentifierSecret"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

###### `secrets_role_arn`<sup>Optional</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.secretsRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

##### `put_egress_access_logs` <a name="put_egress_access_logs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs"></a>

```python
def put_egress_access_logs(
  log_group_name: str = None
) -> None
```

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs.parameter.logGroupName"></a>

- *Type:* str

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediapackagePackagingGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]

---

##### `reset_authorization` <a name="reset_authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_egress_access_logs` <a name="reset_egress_access_logs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs"></a>

```python
def reset_egress_access_logs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediapackagePackagingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs">egress_access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput">authorization_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput">egress_access_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput">packaging_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization"></a>

```python
authorization: MediapackagePackagingGroupAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `egress_access_logs`<sup>Required</sup> <a name="egress_access_logs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs"></a>

```python
egress_access_logs: MediapackagePackagingGroupEgressAccessLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags"></a>

```python
tags: MediapackagePackagingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput"></a>

```python
authorization_input: IResolvable | MediapackagePackagingGroupAuthorization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `egress_access_logs_input`<sup>Optional</sup> <a name="egress_access_logs_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput"></a>

```python
egress_access_logs_input: IResolvable | MediapackagePackagingGroupEgressAccessLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `packaging_group_id_input`<sup>Optional</sup> <a name="packaging_group_id_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput"></a>

```python
packaging_group_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediapackagePackagingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingGroupAuthorization <a name="MediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization(
  cdn_identifier_secret: str = None,
  secrets_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret">cdn_identifier_secret</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn">secrets_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager. |

---

##### `cdn_identifier_secret`<sup>Optional</sup> <a name="cdn_identifier_secret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

```python
cdn_identifier_secret: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

##### `secrets_role_arn`<sup>Optional</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn"></a>

```python
secrets_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

### MediapackagePackagingGroupConfig <a name="MediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  packaging_group_id: str,
  authorization: MediapackagePackagingGroupAuthorization = None,
  egress_access_logs: MediapackagePackagingGroupEgressAccessLogs = None,
  tags: IResolvable | typing.List[MediapackagePackagingGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs">egress_access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization"></a>

```python
authorization: MediapackagePackagingGroupAuthorization
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `egress_access_logs`<sup>Optional</sup> <a name="egress_access_logs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs"></a>

```python
egress_access_logs: MediapackagePackagingGroupEgressAccessLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediapackagePackagingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

### MediapackagePackagingGroupEgressAccessLogs <a name="MediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs(
  log_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName">log_group_name</a></code> | <code>str</code> | Sets a custom AWS CloudWatch log group name for egress logs. |

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

### MediapackagePackagingGroupTags <a name="MediapackagePackagingGroupTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingGroupAuthorizationOutputReference <a name="MediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret">reset_cdn_identifier_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn">reset_secrets_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cdn_identifier_secret` <a name="reset_cdn_identifier_secret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret"></a>

```python
def reset_cdn_identifier_secret() -> None
```

##### `reset_secrets_role_arn` <a name="reset_secrets_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn"></a>

```python
def reset_secrets_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput">cdn_identifier_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput">secrets_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">cdn_identifier_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">secrets_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdn_identifier_secret_input`<sup>Optional</sup> <a name="cdn_identifier_secret_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput"></a>

```python
cdn_identifier_secret_input: str
```

- *Type:* str

---

##### `secrets_role_arn_input`<sup>Optional</sup> <a name="secrets_role_arn_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput"></a>

```python
secrets_role_arn_input: str
```

- *Type:* str

---

##### `cdn_identifier_secret`<sup>Required</sup> <a name="cdn_identifier_secret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```python
cdn_identifier_secret: str
```

- *Type:* str

---

##### `secrets_role_arn`<sup>Required</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```python
secrets_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingGroupAuthorization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---


### MediapackagePackagingGroupEgressAccessLogsOutputReference <a name="MediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingGroupEgressAccessLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---


### MediapackagePackagingGroupTagsList <a name="MediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>]

---


### MediapackagePackagingGroupTagsOutputReference <a name="MediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_group

mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>

---



