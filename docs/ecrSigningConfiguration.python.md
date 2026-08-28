# `ecrSigningConfiguration` Submodule <a name="`ecrSigningConfiguration` Submodule" id="@cdktn/provider-awscc.ecrSigningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrSigningConfiguration <a name="EcrSigningConfiguration" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration awscc_ecr_signing_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[EcrSigningConfigurationRules]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]</code> | Array of signing rules that define which repositories should be signed and with which signing profiles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]

Array of signing rules that define which repositories should be signed and with which signing profiles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#rules EcrSigningConfiguration#rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.putRules">put_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[EcrSigningConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcrSigningConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcrSigningConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrSigningConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrSigningConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrSigningConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList">EcrSigningConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.rules"></a>

```python
rules: EcrSigningConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList">EcrSigningConfigurationRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[EcrSigningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrSigningConfigurationConfig <a name="EcrSigningConfigurationConfig" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[EcrSigningConfigurationRules]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]</code> | Array of signing rules that define which repositories should be signed and with which signing profiles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[EcrSigningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]

Array of signing rules that define which repositories should be signed and with which signing profiles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#rules EcrSigningConfiguration#rules}

---

### EcrSigningConfigurationRules <a name="EcrSigningConfigurationRules" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRules(
  signing_profile_arn: str,
  repository_filters: IResolvable | typing.List[EcrSigningConfigurationRulesRepositoryFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules.property.signingProfileArn">signing_profile_arn</a></code> | <code>str</code> | AWS Signer signing profile ARN to use for matched repositories. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules.property.repositoryFilters">repository_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]</code> | Optional array of repository filters. |

---

##### `signing_profile_arn`<sup>Required</sup> <a name="signing_profile_arn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules.property.signingProfileArn"></a>

```python
signing_profile_arn: str
```

- *Type:* str

AWS Signer signing profile ARN to use for matched repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#signing_profile_arn EcrSigningConfiguration#signing_profile_arn}

---

##### `repository_filters`<sup>Optional</sup> <a name="repository_filters" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules.property.repositoryFilters"></a>

```python
repository_filters: IResolvable | typing.List[EcrSigningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]

Optional array of repository filters.

If omitted, the rule matches all repositories. If provided, must contain at least one filter. Empty arrays are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#repository_filters EcrSigningConfiguration#repository_filters}

---

### EcrSigningConfigurationRulesRepositoryFilters <a name="EcrSigningConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters(
  filter: str = None,
  filter_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters.property.filter">filter</a></code> | <code>str</code> | Repository name pattern (supports '*' wildcard). |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters.property.filterType">filter_type</a></code> | <code>str</code> | Type of repository filter. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters.property.filter"></a>

```python
filter: str
```

- *Type:* str

Repository name pattern (supports '*' wildcard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#filter EcrSigningConfiguration#filter}

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Type of repository filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_signing_configuration#filter_type EcrSigningConfiguration#filter_type}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrSigningConfigurationRulesList <a name="EcrSigningConfigurationRulesList" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrSigningConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrSigningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>]

---


### EcrSigningConfigurationRulesOutputReference <a name="EcrSigningConfigurationRulesOutputReference" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.putRepositoryFilters">put_repository_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.resetRepositoryFilters">reset_repository_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_filters` <a name="put_repository_filters" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.putRepositoryFilters"></a>

```python
def put_repository_filters(
  value: IResolvable | typing.List[EcrSigningConfigurationRulesRepositoryFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.putRepositoryFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]

---

##### `reset_repository_filters` <a name="reset_repository_filters" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.resetRepositoryFilters"></a>

```python
def reset_repository_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.repositoryFilters">repository_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList">EcrSigningConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.repositoryFiltersInput">repository_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.signingProfileArnInput">signing_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.signingProfileArn">signing_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_filters`<sup>Required</sup> <a name="repository_filters" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.repositoryFilters"></a>

```python
repository_filters: EcrSigningConfigurationRulesRepositoryFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList">EcrSigningConfigurationRulesRepositoryFiltersList</a>

---

##### `repository_filters_input`<sup>Optional</sup> <a name="repository_filters_input" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.repositoryFiltersInput"></a>

```python
repository_filters_input: IResolvable | typing.List[EcrSigningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]

---

##### `signing_profile_arn_input`<sup>Optional</sup> <a name="signing_profile_arn_input" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.signingProfileArnInput"></a>

```python
signing_profile_arn_input: str
```

- *Type:* str

---

##### `signing_profile_arn`<sup>Required</sup> <a name="signing_profile_arn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.signingProfileArn"></a>

```python
signing_profile_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrSigningConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRules">EcrSigningConfigurationRules</a>

---


### EcrSigningConfigurationRulesRepositoryFiltersList <a name="EcrSigningConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrSigningConfigurationRulesRepositoryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrSigningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>]

---


### EcrSigningConfigurationRulesRepositoryFiltersOutputReference <a name="EcrSigningConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_signing_configuration

ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrSigningConfigurationRulesRepositoryFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrSigningConfiguration.EcrSigningConfigurationRulesRepositoryFilters">EcrSigningConfigurationRulesRepositoryFilters</a>

---



