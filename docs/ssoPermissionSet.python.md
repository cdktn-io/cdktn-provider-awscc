# `ssoPermissionSet` Submodule <a name="`ssoPermissionSet` Submodule" id="@cdktn/provider-awscc.ssoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoPermissionSet <a name="SsoPermissionSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  name: str,
  customer_managed_policy_references: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences] = None,
  description: str = None,
  inline_policy: str = None,
  managed_policies: typing.List[str] = None,
  permissions_boundary: SsoPermissionSetPermissionsBoundary = None,
  relay_state_type: str = None,
  session_duration: str = None,
  tags: IResolvable | typing.List[SsoPermissionSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.customerManagedPolicyReferences">customer_managed_policy_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.description">description</a></code> | <code>str</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.inlinePolicy">inline_policy</a></code> | <code>str</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.managedPolicies">managed_policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.permissionsBoundary">permissions_boundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.relayStateType">relay_state_type</a></code> | <code>str</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>str</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.instanceArn"></a>

- *Type:* str

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.name"></a>

- *Type:* str

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `customer_managed_policy_references`<sup>Optional</sup> <a name="customer_managed_policy_references" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.customerManagedPolicyReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.description"></a>

- *Type:* str

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `inline_policy`<sup>Optional</sup> <a name="inline_policy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.inlinePolicy"></a>

- *Type:* str

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `managed_policies`<sup>Optional</sup> <a name="managed_policies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.managedPolicies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `permissions_boundary`<sup>Optional</sup> <a name="permissions_boundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.permissionsBoundary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `relay_state_type`<sup>Optional</sup> <a name="relay_state_type" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.relayStateType"></a>

- *Type:* str

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.sessionDuration"></a>

- *Type:* str

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences">put_customer_managed_policy_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary">put_permissions_boundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences">reset_customer_managed_policy_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy">reset_inline_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies">reset_managed_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary">reset_permissions_boundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType">reset_relay_state_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_managed_policy_references` <a name="put_customer_managed_policy_references" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences"></a>

```python
def put_customer_managed_policy_references(
  value: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]

---

##### `put_permissions_boundary` <a name="put_permissions_boundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary"></a>

```python
def put_permissions_boundary(
  customer_managed_policy_reference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference = None,
  managed_policy_arn: str = None
) -> None
```

###### `customer_managed_policy_reference`<sup>Optional</sup> <a name="customer_managed_policy_reference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary.parameter.customerManagedPolicyReference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}.

---

###### `managed_policy_arn`<sup>Optional</sup> <a name="managed_policy_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary.parameter.managedPolicyArn"></a>

- *Type:* str

The managed policy to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsoPermissionSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]

---

##### `reset_customer_managed_policy_references` <a name="reset_customer_managed_policy_references" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences"></a>

```python
def reset_customer_managed_policy_references() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline_policy` <a name="reset_inline_policy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy"></a>

```python
def reset_inline_policy() -> None
```

##### `reset_managed_policies` <a name="reset_managed_policies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies"></a>

```python
def reset_managed_policies() -> None
```

##### `reset_permissions_boundary` <a name="reset_permissions_boundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary"></a>

```python
def reset_permissions_boundary() -> None
```

##### `reset_relay_state_type` <a name="reset_relay_state_type" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType"></a>

```python
def reset_relay_state_type() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsoPermissionSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences">customer_managed_policy_references</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary">permissions_boundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput">customer_managed_policy_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput">inline_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput">managed_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput">permissions_boundary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput">relay_state_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput">session_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy">inline_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies">managed_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType">relay_state_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration">session_duration</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_managed_policy_references`<sup>Required</sup> <a name="customer_managed_policy_references" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences"></a>

```python
customer_managed_policy_references: SsoPermissionSetCustomerManagedPolicyReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions_boundary`<sup>Required</sup> <a name="permissions_boundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary"></a>

```python
permissions_boundary: SsoPermissionSetPermissionsBoundaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags"></a>

```python
tags: SsoPermissionSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a>

---

##### `customer_managed_policy_references_input`<sup>Optional</sup> <a name="customer_managed_policy_references_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput"></a>

```python
customer_managed_policy_references_input: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_policy_input`<sup>Optional</sup> <a name="inline_policy_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput"></a>

```python
inline_policy_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `managed_policies_input`<sup>Optional</sup> <a name="managed_policies_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput"></a>

```python
managed_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_boundary_input`<sup>Optional</sup> <a name="permissions_boundary_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput"></a>

```python
permissions_boundary_input: IResolvable | SsoPermissionSetPermissionsBoundary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `relay_state_type_input`<sup>Optional</sup> <a name="relay_state_type_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput"></a>

```python
relay_state_type_input: str
```

- *Type:* str

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput"></a>

```python
session_duration_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsoPermissionSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline_policy`<sup>Required</sup> <a name="inline_policy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy"></a>

```python
inline_policy: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `managed_policies`<sup>Required</sup> <a name="managed_policies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies"></a>

```python
managed_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `relay_state_type`<sup>Required</sup> <a name="relay_state_type" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType"></a>

```python
relay_state_type: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsoPermissionSetConfig <a name="SsoPermissionSetConfig" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  name: str,
  customer_managed_policy_references: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences] = None,
  description: str = None,
  inline_policy: str = None,
  managed_policies: typing.List[str] = None,
  permissions_boundary: SsoPermissionSetPermissionsBoundary = None,
  relay_state_type: str = None,
  session_duration: str = None,
  tags: IResolvable | typing.List[SsoPermissionSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name">name</a></code> | <code>str</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences">customer_managed_policy_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description">description</a></code> | <code>str</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy">inline_policy</a></code> | <code>str</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies">managed_policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary">permissions_boundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType">relay_state_type</a></code> | <code>str</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration">session_duration</a></code> | <code>str</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `customer_managed_policy_references`<sup>Optional</sup> <a name="customer_managed_policy_references" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences"></a>

```python
customer_managed_policy_references: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `inline_policy`<sup>Optional</sup> <a name="inline_policy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy"></a>

```python
inline_policy: str
```

- *Type:* str

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `managed_policies`<sup>Optional</sup> <a name="managed_policies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies"></a>

```python
managed_policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `permissions_boundary`<sup>Optional</sup> <a name="permissions_boundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary"></a>

```python
permissions_boundary: SsoPermissionSetPermissionsBoundary
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `relay_state_type`<sup>Optional</sup> <a name="relay_state_type" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType"></a>

```python
relay_state_type: str
```

- *Type:* str

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsoPermissionSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

### SsoPermissionSetCustomerManagedPolicyReferences <a name="SsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences(
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetPermissionsBoundary <a name="SsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetPermissionsBoundary(
  customer_managed_policy_reference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference = None,
  managed_policy_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference">customer_managed_policy_reference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn">managed_policy_arn</a></code> | <code>str</code> | The managed policy to attach. |

---

##### `customer_managed_policy_reference`<sup>Optional</sup> <a name="customer_managed_policy_reference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference"></a>

```python
customer_managed_policy_reference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}.

---

##### `managed_policy_arn`<sup>Optional</sup> <a name="managed_policy_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn"></a>

```python
managed_policy_arn: str
```

- *Type:* str

The managed policy to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}

---

### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference(
  name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetTags <a name="SsoPermissionSetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoPermissionSetCustomerManagedPolicyReferencesList <a name="SsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsoPermissionSetCustomerManagedPolicyReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsoPermissionSetCustomerManagedPolicyReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>]

---


### SsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="SsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsoPermissionSetCustomerManagedPolicyReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences">SsoPermissionSetCustomerManagedPolicyReferences</a>

---


### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### SsoPermissionSetPermissionsBoundaryOutputReference <a name="SsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference">put_customer_managed_policy_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference">reset_customer_managed_policy_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn">reset_managed_policy_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_policy_reference` <a name="put_customer_managed_policy_reference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference"></a>

```python
def put_customer_managed_policy_reference(
  name: str = None,
  path: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

##### `reset_customer_managed_policy_reference` <a name="reset_customer_managed_policy_reference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference"></a>

```python
def reset_customer_managed_policy_reference() -> None
```

##### `reset_managed_policy_arn` <a name="reset_managed_policy_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn"></a>

```python
def reset_managed_policy_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">customer_managed_policy_reference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput">customer_managed_policy_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput">managed_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">managed_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_policy_reference`<sup>Required</sup> <a name="customer_managed_policy_reference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```python
customer_managed_policy_reference: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `customer_managed_policy_reference_input`<sup>Optional</sup> <a name="customer_managed_policy_reference_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput"></a>

```python
customer_managed_policy_reference_input: IResolvable | SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `managed_policy_arn_input`<sup>Optional</sup> <a name="managed_policy_arn_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput"></a>

```python
managed_policy_arn_input: str
```

- *Type:* str

---

##### `managed_policy_arn`<sup>Required</sup> <a name="managed_policy_arn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```python
managed_policy_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsoPermissionSetPermissionsBoundary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---


### SsoPermissionSetTagsList <a name="SsoPermissionSetTagsList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsoPermissionSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsoPermissionSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>]

---


### SsoPermissionSetTagsOutputReference <a name="SsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sso_permission_set

ssoPermissionSet.SsoPermissionSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsoPermissionSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags">SsoPermissionSetTags</a>

---



