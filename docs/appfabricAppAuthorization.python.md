# `appfabricAppAuthorization` Submodule <a name="`appfabricAppAuthorization` Submodule" id="@cdktn/provider-awscc.appfabricAppAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorization <a name="AppfabricAppAuthorization" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization awscc_appfabric_app_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  app_bundle_identifier: str,
  auth_type: str,
  tenant: AppfabricAppAuthorizationTenant,
  credential: AppfabricAppAuthorizationCredential = None,
  tags: IResolvable | typing.List[AppfabricAppAuthorizationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app">app</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleIdentifier">app_bundle_identifier</a></code> | <code>str</code> | The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | The authorization type. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant">tenant</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | Contains information about an application tenant. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential">credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | Contains credentials for the application. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]</code> | Tags to apply to the app authorization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app"></a>

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}

---

##### `app_bundle_identifier`<sup>Required</sup> <a name="app_bundle_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleIdentifier"></a>

- *Type:* str

The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app_bundle_identifier AppfabricAppAuthorization#app_bundle_identifier}

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType"></a>

- *Type:* str

The authorization type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

Contains information about an application tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

Contains credentials for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]

Tags to apply to the app authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential">put_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant">put_tenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential">reset_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credential` <a name="put_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential"></a>

```python
def put_credential(
  api_key_credential: AppfabricAppAuthorizationCredentialApiKeyCredential = None,
  oauth2_credential: AppfabricAppAuthorizationCredentialOauth2Credential = None
) -> None
```

###### `api_key_credential`<sup>Optional</sup> <a name="api_key_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.apiKeyCredential"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

Contains API key credential information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

###### `oauth2_credential`<sup>Optional</sup> <a name="oauth2_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.oauth2Credential"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

Contains OAuth2 client credential information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#oauth_2_credential AppfabricAppAuthorization#oauth_2_credential}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppfabricAppAuthorizationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]

---

##### `put_tenant` <a name="put_tenant" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant"></a>

```python
def put_tenant(
  tenant_display_name: str,
  tenant_identifier: str
) -> None
```

###### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.tenantDisplayName"></a>

- *Type:* str

The display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}

---

###### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.tenantIdentifier"></a>

- *Type:* str

The ID of the application tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}

---

##### `reset_credential` <a name="reset_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential"></a>

```python
def reset_credential() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppfabricAppAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppfabricAppAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppfabricAppAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppfabricAppAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appAuthorizationArn">app_authorization_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appAuthorizationIdentifier">app_authorization_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference">AppfabricAppAuthorizationCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList">AppfabricAppAuthorizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant">tenant</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference">AppfabricAppAuthorizationTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleIdentifierInput">app_bundle_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput">credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput">tenant_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleIdentifier">app_bundle_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_authorization_arn`<sup>Required</sup> <a name="app_authorization_arn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appAuthorizationArn"></a>

```python
app_authorization_arn: str
```

- *Type:* str

---

##### `app_authorization_identifier`<sup>Required</sup> <a name="app_authorization_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appAuthorizationIdentifier"></a>

```python
app_authorization_identifier: str
```

- *Type:* str

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential"></a>

```python
credential: AppfabricAppAuthorizationCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference">AppfabricAppAuthorizationCredentialOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags"></a>

```python
tags: AppfabricAppAuthorizationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList">AppfabricAppAuthorizationTagsList</a>

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant"></a>

```python
tenant: AppfabricAppAuthorizationTenantOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference">AppfabricAppAuthorizationTenantOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `app_bundle_identifier_input`<sup>Optional</sup> <a name="app_bundle_identifier_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleIdentifierInput"></a>

```python
app_bundle_identifier_input: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput"></a>

```python
credential_input: IResolvable | AppfabricAppAuthorizationCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppfabricAppAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput"></a>

```python
tenant_input: IResolvable | AppfabricAppAuthorizationTenant
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `app_bundle_identifier`<sup>Required</sup> <a name="app_bundle_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleIdentifier"></a>

```python
app_bundle_identifier: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConfig <a name="AppfabricAppAuthorizationConfig" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  app_bundle_identifier: str,
  auth_type: str,
  tenant: AppfabricAppAuthorizationTenant,
  credential: AppfabricAppAuthorizationCredential = None,
  tags: IResolvable | typing.List[AppfabricAppAuthorizationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app">app</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleIdentifier">app_bundle_identifier</a></code> | <code>str</code> | The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType">auth_type</a></code> | <code>str</code> | The authorization type. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant">tenant</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | Contains information about an application tenant. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | Contains credentials for the application. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]</code> | Tags to apply to the app authorization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app"></a>

```python
app: str
```

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}

---

##### `app_bundle_identifier`<sup>Required</sup> <a name="app_bundle_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleIdentifier"></a>

```python
app_bundle_identifier: str
```

- *Type:* str

The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#app_bundle_identifier AppfabricAppAuthorization#app_bundle_identifier}

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authorization type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant"></a>

```python
tenant: AppfabricAppAuthorizationTenant
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

Contains information about an application tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential"></a>

```python
credential: AppfabricAppAuthorizationCredential
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

Contains credentials for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppfabricAppAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]

Tags to apply to the app authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}

---

### AppfabricAppAuthorizationCredential <a name="AppfabricAppAuthorizationCredential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredential(
  api_key_credential: AppfabricAppAuthorizationCredentialApiKeyCredential = None,
  oauth2_credential: AppfabricAppAuthorizationCredentialOauth2Credential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential">api_key_credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a></code> | Contains API key credential information. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential">oauth2_credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a></code> | Contains OAuth2 client credential information. |

---

##### `api_key_credential`<sup>Optional</sup> <a name="api_key_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential"></a>

```python
api_key_credential: AppfabricAppAuthorizationCredentialApiKeyCredential
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

Contains API key credential information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

##### `oauth2_credential`<sup>Optional</sup> <a name="oauth2_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential"></a>

```python
oauth2_credential: AppfabricAppAuthorizationCredentialOauth2Credential
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

Contains OAuth2 client credential information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#oauth_2_credential AppfabricAppAuthorization#oauth_2_credential}

---

### AppfabricAppAuthorizationCredentialApiKeyCredential <a name="AppfabricAppAuthorizationCredentialApiKeyCredential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential(
  api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey">api_key</a></code> | <code>str</code> | An API key for an application. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

An API key for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}

---

### AppfabricAppAuthorizationCredentialOauth2Credential <a name="AppfabricAppAuthorizationCredentialOauth2Credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential(
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId">client_id</a></code> | <code>str</code> | The client ID of the client application. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret of the client application. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID of the client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret of the client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}

---

### AppfabricAppAuthorizationTags <a name="AppfabricAppAuthorizationTags" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#key AppfabricAppAuthorization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#value AppfabricAppAuthorization#value}

---

### AppfabricAppAuthorizationTenant <a name="AppfabricAppAuthorizationTenant" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTenant(
  tenant_display_name: str,
  tenant_identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName">tenant_display_name</a></code> | <code>str</code> | The display name of the tenant. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier">tenant_identifier</a></code> | <code>str</code> | The ID of the application tenant. |

---

##### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName"></a>

```python
tenant_display_name: str
```

- *Type:* str

The display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}

---

##### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier"></a>

```python
tenant_identifier: str
```

- *Type:* str

The ID of the application tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppfabricAppAuthorizationCredentialApiKeyCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

---


### AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppfabricAppAuthorizationCredentialOauth2Credential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

---


### AppfabricAppAuthorizationCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOutputReference" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential">put_api_key_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential">put_oauth2_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential">reset_api_key_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential">reset_oauth2_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_credential` <a name="put_api_key_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential"></a>

```python
def put_api_key_credential(
  api_key: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential.parameter.apiKey"></a>

- *Type:* str

An API key for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}

---

##### `put_oauth2_credential` <a name="put_oauth2_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential"></a>

```python
def put_oauth2_credential(
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.clientId"></a>

- *Type:* str

The client ID of the client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.clientSecret"></a>

- *Type:* str

The client secret of the client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}

---

##### `reset_api_key_credential` <a name="reset_api_key_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential"></a>

```python
def reset_api_key_credential() -> None
```

##### `reset_oauth2_credential` <a name="reset_oauth2_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential"></a>

```python
def reset_oauth2_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential">api_key_credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference">AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential">oauth2_credential</a></code> | <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference">AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput">api_key_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput">oauth2_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_credential`<sup>Required</sup> <a name="api_key_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential"></a>

```python
api_key_credential: AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference">AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference</a>

---

##### `oauth2_credential`<sup>Required</sup> <a name="oauth2_credential" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential"></a>

```python
oauth2_credential: AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference">AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference</a>

---

##### `api_key_credential_input`<sup>Optional</sup> <a name="api_key_credential_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput"></a>

```python
api_key_credential_input: IResolvable | AppfabricAppAuthorizationCredentialApiKeyCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

---

##### `oauth2_credential_input`<sup>Optional</sup> <a name="oauth2_credential_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput"></a>

```python
oauth2_credential_input: IResolvable | AppfabricAppAuthorizationCredentialOauth2Credential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppfabricAppAuthorizationCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

---


### AppfabricAppAuthorizationTagsList <a name="AppfabricAppAuthorizationTagsList" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppfabricAppAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>]

---


### AppfabricAppAuthorizationTagsOutputReference <a name="AppfabricAppAuthorizationTagsOutputReference" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppfabricAppAuthorizationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTags">AppfabricAppAuthorizationTags</a>

---


### AppfabricAppAuthorizationTenantOutputReference <a name="AppfabricAppAuthorizationTenantOutputReference" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput">tenant_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput">tenant_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName">tenant_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier">tenant_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenant_display_name_input`<sup>Optional</sup> <a name="tenant_display_name_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput"></a>

```python
tenant_display_name_input: str
```

- *Type:* str

---

##### `tenant_identifier_input`<sup>Optional</sup> <a name="tenant_identifier_input" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput"></a>

```python
tenant_identifier_input: str
```

- *Type:* str

---

##### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName"></a>

```python
tenant_display_name: str
```

- *Type:* str

---

##### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier"></a>

```python
tenant_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppfabricAppAuthorizationTenant
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

---



