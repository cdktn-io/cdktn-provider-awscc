# `medialiveInputSecurityGroup` Submodule <a name="`medialiveInputSecurityGroup` Submodule" id="@cdktn/provider-awscc.medialiveInputSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInputSecurityGroup <a name="MedialiveInputSecurityGroup" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group awscc_medialive_input_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  tags: typing.Mapping[str] = None,
  whitelist_rules: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.whitelistRules">whitelist_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]</code> | Whitelist rules and their sync status. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}

---

##### `whitelist_rules`<sup>Optional</sup> <a name="whitelist_rules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.whitelistRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]

Whitelist rules and their sync status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules">put_whitelist_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetWhitelistRules">reset_whitelist_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_whitelist_rules` <a name="put_whitelist_rules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules"></a>

```python
def put_whitelist_rules(
  value: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_whitelist_rules` <a name="reset_whitelist_rules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetWhitelistRules"></a>

```python
def reset_whitelist_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MedialiveInputSecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MedialiveInputSecurityGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MedialiveInputSecurityGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MedialiveInputSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveInputSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputSecurityGroupId">input_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules">whitelist_rules</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput">whitelist_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_security_group_id`<sup>Required</sup> <a name="input_security_group_id" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputSecurityGroupId"></a>

```python
input_security_group_id: str
```

- *Type:* str

---

##### `whitelist_rules`<sup>Required</sup> <a name="whitelist_rules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules"></a>

```python
whitelist_rules: MedialiveInputSecurityGroupWhitelistRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `whitelist_rules_input`<sup>Optional</sup> <a name="whitelist_rules_input" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput"></a>

```python
whitelist_rules_input: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputSecurityGroupConfig <a name="MedialiveInputSecurityGroupConfig" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  tags: typing.Mapping[str] = None,
  whitelist_rules: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules">whitelist_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]</code> | Whitelist rules and their sync status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}

---

##### `whitelist_rules`<sup>Optional</sup> <a name="whitelist_rules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules"></a>

```python
whitelist_rules: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]

Whitelist rules and their sync status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

### MedialiveInputSecurityGroupWhitelistRules <a name="MedialiveInputSecurityGroupWhitelistRules" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr">cidr</a></code> | <code>str</code> | The IPv4 CIDR that's whitelisted. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The IPv4 CIDR that's whitelisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputSecurityGroupWhitelistRulesList <a name="MedialiveInputSecurityGroupWhitelistRulesList" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSecurityGroupWhitelistRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSecurityGroupWhitelistRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]

---


### MedialiveInputSecurityGroupWhitelistRulesOutputReference <a name="MedialiveInputSecurityGroupWhitelistRulesOutputReference" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSecurityGroupWhitelistRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>

---



