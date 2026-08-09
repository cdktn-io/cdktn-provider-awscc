# `uxcAccountCustomization` Submodule <a name="`uxcAccountCustomization` Submodule" id="@cdktn/provider-awscc.uxcAccountCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UxcAccountCustomization <a name="UxcAccountCustomization" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization awscc_uxc_account_customization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_color: str = None,
  visible_regions: typing.List[str] = None,
  visible_services: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.accountColor">account_color</a></code> | <code>str</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleRegions">visible_regions</a></code> | <code>typing.List[str]</code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleServices">visible_services</a></code> | <code>typing.List[str]</code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_color`<sup>Optional</sup> <a name="account_color" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.accountColor"></a>

- *Type:* str

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `visible_regions`<sup>Optional</sup> <a name="visible_regions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleRegions"></a>

- *Type:* typing.List[str]

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `visible_services`<sup>Optional</sup> <a name="visible_services" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleServices"></a>

- *Type:* typing.List[str]

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor">reset_account_color</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions">reset_visible_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices">reset_visible_services</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_color` <a name="reset_account_color" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor"></a>

```python
def reset_account_color() -> None
```

##### `reset_visible_regions` <a name="reset_visible_regions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions"></a>

```python
def reset_visible_regions() -> None
```

##### `reset_visible_services` <a name="reset_visible_services" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices"></a>

```python
def reset_visible_services() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UxcAccountCustomization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UxcAccountCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UxcAccountCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput">account_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput">visible_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput">visible_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor">account_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions">visible_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices">visible_services</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_color_input`<sup>Optional</sup> <a name="account_color_input" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput"></a>

```python
account_color_input: str
```

- *Type:* str

---

##### `visible_regions_input`<sup>Optional</sup> <a name="visible_regions_input" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput"></a>

```python
visible_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visible_services_input`<sup>Optional</sup> <a name="visible_services_input" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput"></a>

```python
visible_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_color`<sup>Required</sup> <a name="account_color" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor"></a>

```python
account_color: str
```

- *Type:* str

---

##### `visible_regions`<sup>Required</sup> <a name="visible_regions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions"></a>

```python
visible_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visible_services`<sup>Required</sup> <a name="visible_services" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices"></a>

```python
visible_services: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UxcAccountCustomizationConfig <a name="UxcAccountCustomizationConfig" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import uxc_account_customization

uxcAccountCustomization.UxcAccountCustomizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_color: str = None,
  visible_regions: typing.List[str] = None,
  visible_services: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor">account_color</a></code> | <code>str</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions">visible_regions</a></code> | <code>typing.List[str]</code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices">visible_services</a></code> | <code>typing.List[str]</code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_color`<sup>Optional</sup> <a name="account_color" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor"></a>

```python
account_color: str
```

- *Type:* str

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `visible_regions`<sup>Optional</sup> <a name="visible_regions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions"></a>

```python
visible_regions: typing.List[str]
```

- *Type:* typing.List[str]

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `visible_services`<sup>Optional</sup> <a name="visible_services" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices"></a>

```python
visible_services: typing.List[str]
```

- *Type:* typing.List[str]

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---



