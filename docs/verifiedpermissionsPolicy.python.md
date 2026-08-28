# `verifiedpermissionsPolicy` Submodule <a name="`verifiedpermissionsPolicy` Submodule" id="@cdktn/provider-awscc.verifiedpermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicy <a name="VerifiedpermissionsPolicy" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy awscc_verifiedpermissions_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition: VerifiedpermissionsPolicyDefinition,
  policy_store_id: str,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.policyStoreId">policy_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}.

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.policyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition` <a name="put_definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition"></a>

```python
def put_definition(
  static: VerifiedpermissionsPolicyDefinitionStatic = None,
  template_linked: VerifiedpermissionsPolicyDefinitionTemplateLinked = None
) -> None
```

###### `static`<sup>Optional</sup> <a name="static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition.parameter.static"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}.

---

###### `template_linked`<sup>Optional</sup> <a name="template_linked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition.parameter.templateLinked"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}.

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedpermissionsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedpermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference">VerifiedpermissionsPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput">definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput">policy_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition"></a>

```python
definition: VerifiedpermissionsPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference">VerifiedpermissionsPolicyDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput"></a>

```python
definition_input: IResolvable | VerifiedpermissionsPolicyDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_store_id_input`<sup>Optional</sup> <a name="policy_store_id_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput"></a>

```python
policy_store_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyConfig <a name="VerifiedpermissionsPolicyConfig" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition: VerifiedpermissionsPolicyDefinition,
  policy_store_id: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition"></a>

```python
definition: VerifiedpermissionsPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}.

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#name VerifiedpermissionsPolicy#name}.

---

### VerifiedpermissionsPolicyDefinition <a name="VerifiedpermissionsPolicyDefinition" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition(
  static: VerifiedpermissionsPolicyDefinitionStatic = None,
  template_linked: VerifiedpermissionsPolicyDefinitionTemplateLinked = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static">static</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked">template_linked</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}. |

---

##### `static`<sup>Optional</sup> <a name="static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static"></a>

```python
static: VerifiedpermissionsPolicyDefinitionStatic
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}.

---

##### `template_linked`<sup>Optional</sup> <a name="template_linked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked"></a>

```python
template_linked: VerifiedpermissionsPolicyDefinitionTemplateLinked
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}.

---

### VerifiedpermissionsPolicyDefinitionStatic <a name="VerifiedpermissionsPolicyDefinitionStatic" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic(
  description: str = None,
  statement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement">statement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}.

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement"></a>

```python
statement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinked <a name="VerifiedpermissionsPolicyDefinitionTemplateLinked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked(
  policy_template_id: str = None,
  principal: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal = None,
  resource: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId">policy_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}. |

---

##### `policy_template_id`<sup>Optional</sup> <a name="policy_template_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId"></a>

```python
policy_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal"></a>

```python
principal: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource"></a>

```python
resource: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal(
  entity_id: str = None,
  entity_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedResource <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource(
  entity_id: str = None,
  entity_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyDefinitionOutputReference <a name="VerifiedpermissionsPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic">put_static</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked">put_template_linked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic">reset_static</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked">reset_template_linked</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_static` <a name="put_static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic"></a>

```python
def put_static(
  description: str = None,
  statement: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}.

---

###### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic.parameter.statement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}.

---

##### `put_template_linked` <a name="put_template_linked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked"></a>

```python
def put_template_linked(
  policy_template_id: str = None,
  principal: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal = None,
  resource: VerifiedpermissionsPolicyDefinitionTemplateLinkedResource = None
) -> None
```

###### `policy_template_id`<sup>Optional</sup> <a name="policy_template_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked.parameter.policyTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}.

---

###### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked.parameter.principal"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked.parameter.resource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}.

---

##### `reset_static` <a name="reset_static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic"></a>

```python
def reset_static() -> None
```

##### `reset_template_linked` <a name="reset_template_linked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked"></a>

```python
def reset_template_linked() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static">static</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference">VerifiedpermissionsPolicyDefinitionStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked">template_linked</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput">static_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput">template_linked_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `static`<sup>Required</sup> <a name="static" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static"></a>

```python
static: VerifiedpermissionsPolicyDefinitionStaticOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference">VerifiedpermissionsPolicyDefinitionStaticOutputReference</a>

---

##### `template_linked`<sup>Required</sup> <a name="template_linked" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked"></a>

```python
template_linked: VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a>

---

##### `static_input`<sup>Optional</sup> <a name="static_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput"></a>

```python
static_input: IResolvable | VerifiedpermissionsPolicyDefinitionStatic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

---

##### `template_linked_input`<sup>Optional</sup> <a name="template_linked_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput"></a>

```python
template_linked_input: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VerifiedpermissionsPolicyDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

---


### VerifiedpermissionsPolicyDefinitionStaticOutputReference <a name="VerifiedpermissionsPolicyDefinitionStaticOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetStatement">reset_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_statement` <a name="reset_statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetStatement"></a>

```python
def reset_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput">statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement">statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `statement_input`<sup>Optional</sup> <a name="statement_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput"></a>

```python
statement_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement"></a>

```python
statement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VerifiedpermissionsPolicyDefinitionStatic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource">put_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPolicyTemplateId">reset_policy_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal"></a>

```python
def put_principal(
  entity_id: str = None,
  entity_type: str = None
) -> None
```

###### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

###### `entity_type`<sup>Optional</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

##### `put_resource` <a name="put_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource"></a>

```python
def put_resource(
  entity_id: str = None,
  entity_type: str = None
) -> None
```

###### `entity_id`<sup>Optional</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

###### `entity_type`<sup>Optional</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

##### `reset_policy_template_id` <a name="reset_policy_template_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPolicyTemplateId"></a>

```python
def reset_policy_template_id() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput">policy_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput">resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId">policy_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal"></a>

```python
principal: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource"></a>

```python
resource: VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a>

---

##### `policy_template_id_input`<sup>Optional</sup> <a name="policy_template_id_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput"></a>

```python
policy_template_id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput"></a>

```python
resource_input: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---

##### `policy_template_id`<sup>Required</sup> <a name="policy_template_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId"></a>

```python
policy_template_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityId">reset_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityType">reset_entity_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_id` <a name="reset_entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityId"></a>

```python
def reset_entity_id() -> None
```

##### `reset_entity_type` <a name="reset_entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resetEntityType"></a>

```python
def reset_entity_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import verifiedpermissions_policy

verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityId">reset_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityType">reset_entity_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_id` <a name="reset_entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityId"></a>

```python
def reset_entity_id() -> None
```

##### `reset_entity_type` <a name="reset_entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resetEntityType"></a>

```python
def reset_entity_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---



