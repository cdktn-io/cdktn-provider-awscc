# `lakeformationPrincipalPermissions` Submodule <a name="`lakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPrincipalPermissions <a name="LakeformationPrincipalPermissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permissions: typing.List[str],
  permissions_with_grant_option: typing.List[str],
  principal: LakeformationPrincipalPermissionsPrincipal,
  resource: LakeformationPrincipalPermissionsResource,
  catalog: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.permissionsWithGrantOption">permissions_with_grant_option</a></code> | <code>typing.List[str]</code> | Indicates the ability to grant permissions (as a subset of permissions granted). |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | The principal to be granted a permission. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | The resource to be granted or revoked permissions. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The identifier for the GLUDC. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

The permissions granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions LakeformationPrincipalPermissions#permissions}

---

##### `permissions_with_grant_option`<sup>Required</sup> <a name="permissions_with_grant_option" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.permissionsWithGrantOption"></a>

- *Type:* typing.List[str]

Indicates the ability to grant permissions (as a subset of permissions granted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option LakeformationPrincipalPermissions#permissions_with_grant_option}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.principal"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

The principal to be granted a permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#principal LakeformationPrincipalPermissions#principal}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.resource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

The resource to be granted or revoked permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource LakeformationPrincipalPermissions#resource}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.catalog"></a>

- *Type:* str

The identifier for the GLUDC.

By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource">put_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog">reset_catalog</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_principal` <a name="put_principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal"></a>

```python
def put_principal(
  data_lake_principal_identifier: str = None
) -> None
```

###### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal.parameter.dataLakePrincipalIdentifier"></a>

- *Type:* str

An identifier for the LFlong principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier LakeformationPrincipalPermissions#data_lake_principal_identifier}

---

##### `put_resource` <a name="put_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource"></a>

```python
def put_resource(
  catalog: str = None,
  database: LakeformationPrincipalPermissionsResourceDatabase = None,
  data_cells_filter: LakeformationPrincipalPermissionsResourceDataCellsFilter = None,
  data_location: LakeformationPrincipalPermissionsResourceDataLocation = None,
  lf_tag: LakeformationPrincipalPermissionsResourceLfTag = None,
  lf_tag_policy: LakeformationPrincipalPermissionsResourceLfTagPolicy = None,
  table: LakeformationPrincipalPermissionsResourceTable = None,
  table_with_columns: LakeformationPrincipalPermissionsResourceTableWithColumns = None
) -> None
```

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.catalog"></a>

- *Type:* str

The identifier for the Data Catalog.

By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.database"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

The database for the resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database LakeformationPrincipalPermissions#database}

---

###### `data_cells_filter`<sup>Optional</sup> <a name="data_cells_filter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.dataCellsFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

A data cell filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_cells_filter LakeformationPrincipalPermissions#data_cells_filter}

---

###### `data_location`<sup>Optional</sup> <a name="data_location" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.dataLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

The location of an Amazon S3 path where permissions are granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_location LakeformationPrincipalPermissions#data_location}

---

###### `lf_tag`<sup>Optional</sup> <a name="lf_tag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.lfTag"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

The LF-tag key and values attached to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag LakeformationPrincipalPermissions#lf_tag}

---

###### `lf_tag_policy`<sup>Optional</sup> <a name="lf_tag_policy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.lfTagPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

A list of LF-tag conditions that define a resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag_policy LakeformationPrincipalPermissions#lf_tag_policy}

---

###### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.table"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

The table for the resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table LakeformationPrincipalPermissions#table}

---

###### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

The table with columns for the resource.

A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_with_columns LakeformationPrincipalPermissions#table_with_columns}

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog"></a>

```python
def reset_catalog() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationPrincipalPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier">principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput">permissions_with_grant_option_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput">resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption">permissions_with_grant_option</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal"></a>

```python
principal: LakeformationPrincipalPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `principal_identifier`<sup>Required</sup> <a name="principal_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier"></a>

```python
principal_identifier: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource"></a>

```python
resource: LakeformationPrincipalPermissionsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_with_grant_option_input`<sup>Optional</sup> <a name="permissions_with_grant_option_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput"></a>

```python
permissions_with_grant_option_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput"></a>

```python
principal_input: IResolvable | LakeformationPrincipalPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput"></a>

```python
resource_input: IResolvable | LakeformationPrincipalPermissionsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_with_grant_option`<sup>Required</sup> <a name="permissions_with_grant_option" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```python
permissions_with_grant_option: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPrincipalPermissionsConfig <a name="LakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permissions: typing.List[str],
  permissions_with_grant_option: typing.List[str],
  principal: LakeformationPrincipalPermissionsPrincipal,
  resource: LakeformationPrincipalPermissionsResource,
  catalog: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption">permissions_with_grant_option</a></code> | <code>typing.List[str]</code> | Indicates the ability to grant permissions (as a subset of permissions granted). |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | The principal to be granted a permission. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | The resource to be granted or revoked permissions. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog">catalog</a></code> | <code>str</code> | The identifier for the GLUDC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions LakeformationPrincipalPermissions#permissions}

---

##### `permissions_with_grant_option`<sup>Required</sup> <a name="permissions_with_grant_option" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption"></a>

```python
permissions_with_grant_option: typing.List[str]
```

- *Type:* typing.List[str]

Indicates the ability to grant permissions (as a subset of permissions granted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option LakeformationPrincipalPermissions#permissions_with_grant_option}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal"></a>

```python
principal: LakeformationPrincipalPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

The principal to be granted a permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#principal LakeformationPrincipalPermissions#principal}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource"></a>

```python
resource: LakeformationPrincipalPermissionsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

The resource to be granted or revoked permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource LakeformationPrincipalPermissions#resource}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The identifier for the GLUDC.

By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

### LakeformationPrincipalPermissionsPrincipal <a name="LakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal(
  data_lake_principal_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | An identifier for the LFlong principal. |

---

##### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

An identifier for the LFlong principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier LakeformationPrincipalPermissions#data_lake_principal_identifier}

---

### LakeformationPrincipalPermissionsResource <a name="LakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource(
  catalog: str = None,
  database: LakeformationPrincipalPermissionsResourceDatabase = None,
  data_cells_filter: LakeformationPrincipalPermissionsResourceDataCellsFilter = None,
  data_location: LakeformationPrincipalPermissionsResourceDataLocation = None,
  lf_tag: LakeformationPrincipalPermissionsResourceLfTag = None,
  lf_tag_policy: LakeformationPrincipalPermissionsResourceLfTagPolicy = None,
  table: LakeformationPrincipalPermissionsResourceTable = None,
  table_with_columns: LakeformationPrincipalPermissionsResourceTableWithColumns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog">catalog</a></code> | <code>str</code> | The identifier for the Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | The database for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter">data_cells_filter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | A data cell filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation">data_location</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | The location of an Amazon S3 path where permissions are granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | The LF-tag key and values attached to a resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy">lf_tag_policy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | A list of LF-tag conditions that define a resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | The table for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | The table with columns for the resource. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The identifier for the Data Catalog.

By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database"></a>

```python
database: LakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

The database for the resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database LakeformationPrincipalPermissions#database}

---

##### `data_cells_filter`<sup>Optional</sup> <a name="data_cells_filter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter"></a>

```python
data_cells_filter: LakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

A data cell filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_cells_filter LakeformationPrincipalPermissions#data_cells_filter}

---

##### `data_location`<sup>Optional</sup> <a name="data_location" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation"></a>

```python
data_location: LakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

The location of an Amazon S3 path where permissions are granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#data_location LakeformationPrincipalPermissions#data_location}

---

##### `lf_tag`<sup>Optional</sup> <a name="lf_tag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag"></a>

```python
lf_tag: LakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

The LF-tag key and values attached to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag LakeformationPrincipalPermissions#lf_tag}

---

##### `lf_tag_policy`<sup>Optional</sup> <a name="lf_tag_policy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy"></a>

```python
lf_tag_policy: LakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

A list of LF-tag conditions that define a resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#lf_tag_policy LakeformationPrincipalPermissions#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table"></a>

```python
table: LakeformationPrincipalPermissionsResourceTable
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

The table for the resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table LakeformationPrincipalPermissions#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

The table with columns for the resource.

A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_with_columns LakeformationPrincipalPermissions#table_with_columns}

---

### LakeformationPrincipalPermissionsResourceDatabase <a name="LakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase(
  catalog_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name">name</a></code> | <code>str</code> | The name of the database resource. Unique to the Data Catalog. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the database resource. Unique to the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceDataCellsFilter <a name="LakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter(
  database_name: str = None,
  name: str = None,
  table_catalog_id: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName">database_name</a></code> | <code>str</code> | A database in the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name">name</a></code> | <code>str</code> | The name given by the user to the data filter cell. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | The ID of the catalog to which the table belongs. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName">table_name</a></code> | <code>str</code> | The name of the table. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

A database in the GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

The name given by the user to the data filter cell.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `table_catalog_id`<sup>Optional</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

The ID of the catalog to which the table belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_catalog_id LakeformationPrincipalPermissions#table_catalog_id}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_name LakeformationPrincipalPermissions#table_name}

---

### LakeformationPrincipalPermissionsResourceDataLocation <a name="LakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation(
  catalog_id: str = None,
  resource_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) that uniquely identifies the data location resource. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_arn LakeformationPrincipalPermissions#resource_arn}

---

### LakeformationPrincipalPermissionsResourceLfTag <a name="LakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag(
  catalog_id: str = None,
  tag_key: str = None,
  tag_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the GLUDC where the location is registered with GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey">tag_key</a></code> | <code>str</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the GLUDC where the location is registered with GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `tag_values`<sup>Optional</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicy <a name="LakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy(
  catalog_id: str = None,
  expression: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression] = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression">expression</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]</code> | A list of LF-tag conditions that apply to the resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type for which the LF-tag policy applies. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the GLUDC.

The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression"></a>

```python
expression: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]

A list of LF-tag conditions that apply to the resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#expression LakeformationPrincipalPermissions#expression}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type for which the LF-tag policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_type LakeformationPrincipalPermissions#resource_type}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression(
  tag_key: str = None,
  tag_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey">tag_key</a></code> | <code>str</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `tag_values`<sup>Optional</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceTable <a name="LakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  table_wildcard: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database for the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard">table_wildcard</a></code> | <code>str</code> | A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database for the table.

Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `table_wildcard`<sup>Optional</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard"></a>

```python
table_wildcard: str
```

- *Type:* str

A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_wildcard LakeformationPrincipalPermissions#table_wildcard}

---

### LakeformationPrincipalPermissionsResourceTableWithColumns <a name="LakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns(
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  column_wildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard = None,
  database_name: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId">catalog_id</a></code> | <code>str</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database for the table with columns resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name">name</a></code> | <code>str</code> | The name of the table resource. |

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_names LakeformationPrincipalPermissions#column_names}

---

##### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard"></a>

```python
column_wildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_wildcard LakeformationPrincipalPermissions#column_wildcard}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database for the table with columns resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard(
  excluded_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | Excludes column names. Any column with this name will be excluded. |

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Excludes column names. Any column with this name will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#excluded_column_names LakeformationPrincipalPermissions#excluded_column_names}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPrincipalPermissionsPrincipalOutputReference <a name="LakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">reset_data_lake_principal_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_lake_principal_identifier` <a name="reset_data_lake_principal_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```python
def reset_data_lake_principal_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---


### LakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="LakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---


### LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId">reset_table_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_table_catalog_id` <a name="reset_table_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId"></a>

```python
def reset_table_catalog_id() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput">table_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">table_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `table_catalog_id_input`<sup>Optional</sup> <a name="table_catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```python
table_catalog_id_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_catalog_id`<sup>Required</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```python
table_catalog_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### LakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="LakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---


### LakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues">reset_tag_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_values` <a name="reset_tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues"></a>

```python
def reset_tag_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput">tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_values_input`<sup>Optional</sup> <a name="tag_values_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput"></a>

```python
tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues">reset_tag_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_values` <a name="reset_tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues"></a>

```python
def reset_tag_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput">tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_values_input`<sup>Optional</sup> <a name="tag_values_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput"></a>

```python
tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicyExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression">put_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expression` <a name="put_expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression"></a>

```python
def put_expression(
  value: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput">expression_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```python
expression: LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput"></a>

```python
expression_input: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### LakeformationPrincipalPermissionsResourceOutputReference <a name="LakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter">put_data_cells_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation">put_data_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag">put_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy">put_lf_tag_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns">put_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter">reset_data_cells_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation">reset_data_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag">reset_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy">reset_lf_tag_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns">reset_table_with_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database` <a name="put_database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase"></a>

```python
def put_database(
  catalog_id: str = None,
  name: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase.parameter.catalogId"></a>

- *Type:* str

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase.parameter.name"></a>

- *Type:* str

The name of the database resource. Unique to the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `put_data_cells_filter` <a name="put_data_cells_filter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter"></a>

```python
def put_data_cells_filter(
  database_name: str = None,
  name: str = None,
  table_catalog_id: str = None,
  table_name: str = None
) -> None
```

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.databaseName"></a>

- *Type:* str

A database in the GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.name"></a>

- *Type:* str

The name given by the user to the data filter cell.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

###### `table_catalog_id`<sup>Optional</sup> <a name="table_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.tableCatalogId"></a>

- *Type:* str

The ID of the catalog to which the table belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_catalog_id LakeformationPrincipalPermissions#table_catalog_id}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.tableName"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_name LakeformationPrincipalPermissions#table_name}

---

##### `put_data_location` <a name="put_data_location" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation"></a>

```python
def put_data_location(
  catalog_id: str = None,
  resource_arn: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation.parameter.catalogId"></a>

- *Type:* str

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation.parameter.resourceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_arn LakeformationPrincipalPermissions#resource_arn}

---

##### `put_lf_tag` <a name="put_lf_tag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag"></a>

```python
def put_lf_tag(
  catalog_id: str = None,
  tag_key: str = None,
  tag_values: typing.List[str] = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.catalogId"></a>

- *Type:* str

The identifier for the GLUDC where the location is registered with GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.tagKey"></a>

- *Type:* str

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

###### `tag_values`<sup>Optional</sup> <a name="tag_values" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.tagValues"></a>

- *Type:* typing.List[str]

A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

##### `put_lf_tag_policy` <a name="put_lf_tag_policy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy"></a>

```python
def put_lf_tag_policy(
  catalog_id: str = None,
  expression: IResolvable | typing.List[LakeformationPrincipalPermissionsResourceLfTagPolicyExpression] = None,
  resource_type: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.catalogId"></a>

- *Type:* str

The identifier for the GLUDC.

The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.expression"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>]

A list of LF-tag conditions that apply to the resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#expression LakeformationPrincipalPermissions#expression}

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.resourceType"></a>

- *Type:* str

The resource type for which the LF-tag policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#resource_type LakeformationPrincipalPermissions#resource_type}

---

##### `put_table` <a name="put_table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable"></a>

```python
def put_table(
  catalog_id: str = None,
  database_name: str = None,
  name: str = None,
  table_wildcard: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.catalogId"></a>

- *Type:* str

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.databaseName"></a>

- *Type:* str

The name of the database for the table.

Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.name"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

###### `table_wildcard`<sup>Optional</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.tableWildcard"></a>

- *Type:* str

A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#table_wildcard LakeformationPrincipalPermissions#table_wildcard}

---

##### `put_table_with_columns` <a name="put_table_with_columns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns"></a>

```python
def put_table_with_columns(
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  column_wildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard = None,
  database_name: str = None,
  name: str = None
) -> None
```

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.catalogId"></a>

- *Type:* str

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.columnNames"></a>

- *Type:* typing.List[str]

The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_names LakeformationPrincipalPermissions#column_names}

---

###### `column_wildcard`<sup>Optional</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.columnWildcard"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#column_wildcard LakeformationPrincipalPermissions#column_wildcard}

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.databaseName"></a>

- *Type:* str

The name of the database for the table with columns resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.name"></a>

- *Type:* str

The name of the table resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_data_cells_filter` <a name="reset_data_cells_filter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter"></a>

```python
def reset_data_cells_filter() -> None
```

##### `reset_data_location` <a name="reset_data_location" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation"></a>

```python
def reset_data_location() -> None
```

##### `reset_lf_tag` <a name="reset_lf_tag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag"></a>

```python
def reset_lf_tag() -> None
```

##### `reset_lf_tag_policy` <a name="reset_lf_tag_policy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy"></a>

```python
def reset_lf_tag_policy() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_with_columns` <a name="reset_table_with_columns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns"></a>

```python
def reset_table_with_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">data_cells_filter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">data_location</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">lf_tag_policy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table">table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput">data_cells_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput">data_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput">lf_tag_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput">lf_tag_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput">table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput">table_with_columns_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```python
database: LakeformationPrincipalPermissionsResourceDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `data_cells_filter`<sup>Required</sup> <a name="data_cells_filter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```python
data_cells_filter: LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `data_location`<sup>Required</sup> <a name="data_location" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```python
data_location: LakeformationPrincipalPermissionsResourceDataLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```python
lf_tag: LakeformationPrincipalPermissionsResourceLfTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `lf_tag_policy`<sup>Required</sup> <a name="lf_tag_policy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```python
lf_tag_policy: LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```python
table: LakeformationPrincipalPermissionsResourceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | LakeformationPrincipalPermissionsResourceDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `data_cells_filter_input`<sup>Optional</sup> <a name="data_cells_filter_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput"></a>

```python
data_cells_filter_input: IResolvable | LakeformationPrincipalPermissionsResourceDataCellsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `data_location_input`<sup>Optional</sup> <a name="data_location_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput"></a>

```python
data_location_input: IResolvable | LakeformationPrincipalPermissionsResourceDataLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `lf_tag_input`<sup>Optional</sup> <a name="lf_tag_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput"></a>

```python
lf_tag_input: IResolvable | LakeformationPrincipalPermissionsResourceLfTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `lf_tag_policy_input`<sup>Optional</sup> <a name="lf_tag_policy_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput"></a>

```python
lf_tag_policy_input: IResolvable | LakeformationPrincipalPermissionsResourceLfTagPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput"></a>

```python
table_input: IResolvable | LakeformationPrincipalPermissionsResourceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `table_with_columns_input`<sup>Optional</sup> <a name="table_with_columns_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput"></a>

```python
table_with_columns_input: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---


### LakeformationPrincipalPermissionsResourceTableOutputReference <a name="LakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard">reset_table_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_table_wildcard` <a name="reset_table_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard"></a>

```python
def reset_table_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput">table_wildcard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">table_wildcard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `table_wildcard_input`<sup>Optional</sup> <a name="table_wildcard_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput"></a>

```python
table_wildcard_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `table_wildcard`<sup>Required</sup> <a name="table_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```python
table_wildcard: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lakeformation_principal_permissions

lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard">put_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard">reset_column_wildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_wildcard` <a name="put_column_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard"></a>

```python
def put_column_wildcard(
  excluded_column_names: typing.List[str] = None
) -> None
```

###### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard.parameter.excludedColumnNames"></a>

- *Type:* typing.List[str]

Excludes column names. Any column with this name will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lakeformation_principal_permissions#excluded_column_names LakeformationPrincipalPermissions#excluded_column_names}

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_column_wildcard` <a name="reset_column_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard"></a>

```python
def reset_column_wildcard() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">column_wildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput">column_wildcard_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_wildcard`<sup>Required</sup> <a name="column_wildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```python
column_wildcard: LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_wildcard_input`<sup>Optional</sup> <a name="column_wildcard_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```python
column_wildcard_input: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakeformationPrincipalPermissionsResourceTableWithColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



