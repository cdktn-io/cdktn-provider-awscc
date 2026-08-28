# `accountaccessEntitlement` Submodule <a name="`accountaccessEntitlement` Submodule" id="@cdktn/provider-awscc.accountaccessEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountaccessEntitlement <a name="AccountaccessEntitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement awscc_accountaccess_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_arn: str,
  entitlement: AccountaccessEntitlementEntitlement
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.applicationArn">application_arn</a></code> | <code>str</code> | The ARN of the application. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | The entitlement details. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.applicationArn"></a>

- *Type:* str

The ARN of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.Initializer.parameter.entitlement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

The entitlement details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement">put_entitlement</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entitlement` <a name="put_entitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement"></a>

```python
def put_entitlement(
  principal_role: AccountaccessEntitlementEntitlementPrincipalRole
) -> None
```

###### `principal_role`<sup>Required</sup> <a name="principal_role" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.putEntitlement.parameter.principalRole"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isConstruct"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountaccessEntitlement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountaccessEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccountaccessEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference">AccountaccessEntitlementEntitlementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput">entitlement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlement"></a>

```python
entitlement: AccountaccessEntitlementEntitlementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference">AccountaccessEntitlementEntitlementOutputReference</a>

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `entitlement_input`<sup>Optional</sup> <a name="entitlement_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.entitlementInput"></a>

```python
entitlement_input: IResolvable | AccountaccessEntitlementEntitlement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountaccessEntitlementConfig <a name="AccountaccessEntitlementConfig" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_arn: str,
  entitlement: AccountaccessEntitlementEntitlement
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn">application_arn</a></code> | <code>str</code> | The ARN of the application. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | The entitlement details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

The ARN of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementConfig.property.entitlement"></a>

```python
entitlement: AccountaccessEntitlementEntitlement
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

The entitlement details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}

---

### AccountaccessEntitlementEntitlement <a name="AccountaccessEntitlementEntitlement" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlement(
  principal_role: AccountaccessEntitlementEntitlementPrincipalRole
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole">principal_role</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}. |

---

##### `principal_role`<sup>Required</sup> <a name="principal_role" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement.property.principalRole"></a>

```python
principal_role: AccountaccessEntitlementEntitlementPrincipalRole
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}.

---

### AccountaccessEntitlementEntitlementPrincipalRole <a name="AccountaccessEntitlementEntitlementPrincipalRole" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole(
  principal: AccountaccessEntitlementEntitlementPrincipalRolePrincipal,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.principal"></a>

```python
principal: AccountaccessEntitlementEntitlementPrincipalRolePrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipal <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipal" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal(
  identity_center: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter">identity_center</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}. |

---

##### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal.property.identityCenter"></a>

```python
identity_center: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}.

---

### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter(
  group_id: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId">group_id</a></code> | <code>str</code> | The ID of the group. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId">user_id</a></code> | <code>str</code> | The ID of the user. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```python
user_id: str
```

- *Type:* str

The ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountaccessEntitlementEntitlementOutputReference <a name="AccountaccessEntitlementEntitlementOutputReference" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole">put_principal_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal_role` <a name="put_principal_role" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole"></a>

```python
def put_principal_role(
  principal: AccountaccessEntitlementEntitlementPrincipalRolePrincipal,
  role_arn: str
) -> None
```

###### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole.parameter.principal"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.putPrincipalRole.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole">principal_role</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference">AccountaccessEntitlementEntitlementPrincipalRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput">principal_role_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_role`<sup>Required</sup> <a name="principal_role" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRole"></a>

```python
principal_role: AccountaccessEntitlementEntitlementPrincipalRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference">AccountaccessEntitlementEntitlementPrincipalRoleOutputReference</a>

---

##### `principal_role_input`<sup>Optional</sup> <a name="principal_role_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.principalRoleInput"></a>

```python
principal_role_input: IResolvable | AccountaccessEntitlementEntitlementPrincipalRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountaccessEntitlementEntitlement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlement">AccountaccessEntitlementEntitlement</a>

---


### AccountaccessEntitlementEntitlementPrincipalRoleOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal">put_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal"></a>

```python
def put_principal(
  identity_center: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
) -> None
```

###### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.putPrincipal.parameter.identityCenter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference">AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principal"></a>

```python
principal: AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference">AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference</a>

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | AccountaccessEntitlementEntitlementPrincipalRolePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountaccessEntitlementEntitlementPrincipalRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRole">AccountaccessEntitlementEntitlementPrincipalRole</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference <a name="AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import accountaccess_entitlement

accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter">put_identity_center</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_identity_center` <a name="put_identity_center" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```python
def put_identity_center(
  group_id: str = None,
  user_id: str = None
) -> None
```

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.groupId"></a>

- *Type:* str

The ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}

---

###### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.userId"></a>

- *Type:* str

The ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">identity_center</a></code> | <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput">identity_center_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_center`<sup>Required</sup> <a name="identity_center" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```python
identity_center: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference</a>

---

##### `identity_center_input`<sup>Optional</sup> <a name="identity_center_input" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```python
identity_center_input: IResolvable | AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter">AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountaccessEntitlementEntitlementPrincipalRolePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accountaccessEntitlement.AccountaccessEntitlementEntitlementPrincipalRolePrincipal">AccountaccessEntitlementEntitlementPrincipalRolePrincipal</a>

---



