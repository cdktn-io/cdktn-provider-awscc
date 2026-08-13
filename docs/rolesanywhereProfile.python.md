# `rolesanywhereProfile` Submodule <a name="`rolesanywhereProfile` Submodule" id="@cdktn/provider-awscc.rolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereProfile <a name="RolesanywhereProfile" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile(
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
  role_arns: typing.List[str],
  accept_role_session_name: bool | IResolvable = None,
  attribute_mappings: IResolvable | typing.List[RolesanywhereProfileAttributeMappings] = None,
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  managed_policy_arns: typing.List[str] = None,
  require_instance_properties: bool | IResolvable = None,
  session_policy: str = None,
  tags: IResolvable | typing.List[RolesanywhereProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.acceptRoleSessionName">accept_role_session_name</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.attributeMappings">attribute_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties">require_instance_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy">session_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.roleArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `accept_role_session_name`<sup>Optional</sup> <a name="accept_role_session_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.acceptRoleSessionName"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}.

---

##### `attribute_mappings`<sup>Optional</sup> <a name="attribute_mappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.attributeMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.managedPolicyArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `require_instance_properties`<sup>Optional</sup> <a name="require_instance_properties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.requireInstanceProperties"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.sessionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings">put_attribute_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAcceptRoleSessionName">reset_accept_role_session_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAttributeMappings">reset_attribute_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns">reset_managed_policy_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties">reset_require_instance_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy">reset_session_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attribute_mappings` <a name="put_attribute_mappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings"></a>

```python
def put_attribute_mappings(
  value: IResolvable | typing.List[RolesanywhereProfileAttributeMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putAttributeMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RolesanywhereProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]

---

##### `reset_accept_role_session_name` <a name="reset_accept_role_session_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAcceptRoleSessionName"></a>

```python
def reset_accept_role_session_name() -> None
```

##### `reset_attribute_mappings` <a name="reset_attribute_mappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetAttributeMappings"></a>

```python
def reset_attribute_mappings() -> None
```

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_managed_policy_arns` <a name="reset_managed_policy_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns"></a>

```python
def reset_managed_policy_arns() -> None
```

##### `reset_require_instance_properties` <a name="reset_require_instance_properties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties"></a>

```python
def reset_require_instance_properties() -> None
```

##### `reset_session_policy` <a name="reset_session_policy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy"></a>

```python
def reset_session_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RolesanywhereProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RolesanywhereProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RolesanywhereProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RolesanywhereProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappings">attribute_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList">RolesanywhereProfileAttributeMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileArn">profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList">RolesanywhereProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionNameInput">accept_role_session_name_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappingsInput">attribute_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput">managed_policy_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput">require_instance_properties_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput">role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput">session_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionName">accept_role_session_name</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties">require_instance_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy">session_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attribute_mappings`<sup>Required</sup> <a name="attribute_mappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappings"></a>

```python
attribute_mappings: RolesanywhereProfileAttributeMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList">RolesanywhereProfileAttributeMappingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profile_arn`<sup>Required</sup> <a name="profile_arn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tags"></a>

```python
tags: RolesanywhereProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList">RolesanywhereProfileTagsList</a>

---

##### `accept_role_session_name_input`<sup>Optional</sup> <a name="accept_role_session_name_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionNameInput"></a>

```python
accept_role_session_name_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `attribute_mappings_input`<sup>Optional</sup> <a name="attribute_mappings_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.attributeMappingsInput"></a>

```python
attribute_mappings_input: IResolvable | typing.List[RolesanywhereProfileAttributeMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `managed_policy_arns_input`<sup>Optional</sup> <a name="managed_policy_arns_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput"></a>

```python
managed_policy_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `require_instance_properties_input`<sup>Optional</sup> <a name="require_instance_properties_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput"></a>

```python
require_instance_properties_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arns_input`<sup>Optional</sup> <a name="role_arns_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput"></a>

```python
role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_policy_input`<sup>Optional</sup> <a name="session_policy_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput"></a>

```python
session_policy_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RolesanywhereProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]

---

##### `accept_role_session_name`<sup>Required</sup> <a name="accept_role_session_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.acceptRoleSessionName"></a>

```python
accept_role_session_name: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `managed_policy_arns`<sup>Required</sup> <a name="managed_policy_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `require_instance_properties`<sup>Required</sup> <a name="require_instance_properties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties"></a>

```python
require_instance_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_policy`<sup>Required</sup> <a name="session_policy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereProfileAttributeMappings <a name="RolesanywhereProfileAttributeMappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappings(
  certificate_field: str = None,
  mapping_rules: IResolvable | typing.List[RolesanywhereProfileAttributeMappingsMappingRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.certificateField">certificate_field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#certificate_field RolesanywhereProfile#certificate_field}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.mappingRules">mapping_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#mapping_rules RolesanywhereProfile#mapping_rules}. |

---

##### `certificate_field`<sup>Optional</sup> <a name="certificate_field" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.certificateField"></a>

```python
certificate_field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#certificate_field RolesanywhereProfile#certificate_field}.

---

##### `mapping_rules`<sup>Optional</sup> <a name="mapping_rules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings.property.mappingRules"></a>

```python
mapping_rules: IResolvable | typing.List[RolesanywhereProfileAttributeMappingsMappingRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#mapping_rules RolesanywhereProfile#mapping_rules}.

---

### RolesanywhereProfileAttributeMappingsMappingRules <a name="RolesanywhereProfileAttributeMappingsMappingRules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules(
  specifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.property.specifier">specifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#specifier RolesanywhereProfile#specifier}. |

---

##### `specifier`<sup>Optional</sup> <a name="specifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules.property.specifier"></a>

```python
specifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#specifier RolesanywhereProfile#specifier}.

---

### RolesanywhereProfileConfig <a name="RolesanywhereProfileConfig" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arns: typing.List[str],
  accept_role_session_name: bool | IResolvable = None,
  attribute_mappings: IResolvable | typing.List[RolesanywhereProfileAttributeMappings] = None,
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  managed_policy_arns: typing.List[str] = None,
  require_instance_properties: bool | IResolvable = None,
  session_policy: str = None,
  tags: IResolvable | typing.List[RolesanywhereProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.acceptRoleSessionName">accept_role_session_name</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.attributeMappings">attribute_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns">managed_policy_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties">require_instance_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy">session_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `accept_role_session_name`<sup>Optional</sup> <a name="accept_role_session_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.acceptRoleSessionName"></a>

```python
accept_role_session_name: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}.

---

##### `attribute_mappings`<sup>Optional</sup> <a name="attribute_mappings" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.attributeMappings"></a>

```python
attribute_mappings: IResolvable | typing.List[RolesanywhereProfileAttributeMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}.

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `managed_policy_arns`<sup>Optional</sup> <a name="managed_policy_arns" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns"></a>

```python
managed_policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `require_instance_properties`<sup>Optional</sup> <a name="require_instance_properties" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties"></a>

```python
require_instance_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RolesanywhereProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

### RolesanywhereProfileTags <a name="RolesanywhereProfileTags" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#key RolesanywhereProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#value RolesanywhereProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#key RolesanywhereProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rolesanywhere_profile#value RolesanywhereProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereProfileAttributeMappingsList <a name="RolesanywhereProfileAttributeMappingsList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RolesanywhereProfileAttributeMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RolesanywhereProfileAttributeMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>]

---


### RolesanywhereProfileAttributeMappingsMappingRulesList <a name="RolesanywhereProfileAttributeMappingsMappingRulesList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RolesanywhereProfileAttributeMappingsMappingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RolesanywhereProfileAttributeMappingsMappingRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]

---


### RolesanywhereProfileAttributeMappingsMappingRulesOutputReference <a name="RolesanywhereProfileAttributeMappingsMappingRulesOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resetSpecifier">reset_specifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_specifier` <a name="reset_specifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.resetSpecifier"></a>

```python
def reset_specifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifierInput">specifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier">specifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specifier_input`<sup>Optional</sup> <a name="specifier_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifierInput"></a>

```python
specifier_input: str
```

- *Type:* str

---

##### `specifier`<sup>Required</sup> <a name="specifier" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.specifier"></a>

```python
specifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RolesanywhereProfileAttributeMappingsMappingRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>

---


### RolesanywhereProfileAttributeMappingsOutputReference <a name="RolesanywhereProfileAttributeMappingsOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules">put_mapping_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetCertificateField">reset_certificate_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetMappingRules">reset_mapping_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mapping_rules` <a name="put_mapping_rules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules"></a>

```python
def put_mapping_rules(
  value: IResolvable | typing.List[RolesanywhereProfileAttributeMappingsMappingRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.putMappingRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]

---

##### `reset_certificate_field` <a name="reset_certificate_field" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetCertificateField"></a>

```python
def reset_certificate_field() -> None
```

##### `reset_mapping_rules` <a name="reset_mapping_rules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.resetMappingRules"></a>

```python
def reset_mapping_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules">mapping_rules</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList">RolesanywhereProfileAttributeMappingsMappingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateFieldInput">certificate_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRulesInput">mapping_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateField">certificate_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mapping_rules`<sup>Required</sup> <a name="mapping_rules" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRules"></a>

```python
mapping_rules: RolesanywhereProfileAttributeMappingsMappingRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRulesList">RolesanywhereProfileAttributeMappingsMappingRulesList</a>

---

##### `certificate_field_input`<sup>Optional</sup> <a name="certificate_field_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateFieldInput"></a>

```python
certificate_field_input: str
```

- *Type:* str

---

##### `mapping_rules_input`<sup>Optional</sup> <a name="mapping_rules_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.mappingRulesInput"></a>

```python
mapping_rules_input: IResolvable | typing.List[RolesanywhereProfileAttributeMappingsMappingRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsMappingRules">RolesanywhereProfileAttributeMappingsMappingRules</a>]

---

##### `certificate_field`<sup>Required</sup> <a name="certificate_field" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.certificateField"></a>

```python
certificate_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RolesanywhereProfileAttributeMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileAttributeMappings">RolesanywhereProfileAttributeMappings</a>

---


### RolesanywhereProfileTagsList <a name="RolesanywhereProfileTagsList" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RolesanywhereProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RolesanywhereProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>]

---


### RolesanywhereProfileTagsOutputReference <a name="RolesanywhereProfileTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rolesanywhere_profile

rolesanywhereProfile.RolesanywhereProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RolesanywhereProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rolesanywhereProfile.RolesanywhereProfileTags">RolesanywhereProfileTags</a>

---



