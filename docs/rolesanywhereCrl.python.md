# `rolesanywhereCrl` Submodule <a name="`rolesanywhereCrl` Submodule" id="@cdktn/provider-awscc.rolesanywhereCrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereCrl <a name="RolesanywhereCrl" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl awscc_rolesanywhere_crl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  crl_data: str,
  name: str,
  enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[RolesanywhereCrlTags] = None,
  trust_anchor_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.crlData">crl_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.trustAnchorArn">trust_anchor_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `crl_data`<sup>Required</sup> <a name="crl_data" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.crlData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}.

---

##### `trust_anchor_arn`<sup>Optional</sup> <a name="trust_anchor_arn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.trustAnchorArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTrustAnchorArn">reset_trust_anchor_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RolesanywhereCrlTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trust_anchor_arn` <a name="reset_trust_anchor_arn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTrustAnchorArn"></a>

```python
def reset_trust_anchor_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RolesanywhereCrl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RolesanywhereCrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RolesanywhereCrl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RolesanywhereCrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereCrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlId">crl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList">RolesanywhereCrlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlDataInput">crl_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArnInput">trust_anchor_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlData">crl_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArn">trust_anchor_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `crl_id`<sup>Required</sup> <a name="crl_id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlId"></a>

```python
crl_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tags"></a>

```python
tags: RolesanywhereCrlTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList">RolesanywhereCrlTagsList</a>

---

##### `crl_data_input`<sup>Optional</sup> <a name="crl_data_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlDataInput"></a>

```python
crl_data_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RolesanywhereCrlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]

---

##### `trust_anchor_arn_input`<sup>Optional</sup> <a name="trust_anchor_arn_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArnInput"></a>

```python
trust_anchor_arn_input: str
```

- *Type:* str

---

##### `crl_data`<sup>Required</sup> <a name="crl_data" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlData"></a>

```python
crl_data: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trust_anchor_arn`<sup>Required</sup> <a name="trust_anchor_arn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArn"></a>

```python
trust_anchor_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereCrlConfig <a name="RolesanywhereCrlConfig" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  crl_data: str,
  name: str,
  enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[RolesanywhereCrlTags] = None,
  trust_anchor_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.crlData">crl_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.trustAnchorArn">trust_anchor_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `crl_data`<sup>Required</sup> <a name="crl_data" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.crlData"></a>

```python
crl_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RolesanywhereCrlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}.

---

##### `trust_anchor_arn`<sup>Optional</sup> <a name="trust_anchor_arn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.trustAnchorArn"></a>

```python
trust_anchor_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}.

---

### RolesanywhereCrlTags <a name="RolesanywhereCrlTags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrlTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#key RolesanywhereCrl#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#value RolesanywhereCrl#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#key RolesanywhereCrl#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_crl#value RolesanywhereCrl#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereCrlTagsList <a name="RolesanywhereCrlTagsList" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrlTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RolesanywhereCrlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RolesanywhereCrlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>]

---


### RolesanywhereCrlTagsOutputReference <a name="RolesanywhereCrlTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_crl

rolesanywhereCrl.RolesanywhereCrlTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RolesanywhereCrlTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>

---



