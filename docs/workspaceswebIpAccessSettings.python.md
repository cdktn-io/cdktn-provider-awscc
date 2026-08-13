# `workspaceswebIpAccessSettings` Submodule <a name="`workspaceswebIpAccessSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIpAccessSettings <a name="WorkspaceswebIpAccessSettings" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings awscc_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_rules: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules],
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRules">ip_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules">put_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_rules` <a name="put_ip_rules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules"></a>

```python
def put_ip_rules(
  value: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">ip_access_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRules">ip_rules</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList">WorkspaceswebIpAccessSettingsIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList">WorkspaceswebIpAccessSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRulesInput">ip_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_access_settings_arn`<sup>Required</sup> <a name="ip_access_settings_arn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```python
ip_access_settings_arn: str
```

- *Type:* str

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRules"></a>

```python
ip_rules: WorkspaceswebIpAccessSettingsIpRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList">WorkspaceswebIpAccessSettingsIpRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags"></a>

```python
tags: WorkspaceswebIpAccessSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList">WorkspaceswebIpAccessSettingsTagsList</a>

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRulesInput"></a>

```python
ip_rules_input: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIpAccessSettingsConfig <a name="WorkspaceswebIpAccessSettingsConfig" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_rules: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules],
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  display_name: str = None,
  tags: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRules">ip_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRules"></a>

```python
ip_rules: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_rules WorkspaceswebIpAccessSettings#ip_rules}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

### WorkspaceswebIpAccessSettingsIpRules <a name="WorkspaceswebIpAccessSettingsIpRules" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules(
  ip_range: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.ipRange">ip_range</a></code> | <code>str</code> | A single IP address or an IP address range in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

A single IP address or an IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

### WorkspaceswebIpAccessSettingsTags <a name="WorkspaceswebIpAccessSettingsTags" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#key WorkspaceswebIpAccessSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#value WorkspaceswebIpAccessSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#key WorkspaceswebIpAccessSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_ip_access_settings#value WorkspaceswebIpAccessSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIpAccessSettingsIpRulesList <a name="WorkspaceswebIpAccessSettingsIpRulesList" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebIpAccessSettingsIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebIpAccessSettingsIpRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>]

---


### WorkspaceswebIpAccessSettingsIpRulesOutputReference <a name="WorkspaceswebIpAccessSettingsIpRulesOutputReference" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebIpAccessSettingsIpRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRules">WorkspaceswebIpAccessSettingsIpRules</a>

---


### WorkspaceswebIpAccessSettingsTagsList <a name="WorkspaceswebIpAccessSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebIpAccessSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebIpAccessSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>]

---


### WorkspaceswebIpAccessSettingsTagsOutputReference <a name="WorkspaceswebIpAccessSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_ip_access_settings

workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebIpAccessSettingsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsTags">WorkspaceswebIpAccessSettingsTags</a>

---



