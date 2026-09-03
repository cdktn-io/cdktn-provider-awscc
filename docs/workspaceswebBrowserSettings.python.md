# `workspaceswebBrowserSettings` Submodule <a name="`workspaceswebBrowserSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebBrowserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebBrowserSettings <a name="WorkspaceswebBrowserSettings" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings awscc_workspacesweb_browser_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  browser_policy: str = None,
  customer_managed_key: str = None,
  tags: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags] = None,
  web_content_filtering_policy: WorkspaceswebBrowserSettingsWebContentFilteringPolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.browserPolicy">browser_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.webContentFilteringPolicy">web_content_filtering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `browser_policy`<sup>Optional</sup> <a name="browser_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.browserPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---

##### `web_content_filtering_policy`<sup>Optional</sup> <a name="web_content_filtering_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.webContentFilteringPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy">put_web_content_filtering_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetBrowserPolicy">reset_browser_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetWebContentFilteringPolicy">reset_web_content_filtering_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]

---

##### `put_web_content_filtering_policy` <a name="put_web_content_filtering_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy"></a>

```python
def put_web_content_filtering_policy(
  allowed_urls: typing.List[str] = None,
  blocked_categories: typing.List[str] = None,
  blocked_urls: typing.List[str] = None
) -> None
```

###### `allowed_urls`<sup>Optional</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy.parameter.allowedUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#allowed_urls WorkspaceswebBrowserSettings#allowed_urls}.

---

###### `blocked_categories`<sup>Optional</sup> <a name="blocked_categories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy.parameter.blockedCategories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_categories WorkspaceswebBrowserSettings#blocked_categories}.

---

###### `blocked_urls`<sup>Optional</sup> <a name="blocked_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.putWebContentFilteringPolicy.parameter.blockedUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_urls WorkspaceswebBrowserSettings#blocked_urls}.

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_browser_policy` <a name="reset_browser_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetBrowserPolicy"></a>

```python
def reset_browser_policy() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_web_content_filtering_policy` <a name="reset_web_content_filtering_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetWebContentFilteringPolicy"></a>

```python
def reset_web_content_filtering_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebBrowserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebBrowserSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebBrowserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList">WorkspaceswebBrowserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicy">web_content_filtering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput">browser_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicyInput">web_content_filtering_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy">browser_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `browser_settings_arn`<sup>Required</sup> <a name="browser_settings_arn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags"></a>

```python
tags: WorkspaceswebBrowserSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList">WorkspaceswebBrowserSettingsTagsList</a>

---

##### `web_content_filtering_policy`<sup>Required</sup> <a name="web_content_filtering_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicy"></a>

```python
web_content_filtering_policy: WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference">WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference</a>

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `browser_policy_input`<sup>Optional</sup> <a name="browser_policy_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput"></a>

```python
browser_policy_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]

---

##### `web_content_filtering_policy_input`<sup>Optional</sup> <a name="web_content_filtering_policy_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.webContentFilteringPolicyInput"></a>

```python
web_content_filtering_policy_input: IResolvable | WorkspaceswebBrowserSettingsWebContentFilteringPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `browser_policy`<sup>Required</sup> <a name="browser_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy"></a>

```python
browser_policy: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebBrowserSettingsConfig <a name="WorkspaceswebBrowserSettingsConfig" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_encryption_context: typing.Mapping[str] = None,
  browser_policy: str = None,
  customer_managed_key: str = None,
  tags: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags] = None,
  web_content_filtering_policy: WorkspaceswebBrowserSettingsWebContentFilteringPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy">browser_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.webContentFilteringPolicy">web_content_filtering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `browser_policy`<sup>Optional</sup> <a name="browser_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy"></a>

```python
browser_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---

##### `web_content_filtering_policy`<sup>Optional</sup> <a name="web_content_filtering_policy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.webContentFilteringPolicy"></a>

```python
web_content_filtering_policy: WorkspaceswebBrowserSettingsWebContentFilteringPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#web_content_filtering_policy WorkspaceswebBrowserSettings#web_content_filtering_policy}.

---

### WorkspaceswebBrowserSettingsTags <a name="WorkspaceswebBrowserSettingsTags" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#key WorkspaceswebBrowserSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#value WorkspaceswebBrowserSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#key WorkspaceswebBrowserSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#value WorkspaceswebBrowserSettings#value}.

---

### WorkspaceswebBrowserSettingsWebContentFilteringPolicy <a name="WorkspaceswebBrowserSettingsWebContentFilteringPolicy" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy(
  allowed_urls: typing.List[str] = None,
  blocked_categories: typing.List[str] = None,
  blocked_urls: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.allowedUrls">allowed_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#allowed_urls WorkspaceswebBrowserSettings#allowed_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedCategories">blocked_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_categories WorkspaceswebBrowserSettings#blocked_categories}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedUrls">blocked_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_urls WorkspaceswebBrowserSettings#blocked_urls}. |

---

##### `allowed_urls`<sup>Optional</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.allowedUrls"></a>

```python
allowed_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#allowed_urls WorkspaceswebBrowserSettings#allowed_urls}.

---

##### `blocked_categories`<sup>Optional</sup> <a name="blocked_categories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedCategories"></a>

```python
blocked_categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_categories WorkspaceswebBrowserSettings#blocked_categories}.

---

##### `blocked_urls`<sup>Optional</sup> <a name="blocked_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy.property.blockedUrls"></a>

```python
blocked_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesweb_browser_settings#blocked_urls WorkspaceswebBrowserSettings#blocked_urls}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebBrowserSettingsTagsList <a name="WorkspaceswebBrowserSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebBrowserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebBrowserSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>]

---


### WorkspaceswebBrowserSettingsTagsOutputReference <a name="WorkspaceswebBrowserSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebBrowserSettingsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsTags">WorkspaceswebBrowserSettingsTags</a>

---


### WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference <a name="WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetAllowedUrls">reset_allowed_urls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedCategories">reset_blocked_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedUrls">reset_blocked_urls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_urls` <a name="reset_allowed_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetAllowedUrls"></a>

```python
def reset_allowed_urls() -> None
```

##### `reset_blocked_categories` <a name="reset_blocked_categories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedCategories"></a>

```python
def reset_blocked_categories() -> None
```

##### `reset_blocked_urls` <a name="reset_blocked_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.resetBlockedUrls"></a>

```python
def reset_blocked_urls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrlsInput">allowed_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategoriesInput">blocked_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrlsInput">blocked_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls">allowed_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories">blocked_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls">blocked_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_urls_input`<sup>Optional</sup> <a name="allowed_urls_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrlsInput"></a>

```python
allowed_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_categories_input`<sup>Optional</sup> <a name="blocked_categories_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategoriesInput"></a>

```python
blocked_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_urls_input`<sup>Optional</sup> <a name="blocked_urls_input" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrlsInput"></a>

```python
blocked_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_urls`<sup>Required</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.allowedUrls"></a>

```python
allowed_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_categories`<sup>Required</sup> <a name="blocked_categories" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedCategories"></a>

```python
blocked_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_urls`<sup>Required</sup> <a name="blocked_urls" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.blockedUrls"></a>

```python
blocked_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebBrowserSettingsWebContentFilteringPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsWebContentFilteringPolicy">WorkspaceswebBrowserSettingsWebContentFilteringPolicy</a>

---



